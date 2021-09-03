import React from 'react'
import GroceryRender from './MapsComponents/Grocery'
import GroceryTab from './MapsComponents/GroceryTab'
import Container from 'react-bootstrap/Container'

class Section6 extends React.Component {
  state = {
    test: false
  }

  render () {
    return (
      <Container>
        <h1 className="font3 mt-5 mb-5" style={{ color: '#214d67', fontWeight: 'bold' }}>See What&apos;s Around</h1>
        <div className="row no-gutters">
          <div className="col-5">
            <GroceryRender {...this.state}></GroceryRender>
          </div>
          <div className="col-7">
            <GroceryTab></GroceryTab>
          </div>
        </div>
      </Container>
    )
  }
}

export default Section6
