require('dotenv').config();
const http = require('http');
const port = process.env.PORT || 3000;
const server=http.createServer((req,res)=>{
    console.log(req.url)
if (req.url=='/')
    {
        res.end('<h1>This is the HP PARAM SOLUTION<h1> <i> Welcome to the developer world!</i>');
    }
else if(req.url=='/home'){
    // res.setHeader('Content-type', 'text/html')
    res.end('<h1>This is HP PARAM SOLUTION<h1> <i> HOME PAGE</i>');
    res.statusCode = 200;


}
else if(req.url=='/info'){
    
    res.end('<h1>This is HP PARAM SOLUTION<h1> <i> INFORMATION PAGE</i>');
    res.statusCode = 200;


}
})

server.listen(port,()=>{
    console.log(`Server is listening on port ${port}`);

});