import "./App.css";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import Layout from "./components/layout";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="grid">
        <Sidebar />
        <Layout />
      </div>
      <Footer />
    </div>
  );
}

export default App;
