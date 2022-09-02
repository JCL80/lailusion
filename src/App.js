import './App.css';
import ImageSlider from './components/ImageSlider'
import Navbar from './components/navbar'
import History from './components/history'
import Lechones from './components/lechones'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const slides = [
    {url : "http://localhost:3000/Platos/IMG-20220901-WA0009.jpg"},
    {url : "http://localhost:3000/Platos/IMG-20220901-WA0010.jpg"},
    {url : "http://localhost:3000/Platos/IMG-20220901-WA0011.jpg"},
  ]

  const containerStyles = {
    width : "700px",
    height : "500px",
    margin : "0 auto",
  }
  
  return (
    <div className="App">
      <Navbar/>
      <hr/>
      
      Slider

      <hr/>
      
      {/* <History/>

      <hr/>

      <Lechones/> */}

    </div>

  );
}

export default App;
