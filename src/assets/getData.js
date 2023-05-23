const getData=async (url,data)=>{
    try {

        const response = await fetch(url );
        const json = await response.json()
        if(json.info.next) await getData(json.info.next,data)
        data.push(json.results)

    } catch (error) {
        console.error('Ошибка:', error);
    }
}
module.exports = {getData}
