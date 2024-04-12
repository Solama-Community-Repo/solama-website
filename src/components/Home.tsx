import About from "./About";
import Buy from "./Buy";
import Game from "./Game";
import Meme from "./Meme";
import Tokenomics from "./Tokenomics";
import Trendz from "./Trendz";
import Welcome from "./Welcome";
import Swap from "./Swap";
import Partners from "./Partners";


const Home = () => {
  return (
    <div>
      <Welcome />
      <About />
      <Tokenomics />
	  <Partners />
      <Swap />
      <Buy />
	  <Meme />
      <Trendz />
      <Game />
    </div>
  );
};

export default Home;
