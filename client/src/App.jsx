import { Welcome, Footer, Services } from "./components";

const App = () => (
  <div className="min-h-screen">
    <div className="gradient-bg-welcome">
      <Welcome />
    </div>
    <Services />
    <Footer />
  </div>
);

export default App;
