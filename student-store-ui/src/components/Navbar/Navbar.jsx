import * as React from "react"
import codePathLogo from "../../assets/codepath.svg"
import twitterLogo from "../../assets/twitter.svg"
import { Link } from "react-router-dom"

import "./Navbar.css"

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="content">
        <div className="logo">
          <img src={codePathLogo} alt="logo"/>
        </div>
        <div className="socials">
          <img src={twitterLogo} alt="twitter"/>
          <img src="" alt="instagram"/>
          <img src="" alt="facebook"/>
        </div>
        <div className="links">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/#About">About Us</Link></li>
            <li><Link to="/#Contact">Contact Us</Link></li>
            <li><Link to="/#Buy">Buy Now</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

// export function Logo() {
//   return (
//     <div className="logos">
//       <img src="../../assets/logo.png" alt="logo"/>
//     </div>
//       <div className="media-icons">
//           <img src="../../assets/twitter_logo.png" alt="twitter"/>
//           <img src="../../assets/instagram_logo.png" alt="instagram"/>
//           <img src="../../assets/facebook_logo.png" alt="facebook"/>
//         </div>
//   )
// }