import React from 'react';
import GlobalStyle from './styles/global';
import Landing from './Landing';

const App: React.FC = () => {
    return (
        <>
            <Landing />
            <GlobalStyle />
        </>
    );
};

export default App;
