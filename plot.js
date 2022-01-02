//console.log(cityGrowths);
var sortedCities = cityGrowths.sort((a,b)=> a.Increase_from_2016 - b.Increase_from_2016).reverse();
//console.log(sortedCities);
var topFiveCity = sortedCities.slice(0,5);
//console.log(topFiveCity);
var topFiveCityNames = topFiveCity.map(city => city.City);
//console.log(topFiveCityNames);
var topFiveCityGrowths = topFiveCity.map(citygrowth => parseInt(citygrowth.Increase_from_2016));
//console.log(topFiveCityGrowths);
var trace = {
  x: topFiveCityNames,
  y: topFiveCityGrowths,
  type: "bar"
};
var data = [trace];
var layout = {
  title: "Most Rapidly Growing Cities",
  xaxis: {title: "City" },
  yaxis: {title: "Population Growth, 2016-2017"}
};
Plotly.newPlot("bar-plot", data, layout);


