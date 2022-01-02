var sortedPolulation = cityGrowths.sort((x,y)=> x.population - y.population).reverse();
console.log(sortedPolulation);
var topSevenCitys = sortedPolulation.slice(0, 7);
console.log(topSevenCitys);
var topSevenCityNames = topSevenCitys.map(sevenCity => sevenCity.City);
console.log(topSevenCityNames);
var topSevenCityPopulation = topSevenCitys.map(sevenPop=> parseInt(sevenPop.population));
console.log(topSevenCityPopulation);
var trace1 = {
  x: topSevenCityNames,
  y: topSevenCityPopulation,
  type: "bar"
};
var data1 = [trace1];
var layout1 = {
  title: "Most Populated Cities",
  xaxis: {title: "City" },
  yaxis: {title: "Population, 2016-2017"}
};
Plotly.newPlot("bar-plot1", data1, layout1);