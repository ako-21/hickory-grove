import React from 'react'
import { GoogleMap, Marker, withScriptjs, withGoogleMap } from 'react-google-maps'
import * as groceryData from './../../../data/data_grocery.json'
// import ShoppingCart from './../../../images/shoppingcart.png'
import House from './../../../images/house.png'
import MarkerBlue from './../../../images/markerblue.png'
import MarkerOrange from './../../../images/markerorange.png'
// import Container from 'react-bootstrap/Container'
// import Tabs from 'react-bootstrap/Tabs'
// import Tab from 'react-bootstrap/Tab'

class Grocery extends React.Component {
    state = {
      selectedStore: null
    }

    render () {
      return (
        <GoogleMap defaultZoom={12} defaultCenter={{ lat: 34.06425, lng: -84.60060 }}>
          <Marker
            position= {{ lat: 34.06425, lng: -84.60060 }}
            icon={{
              url: `${House}`,
              scaledSize: new window.google.maps.Size(55, 55)
            }}
          >
          </Marker>
          {groceryData.results.map((store, index) => {
            return this.state.selectedStore === store.place_id
              ? (
                <Marker
                  key={store.place_id}
                  onMouseOver= {() => this.setState({ selectedStore: store.place_id })}
                  onMouseOut= {() => this.setState({ selectedStore: null })}
                  position= {{ lat: store.geometry.location.lat, lng: store.geometry.location.lng }}
                  label= {{
                    text: `${index + 1}`,
                    color: 'white'
                  }}
                  icon={{
                    url: `${MarkerBlue}`,
                    scaledSize: new window.google.maps.Size(40, 45)
                  }}
                >
                </Marker>
              ) : (
                <Marker
                  key={store.place_id}
                  onMouseOver= {() => this.setState({ selectedStore: store.place_id })}
                  onMouseOut= {() => this.setState({ selectedStore: null })}
                  position= {{ lat: store.geometry.location.lat, lng: store.geometry.location.lng }}
                  label= {{
                    text: `${index + 1}`,
                    color: 'white'
                  }}
                  icon={{
                    url: `${MarkerOrange}`,
                    scaledSize: new window.google.maps.Size(40, 45)
                  }}
                >
                </Marker>
              )
          }
          )}
        </GoogleMap>
      )
    }
}

class GroceryRender extends React.Component {
  state ={
  }
  render () {
    const WrappedMap = withScriptjs(withGoogleMap(Grocery))
    return (
      <div className="mb-5">
        <div style={{ width: 'auto', height: '518.09px' }}>
          <WrappedMap googleMapURL={'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places'}
            loadingElement={<div style={{ height: '100%' }} />}
            containerElement={<div style={{ height: '100%', width: '100%' }} />}
            mapElement={<div style={{ height: '100%' }} />}
          />
        </div>
      </div>
    )
  }
}

export default GroceryRender
