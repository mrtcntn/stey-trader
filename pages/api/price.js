import priceData from '../../lib/dummy.json'

export default (req, res) => {
  const {currency, period} = req.query;
  const data = priceData[currency][period];
  const lastDay = priceData[currency]['1d'];
  const lastDayFirst = lastDay[0][1];
  const lastDayLast = lastDay[lastDay.length -1][1];
  const change = (lastDayLast-lastDayFirst);
  const percentageChange = (change/lastDayFirst*100).toFixed(2);
  res.status(200).json({data, change, percentageChange});
}
