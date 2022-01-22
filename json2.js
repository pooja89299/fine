
const fs=require("fs")
fs.writeFileSync("read.txt","my name is pooja rani")
const buf_data=fs.readFileSync("read.txt")
console.log(buf_data)

fs.appendFileSync("read.txt","Navgurukul in clss")

fs.renameSync("read.txt","pooja.txt")
