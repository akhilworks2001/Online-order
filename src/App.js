import './App.css';
import LandingPage from './page/landingpage/LandingPage';
import BestSellerPage from './page/bestseller/BestSellerPage';
import OrientalTastePage from './page/orientaltaste/OrientalTastePage';
import StatisticPage from './page/statisticspage/StatistcPage';
import ChickenGrill from './page/chickengrill/ChikenGrill';
import SenoraFields from './page/senorafields/SenoraFields';
import Subscribe from './page/subscribe/Subscribe';
import About from './page/about/About';

function App() {
  return (
    <div>
      <LandingPage />
      <BestSellerPage />
      <OrientalTastePage />
      <StatisticPage />
      <ChickenGrill />
      <SenoraFields />
      <Subscribe />
      <About />
    </div>
  );
}

export default App;