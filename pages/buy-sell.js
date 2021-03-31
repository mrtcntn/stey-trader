import Head from 'next/head'
import BuySellForm from '../components/BuySellForm';
import PriceChart from '../components/PriceChart';
import Header from '../components/Header';
import BuySellProvider from '../providers/BuySellProvider';
import { useRef } from 'react';
import Activity from '../components/Activity';

export default function Home() {
  const buySellRef = useRef(null);
  return (
    <div className='w-full flex flex-col h-screen'>
      <Head>
        <title>Buy - Sell | Stey</title>
        <link rel="icon" href="/favicon.ico" /> 
      </Head>
      <Header />
      <BuySellProvider>
        <div className='bg-blue-50 flex-grow p-4'>
          <div className='grid mx-auto sm:grid-cols-1 md:grid-cols-3 gap-2 container xl:max-w-6xl' ref={buySellRef}>
              <BuySellForm />
              <div className='shadow-sm border border-gray-150 bg-white rounded-lg p-4 sm:col-span-1 md:col-span-2'>
                <PriceChart />
              </div>
              <div className='shadow-sm border border-gray-150 bg-white rounded-lg p-4 sm:col-span-1 md:col-span-3'>Trading Activities
              <Activity /></div>
            
            </div>
        </div>
      </BuySellProvider>
    </div>
  )
}