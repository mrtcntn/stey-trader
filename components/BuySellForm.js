import { useEffect, useState } from "react";
import useBuySell from "../hooks/useBuySell";
import { numberSeparateComma } from "../utils/formatters";
import Dropdown from "./Dropdown";

const BuySellForm = () => {
  const {trade, setTrade, currencies, currency, setCurrency, usdBalance} = useBuySell();

  const [amount, setAmount] = useState('0');
  const [price, setPrice] = useState(null);

  useEffect(() => {
    setPrice(trade ? currency.buyFrom : currency.sellFrom);
    setAmount('0');
  }, [trade, currency])

  const handleCurrencyChange = (e, v) => {
    setCurrency(v)
  }

  const handleChangeAmountBuy = (v) => {
    console.log(v);
    if (v.length < 9) {
      setAmount(/^\d+$/.test(v) ? (amount === '0' ? v.replace('0', '') : v) : amount)
    }
    if (v === '')
    setAmount('0')
    
  }

  const handleChangeAmountSell = (v) => {
    if (v.length < 9) {
      setAmount(/^(?:\d+(?:\.\d*)?|\.\d+)(?:,(?:\d+(?:\.\d*)?|\.\d+))*$/.test(v) ? ((amount === '0' && v[v.length-1] !== '.') ? v.replace('0', '') : v) : amount)
    }

    if (v === '')
      setAmount('0')
  }

  const valueRenderer = (v) => {
    return <div className='flex flex-row justify-between'>
      <p className='text-left'>{v.label}</p>
      <p className='text-right'>{v.balance}</p>
    </div>
  }

  return (<div className='shadow-sm border border-gray-150 bg-white rounded-lg p-3'>
            <div className='m-1 flex flex-row justify-between'>
              <Dropdown valueRenderer={valueRenderer} onChange={handleCurrencyChange} className='w-full' value={currency} options={currencies} />
            </div>
            <div className='m-1 grid grid-cols-2 gap-2'>
              <button className={`my-2 p-2 bg-gray-100 rounded-md transition-all focus:outline-none focus:ring hover:bg-gray-200 focus:ring-green-200 shadow-sm ${trade && 'bg-green-600 text-blue-50 shadow-md hover:bg-green-700'}`}
                onClick={() => setTrade(true)}
              >Buy</button>
              <button className={`my-2 p-2 bg-gray-100 rounded-md transition-all focus:outline-none focus:ring hover:bg-gray-200 focus:ring-red-200 ${!trade && 'bg-red-600 text-blue-50 shadow-md hover:bg-red-700'}`}
                onClick={() => setTrade(false)}
              >Sell</button>
            </div>
            <div className='grid grid-cols-2 gap-x-1 m-1 gap-y-2 mt-2 mb-4'>
              <div><p className='text-center text-sm text-gray-600'>{trade ? 'USD Balance' : `${currency.label} Balance`}</p></div>
              <div><p className='text-center text-sm text-gray-600'>Price</p></div>
              <div><p className='text-center text-lg font-bold'>{trade ? `$${usdBalance}` : currency.balance}</p></div>
              <div><p className='text-center text-lg font-bold'>${trade ? `${currency.buyFrom}` : currency.sellFrom}</p></div>
            </div>
            <div className='m-1 items-center flex flex-col'>
              <p className='text-sm'>Amount</p>
              <input type='text' value={numberSeparateComma(amount)}
                onChange={e => {
                if(trade) handleChangeAmountBuy(e.target.value.replaceAll(',','')); 
                  else handleChangeAmountSell(e.target.value.replaceAll(',',''))}
              }
              className='w-full text-6xl border-none text-center focus:outline-none focus:ring-0 overflow-hidden whitespace-nowrap'>
              </input>
              <p className='text-sm'>{trade ? 'USD' : currency.label}</p>
            </div>
            <div className='m-1'>
            <button className={`font-bold my-2 p-2 w-full bg-gray-100 rounded-md transition-all focus:outline-none focus:ring ${!trade ? 'bg-red-600 text-blue-50 shadow-md focus:ring-red-200 hover:bg-red-700' : 'bg-green-600 text-blue-50 shadow-md focus:ring-green-200 hover:bg-green-700'}`}
              >{`${!trade ? 'Sell' : 'Buy'} ${currency.name}`}</button>
              </div>
            </div>)
}

export default BuySellForm;