import Navbar from "./Components/Navbar";
import Hero from "./Components/Heor";
import Collections from "./Components/Collections";
import Accessories from "./Components/ACCESSORIES";
import Lookbook from "./Components/Lookbook";
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
      </main>
    </>
  );
}
