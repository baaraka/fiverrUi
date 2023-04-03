import Featured from "../featured/Featured";
import Slide from "../slide/Slide";
import TrustedBy from "../trustedBy/TrustedBy";
import "./Home.scss";
import { cards } from "../../data";
import CatCard from "../../components/catCard/CatCard";

function Home() {
  return (
    <div className="home">
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map((card) => (
          <CatCard item={card} key={card.id} />
        ))}
      </Slide>
    </div>
  );
}

export default Home;
