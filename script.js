google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ["Effort", "Amount given"],
    ["Coffee", 11],
    ["Ibuprohen", 3],
    ["Yeti", 3],
    ["Hate", 4],
    ["Neanderthals", 5],
    ["Trace", 3],
  ]);

  var options = {
    pieHole: 0.4,
    pieSliceTextStyle: {
      color: "black",
    },
    legend: "state",
  };

  var chart = new google.visualization.PieChart(
    document.getElementById("donut_single")
  );
  chart.draw(data, options);
}

// Drop Down Menu 
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
