import CardDisplay from "./components/CardDisplay"
import TwoDisplay from "./components/TwoDisplay"
import Vid from "./components/Vid"
import { Link } from "react-router-dom"

import "../src/styles/TwoDisplay.css"
import ImageGallery from "./components/ImageGalley"
import ImageGallerytwo from "./components/ImageGallerytwo"
import myui from "../src/public/images/Shoe.jpg"
import Footer from "./components/Footer"
import CouponDisplay from "./components/CouponDisplay"


const Home = () => {
  return (
    <div>
      <CouponDisplay/>

      <Vid/>
      <div className="below-video">
        <h3>Sports Wear and Goods</h3>
        <h1>FIND YOUR FEEL</h1>
        <p>HIIT the gym with locked-in support and next-level confidence. Enjoy your rest day or simply chill in the softest flexibility imaginable. From working out to pressing pause, Nike bras and leggings are the essential foundation for your day — no matter what life throws your way.
        </p>
        <br/>

        <Link>Shop Sportswear</Link>
      </div>
      <br/>
      <div className="grid-start">
        <h2>This Season's Fresh Fits</h2>
      </div>
      <CardDisplay/>
      <h1>Trending</h1>
      <TwoDisplay/>
      <ImageGallery/>
      <br/>
      <div className="vid-next">
        <img src={myui} alt="hii" />
      </div>
      <div className="below-video">
        <h3>Fresh Start</h3>
        <h1>AIR JORDAN XXXVIII LOW</h1>
        <p>Make your moves with total control in the new AJXXXVLLL Low 'Fresh Start'.Inspired by the season of rebirth , with pastel tones and cutting- edge tech designed for mobility and explosivenss
        </p>
        <br/>
        <Link>Shop Sportswear</Link>
      </div>
      <br/>
      <h1>Always Iconic</h1>
      
      <h1>Shop by Sport</h1>
      <ImageGallerytwo/>
      <br/>
      <Footer/>

      

    </div>
  )
}

export default Home
