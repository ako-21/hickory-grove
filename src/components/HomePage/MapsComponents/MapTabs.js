import React from 'react'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Container from 'react-bootstrap/Container'
import * as GroceryData from './../../../data/data_grocery.json'
// import * as PharmacyData from './../../../data/data_pharmacy.json'
import * as DiningData from './../../../data/data_dining.json'
// import * as ConvData from './../../../data/data_convenience.json'
// import * as BankingData from './../../../data/data_bank.json'
import * as RetailData from './../../../data/data_retail.json'
import * as SchoolData from './../../../data/data_school.json'
import * as FitnessData from './../../../data/data_fitness.json'
import * as RecreationData from './../../../data/data_recreation.json'
class MapTabs extends React.Component {
    state = {
      selectedStore: null
    }

    render () {
      return (
        <Tabs className="" onSelect={this.props.clickedTab} defaultActiveKey="Grocery">
          <Tab style={{ height: '100%' }} eventKey="Grocery" title="Groceries">
            <Container className="tab-content-style" style={{ height: '100%' }}>
              <ul className="font2 map-list">
                {GroceryData.results.map((store, index) => {
                  return this.props.selectedStore === store.place_id
                    ? (
                      <li
                        className= "hovered-list"
                        data-id={store.place_id}
                        key={store.place_id}
                        onMouseEnter= {() => this.props.onMouseOver(store.place_id)}
                        onMouseLeave= {this.props.onMouseOut}
                      >
                        {store.name}
                      </li>
                    ) : (
                      <li className= "tab-list-size"
                        data-id={store.place_id}
                        key={store.place_id}
                        onMouseEnter= {() => this.props.onMouseOver(store.place_id)}
                        onMouseLeave= {this.props.onMouseOut}
                      >
                        {store.name}
                      </li>
                    )
                }
                )}
              </ul>
            </Container>
          </Tab>
          <Tab style={{ height: '100%' }} eventKey="Dining" title="Dining">
            <Container className="tab-content-style" style={{ height: '100%' }}>
              <ul className="font2 map-list">
                {DiningData.results.map((store, index) => {
                  return this.props.selectedStore === store.place_id
                    ? (
                      <li
                        className= "hovered-list"
                        data-id={store.place_id}
                        key={store.place_id}
                        onMouseEnter= {() => this.props.onMouseOver(store.place_id)}
                        onMouseLeave= {this.props.onMouseOut}
                      >
                        {store.name}
                      </li>
                    ) : (
                      <li className= "tab-list-size"
                        data-id={store.place_id}
                        key={store.place_id}
                        onMouseEnter= {() => this.props.onMouseOver(store.place_id)}
                        onMouseLeave= {this.props.onMouseOut}
                      >
                        {store.name}
                      </li>
                    )
                }
                )}
              </ul>
            </Container>
          </Tab>
          <Tab style={{ height: '100%' }} eventKey="Retail" title="Retail">
            <Container className="tab-content-style" style={{ height: '100%' }}>
              <ul className="font2 map-list">
                {RetailData.results.map((store, index) => {
                  return this.props.selectedStore === store.place_id
                    ? (
                      <li
                        className= "hovered-list"
                        data-id={store.place_id}
                        key={store.place_id}
                        onMouseEnter= {() => this.props.onMouseOver(store.place_id)}
                        onMouseLeave= {this.props.onMouseOut}
                      >
                        {store.name}
                      </li>
                    ) : (
                      <li className= "tab-list-size"
                        data-id={store.place_id}
                        key={store.place_id}
                        onMouseEnter= {() => this.props.onMouseOver(store.place_id)}
                        onMouseLeave= {this.props.onMouseOut}
                      >
                        {store.name}
                      </li>
                    )
                }
                )}
              </ul>
            </Container>
          </Tab>
          <Tab style={{ height: '100%' }} eventKey="School" title="Schools">
            <Container className="tab-content-style" style={{ height: '100%' }}>
              <ul className="font2 map-list">
                {SchoolData.results.map((store, index) => {
                  return this.props.selectedStore === store.place_id
                    ? (
                      <li
                        className= "hovered-list"
                        data-id={store.place_id}
                        key={store.place_id}
                        onMouseEnter= {() => this.props.onMouseOver(store.place_id)}
                        onMouseLeave= {this.props.onMouseOut}
                      >
                        {store.name}
                      </li>
                    ) : (
                      <li className= "tab-list-size"
                        data-id={store.place_id}
                        key={store.place_id}
                        onMouseEnter= {() => this.props.onMouseOver(store.place_id)}
                        onMouseLeave= {this.props.onMouseOut}
                      >
                        {store.name}
                      </li>
                    )
                }
                )}
              </ul>
            </Container>
          </Tab>
          <Tab style={{ height: '100%' }} eventKey="Fitness" title="Fitness">
            <Container className="tab-content-style" style={{ height: '100%' }}>
              <ul className="font2 map-list">
                {FitnessData.results.map((store, index) => {
                  return this.props.selectedStore === store.place_id
                    ? (
                      <li
                        className= "hovered-list"
                        data-id={store.place_id}
                        key={store.place_id}
                        onMouseEnter= {() => this.props.onMouseOver(store.place_id)}
                        onMouseLeave= {this.props.onMouseOut}
                      >
                        {store.name}
                      </li>
                    ) : (
                      <li className= "tab-list-size"
                        data-id={store.place_id}
                        key={store.place_id}
                        onMouseEnter= {() => this.props.onMouseOver(store.place_id)}
                        onMouseLeave= {this.props.onMouseOut}
                      >
                        {store.name}
                      </li>
                    )
                }
                )}
              </ul>
            </Container>
          </Tab>
          <Tab style={{ height: '100%' }} eventKey="Recreation" title="Recreation">
            <Container className="tab-content-style" style={{ height: '100%' }}>
              <ul className="font2 map-list">
                {RecreationData.results.map((store, index) => {
                  return this.props.selectedStore === store.place_id
                    ? (
                      <li
                        className= "hovered-list"
                        data-id={store.place_id}
                        key={store.place_id}
                        onMouseEnter= {() => this.props.onMouseOver(store.place_id)}
                        onMouseLeave= {this.props.onMouseOut}
                      >
                        {store.name}
                      </li>
                    ) : (
                      <li className= "tab-list-size"
                        data-id={store.place_id}
                        key={store.place_id}
                        onMouseEnter= {() => this.props.onMouseOver(store.place_id)}
                        onMouseLeave= {this.props.onMouseOut}
                      >
                        {store.name}
                      </li>
                    )
                }
                )}
              </ul>
            </Container>
          </Tab>
        </Tabs>
      )
    }
}

export default MapTabs
