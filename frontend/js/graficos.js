const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
];

const data = {
    labels: labels,
    datasets: [{
        label: 'Tempestade solar',
        backgroundColor: 'rgb(0, 88, 255)',
        borderColor: 'rgb(0, 88, 255)',
        data: [0, 10, 5, 2, 20, 30, 45],
    }]
};

const config = {
    type: 'line',
    data: data,
    options: {
        font: {
            size: 14
        },
        animations: {
            tension: {
                duration: 5000,
                easing: 'easeInOutBounce',
                from: 1,
                to: 0,
                loop: true
            }

        }
    }
};

const data2 = {
    labels: labels,
    datasets: [{
        label: 'Chances de ocorrer por mes',
        data: [85, 39, 40, 31, 26, 65, 20],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
        ],
        borderWidth: 1
    }]
};

const config2 = {
    type: 'bar',
    data: data2,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    },
};


const data3 = {
    labels: [
        'Certeza',
        'Errado',
    ],
    datasets: [{
        label: 'My First Dataset',
        data: [80, 20],
        backgroundColor: [
            'rgb(0, 247, 130)',
            'rgb(237, 63, 55)',
        ],
        hoverOffset: 4
    }]
};

const config3 = {
    type: 'doughnut',
    data: data3,
};


const myChart = new Chart(document.getElementById('myChart'), config);
const myChart2 = new Chart(document.getElementById('myChart2'), config2)
const myChart3 = new Chart(document.getElementById('myChart3'), config3)