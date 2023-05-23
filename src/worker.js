const {parentPort, workerData} = require('worker_threads');
const {pool} = require("./db");

const {index} = workerData;
parentPort.on('message', ({portionData}) => {
    if (!portionData) {
        return;
    }
    console.log(index)
    for (let charter of portionData){
        pool.query(`INSERT INTO askerkoalexandr(name,data) values($1, $2) RETURNING *`, [charter.name,charter])
    }

    // console.log(index+'   Data:'+portionData[0])
});

