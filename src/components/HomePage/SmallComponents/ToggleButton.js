import React from 'react'
import { BsToggleOff, BsToggleOn } from 'react-icons/bs'
import { IconContext } from 'react-icons'
// import Container from 'react-bootstrap/Container'

class ToggleButton extends React.Component {
  render () {
    let jsx
    if (!this.props.showAvailable) {
      jsx =
          <div>
            <IconContext.Provider value= {{ color: 'rgb(33, 77, 103)', size: '40' }}>
              <BsToggleOff />
            </IconContext.Provider>
          </div>
    } else {
      jsx =
          <div>
            <IconContext.Provider value= {{ color: 'rgb(33, 77, 103)', size: '40' }}>
              <BsToggleOn />
            </IconContext.Provider>
          </div>
    }
    return (
      <div type="button" className="mr-5" onClick={this.props.onClick}>{jsx}</div>
    )
  }
}

export default ToggleButton
