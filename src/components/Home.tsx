import About from "./About";
import Buy from "./Buy";
import Game from "./Game";
import Meme from "./Meme";
import Tokenomics from "./Tokenomics";
import TaskBot from "./TaskBot";
import Welcome from "./Welcome";
import Swap from "./Swap";
import Partners from "./Partners";
import Team from "./Team";


const Home = () => {
  return (
    <div>
      <Welcome />
      <About />
      <Tokenomics />
	  <Partners />
      <Swap />
      <Buy />
	  <Team />
	  <Meme />
      <TaskBot />
     
    </div>
  );
};

export default Home;
