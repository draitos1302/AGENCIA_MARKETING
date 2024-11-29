import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";

import Error404 from "container/errors/Error404";
import Home from "container/pages/Home";



function App() {
  return (
    <Provider store={store}>
    
    <Router>
      <Routes>
        {/*ERROR DISPLAY*/}
        <Route path="*" element={<Error404/>}/>

        {/*HOME DISPLAY*/}
        <Route path="/" element={<Home/>}/>

      </Routes>
    </Router>
    </Provider>
  );
}

export default App;
