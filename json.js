const bioData={
    name:"pooja Rani",
    age:"22",
    Navgurukul:"in campus",
}

// const jsonData=JSON.stringify(bioData)
// console.log(bioData)


const fs=require("fs")
const jsonData=JSON.stringify(bioData)
fs.wriFile("json1.json",jsonData,(err)=>{

})