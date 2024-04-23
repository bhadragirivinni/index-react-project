
import './App.css';
import Header from './componets/Header/Header';
import Footer from './componets/Footer/Footer';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Index from './componets/Body/Index';
import About from './componets/Body/About';
import Service from './componets/Body/Service';
import Contact from './componets/Body/Contact'; 
import Login from './componets/Body/Login';

function App() {
  return (
    <div>
    <Router>
<Header/>

<Routes>
  <Route path='/' exact Component={Index}/>
  <Route path='about' exact Component={About}/>
  <Route path='service' exact Component={Service}/>
  <Route path='contact' exact Component={Contact}/>
  <Route path='login' exact Component={Login}/>
</Routes>
    </Router>
    
    <Footer/>
    </div>

      
  );
}

export default App;
