import Highcharts from "highcharts/highcharts";
import HighchartsReact from "highcharts-react-official";

const FundsChart = () => {
  const prices = {
    BTC: 58096,
    ETH: 1808.97,
    XMR: 261.192,
    USD: 1
  }
  const funds = {
    BTC: 0.04651,
    ETH: 2.23,
    XMR: 14.02,
    USD: 850
  }

  const totalFunds = Object.keys(prices).map((p, k) => prices[p]*funds[Object.keys(funds)[k]]).reduce((a, b) => a + b, 0)

  const options = {
    chart: {
        type: 'pie',
        style: {
          fontFamily: 'sans-serif'
        },
        height: 391
    },
    title: {text: null},
    tooltip: {
        pointFormat: '<p>{data.name} <b>{point.percentage:.1f}%</b><br />${point.y:.2f}</p>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {

          depth: 35,
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
        }
    },
    series: [{
        name: 'Funds',
        colorByPoint: true,
        data: [{
            name: 'Bitcoin (BTC)',
            y: funds.BTC * prices.BTC,
            x: prices.BTC,
        },{
          name: 'Ehtereum (ETH)',
          y: funds.ETH * prices.ETH,
          x: prices.ETH
      },{
        name: 'Monero (XMR)',
        y: funds.XMR * prices.XMR,
        x: prices.XMR
    },{
      name: 'US Dollars (USD)',
      y: funds.USD * prices.USD,
      x: prices.USD
    }]}]
};
  return (
    <div className='h-full align-middle'>
      <h2 className='text-center mt-4'>{`Total Funds: $${totalFunds.toFixed(2)}`}</h2>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
      />
      <table className='w-full mt-4'>
        <thead>
          <tr className=''>
            <td className='p-2'>Fund</td>
            <td>Amount</td>
            <td className='text-right p-2'>Estimated Value</td>
          </tr>
        </thead>
        <tbody>
          {Object.keys(funds).map((f, k) => <tr className='border-t hover:bg-gray-100'>
            <td className='font-thin p-2'>{f.toString()}</td>
            <td className='font-thin'>{funds[f]}</td>
            <td className='font-thin text-right p-2'>${(funds[f] * prices[Object.keys(prices)[k]]).toFixed(2)}</td>
          </tr>)}
        </tbody>
      </table>
    </div>
    
  )
}

export default FundsChart