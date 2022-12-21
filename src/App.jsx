// import logo from './logo.png';
import './App.css';
import { Outlet } from "react-router-dom";
import Nav from './layouts/header/nav';
import Footer from './layouts/footer/footer';

function App() {
  return (
    <>
    <div className='container'>
      <Nav />
      <Outlet />
    </div>
      <Footer />
    </>
    
  );
}

export default App;