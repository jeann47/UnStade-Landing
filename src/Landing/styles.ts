import styled from 'styled-components';
import { Alert as AlertUi } from '@material-ui/lab';
import { Form } from '@unform/web';
import { darken } from 'polished';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px 10% 0;

    @media (max-width: 1024px) {
        margin: 0 10px;
    }
`;

export const Main = styled.div`
    display: flex;
    align-items: center;
    @media (max-width: 1024px) {
        flex-direction: column;
    }
    margin-bottom: 10%;
`;

export const Image = styled.img`
    height: 100%;
    min-height: 900px;
    max-height: 950px;
    @media (max-width: 1024px) {
        min-height: 500px;
    }
    @media (max-width: 425px) {
        /* height: 60%; */
        min-height: 300px;
    }
`;

export const Text = styled.div`
    display: flex;
    flex-direction: column;
    text-align: end;
`;

export const Title = styled.h1`
    font-size: 60px;
    span {
        color: #8be9fd;
    }
`;

export const Description = styled.div`
    margin-top: 30px;
    @media (max-width: 1024px) {
        margin-top: 10px;
    }
    span {
        color: #8be9fd;
    }
`;

export const Quote = styled.h1`
    span {
        color: ${({ color }): string | undefined => color};
    }
`;

export const Button = styled.button`
    background: #6272a4;
    color: #282a36;
    margin-top: 10px;
    padding: 20px 40px;
    border-radius: 50px;
    border: 0;
    font-size: 24px;
`;

export const Bottom = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    @media (max-width: 1024px) {
        flex-direction: column-reverse;
    }
    margin-bottom: 10%;
`;

export const ContactContainer = styled(Form)`
    display: flex;
    flex-direction: column;
    margin: 10%;
    padding: 3%;
    width: 35%;
    border-radius: 25px;
    background: #6272a4;

    h1 {
        align-self: center;
        margin-bottom: 5px;
    }

    @media (max-width: 1024px) {
        width: 50%;
    }
    @media (max-width: 768px) {
        width: 60%;
    }
    @media (max-width: 425px) {
        width: 90%;
        margin: 5%;
    }
`;

export const BottomContainer = styled.div`
    span {
        color: #50fa7b;
    }
    a {
        text-decoration: none;
        color: #ff79c6;
        :hover {
            color: #bd93f9;
        }
    }

    @media (max-width: 425px) {
        text-align: center;
    }
`;

export const Submit = styled.button`
    align-self: flex-end;
    background: #44475a;
    margin-top: 10px;
    padding: 20px 40px;
    border-radius: 50px;
    border: 0;
    font-size: 24px;
`;

export const Footer = styled.div`
    display: flex;
    width: 100%;
    height: 20vh;
    background: #6272a4;
    border-radius: 10px 10px 0 0;
    padding: 5vh 5vw 10px;
    justify-content: center;
    h1 {
        align-self: center;
        font-size: 90pt;

        @media (max-width: 425px) {
            font-size: 60pt;
        }
        @media (max-width: 320px) {
            font-size: 30pt;
        }
    }
`;

export const Social = styled.a`
    position: absolute;
    left: 5px;
    align-self: flex-end;
    a {
        margin: 5px;
        text-decoration: none;
        color: #f8f8f2;
        :hover {
            color: #8be9fd;
        }

        svg {
            transition: all 0.2s ease-in-out;
            :hover {
                transform: scale(1.5);
            }
        }
    }
`;

export const Credits = styled.div`
    position: absolute;
    right: 5px;
    align-self: flex-end;

    a {
        text-decoration: none;
        color: #8be9fd;
    }
`;

export const Alert = styled(AlertUi)`
    width: 30%;
    position: absolute;
    top: 10px;
    right: 10px;
    a {
        text-decoration: none;
        color: ${() => darken(0.5, '#8be9fd')};
        :hover {
            color: ${() => darken(0.7, '#8be9fd')};
        }
    }
`;
