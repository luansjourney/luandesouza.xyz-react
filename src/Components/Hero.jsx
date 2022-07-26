import heroImg from "../Assets/Images/laptop-wave.png";
import { Link } from "react-router-dom"

function Hero() {
  return (
    <div className="hero-container">
        <div id="DescBox">
          <h1>Hi</h1>
          <p>I'm Luan, <br/>Web Developer</p>
          <button className="contactBtn"><Link to="/page-cta">Contact me</Link></button>
        </div>
        <div id="ImgBox"><img src={heroImg} alt="bitmoji-laptop-wave"/></div>
    </div>
  )
}

export default Hero