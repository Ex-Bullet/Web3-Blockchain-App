import { Welcome, Footer, Services, Navbar } from "./components";

const App = () => (
  <div className="min-h-screen">
    <div className="gradient-bg-welcome">
      <Navbar />
      <Welcome />
    </div>
    <Services />
    <Footer />
  </div>
);

export default App;
