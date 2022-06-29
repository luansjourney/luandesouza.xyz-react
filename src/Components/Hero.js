import heroImg from "../Assets/Images/laptop-wave.png";
import { Link } from "react-router-dom"

function Hero() {
  return (
    <>
        <div id="info">
          <h1>Hi</h1>
          <p>I'm Luan, <br/>Web Developer</p>
          <button className="contactBtn"><Link to="/page-cta">Contact me</Link></button>
        </div>
        <div id="img"><img src={heroImg} alt="bitmoji-laptop-wave"  width="150" height="150"/></div>
    </>
  )
}

export default Hero