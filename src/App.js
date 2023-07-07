import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import About from "./components/about.jsx";
import Home from './components/home.jsx';
import Academics from "./components/academics.jsx";
import ContactForm from "./components/contactform.jsx";
import Contacts from "./components/contacts.jsx";
import Students from "./components/students.jsx";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/academics" element={<Academics/>}/>
          <Route exact path="/contactform" element={<ContactForm/>}/>
          <Route exact path="/contacts" element={<Contacts/>}/>
          <Route exact path="/students" element={<Students/>}/>

          {/* <Route path="*" element={<NotFound/>}/> */}
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}
export default App;
