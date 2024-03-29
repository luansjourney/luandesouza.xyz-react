//#region components-layout-pages imports
import Layout from "./Layouts/Layout";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
//#endregion
//#region library imports
import { Routes , Route, BrowserRouter} from "react-router-dom";
//#endregion

function App() {
  return(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Layout>
        <Routes>
          <Route path="/" exact element={<Home />}>
          </Route>
          <Route path="/contact" element={<Contact />}>
          </Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
