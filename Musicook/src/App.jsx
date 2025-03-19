import Dashboard from './Components/Dashboard';
import Home from './Pages/Home';
import Form from './Pages/Form';
import List from './Pages/List';
import {BrowserRouter,Routes,Route} from "react-router-dom";
function App() {
  
  return (
    <>
      <div>
        <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Insert" element={<Form />} />
          <Route path="/List" element={<List />} />
        </Routes>
          
        </BrowserRouter>
      
       
      </div>
    </>
  )
}

export default App
