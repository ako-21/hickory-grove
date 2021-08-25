import React from 'react'
import Container from 'react-bootstrap/Container'
import Grocery from './MapsComponents/Grocery'
import { withScriptjs, withGoogleMap } from 'react-google-maps'

class Section6 extends React.Component {
  state = {

  }

  render () {
    const WrappedMap = withScriptjs(withGoogleMap(Grocery))
    return (
      <Container className="mb-5">
        <Container className="pt-5">
          <h1 className="font3" style={{ color: '#214d67', fontWeight: 'bold' }}>See What&apos;s Around</h1>
        </Container>
        <div style={{ width: 'auto', height: '100vh' }}>
          <WrappedMap googleMapURL={'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAgpqpSV2IOBzCEbB-qJRe1KCHKNGF-blw'}
            loadingElement={<div style={{ height: '100%' }} />}
            containerElement={<div style={{ height: '100%' }} />}
            mapElement={<div style={{ height: '100%' }} />}
          />
        </div>
      </Container>
    )
  }
}

export default Section6
