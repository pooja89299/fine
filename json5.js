const fs=require("fs")
var data=fs.readFileSync("pooja.json","utf8")
var b=JSON.parse(data)
console.log(b)