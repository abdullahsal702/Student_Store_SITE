import * as React from "react"
import codePathLogo from "../../assets/codepath.svg"
import twitterLogo from "../../assets/twitter.svg"

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
            <li><a href="/">Home</a></li>
            <li><a href="/">About Us</a></li>
            <li><a href="/">Contact Us</a></li>
            <li><a href="/">Buy Now</a></li>
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