import './App.css';
import BrowseByType from './Components/BorwseByType/BrowseByType';
import ChooseUs from './Components/ChooseUs/ChooseUs';
import CTA from './Components/CTA/CTA';
import FeaturedCarSection from './Components/FeaturedCars/FeaturedCars';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Other from './Components/Other/Other';
import TeamSection from './Components/OurTeam/TeamSection';
import ReviewsSlider from './Components/Testimonials/ReviewsSlider';



function App() {
  return (
    <div className="App">
     <Header/>
     <CTA/>
     <BrowseByType/>
     <FeaturedCarSection/>
     <Other/>
     <ChooseUs/>
     <ReviewsSlider/>
     <TeamSection/>
     <Footer/>
    </div>
  );
}

export default App;
