import Highcharts from "highcharts/highcharts";
import HighchartsReact from "highcharts-react-official";
import useBuySell from "../hooks/useBuySell";
import dayjs from "dayjs";
import { numberSeparateComma } from "../utils/formatters";
import { useEffect, useRef, useState } from "react";
import priceData from '../lib/dummy.json'


const PriceChart = () => {
  const buttonClasses = 'rounded-lg py-1 hover:bg-gray-400 hover:text-white focus:ring-0 focus:outline-none';
  const activeClasses = 'bg-blue-400 text-white shadow-sm hover:bg-blue-400';
  const {currency, currencies} = useBuySell();
  const [interval, setInterval] = useState('1d');

  const [data, setData] = useState([]);
  const [percentageChange, setPercentageChange] = useState(0);
  const [change, setChange] = useState(0);
  const [last, setLast] = useState(0);
  const [loading, setLoading] = useState(true);

  const getChartData = useRef(null);
  getChartData.current = async () => {
    const response = await (await fetch(`/api/price?currency=${currency.label}&period=${interval}`)).json();
    setData(response.data);
    setChange(response.change);
    setLast(response.data[response.data.length-1][1])
    setPercentageChange(response.percentageChange);
  }

  useEffect(() => {
    getChartData.current();
  },[currency, interval]);

  const direction = (change) => {
    if (change > 0) {
      return 'increase'
    } else if (change < 0) {
      return 'decrease'
    } else {
      return 'same'
    }
  }
  const options = {
    chart: {
      animation: false,
      type: 'area',
      style: {
        fontFamily: 'sans-serif'
      },
      height: 338
    },
    title: {
      text: ''
    },
    legend: {enabled: false},
    yAxis: {title: {enabled: false},
    opposite: true},
    xAxis: {
      type: 'datetime',
  },
    plotOptions: {
      area: {
          marker: {
              radius: 2
          },
          lineWidth: 1,
          states: {
              hover: {
                  lineWidth: 1
              }
          },
          threshold: null
      }
  },
    series: [
      {
        name: currency.label,
        data
      }
    ],
    tooltip: {
      formatter: function () {
        return `<p><b>${currency.label}: $${numberSeparateComma(this.y)}</b></p><br />
        <p>${dayjs(this.x).format('MM-DD-YYYY HH:mm:ss')}</p>`
      }
    },
  };
  return (
    <div className='h-full align-middle'>
      <p>
        <span className='font-bold text-lg mr-2'>${numberSeparateComma(last)}</span>
        <span className={`font-bold text-sm 
        ${direction(change) === 'increase' && 'text-green-600'}
        ${direction(change) === 'decrease' && 'text-red-600'}
        ${direction(change) === 'same' && 'text-gray-600'}
        `}>{percentageChange}% (${numberSeparateComma(parseFloat(change.toFixed(2)))})</span></p>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
      />
      <div className='grid grid-cols-5 text-xs text-gray-600 gap-2 w-4/5 mx-auto'>
        <button className={`${buttonClasses} ${interval === '1d' && activeClasses}`} onClick={() => setInterval('1d')}>1 Day</button>
        <button className={`${buttonClasses} ${interval === '1w' && activeClasses}`} onClick={() => setInterval('1w')}>1 Week</button>
        <button className={`${buttonClasses} ${interval === '1m' && activeClasses}`} onClick={() => setInterval('1m')}>1 Month</button>
        <button className={`${buttonClasses} ${interval === '6m' && activeClasses}`} onClick={() => setInterval('6m')}>6 Months</button>
        <button className={`${buttonClasses} ${interval === '1y' && activeClasses}`} onClick={() => setInterval('1y')}>1 Year</button>
      </div>
    </div>
    
  )
}

export default PriceChart