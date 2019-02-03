Highcharts.chart('graf2', {

    title: {
        text: 'Jak se měnila účast ve volbách do Evropského parlamentu v letech 1979 až 2014'
    },
    subtitle: {
        text: 'Kliknutím na jejich název v legendě můžete do srovnání přidat (či odebrat) další země'
    },
    yAxis: {
        title: {
            text: 'volební účast'
        }
    },
    xAxis: {
        tickPositioner: function() {
            return [1979,1984,1989,1994,1999,2004,2009,2014]
        },
        title: {
            text: "Tečkovaná čára značí země, kde je účast ve volbách povinná. Také v Itálii platila volební povinnost v letech 1979 až 1989." 
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        y: 30
    },
    credits: {
        text: 'Zdroj dat: Evropský parlament',
        href: 'http://www.europarl.europa.eu/RegData/etudes/BRIE/2018/614733/EPRS_BRI(2018)614733_EN.pdf'
    },
    tooltip: {
        split: true,
        valueSuffix: ' %'
    },
    plotOptions: {
        line: {
            visible: false
        },
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 1979,
            pointInterval: 5,
            connectNulls: true
        }
    },

    series: [{
        name: 'Belgie',
        data: [91.4,92.1,90.7,90.7,91,90.8,90.4,89.6],
        visible: true,
        dashStyle: "ShortDot"
    }, {
        name: 'Lucembursko',
        data: [88.9,88.8,87.4,88.5,87.3,91.3,90.8,85.5],
        dashStyle: "ShortDot"
    }, {
        name: 'Malta',
        data: [null,null,null,null,null,82.4,78.8,74.8]
    }, {
        name: 'Řecko',
        data: [null,77.2,79.9,73.2,71.5,63.2,52.6,60],
        dashStyle: "ShortDot"
    }, {
        name: 'Itálie',
        data: [84.9,83.4,81,73.6,69.8,71.7,65.4,57.2]
    }, {
        name: 'Dánsko',
        data: [47.8,52.4,46.2,52.9,50.4,47.9,59.5,56.3]
    }, {
        name: 'Irsko',
        data: [63.6,47.6,68.3,44,50.2,58.6,57.6,52.4]
    }, {
        name: 'Švédsko',
        data: [null,null,null,null,38.8,37.9,45.5,51.1]
    }, {
        name: 'Německo',
        data: [65.7,56.8,62.3,60,45.2,43,43.3,48.1]
    }, {
        name: 'Litva',
        data: [null,null,null,null,null,48.4,21,47.4]
    }, {
        name: 'Rakousko',
        data: [null,null,null,null,49,42.4,46,45.4]
    }, {
        name: 'Kypr',
        data: [null,null,null,null,null,72.5,59.4,44],
        dashStyle: "ShortDot"
    }, {
        name: 'Španělsko',
        data: [null,null,54.6,59.1,63,45.1,44.9,43.8]
    }, {
        name: 'Evropská unie',
        data: [61.8,59,58.3,56.7,49.5,45.6,43,42.6],
        visible: true,
        color: "#003399",
        index: 0,
        lineWidth: 3
    }, {
        name: 'Francie',
        data: [60.7,56.7,48.7,52.8,46.8,42.8,40.6,42.4]
    }, {
        name: 'Finsko',
        data: [null,null,null,null,30.1,39.4,40.5,41]
    }, {
        name: 'Nizozemsko',
        data: [58.1,50.6,47.2,35.7,30,39.3,36.8,37.3]
    }, {
        name: 'Estonsko',
        data: [null,null,null,null,null,26.8,43.9,36.5]
    }, {
        name: 'Bulharsko',
        data: [null,null,null,null,null,null,38.9,36.1]
    }, {
        name: 'Británie',
        data: [32.3,32.6,36.2,36.4,24,39.2,34.5,35.4]
    }, {
        name: 'Portugalsko',
        data: [null,null,51.2,35.5,39.9,38.6,36.8,33.7]
    }, {
        name: 'Rumunsko',
        data: [null,null,null,null,null,null,27.7,32.4]
    }, {
        name: 'Lotyšsko',
        data: [null,null,null,null,null,41.3,53.7,30.2]
    }, {
        name: 'Maďarsko',
        data: [null,null,null,null,null,38.5,36.3,29]
    }, {
        name: 'Chorvatsko',
        data: [null,null,null,null,null,null,null,25.2]
    }, {
        name: 'Slovinsko',
        data: [null,null,null,null,null,28.4,28.3,24.5]
    }, {
        name: 'Polsko',
        data: [null,null,null,null,null,20.9,24.5,23.8]
    }, {
        name: 'Česká republika',
        data: [null,null,null,null,null,28.3,28.2,18.2],
        visible: true,
        color: "#d52834",
        index: 0.5
    }, {
        name: 'Slovensko',
        data: [null,null,null,null,null,17,19.6,13],
        visible: true,
        index: 0.5
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom',
                    y: 0
                },
                xAxis: {
                    title: null
                },
                credits: {
                    enabled: false
                }
            }
        }, {
            condition: {
                maxWidth: 800
            },
            chartOptions: {
                legend: {
                    y: 60
                }
            }
        }]
    }

});
