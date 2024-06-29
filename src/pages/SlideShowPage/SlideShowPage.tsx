import React from 'react';
import Slider from 'react-slick';
import { Title } from "../../components/Title";
import image2 from "../../assets/Image2.jpeg";
import image3 from "../../assets/Image3.jpeg";
import image4 from "../../assets/Image4.jpeg";
import image5 from "../../assets/Image5.jpeg";
import additionalImage from "../../assets/Imageplanta.jpeg"; // Imagem adicional
import {
  Container,
  SlideshowContainer,
  Image,
  AdditionalImageContainer,
  FooterContainer,
  ContactText,
  WhatsappLink,
  WhatsappIcon,
  StyledText
} from "./styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <ContactText>Entre em contato:</ContactText>
      <WhatsappLink
        href="https://wa.me/5562994336981"
        target="_blank"
        rel="noopener noreferrer"
      >
        <WhatsappIcon />
      </WhatsappLink>
    </FooterContainer>
  );
};

const slideImages = [image2, image3, image4, image5];

export const SlideShowPage: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Container>
      <Title>Lançamentos</Title>
      <StyledText>
        Casa térrea com área construída de 80,50m² com 02 quartos (1 suíte), 1 banheiro social, sala e cozinha integradas, área de serviço coberta com estendal, varanda gourmet com churrasqueira, garagem coberta. <br />
        -Pé direito de 4,00m na sala e cozinha. <br />
        -Previsão de ampliação de 1 quarto no fundo. <br />
        -Área verde na frente de 63,00m². <br />
        -Design moderno. <br />
        -Pergolado na varanda . <br />
        -Varanda com fachada sul (baixa insolação durante o dia). <br />
        -Sala e cozinha com portas de vidro para integração com a varanda e jardim.
      </StyledText>
      <SlideshowContainer>
        <Slider {...settings}>
          {slideImages.map((image, index) => (
            <div key={index}>
              <Image src={image} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </SlideshowContainer>
      <AdditionalImageContainer>
        <Image src={additionalImage} alt="Imagem Adicional" />
      </AdditionalImageContainer>
      <Footer />
    </Container>
  );
}

export default SlideShowPage;
