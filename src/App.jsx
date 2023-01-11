//#region components-layout-pages imports
import Layout from "./Layouts/Layout";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
//#endregion
//#region library imports
import { Routes , Route, HashRouter} from "react-router-dom";
//#endregion

function App() {
  return(
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" exact element={<Home />}>
          </Route>
          <Route path="/contact" element={<Contact />}>
          </Route>
        </Routes>
      </Layout>
    </HashRouter>
  );
}

export default App;
