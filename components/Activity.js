import dayjs from "dayjs";
import customParseFormat from 'dayjs/plugin/customParseFormat';
import useBuySell from "../hooks/useBuySell"
import { numberSeparateComma } from "../utils/formatters";
dayjs.extend(customParseFormat)
const Activity = () => {
  const activities = [
    { id: 'aaa1',
      type: 'buy',
      amount: 1000.81,
      price: 250.41,
      currencyName: 'XMR',
      date: '2021-02-19'
    },
    {
      id: 'aaa2',
      type: 'sell',
      amount: 996.61,
      price: 247.82,
      currencyName: 'XMR',
      date: '2021-02-18'
    },
    {
      id: 'aaa3',
      type: 'buy',
      amount: 0.06,
      price: 42456.81,
      currencyName: 'BTC',
      date: '2021-02-19'
    },
    {
      id: 'aaa4',
      type: 'sell',
      amount: 0.0071,
      price: 44512.78,
      currencyName: 'BTC',
      date: '2021-02-18'
    },
    {
      id: 'aaa5',
      type: 'buy',
      amount: 1.12,
      price: 1384.48,
      currencyName: 'ETH',
      date: '2021-02-19'
    },
    {
      id: 'aaa6',
      type: 'sell',
      amount: 4.66,
      price: 1312.96,
      currencyName: 'ETH',
      date: '2021-02-18'
    },
  ]

  const {currency} = useBuySell();

  return <table className='table-auto w-full flex-col my-2 rounded-md'><tbody>
    {activities.filter(({currencyName}) => currencyName === currency.label).map(({type, amount, price, currencyName, date, id}, k) => 
    
      <tr key={id} className={`border-b ${k % 2 === 0 && 'bg-gray-100'}`}>
      <td><div className='flex flex-col items-center my-2 mx-2 text-sm'>
        <div className='font-thin my-0'>{dayjs(date, "YYYY-MM-DD").format("MMM")}</div>
        <div className='font-bold my-0'>{dayjs(date, "YYYY-MM-DD").date()}</div>
        </div></td>
      <td><p className='text-sm'>{`You ${type === 'sell' ? 'sold' : 'bought'} ${amount} ${currencyName} from ${price} USD.`}</p></td>
      <td className={`py-0 text-right text-gray-800 font-bold ${type === 'sell' ? 'text-blue-900' : 'text-blue-600'}`}>
        <p className='inline'>{`${type === 'sell' ? '+' : '-'}${numberSeparateComma(parseFloat((amount*price).toFixed(2)))} USD`}</p>
        </td>
      <td className={`grow pr-6 text-right text-gray-800 font-bold ${type === 'sell' ? 'text-blue-600' : 'text-blue-900'}`}>
        <p className='inline'>{`${type === 'sell' ? '-' : '+'}${numberSeparateComma(parseFloat((amount).toFixed(2)))} ${currencyName}`}</p></td>
    </tr>)}
      </tbody>
  </table>
}

export default Activity