import styled from 'styled-components';

export const Container = styled.div`
  /* Adicione estilos para o container principal, se necessário */
`;

export const SlideshowContainer = styled.div`
  position: relative;
  max-width: 1000px; /* Ajuste conforme necessário */
  margin: auto;
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
