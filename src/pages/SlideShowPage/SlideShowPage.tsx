// src/components/SlideShowPage/SlideShowPage.tsx

import React, { useState } from "react";
import { Text } from "../../components/Text";
import { Title } from "../../components/Title";
import image2 from "../../assets/Image2.jpeg";
import image3 from "../../assets/Image3.jpeg";
import image4 from "../../assets/Image4.jpeg";
import { Container, SlideshowContainer, Slide, PrevButton, NextButton, Image } from "./styles";

const slideImages = [image2, image3, image4];

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
      <Text>Casas de 2 quartos sendo uma suíte, arquitetura moderna no jardim Veneza em Aparecida de Goiânia.</Text>
      <SlideshowContainer>
        <Slide>
          <PrevButton onClick={prevSlide}>&#10094;</PrevButton>
          <Image src={slideImages[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
          <NextButton onClick={nextSlide}>&#10095;</NextButton>
        </Slide>
      </SlideshowContainer>
    </Container>
  );
}
