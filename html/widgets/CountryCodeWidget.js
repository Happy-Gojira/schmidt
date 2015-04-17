var countryCodes = [];
console.log(countryCodes);
(function ($) 
{
var countryCodes = [];
AjaxSolr.CountryCodeWidget = AjaxSolr.AbstractFacetWidget.extend(
{
  afterRequest: function () 
  {
  

    var maxCount = 0;
    
    for (var facet in this.manager.response.facet_counts.facet_fields[this.field]) 
    {
      var count = parseInt(this.manager.response.facet_counts.facet_fields[this.field][facet]);
      if (count > maxCount) 
      {
        maxCount = count;
      }
      countryCodes.push([facet, count ]);
      console.log(countryCodes);
      
      
    }
     map();

    
  }
});
  
function map(){
console.log(countryCodes.length);


var data2 =[['City', 'Drawings']];
        

var newarray = data2.concat(countryCodes);
console.log(newarray);
for(i=0; i <newarray.length; i++){
  console.log(newarray[i]);
}

        

    
    google.setOnLoadCallback(drawMarkersMap);

      function drawMarkersMap() 
      {
        var data = google.visualization.arrayToDataTable(newarray);

      var options = {
        region: 'US',
        displayMode: 'markers',
        resolution: 'metros',
        colorAxis: {colors: ['green', 'blue']}
      };

      var chart = new google.visualization.GeoChart(document.getElementById('countries'));
      chart.draw(data, options);
    };
}
google.load('visualization', '1', {'packages': ['geochart']});
})(jQuery);
