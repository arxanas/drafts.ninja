var fs = require('fs')
var _ = require('../_')
var raw = require('../../data/AllSets')
raw.EMA = {
  name: 'Eternal Masters',
  code: 'EMA',
  cards: [{"name":"aven riftwatcher","rarity":"common"},{"name":"balance","rarity":"mythic"},{"name":"ballynock cohort","rarity":"common"},{"name":"benevolent bodyguard","rarity":"common"},{"name":"calciderm","rarity":"uncommon"},{"name":"coalition honor guard","rarity":"common"},{"name":"eight-and-a-half-tails","rarity":"rare"},{"name":"elite vanguard","rarity":"common"},{"name":"enlightened tutor","rarity":"rare"},{"name":"faith's fetters","rarity":"uncommon"},{"name":"field of souls","rarity":"uncommon"},{"name":"glimmerpoint stag","rarity":"uncommon"},{"name":"honden of cleansing fire","rarity":"uncommon"},{"name":"humble","rarity":"common"},{"name":"intangible virtue","rarity":"uncommon"},{"name":"jareth, leonine titan","rarity":"rare"},{"name":"karmic guide","rarity":"rare"},{"name":"kor hookmaster","rarity":"common"},{"name":"mesa enchantress","rarity":"uncommon"},{"name":"mistral charger","rarity":"common"},{"name":"monk idealist","rarity":"common"},{"name":"mother of runes","rarity":"rare"},{"name":"pacifism","rarity":"common"},{"name":"raise the alarm","rarity":"common"},{"name":"rally the peasants","rarity":"common"},{"name":"seal of cleansing","rarity":"common"},{"name":"second thoughts","rarity":"common"},{"name":"serra angel","rarity":"uncommon"},{"name":"shelter","rarity":"common"},{"name":"soulcatcher","rarity":"uncommon"},{"name":"squadron hawk","rarity":"common"},{"name":"swords to plowshares","rarity":"uncommon"},{"name":"unexpectedly absent","rarity":"rare"},{"name":"wall of omens","rarity":"uncommon"},{"name":"war priest of thune","rarity":"uncommon"},{"name":"welkin guide","rarity":"common"},{"name":"whitemane lion","rarity":"common"},{"name":"wrath of god","rarity":"rare"},{"name":"arcanis the omnipotent","rarity":"rare"},{"name":"brainstorm","rarity":"uncommon"},{"name":"cephalid sage","rarity":"common"},{"name":"control magic","rarity":"rare"},{"name":"counterspell","rarity":"common"},{"name":"daze","rarity":"uncommon"},{"name":"deep analysis","rarity":"common"},{"name":"diminishing returns","rarity":"rare"},{"name":"dream twist","rarity":"common"},{"name":"fact or fiction","rarity":"uncommon"},{"name":"force of will","rarity":"mythic"},{"name":"future sight","rarity":"rare"},{"name":"gaseous form","rarity":"common"},{"name":"giant tortoise","rarity":"common"},{"name":"glacial wall","rarity":"common"},{"name":"honden of seeing winds","rarity":"uncommon"},{"name":"hydroblast","rarity":"uncommon"},{"name":"inkwell leviathan","rarity":"rare"},{"name":"jace, the mind sculptor","rarity":"mythic"},{"name":"jetting glasskite","rarity":"uncommon"},{"name":"man-o'-war","rarity":"common"},{"name":"memory lapse","rarity":"common"},{"name":"merfolk looter","rarity":"uncommon"},{"name":"mystical tutor","rarity":"rare"},{"name":"oona's grace","rarity":"common"},{"name":"peregrine drake","rarity":"common"},{"name":"phantom monster","rarity":"common"},{"name":"phyrexian ingester","rarity":"uncommon"},{"name":"prodigal sorcerer","rarity":"uncommon"},{"name":"quiet speculation","rarity":"uncommon"},{"name":"screeching skaab","rarity":"common"},{"name":"serendib efreet","rarity":"rare"},{"name":"shoreline ranger","rarity":"common"},{"name":"silent departure","rarity":"common"},{"name":"sprite noble","rarity":"uncommon"},{"name":"stupefying touch","rarity":"common"},{"name":"tidal wave","rarity":"common"},{"name":"warden of evos isle","rarity":"common"},{"name":"wonder","rarity":"uncommon"},{"name":"animate dead","rarity":"uncommon"},{"name":"annihilate","rarity":"uncommon"},{"name":"blightsoil druid","rarity":"common"},{"name":"blood artist","rarity":"uncommon"},{"name":"braids, cabal minion","rarity":"rare"},{"name":"cabal therapy","rarity":"uncommon"},{"name":"carrion feeder","rarity":"common"},{"name":"deadbridge shaman","rarity":"common"},{"name":"duress","rarity":"common"},{"name":"entomb","rarity":"rare"},{"name":"eyeblight's ending","rarity":"common"},{"name":"gravedigger","rarity":"common"},{"name":"havoc demon","rarity":"uncommon"},{"name":"honden of night's reach","rarity":"uncommon"},{"name":"hymn to tourach","rarity":"uncommon"},{"name":"ichorid","rarity":"rare"},{"name":"innocent blood","rarity":"common"},{"name":"lys alana scarblade","rarity":"uncommon"},{"name":"malicious affliction","rarity":"rare"},{"name":"nausea","rarity":"common"},{"name":"necropotence","rarity":"mythic"},{"name":"nekrataal","rarity":"uncommon"},{"name":"night's whisper","rarity":"common"},{"name":"phyrexian gargantua","rarity":"uncommon"},{"name":"phyrexian rager","rarity":"common"},{"name":"plague witch","rarity":"common"},{"name":"prowling pangolin","rarity":"common"},{"name":"sengir autocrat","rarity":"uncommon"},{"name":"sinkhole","rarity":"rare"},{"name":"skulking ghost","rarity":"common"},{"name":"toxic deluge","rarity":"rare"},{"name":"tragic slip","rarity":"common"},{"name":"twisted abomination","rarity":"common"},{"name":"urborg uprising","rarity":"common"},{"name":"vampiric tutor","rarity":"mythic"},{"name":"victimize","rarity":"uncommon"},{"name":"visara the dreadful","rarity":"rare"},{"name":"wake of vultures","rarity":"common"},{"name":"wakedancer","rarity":"common"},{"name":"avarax","rarity":"common"},{"name":"battle squadron","rarity":"uncommon"},{"name":"beetleback chief","rarity":"uncommon"},{"name":"borderland marauder","rarity":"common"},{"name":"burning vengeance","rarity":"uncommon"},{"name":"carbonize","rarity":"common"},{"name":"chain lightning","rarity":"uncommon"},{"name":"crater hellion","rarity":"rare"},{"name":"desperate ravings","rarity":"common"},{"name":"dragon egg","rarity":"common"},{"name":"dualcaster mage","rarity":"rare"},{"name":"faithless looting","rarity":"common"},{"name":"fervent cathar","rarity":"common"},{"name":"firebolt","rarity":"common"},{"name":"flame jab","rarity":"uncommon"},{"name":"gamble","rarity":"rare"},{"name":"ghitu slinger","rarity":"uncommon"},{"name":"honden of infinite rage","rarity":"uncommon"},{"name":"keldon champion","rarity":"uncommon"},{"name":"keldon marauders","rarity":"common"},{"name":"kird ape","rarity":"common"},{"name":"mogg fanatic","rarity":"common"},{"name":"mogg war marshal","rarity":"common"},{"name":"orcish oriflamme","rarity":"common"},{"name":"price of progress","rarity":"uncommon"},{"name":"pyroblast","rarity":"uncommon"},{"name":"pyrokinesis","rarity":"rare"},{"name":"reckless charge","rarity":"common"},{"name":"rorix bladewing","rarity":"rare"},{"name":"seismic stomp","rarity":"common"},{"name":"siege-gang commander","rarity":"rare"},{"name":"sneak attack","rarity":"mythic"},{"name":"stingscourger","rarity":"common"},{"name":"sulfuric vortex","rarity":"rare"},{"name":"tooth and claw","rarity":"uncommon"},{"name":"undying rage","rarity":"common"},{"name":"wildfire emissary","rarity":"common"},{"name":"worldgorger dragon","rarity":"mythic"},{"name":"young pyromancer","rarity":"uncommon"},{"name":"abundant growth","rarity":"common"},{"name":"ancestral mask","rarity":"uncommon"},{"name":"argothian enchantress","rarity":"mythic"},{"name":"brawn","rarity":"uncommon"},{"name":"centaur chieftain","rarity":"uncommon"},{"name":"civic wayfinder","rarity":"common"},{"name":"commune with the gods","rarity":"common"},{"name":"elephant guide","rarity":"common"},{"name":"elvish vanguard","rarity":"common"},{"name":"emperor crocodile","rarity":"common"},{"name":"flinthoof boar","rarity":"uncommon"},{"name":"fog","rarity":"common"},{"name":"gaea's blessing","rarity":"uncommon"},{"name":"green sun's zenith","rarity":"rare"},{"name":"harmonize","rarity":"uncommon"},{"name":"heritage druid","rarity":"rare"},{"name":"honden of life's web","rarity":"uncommon"},{"name":"imperious perfect","rarity":"rare"},{"name":"invigorate","rarity":"uncommon"},{"name":"llanowar elves","rarity":"common"},{"name":"lys alana huntmaster","rarity":"common"},{"name":"natural order","rarity":"mythic"},{"name":"nature's claim","rarity":"common"},{"name":"nimble mongoose","rarity":"common"},{"name":"rancor","rarity":"uncommon"},{"name":"regal force","rarity":"rare"},{"name":"roar of the wurm","rarity":"uncommon"},{"name":"roots","rarity":"common"},{"name":"seal of strength","rarity":"common"},{"name":"sentinel spider","rarity":"common"},{"name":"silvos, rogue elemental","rarity":"rare"},{"name":"sylvan library","rarity":"rare"},{"name":"sylvan might","rarity":"common"},{"name":"thornweald archer","rarity":"common"},{"name":"timberwatch elf","rarity":"uncommon"},{"name":"werebear","rarity":"common"},{"name":"wirewood symbiote","rarity":"uncommon"},{"name":"xantid swarm","rarity":"rare"},{"name":"yavimaya enchantress","rarity":"common"},{"name":"armadillo cloak","rarity":"uncommon"},{"name":"baleful strix","rarity":"rare"},{"name":"bloodbraid elf","rarity":"uncommon"},{"name":"brago, king eternal","rarity":"rare"},{"name":"dack fayden","rarity":"mythic"},{"name":"extract from darkness","rarity":"uncommon"},{"name":"flame-kin zealot","rarity":"uncommon"},{"name":"glare of subdual","rarity":"rare"},{"name":"goblin trenches","rarity":"rare"},{"name":"maelstrom wanderer","rarity":"mythic"},{"name":"shaman of the pack","rarity":"uncommon"},{"name":"shardless agent","rarity":"rare"},{"name":"sphinx of the steel wind","rarity":"mythic"},{"name":"thunderclap wyvern","rarity":"uncommon"},{"name":"trygon predator","rarity":"uncommon"},{"name":"vindicate","rarity":"rare"},{"name":"void","rarity":"rare"},{"name":"wee dragonauts","rarity":"uncommon"},{"name":"zealous persecution","rarity":"uncommon"},{"name":"call the skybreaker","rarity":"rare"},{"name":"deathrite shaman","rarity":"rare"},{"name":"giant solifuge","rarity":"rare"},{"name":"torrent of souls","rarity":"uncommon"},{"name":"ashnod's altar","rarity":"uncommon"},{"name":"chrome mox","rarity":"mythic"},{"name":"duplicant","rarity":"rare"},{"name":"emmessi tome","rarity":"uncommon"},{"name":"goblin charbelcher","rarity":"rare"},{"name":"isochron scepter","rarity":"rare"},{"name":"juggernaut","rarity":"uncommon"},{"name":"mana crypt","rarity":"mythic"},{"name":"millikin","rarity":"uncommon"},{"name":"mindless automaton","rarity":"uncommon"},{"name":"nevinyrral's disk","rarity":"rare"},{"name":"pilgrim's eye","rarity":"common"},{"name":"prismatic lens","rarity":"uncommon"},{"name":"relic of progenitus","rarity":"uncommon"},{"name":"sensei's divining top","rarity":"rare"},{"name":"ticking gnomes","rarity":"uncommon"},{"name":"winter orb","rarity":"rare"},{"name":"worn powerstone","rarity":"uncommon"},{"name":"bloodfell caves","rarity":"common"},{"name":"blossoming sands","rarity":"common"},{"name":"dismal backwater","rarity":"common"},{"name":"jungle hollow","rarity":"common"},{"name":"karakas","rarity":"mythic"},{"name":"maze of ith","rarity":"rare"},{"name":"mishra's factory","rarity":"uncommon"},{"name":"rugged highlands","rarity":"common"},{"name":"scoured barrens","rarity":"common"},{"name":"swiftwater cliffs","rarity":"common"},{"name":"thornwood falls","rarity":"common"},{"name":"tranquil cove","rarity":"common"},{"name":"wasteland","rarity":"rare"},{"name":"wind-scarred crag","rarity":"common"}],
  booster: ['common', 'common', 'common',
            'common', 'common', 'common',
            'common', 'common', 'common',
            'common', 'uncommon', 'uncommon',
            'uncommon', 'rare'],
};
for (let i of raw.EMA.cards) {
  i.types = [null];
  i.multiverseid = 0;
}

