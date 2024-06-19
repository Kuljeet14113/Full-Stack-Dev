const fs=require('fs');

let a =10
let b =20
fs.writeFile('file1.txt',"this is data",
    ()=>{
        console.log("written to the file")
    }
)
console.log(a+b);
console.log("finish reading file");