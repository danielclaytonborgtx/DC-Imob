import Slider from 'react-slick';
import './App.css';
import image1 from './assets/Image1.jpeg';
import image2 from './assets/Image2.jpeg';
import image3 from './assets/Image3.jpeg'; // Importe outras imagens que você queira adicionar

// Mova a declaração do settings para fora da função App para evitar a redefinição
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

function App() {
  return (
    <>
      <h1>Dc Imob</h1>
      <div className="container">
        <Slider {...settings}>
          <div>
            <img src={image1} alt="Descrição da imagem 1" />
          </div>
          <div>
            <img src={image2} alt="Descrição da imagem 2" />
          </div>
          <div>
            <img src={image3} alt="Descrição da imagem 3" />
          </div>
        </Slider>
      </div>
    </>
  );
}

export default App;
