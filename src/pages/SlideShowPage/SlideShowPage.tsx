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

  // Exemplo de uso explícito do React (não necessário na maioria dos casos):
  return React.createElement(
    Container,
    null,
    React.createElement(Title, null, "Lançamentos"),
    React.createElement(Text, null, "Casas de 2 quartos sendo uma suíte, arquitetura moderna no jardim Veneza em Aparecida de Goiânia."),
    React.createElement(SlideshowContainer, null,
      React.createElement(Slide, null,
        React.createElement(PrevButton, { onClick: prevSlide }, "\u2B05"),
        React.createElement(Image, { src: slideImages[currentSlide], alt: `Slide ${currentSlide + 1}` }),
        React.createElement(NextButton, { onClick: nextSlide }, "\u27A1")
      )
    )
  );
}
