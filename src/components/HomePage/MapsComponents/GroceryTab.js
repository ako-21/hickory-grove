import React from 'react'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

class GroceryTab extends React.Component {
    state = {
      selectedStore: null
    }

    render () {
      return (
        <Tabs defaultActiveKey="grocery">
          <Tab eventKey="grocery" title="grocery">
            <p>some content</p>
          </Tab>
        </Tabs>
      )
    }
}

export default GroceryTab
