// src/pages/Home/index.tsx
import { useNavigate } from "react-router-dom";
import { Text } from "../../components/Text";
import { Title } from "../../components/Title";
import { ButtonMenu, Container, Content, LogoContainer } from "./styles"; // Importa os estilos

export function Home() {
  const navigate = useNavigate();

  const handleNavigateToSlideshow = () => {
    navigate("/slideshow"); // Navega para a rota '/slideshow' ao clicar no botão
  };

  return (
    <Container>
      <LogoContainer />
      <Title>RIS</Title>
      <Text>Arquitetura</Text>
      <Content>
        {/* Botão que dispara a função de navegação */}
        <ButtonMenu onClick={handleNavigateToSlideshow}>
          <Text size="lg" weight={700} variant="secondary">
            Lancamentos
          </Text>
        </ButtonMenu>
      </Content>
    </Container>
  );
}
