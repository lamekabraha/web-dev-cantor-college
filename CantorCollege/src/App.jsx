import './App.css'
import Header from './Components/Header/Header'
import Home from './Page/Home/Home'
import Students from './Page/Students/Students'
import Staff from './Page/Staff/Staff'
import Business from './Page/Business/Business'
import Learning from './Page/Learning/Learning'
import Contact from './Page/Learning/Contact/Contact'
import Footer from './Components/Footer/Footer'
import { useState } from 'react'

const App = () => {

  const [activeComponent, setActiveComponent] = useState("Home");

  const handleNav = (ev, link) =>{
    ev.preventDefault();
    setActiveComponent(link);
  }

  const renderComponent = () => {
    switch (activeComponent) {
    case "Home":
      return <Home />;
    case "Header":
      return <Header />;
    case "Students":
      return <Students />;
    case "Staff":
      return <Staff />;
    case "Business":
      return <Business />;
    case "Learning":
      return <Learning />;
    case "Contact":
      return <Contact />;
    default:
      return <Home />;
    }
  };

  return (
    <>
    <Header handleNav={handleNav} />
    <main>
      {renderComponent()}
    </main>
    <Footer/>
    </>
  )
}

export default App