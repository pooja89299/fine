const fs=require("fs")
fs.writeFileSync("read.txt","my name is pooja Rani ")

// fs.appendFileSync("read.txt","Navgurukul caumps:")

// fs.renameSync("read.txt","pooja.txt")

const buf_data=fs.readFileSync("read.txt");
console.log(buf_data);