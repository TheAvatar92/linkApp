import React from 'react'
import './main.css'
import patreon from '../images/patreon.png'
import mp from '../images/mp.png'
import strava from '../images/strava.png'
import youtube from '../images/youtube.png'
import cxp from '../images/cxp.png'
import fittrack from '../images/fittrack.jpg'


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
           <a href="https://cxpsport.com/">
          <div className="links">
          <img src={cxp} alt="" className="images" />
          <p>CXP Sportswear (Code: RunRes20)</p>
          </div>
          </a>
          <a href="https://uk.fittrack.com/?utm_source=fbigreel&utm_medium=influencer&utm_campaign=RUNRES">
          <div className="links">
          <img src={fittrack} alt="" className="images" />
          <p>FitTrack(Code: RUNRES)</p>
          </div>
          </a>

          <a href="https://prf.hn/l/DLOeaXw">
          <div className="links">
          <img src={mp} alt="" className="images" />
          <p>MP Activewear (Code: RUNRES)</p>
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