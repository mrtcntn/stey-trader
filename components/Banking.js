import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat)

const BankingActivities = () => {
  const activities = [
    {type: 'Deposit', peer: 'QNB Finansbank A.Ş.', amount: 15000, date: '2021-01-22'},
    {type: 'Withdrawal', peer: 'Garanti BBVA A.Ş.', amount: 10000, date: '2021-01-21'},
    {type: 'Deposit', peer: 'QNB Finansbank A.Ş.', amount: 5000, date: '2021-01-20'},
    {type: 'Withdrawal', peer: 'Garanti BBVA A.Ş.', amount: 7000, date: '2021-01-19'},
    {type: 'Deposit', peer: 'QNB Finansbank A.Ş.', amount: 9900, date: '2021-01-18'},
    {type: 'Withdrawal', peer: 'Garanti BBVA A.Ş.', amount: 26500, date: '2021-01-17'},
    {type: 'Deposit', peer: 'QNB Finansbank A.Ş.', amount: 4800, date: '2021-01-16'},
    {type: 'Withdrawal', peer: 'Garanti BBVA A.Ş.', amount: 3800, date: '2021-01-15'},
    {type: 'Deposit', peer: 'QNB Finansbank A.Ş.', amount: 4800, date: '2021-01-14'},
    {type: 'Withdrawal', peer: 'Garanti BBVA A.Ş.', amount: 3800, date: '2021-01-13'},
    {type: 'Deposit', peer: 'QNB Finansbank A.Ş.', amount: 4800, date: '2021-01-12'},
    {type: 'Withdrawal', peer: 'Garanti BBVA A.Ş.', amount: 3800, date: '2021-01-11'},
    {type: 'Deposit', peer: 'QNB Finansbank A.Ş.', amount: 4800, date: '2021-01-10'},
    {type: 'Withdrawal', peer: 'Garanti BBVA A.Ş.', amount: 3800, date: '2021-01-19'},
  ]

  return (
    <div className='w-full mt-4 border rounded-md grid grid-cols-4 overflow-y-auto max-h-96'>
      <div className='text-sm font-bold px-4 py-2'>Date</div>
      <div className='text-sm font-bold px-4 py-2'>Type</div>
      <div className='text-sm font-bold px-4 py-2'>Peer</div>
      <div className='text-sm font-bold px-4 py-2 text-right'>Amount</div>
    {activities.map((row, k) => <BankingActivityRow {...row} className={`${k !== activities.length - 1 && 'border-b'} ${k === 0 && 'border-t'}`} />)}
  </div>
  )
}

const BankingActivityRow = ({ type, peer, amount, date, className }) => {
  return <div className={`col-span-4 grid grid-cols-4 ${className} hover:bg-gray-100`}>
    
    <div className='font-thin text-sm text-left px-4 py-2'><span>{date}</span></div>
    <div className='font-thin text-sm text-left px-4 py-2'><span>{type}</span></div>
    <div className='font-thin text-sm text-right px-4 py-2 whitespace-nowrap'><span>{peer}</span></div>
    <div className='font-thin text-sm text-right px-4 py-2'><span className={`font-bold ${type === 'Deposit' ? 'text-blue-400' : 'text-blue-700'}`}>${amount}</span></div>
  </div>
}

export default BankingActivities