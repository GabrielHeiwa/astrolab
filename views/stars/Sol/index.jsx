import * as React from "react";
import { PageStack } from "../../../components/pageStack";
import {
	Container,
	Content,
	Description,
	Header,
	Image,
	ImageContainer,
	ListImages,
	Modal,
	ModalCloseModal,
	ModalContent,
	Paragraph,
} from "./styles";

function Sol() {
	return <Container>
        <Content>
            <Header></Header>
        </Content>
    </Container>
}

export default function ({ setTitle }) {
    return <PageStack Screen={Sol} screenname="Sol" setTitle={setTitle} />
}
