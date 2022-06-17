import * as React from "react"
import "./Home.css"
import Hero from "../Hero/Hero"
import "../Hero/Hero.css"
import SubNavbar from "../SubNavbar/SubNavbar"
import "../SubNavbar/SubNavbar.css"
import ProductGrid from "../ProductGrid/ProductGrid"
import "../ProductGrid/ProductGrid.css"
import About from "../About/About"
import "../About/About.css"
import Contact from "../Contact/Contact"
import "../Contact/Contact.css"
import Footer from "../Footer/Footer"
import "../Footer/Footer.css"

export default function Home({ product }) {
  return (
    <div className="home">
      <Hero/>
      <SubNavbar/>
      <ProductGrid product={product}/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  )
}

