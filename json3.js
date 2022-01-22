
var obj={"p":1,"o":2,"o":3,"j":4,"a":5}
var fs=require("fs")
var jsonData=JSON.stringify(obj)
fs.writeFile("json3.json",jsonData,(err)=>{
   console.log("done")

})