import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
    flex : 1;
    justify-content: center;
    align-items: center;
    `;
const StyledText = styled.Text`
    font-size:30px;
    `;

export const Home = () => {
    return (
        <Container>
            <StyledText>Home</StyledText>
        </Container>
    );
};

export const Sales = () => {
    return (
        <Container>
            <StyledText>Sales</StyledText>
        </Container>
    );
};

export const Bulletin = () => {
    return (
        <Container>
            <StyledText>Bulletin</StyledText>
        </Container>
    );
};

export const Inform = () => {
    return (
        <Container>
            <StyledText>Inform</StyledText>
        </Container>
    );
};

export const My = () => {
    return (
        <Container>
            <StyledText>My</StyledText>
        </Container>
    );
};
