// when we do fetch we create http request (by default it is GET request)
//there are some types of http requests: GET, POST, PUT, DELETE (CRUD)
//GET request is used to retrieve data from server
//HTTP request consists of three parts: request line, request headers, request body (optional)
//Request headers is a set of key-value pairs that are sent to the server
//Request line consists of three parts: method, url, version
//Request body is the data that is sent to the server
//GET and DELETE requests do not have request body
//PUT and POST requests have request body
const getPosts = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        const json = await response.json()
        console.log(json.slice(0, 10))
    } catch (error) {
        console.log(error)
    }
}

const syncFunction = () => {
    //1 
    const bob = {name: "Bob", age: 30}
    //2
    console.log(bob)
    //3
    console.log("Hello")
}