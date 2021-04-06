const express = require('express');
const cors = require('cors');
const fs = require('fs');


const app = express();
const port = 3001;

app.use(cors());





app.get('/us-states/visitors/:visitorsCount', (req, res) => {
    let stateData = JSON.parse(fs.readFileSync('stateData.json'));
    let filteredStates = [];
    //console.log(typeof req.params.visitorsCount);
    if(req.params.visitorsCount === '250') {
        filteredStates = stateData.filter((x) => x.visits >= 0 &&  x.visits <= 250);
    } else if(req.params.visitorsCount === '500') {
        filteredStates = stateData.filter((x) => x.visits > 250 &&  x.visits <= 500);
    } else if(req.params.visitorsCount === '1000') {
        filteredStates = stateData.filter((x) => x.visits > 500 &&  x.visits <= 1000);
    } else if (req.params.visitorsCount === '1001') {
        filteredStates = stateData.filter((x) => x.visits > 1000 );

    }
    //console.log(filteredStates);
    res.json(filteredStates);
});


app.listen(port, () => console.log(`US States APP listening on port ${port}!`))