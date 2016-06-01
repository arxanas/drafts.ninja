import _ from '../../lib/utils'
import App from '../app'
import data from '../data'
import Chat from './chat'
let d = React.DOM

export default React.createClass({
  componentWillMount() {
    App.state.chat = true
  },
  componentDidMount() {
    App.send('join', 'lobby')
  },
  render() {
    return d.div({ className: 'container' },
      d.div({ className: 'lobby' },
        d.header({},
          d.h1({ className: 'lobby-header' },
            d.span({}, 'drafts'),
            d.span({ className: 'spacer-dot' }),
            d.span({}, 'ninja'))),
        d.p({}, `${App.state.numUsers}
                 ${App.state.numUsers === 1 ? 'user' : 'users'}
                 connected;
                 ${App.state.numPlayers}
                 ${App.state.numPlayers === 1 ? 'player' : 'players'}
                 playing
                 ${App.state.numActiveGames}
                 ${App.state.numActiveGames === 1 ? 'game' : 'games'}`),
        d.p({ className: 'error' }, App.err),
        Motd(),
        Create()),
      Chat())
  }
})

function Sets(selectedSet, index) {
  let groups = []
  for (let label in data) {
    let sets = data[label]
    let options = []
    for (let name in sets) {
      let code = sets[name]
      options.push(d.option({ value: code }, name))
    }
    groups.push(d.optgroup({ label }, options))
  }
  return d.select({
    valueLink: App.link('sets', index)
  }, groups)
}

function content() {
  let sets = App.state.sets.map(Sets)

  let setsTop = d.div({}, sets.slice(0, 3))
  let setsBot = d.div({}, sets.slice(3))

  let cube = [
    d.div({}, 'one card per line'),
    d.textarea({
      placeholder: 'cube list',
      valueLink: App.link('list')
    })
  ]

  let cards = _.seq(15, 8).map(x => d.option({}, x))
  let packs = _.seq(12, 3).map(x => d.option({}, x))
  let cubeDraft = d.div({},
    d.select({ valueLink: App.link('cards') }, cards),
    ' cards ',
    d.select({ valueLink: App.link('packs') }, packs),
    ' packs')
  let chaos = d.div({})

  switch(App.state.type) {
    case 'draft' : return setsTop
    case 'sealed': return [setsTop, setsBot]
    case 'cube draft' : return [cube, cubeDraft]
    case 'cube sealed': return cube
    case 'chaos': return chaos
  }
}

function Motd() {
  if (App.state.motd)
    return d.fieldset({ className: 'fieldset' },
      d.legend({ className: 'legend' }, 'News'),
      d.div({ dangerouslySetInnerHTML: { '__html': App.state.motd } }))
}

function Create() {
  let seats = _.seq(100, 2).map(x =>
    d.option({}, x))

  let types = ['draft', 'sealed', 'cube draft', 'cube sealed', 'chaos']
    .map(type =>
      d.label({
        className: 'radio-label connected-component',
      }, d.input({
        className: 'radio-input connected-component',
        name: 'draft-type',
        type: 'radio',
        value: type,
        onChange: e => App.save('type', e.currentTarget.value),
        checked: App.state.type === type,
      }), type))

  return d.fieldset({ className: 'fieldset' },
    d.legend({ className: 'legend' }, 'Create a room'),
    d.p({},
      'Number of players: ',
      d.select({ valueLink: App.link('seats') }, seats)),
    d.div({},
      d.p({}, 'Game type: ', d.span({ className: 'connected-container' }, types)),
      d.div({}, content())),
    d.p({}, d.button({ onClick: App._emit('create') }, 'Create room')))
}
