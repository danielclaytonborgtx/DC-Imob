import { useState } from "react";
import { Text } from "../../components/Text";
import { Title } from "../../components/Title";
import image2 from "../../assets/Image2.jpeg";
import image3 from "../../assets/Image3.jpeg";
import image4 from "../../assets/Image4.jpeg";
import image5 from "../../assets/Image5.jpeg";
import additionalImage from "../../assets/Imageplanta.jpeg"; // Imagem adicional
import {
  Container,
  SlideshowContainer,
  Slide,
  PrevButton,
  NextButton,
  Image,
  AdditionalImageContainer,
  FooterContainer,
  ContactText,
  WhatsappLink,
  WhatsappIcon
} from "./styles";

const Footer = () => {
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

export function SlideShowPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slideImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideImages.length - 1 : currentSlide - 1);
  };

  return (
    <Container>
      <Title>Lançamentos</Title>
      <Text>Casas de 2 quartos sendo uma suíte, varanda gourmet com churrasqueira, arquitetura moderna no Jardim Veneza em Aparecida de Goiânia.</Text>
      <SlideshowContainer>
        <Slide>
          <PrevButton onClick={prevSlide}>&#x2B05;</PrevButton>
          <Image src={slideImages[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
          <NextButton onClick={nextSlide}>&#x27A1;</NextButton>
        </Slide>
      </SlideshowContainer>
      <AdditionalImageContainer>
        <Image src={additionalImage} alt="Imagem Adicional" />
      </AdditionalImageContainer>
      <Footer />
    </Container>
  );
}

export default SlideShowPage; // Exportar o componente por padrão se necessário
