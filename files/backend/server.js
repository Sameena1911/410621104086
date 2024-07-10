const express = require('express');
const app = express();
const port = 5000;

function getNumbers(numberType) {
    switch (numberType) {
        case 'p':
            return [2, 3, 5, 7, 11];
        case 'f':
            return [0, 1, 1, 2, 3, 5, 8];
        case 'e':
            return [2, 4, 6, 8, 10];
        case 'r':
            return [3, 14, 15, 92, 65];
        default:
            return [];
    }
}

app.get('/numbers/:numberType', (req, res) => {
    const numberType = req.params.numberType;
    const numbers = getNumbers(numberType);
    const response = {
        windowPrevState: [],
        windowCurrState: numbers.slice(0, 3),
        numbers: numbers,
        avg: numbers.length ? numbers.reduce((a, b) => a + b, 0) / numbers.length : 0,
    };
    res.json(response);
});

app.listen(port, () => {
    console.log('Server running at http://localhost:${port}');
});