import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./components/Landing/Landing";


function App() {
  return (
          <Router>
              <Routes>
                  <Route path="/" element={<Home/>} />

              </Routes>
          </Router>
  
  );
}

export default App;
