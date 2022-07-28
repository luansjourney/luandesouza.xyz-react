import Social from './atoms/Social';

import liImg from '../Assets/Images/linkedin.png'
import ghImg from '../Assets/Images/github.png'

function Footer() {
  return (
    <footer>
      <div className='copy'><p>Copyright &copy; 2022 Luan de Souza</p></div>
      <div className='links-container'>
        <Social image={liImg} altText="LinkedIn Logo" link="https://www.linkedin.com/in/dsluan/" />
        <Social image={ghImg} altText="Github Logo" link="https://github.com/luansjourney" />
      </div>
    </footer>
  )
}

export default Footer;