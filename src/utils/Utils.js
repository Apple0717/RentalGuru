const Utils = {
    // A method to generate an array of random numbers
    numbers: function ({ count, min, max }) {
        const generatedNumbers = [];
        for (let i = 0; i < count; i++) {
            generatedNumbers.push(this.rand(min, max));
        }
        return generatedNumbers;
    },

    // A method to generate a random number between min and max
    rand: function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    // Predefined colors for the chart
    CHART_COLORS: {
        red: 'rgba(255, 99, 132, 0.5)',
        orange: 'rgba(255, 159, 64, 0.5)',
        yellow: 'rgba(255, 205, 86, 0.5)',
        green: 'rgba(75, 192, 192, 0.5)',
        blue: 'rgba(54, 162, 235, 0.5)',
        purple: 'rgba(153, 102, 255, 0.5)',
        grey: 'rgba(201, 203, 207, 0.5)',
    }
};

export default Utils;