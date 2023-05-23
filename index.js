const {Worker} = require('worker_threads')
const {getData} = require("./src/assets/getData");
const {connectDb} = require("./src/db");

connectDb().then(() => {

    const url = "https://rickandmortyapi.com/api/character"
    console.log('hi')

    const data = []

    const workers = [];
    const numThreads = 4;
    for (let i = 0; i < numThreads; i++) {

        workers.push(new Worker('./src/worker/worker.js', {
            workerData: {
                index: i,
            }
        }));
    }

    getData(url, data).then(() => {

        data.forEach((d, index) => {
            workers[index % numThreads].postMessage({
                portionData: d

            })
        })
    })
    console.log('end script')
})


