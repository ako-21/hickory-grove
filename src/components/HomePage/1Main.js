import React from 'react'
import MainImage from './MainImage'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import Section5 from './Section5'
import Section6 from './Section6'
// import Section7 from './Section7'
// import Container from 'react-bootstrap/Container'

class Main extends React.Component {
  state = {
  }
  render () {
    return (
      <div>
        <MainImage />
        <Section2 />
        <Section4 />
        <Section3 />
        <Section5 />
        <Section6 />
      </div>
    )
  }
}

export default Main
