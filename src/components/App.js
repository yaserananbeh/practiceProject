import React, { Component } from 'react'
import HeroImage from "./HeroImage"
import Footer from "./Footer"

export class App extends Component {
  render() {
    return (
      <div>
        <HeroImage/>
        <Footer/>
      </div>
    )
  }
}

export default App
