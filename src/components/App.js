import React, { Component } from 'react'
import HeroImage from "./HeroImage"
import Footer from "./Footer"
import ViewCards from "./ViewCards"


export class App extends Component {
  render() {
    return (
      <div>
        <HeroImage/>
        <ViewCards/>
        <Footer/>
      </div>
    )
  }
}

export default App
