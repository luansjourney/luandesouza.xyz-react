//#region components-layout-pages imports
import Layout from "./Layouts/Layout";
import Home from "./Pages/Home";
import PageCTA from "./Pages/PageCTA";
import PageOne from "./Pages/PageOne";
//#endregion
//#region library imports
import { Routes , Route} from "react-router-dom";
//#endregion

function App() {
  return(
      <Layout>
        <Routes>
          <Route path="/" exact element={<Home />}>
          </Route>
          <Route path="/page-one" element={<PageOne />}>
          </Route>
          <Route path="/page-cta" element={<PageCTA />}>
          </Route>
        </Routes>
    </Layout>
  );
}

export default App;
