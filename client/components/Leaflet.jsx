import React from 'react'

export default React.createClass({
  componentDidMount () {
    const lat = this.props.lat
    const lon = this.props.lon
    const mymap = L.map('mapid').setView([lat, lon], 13)

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox.satellite',
      accessToken: 'pk.eyJ1IjoiZG9uc21pdGgiLCJhIjoiY2owaTBuNTFsMDNsczMycDU3ZjllMmx3YSJ9.GEuumMqU0LlBWgKXMHBKvw'
    }).addTo(mymap)
  },

  render () {
    return (
      <div className='leaflet'>
        <div id='mapid' />
      </div>
    )
  }

})

