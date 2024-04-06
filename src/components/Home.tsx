import About from "./About";
import Buy from "./Buy";
import Game from "./Game";
import Meme from "./Meme";
import Tokenomics from "./Tokenomics";
import Trendz from "./Trendz";
import Welcome from "./Welcome";

const Home = () => {
  return (
    <div>
      <Welcome />
      <Trendz />
      <Meme />
      <Game />
      <About />
      <Tokenomics />
      <Buy />
    </div>
  );
};

export default Home;
