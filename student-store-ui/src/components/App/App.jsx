import * as React from "react"
import { useState, useEffect } from "react"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import "./App.css"
import axios from "axios"

export default function App() {



  async function getResults() {
    let url = "https://codepath-store-api.herokuapp.com/store"
    let response = await axios.get(url)
    console.log(response.data)
  }

  useEffect(() => {
    getResults()
  })


  return (
    <div className="app">
      {/* <BrowserRouter> */}
        <main>
          {/* YOUR CODE HERE! */}
          <Navbar />
          <Sidebar />
          <Home />
        </main>
      {/* </BrowserRouter> */}
    </div>
  )
}
