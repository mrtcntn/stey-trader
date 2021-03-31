import {createContext, useState} from 'react';

export const BuySellContext = createContext({currencies: [
  {label: 'BTC', balance: 0.04651, name: 'Bitcoin', buyFrom: 58096, sellFrom: 57998},
  {label: 'ETH', balance: 2.23, name: 'Ethereum', buyFrom: 1808.97, sellFrom: 1808.01},
  {label: 'XMR', balance: 14.02, name: 'Monero', buyFrom: 261.192, sellFrom: 260.788},
]});

const BuySellProvider = ({children}) => {
  const currencies = [
    {label: 'BTC', balance: 0.04651, name: 'Bitcoin', buyFrom: 58096, sellFrom: 57998, details: 'These are some details about Bitcoin.'},
    {label: 'ETH', balance: 2.23, name: 'Ethereum', buyFrom: 1808.97, sellFrom: 1808.01, details: 'Secondly, some details about Ethereum.'},
    {label: 'XMR', balance: 14.02, name: 'Monero', buyFrom: 261.192, sellFrom: 260.788, details: 'Last but not the least, here are some details about Monero.'},
  ];
  const usdBalance = 4661.07;
  const [trade, setTrade] = useState(true);
  const [currency, setCurrency] = useState(currencies[0]);
  const balance = 9576.88

  return <BuySellContext.Provider 
            value={{trade, setTrade, currency, setCurrency, currencies, balance, usdBalance}}>
    {children}
  </BuySellContext.Provider>
}

export default BuySellProvider;