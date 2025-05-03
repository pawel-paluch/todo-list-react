import React from "react";
import Section from "../../common/Section";
import Container from "../../common/Container";
import Header from "../../common/Header";

export default () => (
    <Container>
        <Header title="O autorze" />
        <Section
            title="Parę słów o mnie..."
            body={
                <>
                    <p>Cześć. mam na imię Paweł i obecnie walczę z kursem React. Lekko nie jest...</p>
                    <p>Moim marzeniem jest polecieć na Marsa i zobaczyć na własne oczy Lorda Vadera!</p>
                </>
            }
        />
    </Container>
);
