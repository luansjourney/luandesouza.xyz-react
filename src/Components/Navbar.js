import { Link, useNavigate } from "react-router-dom"

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
            <Link to='/page-one' onClick={props.menutoggle}>Page one</Link>
          </li>
          <li>
            <Link to='/pagetwo'  onClick={props.menutoggle}>Page two</Link>
          </li>
          <li>
            <Link to='/pagethree'  onClick={props.menutoggle}>Page three</Link>
          </li>
        </ul>
        <button onClick={ctaClickHandler}>CTA Page</button>
    </nav>
  )
}

export default Navbar