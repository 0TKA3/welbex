import Header from "./components/Header";
import '../src/style.scss'
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <Header></Header>
        <Content></Content>
        <Footer></Footer>
        <div className="red-light"></div>
        <div className="red-ball"></div>
        <div className="small-red-ball"></div>
        <div className="purple-ball"></div>
        <div className="purple-light"></div>
      </div>
    </div>
  );
}

export default App;
