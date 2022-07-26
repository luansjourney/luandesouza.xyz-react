import Header from '../Components/Header';
import Footer from '../Components/Footer';

function Layout({children}) {
  return (
    <>
        <Header />
        <div className='container'>
            {children}
        </div>
        
    </>
  )
}

export default Layout;