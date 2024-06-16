// src/pages/Home/styles.ts
import styled from "styled-components";
import logo from "../../assets/Image1.jpeg"; // Importa o logo da pasta de assets

// Container principal que centraliza o conteúdo
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Container do logo com imagem de fundo e estilo arredondado
export const LogoContainer = styled.div`
  width: 7.5rem;
  height: 7.5rem;
  border-radius: 50%;
  background-color: pink;
  margin-bottom: 0.5rem;
  background-image: url(${logo});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

// Container para o conteúdo com margens e padding
export const Content = styled.div`
  width: 100%;
  margin-top: 2rem;
  padding: 0 2rem;
`;

// Estilo do botão com largura total, padding e borda
export const ButtonMenu = styled.button`
  width: 100%;
  padding: 1.5rem 0;
  border-radius: 1rem;
  border: 1px solid ${({ theme }) => theme["gray-400"]}; // Cor da borda do tema
  cursor: pointer;
  
  // Transição suave para uma melhor experiência do usuário
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme["gray-400"]};
    color: white;
  }
`;
