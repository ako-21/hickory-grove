import React from 'react'
import { withScriptjs, withGoogleMap } from 'react-google-maps'
// import * as Grocery from './../../data/data_grocery.json'
// import * as Pharmacy from './../../data/data_pharmacy.json'
// import ShoppingCart from './../../../images/shoppingcart.png'
// import House from './../../images/house.png'
// import MarkerBlue from './../../images/markerblue.png'
// import MarkerOrange from './../../images/markerorange.png'
import Grocery from './MapsComponents/Grocery'
import Dining from './MapsComponents/Dining'
import Pharmacy from './MapsComponents/Pharmacy'
import Convenience from './MapsComponents/Convenience'
import Container from 'react-bootstrap/Container'
import Banking from './MapsComponents/Banking'
import Retail from './MapsComponents/Retail'
import School from './MapsComponents/School'
import Fitness from './MapsComponents/Fitness'
import Recreation from './MapsComponents/Recreation'
// import Tabs from 'react-bootstrap/Tabs'
// import Tab from 'react-bootstrap/Tab'
import MapTabs from './MapsComponents/MapTabs'

class Section6 extends React.Component {
    state = {
    }

    mapSelector = () => {
      let mapSelector
      if (this.props.selectedMap === 'Grocery') {
        mapSelector = <Grocery {...this.props}></Grocery>
      } else if (this.props.selectedMap === 'Pharmacy') {
        mapSelector = <Pharmacy {...this.props}></Pharmacy>
      } else if (this.props.selectedMap === 'Dining') {
        mapSelector = <Dining {...this.props}></Dining>
      } else if (this.props.selectedMap === 'Convenience') {
        mapSelector = <Convenience {...this.props}></Convenience>
      } else if (this.props.selectedMap === 'Banking') {
        mapSelector = <Banking {...this.props}></Banking>
      } else if (this.props.selectedMap === 'Retail') {
        mapSelector = <Retail {...this.props}></Retail>
      } else if (this.props.selectedMap === 'School') {
        mapSelector = <School {...this.props}></School>
      } else if (this.props.selectedMap === 'Fitness') {
        mapSelector = <Fitness {...this.props}></Fitness>
      } else if (this.props.selectedMap === 'Recreation') {
        mapSelector = <Recreation {...this.props}></Recreation>
      }
      return mapSelector
    }

    Map = withScriptjs(
      withGoogleMap(props => (
        <React.Fragment>
          {this.mapSelector()}
        </React.Fragment>
      ))
    )

    render () {
      return (
        <this.Map {...this.props}>
        </this.Map>
      )
    }
}

class Section6Render extends React.Component {
  state = {
    selectedStore: null,
    selectedMap: 'Grocery'
  }

  onMouseOver = (store) => {
    this.setState({ selectedStore: store })
  }

  onMouseOut = () => {
    this.setState({ selectedStore: null })
  }

  clickedTab = (event) => {
    const selectedTab = event
    this.setState({ selectedMap: selectedTab })
  }

  render () {
    return (
      <div id="section6">
        <Container>
          <h1 className="font3 mt-5 mb-5" style={{ color: '#214d67', fontWeight: 'bold' }}>See What&apos;s Around</h1>
          <div className="row no-gutters mb-5" style={{ width: 'auto', height: '518.09px' }}>
            <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-xs-12">
              <MapTabs onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut} clickedTab={this.clickedTab} {...this.state}></MapTabs>
            </div>
            <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-xs-12" style={{ height: '100%' }}>
              <Section6
                {...this.state}
                onMouseOver={this.onMouseOver}
                onMouseOut={this.onMouseOut}
                googleMapURL={'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places'}
                loadingElement={<div style={{ height: '100%' }} />}
                containerElement={<div style={{ height: '100%', width: '100%' }} />}
                mapElement={<div style={{ height: '100%' }} />}
              />
            </div>
          </div>
        </Container>
      </div>
    )
  }
}

export default Section6Render
