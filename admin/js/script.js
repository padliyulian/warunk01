if (document.querySelector("#about")) {
  CKEDITOR.replace("about");
}

document.querySelector(".wj-bar-icon").addEventListener("click", function(e) {
  e.preventDefault();
  document.querySelector(".wj-content").classList.toggle("wj-toggle");
  document.querySelector(".wj-sidebar").classList.toggle("wj-toggle");
});

var topBrowser = document.getElementById("top-browser").getContext("2d");

var chartBrowser = new Chart(topBrowser, {
  type: "bar",
  data: {
    labels: ["Firefox", "Chrome", "Safari", "IE", "Other"],
    datasets: [
      {
        label: "On %",
        data: [41, 30, 5, 6, 18],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)"
        ],
        borderColor: [
          "rgba(255,99,132,1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)"
        ],
        borderWidth: 1
      }
    ]
  },
  options: {
    legend: {
      display: false
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  }
});

var trafic = document.getElementById("top-trafic").getContext("2d");

var chartTrafic = new Chart(trafic, {
  type: "line",

  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Trafic",
        backgroundColor: "rgba(0,0,0,0.2)",
        borderColor: "green",
        data: [101347, 189216, 459524, 207616, 229071, 309001, 450862]
      }
    ]
  },

  options: {
    legend: {
      display: false,
      labels: {
        fontColor: "salmon"
      }
    },
    title: {
      display: false,
      text: "In 2019"
    }
  }
});

var topDevice = document.getElementById("top-device").getContext("2d");

var chartDevice = new Chart(topDevice, {
  type: "pie",

  data: {
    labels: [
      "Android",
      "iOS",
      "WinPhone",
      "Windows",
      "Linux",
      "MacOS",
      "Other"
    ],
    datasets: [
      {
        label: "Top Device",
        backgroundColor: [
          "green",
          "orange",
          "yellow",
          "red",
          "blue",
          "purple",
          "pink"
        ],
        borderColor: "white",
        data: [10, 10, 10, 20, 20, 20, 10]
      }
    ]
  },

  options: {
    legend: {
      display: true,
      position: "right",
      labels: {
        fontColor: "black"
      }
    },
    title: {
      display: false,
      text: "In 2019"
    }
  }
});