var COLORS = {
  W: 'White',
  U: 'Blue',
  B: 'Black',
  R: 'Red',
  G: 'Green'
}

var Cards = {}
var Sets = {}

before()

var types = ['core', 'expansion', 'commander', 'planechase', 'starter', 'un']
var codes = ['EMA', 'MMA', 'VMA', 'CNS', 'TPR', 'MM2']
for (var code in raw) {
  var set = raw[code]
  if (types.indexOf(set.type) > -1
    || codes.indexOf(code) > -1)
    doSet(set, code)
}

after()

fs.writeFileSync('data/cards.json', JSON.stringify(Cards, null, 2))
fs.writeFileSync('data/sets.json', JSON.stringify(Sets, null, 2))

function before() {
  raw.UGL.cards = raw.UGL.cards.filter(x => x.layout !== 'token')

  raw.TSP.cards = raw.TSP.cards.concat(raw.TSB.cards)
  delete raw.TSB

  raw.PLC.booster = Array(11).fill('common')
  raw.FUT.booster = Array(11).fill('common')

  ;['BFZ', 'OGW'].forEach(setName => {
    for (card of raw[setName].cards)
      if (card.text && card.text.startsWith('Devoid'))
        card.colors = card.manaCost
          .replace(/[\d{}]/g, '')
          .replace(/(.)\1+/g, '$1')
          .split('')
          .map(c => COLORS[c])
  })

  var card
  for (card of raw.SOI.cards)
    if (card.layout === 'double-faced')
      card.rarity = 'special'

  for (card of raw.ISD.cards)
    if (card.layout === 'double-faced')
      card.rarity = 'special'

  for (card of raw.DGM.cards)
    if (/Guildgate/.test(card.name))
      card.rarity = 'special'

  for (card of raw.CNS.cards)
    if ((card.type === 'Conspiracy')
      || /draft/.test(card.text))
      card.rarity = 'special'

  for (card of raw.FRF.cards)
    if (card.types[0] === 'Land'
      && (card.name !== 'Crucible of the Spirit Dragon'))
      card.rarity = 'special'

  //http://mtgsalvation.gamepedia.com/Magic_2015/Sample_decks
  // Each sample deck has several cards numbered 270 and higher that do not
  // appear in Magic 2015 booster packs.
  raw.M15.cards = raw.M15.cards.filter(x => parseInt(x.number) < 270)

  raw.OGW.cards.find(x => x.name === 'Wastes').rarity = 'Common'
}

