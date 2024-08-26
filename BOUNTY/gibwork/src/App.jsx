import './App.css'
import Collaborators from './Components/Collaborators';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import NavBar from './Components/NavBar';
import SquishyCard from './Components/SquishyCard';
import Testimonials from './Components/Testimonials';


function App() {
  return (
    <>
      <div className="main ">
        <NavBar></NavBar>
        <div className='flex justify-center items-center'>
          <Hero></Hero>
        </div>
        <div className="con1">
          <SquishyCard></SquishyCard>
          <SquishyCard></SquishyCard>
          <SquishyCard></SquishyCard>
        </div>
        <div className='flex justify-center items-center mt-5'>
          <h1 className='font-bold text-[42px]'>Our Testimonials</h1>
        </div>
        <Testimonials></Testimonials>
        <Collaborators></Collaborators>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App
