import { useNavigate } from "react-router-dom";

import cvImg from "../Assets/Images/icons8-download-resume-80.png";
import pdf from '../Assets/resume.pdf';

function Navbar(props) {
  const navigate = useNavigate();

  const ctaClickHandler = () => {
    props.menutoggle()
    navigate("/page-cta");
  }

  return (
    <nav className={`${props.cname}`}>
        <ul>
          <li>
            <a className="resume" href={pdf} rel="noreferrer" target="_blank" onClick={props.menutoggle}><img src={cvImg} alt="resume logo"/></a>
          </li>
        </ul>
        <button onClick={ctaClickHandler}>Contact</button>
    </nav>
  )
}

export default Navbar