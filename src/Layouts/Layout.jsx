import Header from '../Components/Header';
import Footer from '../Components/Footer';

function Layout({children}) {
  return (
    <>
        <Header />
        <main className='container'>
            {children}
        </main>
        <Footer />
    </>
  )
}

export default Layout;