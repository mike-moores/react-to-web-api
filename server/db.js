module.exports = {
  getWidgets: getWidgets,
  saveWidget: saveWidget
}

var widgets = [{
  id: 1,
  name: 'Red widget',
  price: 23.45,
  mfg: 'Acme Inc.',
  inStock: 4
}, {
  id: 2,
  name: 'Blue widget',
  price: 423.47,
  mfg: 'Acme Inc.',
  inStock: 8
}, {
  id: 3,
  name: 'Yellow widget',
  price: 123.40,
  mfg: 'Acme Inc.',
  inStock: 3
}]

function getWidgets () {
  return widgets
}

function saveWidget (widget) {
  widget.id = widgets.length + 1
  widgets.push(widget)
}
