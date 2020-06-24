/* eslint-disable react/jsx-indent-props */
import React, { useState } from 'react';
import { AlertTitle } from '@material-ui/lab';
import { Instagram, Twitter } from '@material-ui/icons';
import Animation from '../assets/intro.gif';
import Logo from '../assets/Logo.svg';
import {
    Container,
    Main,
    Image,
    Text,
    Title,
    Description,
    Quote,
    Button,
    Bottom,
    ContactContainer,
    Submit,
    BottomContainer,
    Footer,
    Social,
    Credits,
    Alert,
} from './styles';
import Input from '../Input';
import Textarea from '../Textarea';

const Landing: React.FC = () => {
    const [interested, setInterest] = useState(false);
    return (
        <>
            {interested && (
                <Alert severity="info">
                    <AlertTitle>O blog ainda não está pronto</AlertTitle>
                    Acesse nossas{' '}
                    <a
                        href="https://www.instagram.com/un.stade"
                        target="__blank"
                        onClick={() => setInterest(false)}
                    >
                        Redes Sociais
                    </a>{' '}
                    ou entre em contato abaixo para mais informações
                </Alert>
            )}
            <Container>
                <Main>
                    <Image src={Logo} />
                    <Text>
                        <Title>
                            Saia do começo com a <span>UnStade</span>
                        </Title>
                        <Description>
                            <Quote color="#50fa7b">
                                O ponto perfeito para <span>iniciar</span>
                            </Quote>
                            <Quote color="#ffb86c">
                                Um lugar feito para <span>aprimorar</span>
                            </Quote>
                            <Quote color="#ff79c6">
                                Junte-se a nós e veja mais em{' '}
                                <span>nosso blog</span>
                            </Quote>
                            <Button onClick={() => setInterest(!interested)}>
                                Ir para o Blog
                            </Button>
                        </Description>
                    </Text>
                </Main>
                <img
                    src={Animation}
                    alt="gif demonstrando tecnologias encontradas no blog (web, mobile, api rest, banco de dados, servidores, git, mvc e terminal"
                />
                <Bottom>
                    <ContactContainer onSubmit={(data) => console.log(data)}>
                        <h1>Fale conosco</h1>
                        <Input name="name" type="text" placeholder="Nome" />
                        <Input name="email" type="email" placeholder="Email" />
                        <Textarea name="message" placeholder="Mensagem" />
                        <Submit type="submit">Enviar</Submit>
                    </ContactContainer>
                    <BottomContainer>
                        <h1>
                            Alguma <span>dúvida</span> ou{' '}
                            <span style={{ color: '#8be9fd' }}>sugestão</span>?
                        </h1>
                        <h2>
                            Envie uma mensagem pelo formulário ou no email{' '}
                            <a
                                href="mailto: unstade@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                unstade@gmail.com
                            </a>
                        </h2>
                    </BottomContainer>
                </Bottom>
            </Container>
            <Footer>
                <h1>Em breve</h1>
                <Social>
                    <a
                        href="https://www.instagram.com/un.stade"
                        target="__blank"
                    >
                        <Instagram />
                    </a>
                    <a href="https://twitter.com/stade_un" target="__blank">
                        <Twitter />
                    </a>
                </Social>
                <Credits>
                    Developed by{' '}
                    <a
                        href="https://www.linkedin.com/in/jeannbatemarque/"
                        target="__blank"
                    >
                        Jeann Carlos Batemarque
                    </a>
                </Credits>
            </Footer>
        </>
    );
};

export default Landing;