function after() {
  var {SOI} = Sets
  SOI.special = {
    "mythic": [
      "archangel avacyn",
      "startled awake",
      "arlinn kord"
    ],
    "rare": [
      "hanweir militia captain",
      "elusive tormentor",
      "thing in the ice",
      "geier reach bandit",
      "sage of ancient lore",
      "westvale abbey"
    ],
    "uncommon": [
      "avacynian missionaries",
      "pious evangel",
      "town gossipmonger",
      "aberrant researcher",
      "daring sleuth",
      "uninvited geist",
      "accursed witch",
      "heir of falkenrath",
      "kindly stranger",
      "breakneck rider",
      "convicted killer",
      "skin invasion",
      "village messenger",
      "autumnal gloom",
      "duskwatch recruiter",
      "hermit of the natterknolls",
      "lambholt pacifist",
      "harvest hand",
      "neglected heirloom",
      "thraben gargoyle"
    ],
    "common": [
      "convicted killer",
      "gatstaf arsonists",
      "hinterland logger",
      "solitary hunter"
    ]
  }
  SOI.size = 8
  var {ISD} = Sets
  ISD.special = {
    mythic: [
        'garruk relentless'
    ],
    rare: [
        'bloodline keeper',
        'daybreak ranger',
        'instigator gang',
        'kruin outlaw',
        'ludevic\'s test subject',
        'mayor of avabruck'
    ],
    uncommon: [
        'civilized scholar',
        'cloistered youth',
        'gatstaf shepherd',
        'hanweir watchkeep',
        'reckless waif',
        'screeching bat',
        'ulvenwald mystics'
    ],
    common: [
        'delver of secrets',
        'grizzled outcasts',
        'thraben sentry',
        'tormented pariah',
        'village ironsmith',
        'villagers of estwald'
    ]
  }
  var {DKA} = Sets
  DKA.special = {
    mythic: [
      'elbrus, the binding blade',
      'huntmaster of the fells'
    ],
    rare: [
      'mondronen shaman',
      'ravenous demon'
    ],
    uncommon: [
      'afflicted deserter',
      'chalice of life',
      'lambholt elder',
      'soul seizer'
    ],
    common: [
      'chosen of markov',
      'hinterland hermit',
      'loyal cathar',
      'scorned villager'
    ]
  }
  var {DGM} = Sets
  DGM.mythic.splice(DGM.mythic.indexOf("maze's end"), 1)
  DGM.special = {
    gate: DGM.special,
    shock: [
      'blood crypt',
      'breeding pool',
      'godless shrine',
      'hallowed fountain',
      'overgrown tomb',
      'sacred foundry',
      'steam vents',
      'stomping ground',
      'temple garden',
      'watery grave',
      'maze\'s end'
    ]
  }
  alias(DGM.special.shock, 'DGM')

  var {FRF} = Sets
  for (let card of FRF.special)
    Cards[card].sets.FRF.rarity = / /.test(card) ? 'common' : 'basic'
  FRF.special = {
    common: FRF.special,
    fetch: [
      'flooded strand',
      'bloodstained mire',
      'wooded foothills',
      'windswept heath',
      'polluted delta',
    ]
  }
  alias(FRF.special.fetch, 'FRF')

  let {EMA} = Sets
  let emaNames = raw.EMA.cards.map(x => x.name)
  alias(emaNames, 'EMA')

  Sets.OGW.common.push('wastes')// wastes are twice as common
}

