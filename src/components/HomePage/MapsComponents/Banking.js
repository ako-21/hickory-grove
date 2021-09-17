import React from 'react'
import BankingData from './../../../data/data_bank.json'
import { GoogleMap, Marker } from 'react-google-maps'
import House from './../../../images/house.png'
import MarkerBlue from './../../../images/markerblue.png'
import MarkerOrange from './../../../images/markerorange.png'

class Banking extends React.Component {
  state = {
  }
  render () {
    return (
      <GoogleMap defaultZoom={13} defaultCenter={{ lat: 34.06425, lng: -84.60060 }}>
        <Marker
          position= {{ lat: 34.06425, lng: -84.60060 }}
          icon={{
            url: `${House}`,
            scaledSize: new window.google.maps.Size(55, 55)
          }}
        >
        </Marker>
        {BankingData.results.map((store, index) => {
          return this.props.selectedStore === store.place_id
            ? (
              <Marker
                data-id={store.place_id}
                key={store.place_id}
                position= {{ lat: store.geometry.location.lat, lng: store.geometry.location.lng }}
                label= {{
                  text: `${index + 1}`,
                  color: 'white'
                }}
                icon={{
                  url: `${MarkerBlue}`,
                  scaledSize: new window.google.maps.Size(40, 45)
                }}
                onMouseOver= {() => this.props.onMouseOver(store.place_id)}
                onMouseOut= {this.props.onMouseOut}
                onClick= {() => this.props.onMouseOver(store.place_id)}
              >
              </Marker>
            ) : (
              <Marker
                data-id={store.place_id}
                key={store.place_id}
                position= {{ lat: store.geometry.location.lat, lng: store.geometry.location.lng }}
                label= {{
                  text: `${index + 1}`,
                  color: 'white'
                }}
                icon={{
                  url: `${MarkerOrange}`,
                  scaledSize: new window.google.maps.Size(40, 45)
                }}
                onMouseOver= {() => this.props.onMouseOver(store.place_id)}
                onMouseOut= {this.props.onMouseOut}
                onClick= {() => this.props.onMouseOver(store.place_id)}
              >
              </Marker>
            )
        }
        )}
      </GoogleMap>
    )
  }
}

export default Banking
