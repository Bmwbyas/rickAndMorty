console.log('hi')
const url="https://rickandmortyapi.com/api/character"

type Info= {
    count: number
    pages: number
    next: string|null
    prev:  string|null
}

type Character={
    "id": number
    "name": string
    "status": string
    "species": string
    "type": string
    "gender": string
    "origin": {
        "name": string,
        "url": string
    },
    "location": {
        "name": string,
        "url": string
    },
    "image": string,
    "episode": string[]
    "url": string
    "created": string
}

type Data={
    info:Info
    results:Character[]

}
const fetchData=async (url:string)=>{

try {
    const response = await fetch(url );
    const json:Data = await response.json()

    console.log('Успех:', json.results);
    if(json.info.next) await fetchData(json.info.next)

} catch (error) {
    console.error('Ошибка:', error);
}
}
fetchData(url)
