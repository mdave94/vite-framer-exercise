import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
const App = () => {
  return (
    <div>
      <section id="Home">
        <Navbar />
      </section>
      <section id="Services">Parallax</section>
      <section>Services</section>
      <section id="Portfolio">Parallax</section>
      <section>Portfolio1</section>
      <section>portfolio2</section>
      <section>Portfolio3</section>
      <section id="Contacts">Contact</section>
    </div>
  );
};

export default App;
