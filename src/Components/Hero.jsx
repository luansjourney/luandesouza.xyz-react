import heroImg from "../Assets/Images/laptop-wave.png";
import { Link } from "react-router-dom"

function Hero() {
  return (
    <section className="hero-container">
        <div id="DescBox">
          <h1>Hi</h1>
          <p>I'm Luan, <br/>Web Developer</p>
          <button className="contactBtn"><Link to="/contact">Contact me</Link></button>
        </div>
        <div id="ImgBox"><img src={heroImg} alt="bitmoji-laptop-wave"/></div>
    </section>
  )
}

export default Hero