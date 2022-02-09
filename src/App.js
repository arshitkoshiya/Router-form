import "./App.css";
import Createform from "./Component/Main/Create_form/index";
import Showdata from "./Component/Main/Show_data/index";
import Updateform from "./Component/Main/Update_form/index";
import Sidebar from "./Component/Sidebar/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="page">
      <Router>
        <Routes>
          <Route exact path="/" element={<Sidebar />}>
            <Route path="/Createform" element={<Createform />} />
            <Route path="/Showdata" element={<Showdata />} />
            <Route exact path="/Updateform/:id" element={<Updateform />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
