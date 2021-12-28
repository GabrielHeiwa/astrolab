import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    height: 100%;
`;

export const Content = styled.View``;

export const Header = styled.View`
    width: 100%;
    height: 300px;

    background-color: salmon;
`;

export const Description = styled.Text``;

export const Paragraph = styled.Text``;

export const ListImages = styled.FlatList``;

export const ImageContainer = styled.TouchableOpacity``;

export const Image = styled.Image.attrs(({ resizeMode }) => { resizeMode })``;

export const Modal = styled.View``;

export const ModalCloseModal = styled.TouchableOpacity``;

export const ModalContent = styled.View``;
