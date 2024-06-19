const { readFileSync, writeFileSync } = require("fs")

// const first = readFileSync("read.txt")
// console.log(first.toString())

writeFileSync("write.txt","this content should be written in the second file",{flag:'a'})