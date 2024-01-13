import React from 'react'
import './main.css'
import patreon from '../images/patreon.png'
import mp from '../images/mp.png'
import strava from '../images/strava.png'
import youtube from '../images/youtube.png'
const Main = () => {
  return (
    <main id="hero">
      <h2 className="linkTitle"> 
        Social Media & Affiliate Links</h2>
       <a href="https://www.patreon.com/RunningandResearch">
        <div className="links">
          <img src={patreon} alt="" className="images" />
          <p>Patreon - Running Programs</p>
          </div>
          </a>
          <a href="https://prf.hn/l/DLOeaXw">
          <div className="links">
          <img src={mp} alt="" className="images" />
          <p>MP Activewear (Discount code: RUNRES)</p>
          </div>
          </a>
          <a href="http://www.youtube.com/@RunAndRes">
          <div className="links">
          <img src={youtube} alt="" className="images" />
          <p>YouTube Account </p>
        </div>
        </a>
        <a href="https://www.strava.com/athletes/runningandresearch">
          <div className="links">
          <img src={strava} alt="" className="images" />
          <p>Strava </p>
        </div>
        </a>

      
    </main>
  )
}

export default Main