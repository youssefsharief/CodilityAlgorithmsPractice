const https = require("https");
const EventEmitter = require('events');
const ee = new EventEmitter();

function getMovieTitles(substr) {
    fetch(substr, 1)
    let titles = []
    ee.on('received', (x) => titles = titles.concat(x))
    ee.on('done', () => console.log('done'))
    
}


function fetch(str, page) {
    const url = `https://jsonmock.hackerrank.com/api/movies/search/?Title=${substr}&page=${page}`;
    https.get(url, res => {
        res.setEncoding("utf8");
        let body = "";
        res.on("data", data => body += data);
        res.on("end", () => {
            body = JSON.parse(body)
            if (body.total_pages > body.page) {
                return fetch(str, parseInt(body.page) + 1)
            } else {
                ee.emit('done', titles)
            }
        });
    });
}



let y = getMovieTitles('Spiderman')
console.log(y)
