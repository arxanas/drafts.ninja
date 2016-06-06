let d = React.DOM

export function Spaced(...elements) {
  let parts = []
  for (let part of elements) {
    parts.push(d.span({}, part))
    parts.push(d.span({ className: 'spacer-dot' }))
  }
  parts.splice(-1, 1)
  return parts
}
