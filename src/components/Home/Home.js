import './Home.css';
import Homepage from './Homepage';
import Info from './Info';
import Navbar from "./Navbar";
import Contact from "./Contact";
import Footer from "./Footer";

function Home() {
  return (
    <div className="home">
      <Navbar />
      <Homepage />
      <Info />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;