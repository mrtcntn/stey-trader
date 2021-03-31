import Head from 'next/head'
import Header from '../components/Header';
import { useRef } from 'react';
import FundsChart from '../components/FundsChart';
import BankingActivities from '../components/Banking';

export default function Account() {
  const buySellRef = useRef(null);
  return (
    <div className='w-full flex flex-col h-screen'>
      <Head>
        <title>Account | Stey</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className='bg-blue-50 flex-grow p-4'>
        <div className='grid mx-auto grid-cols-1 gap-2 container xl:max-w-6xl' ref={buySellRef}>
          <div className='shadow-sm border border-gray-150 bg-white rounded-lg'>
            <h1 className='text-center text-xl py-4 border-b'>Account</h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-1'>
              <div className='border m-2 rounded-md p-4'>
                <h2 className=' border-b pb-2'>Personal Information</h2>
                <InfoTable />
                <h2 className='border-b pb-2 pt-4'>Banking Activities</h2>
                <BankingActivities />
              </div>
              <div className='border m-2 rounded-md p-4'>
                <h2 className='border-b pb-2'>Funds</h2>
                <FundsChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const InfoTable = () => {
  const infos = [
    { name: 'Name', value: 'Mert' },
    { name: 'Lastname', value: 'Canatan' },
    { name: 'E-mail address', value: 'mert.cntn@gmail.com' },
    { name: 'Phone Number', value: '5346502207' },
    { name: 'Status', value: 'All wallets active' },
  ]
  return (<div className='w-full mt-4 border rounded-md'>
    {infos.map((row, k) => <InfoRow {...row} className={`${k !== infos.length - 1 && 'border-b'}`} />)}
  </div>)
}

const InfoRow = ({ name, value, className }) => {
  return <div className={`grid grid-cols-2 ${className}`}>
    <div className='text-sm font-bold px-4 py-2'><span>{name}</span></div>
    <div className='font-thin text-sm text-right px-4 py-2'><span>{value}</span></div>
  </div>
}
