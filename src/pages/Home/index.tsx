import { useNavigate } from "react-router-dom";

import { Text } from "../../components/Text";
import { Title } from "../../components/Title";

import {
    ButtonMenu,
    Container,
    Content,
    LogoContainer,
  } from "./styles";
  
  export function Home() {
    const navigate = useNavigate();
  
    const handleNavigateToCategories = () => {
      navigate("/categories");
    };
  
    return (
      <Container>
        <LogoContainer />
  
        <Title>RIS</Title>
  
        <Text>Arquitetura</Text>
  
        <Content>
          <ButtonMenu onClick={handleNavigateToCategories}>
            <Text size="lg" weight={700} variant="secondary">
              Entrar
            </Text>
          </ButtonMenu>
        </Content>
      </Container>
    );
  }
  