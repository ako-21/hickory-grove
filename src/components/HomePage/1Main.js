import React from 'react'
import MainImage from './MainImage'
import Section2 from './Section2'
import Section3 from './Section3'
// import Container from 'react-bootstrap/Container'

class Main extends React.Component {
  state = {
  }
  render () {
    return (
      <div>
        <MainImage />
        <Section2 />
        <Section3 />
      </div>
    )
  }
}

export default Main
