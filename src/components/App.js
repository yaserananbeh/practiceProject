import React, { Component } from 'react'
import HeroImage from "./HeroImage"
import Footer from "./Footer"
import ViewCards from "./ViewCards"
import Navbar from "./Navbar"
import MostViewed from "./MostViewed"


export class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <HeroImage/>
        <ViewCards/>
        <MostViewed/>
        <Footer/>
      </div>
    )
  }
}

export default App
