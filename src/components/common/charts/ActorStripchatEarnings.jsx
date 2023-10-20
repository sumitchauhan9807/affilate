import Chart from 'react-apexcharts'

function ActorStripchatEarnings({earnings,type="area"}) {
  let datesArray = earnings.map(e => formatDate(e.startDate))
  let earningsArray = earnings.map(e => parseFloat(e.totalEarnings))

  let options = {
    options: {
      chart: {
        id: 'actor-earnings'
      },
      xaxis: {
        categories: datesArray
      }
    },
    series: [{
      name: 'Earnings',
      data: earningsArray
    }]
  }
   return <Chart options={options.options} series={options.series} type={type} width={1200} height={520} />

}
function formatDate(date) {
  var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

  if (month.length < 2) 
      month = '0' + month;
  if (day.length < 2) 
      day = '0' + day;

  return [year, month, day].join('-');
}
export default ActorStripchatEarnings