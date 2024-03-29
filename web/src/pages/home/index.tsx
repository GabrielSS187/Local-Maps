import React from "react";

// Import Styles
import {
 Container, 
Title,
Button,
Image,
LeftContainer,
RightContainer,
SubTitle,
ButtonBox 
} from "./styles";
//----------------------------------------------------------------

// React Router Dom
import { Link } from "react-router-dom";
//----------------------------------------------------------------

const Home = () => {

    return (

        <Container>
            <LeftContainer>
                <Title>O mapa local de sua cidade</Title>
                <SubTitle>Encontre no comércio local tudo o que precisa!</SubTitle>

                <Link to="/new">
                    <Button>
                        <ButtonBox>{">"}</ButtonBox>
                        Cadastre um ponto comercial
                    </Button>
                </Link>
            </LeftContainer>

            <RightContainer>
                <Image />
            </RightContainer>
        </Container>

    )
};

export default Home;