import Header from '../Components/Header';

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