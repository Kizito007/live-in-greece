import Image from "next/image";
import semina from "./images/semina.png";
import Discover from "./components/Discover";

export default function Home() {
  return (
    <main>
      <Image src={semina} className="building" alt="Greek Pillars" />
      <div className="content">
        <h1 className="intro">Greece the birthplace of ideas</h1>
        <p className="intro-text">
          Right in the cradle of Western civilization and at the heart of
          contemporary innovation, we invite innovative minds, ecosystem-driving
          entrepreneurs and leading investors to explore, grow, and invest in a
          country that blends rich history, captivating culture and a promising
          entrepreneurial ecosystem.
        </p>
        <button className="citizen">Become a citizen &rarr;</button>
      </div>
      <Discover />
    </main>
  );
}
