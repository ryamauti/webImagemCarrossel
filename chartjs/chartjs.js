Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = 'rgb(255, 255, 255)';
var range_horas = ['-01h', '-02h', '-03h', '-04h', '-05h', '-06h', '-07h', '-08h', '-09h', '-10h',
			  	   '-11h', '-12h', '-13h', '-14h', '-15h', '-16h', '-17h', '-18h', '-19h', '-20h',
			  	   '-21h', '-22h', '-23h', '-24h'];
var chartData = {
	labels: range_horas,
	datasets: [{
		type: 'line',
		label: 'SS Hoje',
		backgroundColor: 'rgb(153, 102, 255)',
		borderColor: 'rgb(153, 102, 255)',
		borderWidth: 5,	
		data: ssHoje,
		fill: false,
		yAxisID: 'y-axis-s',
	}, {
		type: 'line',
		label: 'SS Historico',
		backgroundColor: 'rgb(197, 153, 255)',
		borderColor: 'rgb(197, 153, 255)',
		borderDash: [5, 5],
		borderWidth: 5,	
		data: ssHist,
		fill: false,
		yAxisID: 'y-axis-s',
	}, {
		type: 'bar',
		label: 'QQ Hoje',
		backgroundColor: 'rgb(255, 159, 64)',
		data: qqHoje,				
		borderColor: 'rgb(255, 159, 64)',
		borderWidth: 3,					
		yAxisID: 'y-axis-q',
	}, {
		type: 'bar',
		label: 'QQ Hist',
		backgroundColor: 'rgb(0, 0, 0)',
		fill: false,
		data: qqHist,				
		borderColor: 'rgb(255, 159, 64)',
		borderWidth: 3,					
		yAxisID: 'y-axis-q',
	}]
};
var config = {
	type: 'bar',
	data: chartData,
	options: {
		responsive: true,
		title: {
			display: true,
			text: TITULO,
			fontSize: 30,
			fontColor: tituloCor,
		},
		tooltips: {
			mode: 'index',
			intersect: false,
		},
		hover: {
			mode: 'nearest',
			intersect: true
		},
		scales: {
			xAxes: [{
				display: true,
				scaleLabel: {
					display: true,							
				}
			}],
			yAxes: [{
					id: 'y-axis-q',
					type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
					display: true,
					position: 'left',
					ticks: {							
						beginAtZero: true,
					},
				}, {
					id: 'y-axis-s',
					type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
					display: true,
					position: 'right',							
					ticks: {							
						beginAtZero: true,
					},

					// grid line settings
					gridLines: {
						drawOnChartArea: false, // only want the grid lines for one axis to show up
					},
				}],
		}
	}
};

window.onload = function() {
	var ctx = document.getElementById('canvas').getContext('2d');			
	window.myLine = new Chart(ctx, config);

};