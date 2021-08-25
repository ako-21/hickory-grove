import React from 'react'
import { GoogleMap, Marker } from 'react-google-maps'
import * as groceryData from './../../../data/data_grocery.json'
// import ShoppingCart from './../../../images/shoppingcart.png'
import House from './../../../images/house.png'
// import MarkerBlue from './../../../images/markerblue.png'
// import MarkerOrange from './../../../images/markerorange.png'

class Grocery extends React.Component {
    state = {
      selectedStore: null
    }

    selectedStoreIn = (store) => {
      this.setState({ selectedStore: store })
    }

    selectedStoreOut = () => {
      this.setState({ selectedStore: null })
    }

    render () {
      return (
        <GoogleMap defaultZoom={12} defaultCenter={{ lat: 34.06425, lng: -84.60060 }}>
          <Marker
            position= {{ lat: 34.06425, lng: -84.60060 }}
            icon={{
              url: `${House}`,
              scaledSize: new window.google.maps.Size(50, 46)
            }}
          >
          </Marker>
          {groceryData.results.map((store, index) => (
            <Marker
              key={store.place_id}
              onMouseOver= {this.selectedStoreIn}
              onMouseOut= {this.selectedStoreOut}
              position= {{ lat: store.geometry.location.lat, lng: store.geometry.location.lng }}
              label= {{
                text: `${index + 1}`,
                color: 'white'
              }}
              icon={{
                scaledSize: new window.google.maps.Size(40, 50)
              }}
            >
            </Marker>
          ))}
        </GoogleMap>
      )
    }
}

export default Grocery
