const fs=require("fs")
const buf_data=fs.readFileSync("pooja.txt");
const Parse = JSON.parse(buf_data)
// org_data=buf_data.toString();
console.log(Parse)
// console.log(buf_data);


// fs.renameSync("read.txt","read.txt")