function alias(arr, code) {
  // some boosters contain reprints which are not in the set proper
  for (var cardName of arr) {
    var {sets} = Cards[cardName]
    var codes = Object.keys(sets)
    if (code === 'EMA') {
      var first = codes[0]
      sets[code] = sets[first]
    } else {
      var last = codes[codes.length - 1]
      sets[code] = sets[last]
    }
  }
}

function doSet(rawSet, code) {
  var cards = {}
  var set = {
    common: [],
    uncommon: [],
    rare: [],
    mythic: [],
    special: [],
  }
  var card

  for (card of rawSet.cards)
    doCard(card, cards, code, set)

  //because of split cards, do this only after processing the entire set
  for (var cardName in cards) {
    card = cards[cardName]
    var lc = cardName.toLowerCase()

    if (lc in Cards)
      Cards[lc].sets[code] = card.sets[code]
    else
      Cards[lc] = card
  }

  if (!rawSet.booster)
    return

  for (var rarity of ['mythic', 'special'])
    if (!set[rarity].length)
      delete set[rarity]

  set.size = rawSet.booster.filter(x => x === 'common').length
  Sets[code] = set
}

function doCard(rawCard, cards, code, set) {
  var rarity = rawCard.rarity.split(' ')[0].toLowerCase()
  if (rarity === 'basic')
    return

  var {name} = rawCard
  if (['double-faced', 'flip'].indexOf(rawCard.layout) > -1
    && rawCard.number.indexOf('b') > -1)
    return

  if (rawCard.layout === 'split')
    name = rawCard.names.join
    
  //separate landsfrom 0cmc cards by setting 0cmc to .2
  var cmcadjusted = rawCard.cmc || 0.2

  name = _.ascii(name)

  if (name in cards) {
    if (rawCard.layout === 'split') {
      var card = cards[name]
      cmcadjusted = card.cmc + rawCard.cmc
      if (card.color !== rawCard.color)
        card.color = 'multicolor'
    }
    return
  }

  var {colors} = rawCard
  var color = !colors ? 'colorless' :
    colors.length > 1 ? 'multicolor' :
    colors[0].toLowerCase()
    
  //set lands to .1 to sort them before nonland 0cmc  
  if ('Land'.indexOf(rawCard.types) > -1)
    cmcadjusted = 0.1

  cards[name] = { color, name,
    type: rawCard.types[rawCard.types.length - 1],
    cmc: cmcadjusted, 
    text: rawCard.text || '',
    manaCost: rawCard.manaCost || '',
    sets: {
      [code]: { rarity,
        url: `http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=${rawCard.multiverseid}&type=card`
      }
    }
  }

  set[rarity].push(name.toLowerCase())
}
