import styled from 'styled-components';
import { FaWhatsapp } from 'react-icons/fa';

export const Container = styled.div`
  /* Estilos para o container principal, se necessário */
`;

export const SlideshowContainer = styled.div`
  position: relative;
  max-width: 1000px; /* Ajuste conforme necessário */
  margin: auto;
  margin-top: 20px; /* Exemplo de margem entre o SlideshowContainer e o texto */
`;

export const Slide = styled.div`
  position: relative;
  text-align: center;
`;

export const PrevButton = styled.button`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  font-size: 24px;
  cursor: pointer;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  outline: none;
  padding: 16px;
  z-index: 1;
`;

export const NextButton = styled.button`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  font-size: 24px;
  cursor: pointer;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  outline: none;
  padding: 16px;
  z-index: 1;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
`;

export const AdditionalImageContainer = styled.div`
  /* Estilos para a imagem adicional abaixo do slideshow */
  max-width: 1000px; /* Mesma largura máxima do SlideshowContainer */
  margin: auto;
  padding-top: 20px; /* Espaço entre o slideshow e a imagem adicional */
`;

export const FooterContainer = styled.footer`
  text-align: center;
  padding: 10px 0;
`;

export const ContactText = styled.p`
  margin-bottom: 10px; /* Espaço maior abaixo do texto */
  font-size: 1.5rem;
`;

export const WhatsappLink = styled.a`
  color: green;
  font-size: 2rem;
  display: inline-block; /* Adiciona a capacidade de transformar */
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.5); /* Aumenta em 50% */
  }
`;

export const WhatsappIcon = styled(FaWhatsapp)`
  vertical-align: middle;
`;

export const StyledText = styled.p`
  margin: 0 20px; /* Adiciona margem lateral */
  font-size: 1rem; /* Adiciona estilo ao texto */
  line-height: 1.5; /* Adiciona espaçamento entre linhas */
`;
