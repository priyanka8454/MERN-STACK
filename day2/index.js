let http= require("http")

let server = http.createServer((req, res) => {
    res.end("welcome to mern stack")
});
server.listen("3000") //http://localhost:3000
// console.log("server is running on port 3000")