import * as React from "react"

export default function Contact() {
    return (
      <div className="contact">
        <div className="content">
          <h3>Contact Us</h3>
          <div className="summary">
            <ul className="info">
              <li>
                <span className="label">Email:</span>
                <span>code@path.org</span>
              </li>
              <li>
                <span className="label">Phone:</span>
                <span>1-800-CODEPATH</span>
              </li>
              <li>
                <span className="label">Address:</span>
                <span>123 Fake Street, San Francisco, CA</span>
              </li>
              <li>
                <span>Socials: </span>
                <span className="socials">
                  {/* add icons of socials */}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }