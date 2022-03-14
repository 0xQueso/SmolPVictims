import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react';
import {Mainnet, DAppProvider, useEtherBalance, useEthers, Config, Arbitrum} from '@usedapp/core'
import { formatEther } from '@ethersproject/units'

const config: Config = {
    readOnlyChainId: Arbitrum.chainId,
    readOnlyUrls: {
        [Arbitrum.chainId]: 'https://arb-mainnet.g.alchemy.com/v2/mVQs17NB0b-jAXq1RXC99MN5U4Ds2bsF',
    },
}

ReactDOM.render(
  <React.StrictMode>
      <ChakraProvider>
          <DAppProvider config={config}>
              <App />
          </DAppProvider>
      </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
