import Navbar from "./Components/Navbar";
import Hero from "./Components/Heor";
import Collections from "./Components/Collections";
import Accessories from "./Components/ACCESSORIES";
import Lookbook from "./Components/Lookbook";
import BrandStory from "./Components/BrandStory";
import Footer from "./Components/footer";
export default function Home() {
  return (
    <>

      <Navbar />
      <main>
        <section>
          <Hero />
        </section>
        <section>
          <Collections />
        </section>
        <section>
          <Accessories />
        </section>
        <section>
          <Lookbook />
        </section>
        <section>
          <BrandStory />
        </section>
        <section>
          <Footer />
        </section>
      </main>
    </>
  );
}
