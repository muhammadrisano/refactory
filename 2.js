const axios = require('axios')


const getdata1 = async () => {
    await axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((res) => {
            console.log(res)
            return res
        })
}
const getdata2 = async () => {
    await axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
            console.log(res)
            return res
        })

}

setTimeout(() => {
    let container1 = getdata1()
    let container2 = getdata2()
    let containerData = []
    container1.map((item) => {
        data = item
        let user = container2.find((item2) => {
            return item.id = item2.id
        })
        data.user = user
        containerData.push(data)
    })
    console.containerData
}, 8000)



