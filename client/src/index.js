import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router} from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import App from './App';
import theme from './theme'
import ContextProvider from './context/Context'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>

    <ContextProvider value={false}>

      <ChakraProvider theme={theme}>

        <React.StrictMode>

          <App />
          
        </React.StrictMode>

      </ChakraProvider>

    </ContextProvider>

  </Router>
);

