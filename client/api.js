import request from 'superagent'

var widgetUrl = 'http://localhost:3000/widgets'

export function getWidgets (callback) {
  request
    .get(widgetUrl)
    .end((err, res) => {
      callback(err, res.body)
    })
}

export function appendWidget (widget, callback) {
  request
    .post(widgetUrl)
    .send(widget)
    .end((err, res) => {
      callback(err)
    })
}
