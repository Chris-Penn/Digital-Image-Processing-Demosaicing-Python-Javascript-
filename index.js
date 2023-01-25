const fs = require('fs')
let data = fs.readFileSync('cpenn4_hard.txt')
let intensities = JSON.parse(data)


let height = 1024
let width = 1024

let stackIntensities = []
for(let i=0; i < height * width; i = i + width){
  let row = []
  for(let j = i; j < i + width; j++){
    row.push(intensities[j])
  }
  stackIntensities.push(row)
}

//console.log("RGB")
//console.log(parseInt(height / 2))
//console.log(parseInt(width / 2))

let newImg = []

let rowType = "TypeA";

for(let i=0; i < height - 1; i = i + 1){
  let row1 = stackIntensities[i]
  let row2 = stackIntensities[i + 1]
  if(rowType == "TyeA"){
    let gridType = "GridA";
    for(let j = i; j < width - 1; j++){
      if(gridType == "GridA"){
        let blue = row1[j]
        let green1 = row1[j+1]
        let green2 = row2[j]
        let red = row2[j+1]

        let green = parseInt((green1 + green2) / 2)

        newImg.push(red + " " + green + " " + blue)
        

        gridType = "GridB";
      } else{
          let green1 = row1[j]
          let blue = row1[j+1]
          let red = row2[j]
          let green2 = row2[j+1]

          let green = parseInt((green1 + green2) / 2)

          newImg.push(red + " " + green + " " + blue)
          

          gridType = "GridA";
      }

    }
    rowType = "TypeB";
  }
  else{
    let gridType = "GridA";
    for(let j=0; j < width - 1; j++){
      if(gridType == "GridA"){
        let green1 = row1[j]
        let red = row1[j+1]
        let blue = row2[j]
        let green2 = row2[j+1]

        let green = parseInt((green1 + green2) / 2)

        newImg.push(red + " " + green + " " + blue)
        

        gridType = "GribB";
      } else{
        let red = row1[j]
        let green1 = row1[j+1]
        let green2 = row2[j]
        let blue = row2[j+1]

        let green = parseInt((green1 + green2) / 2)

        newImg.push(red + " " + green + " " + blue)
        

        gridType = "GridA";
      }  
    }
    rowType = "TypeA";
  }

}

console.log("RGB")
console.log(height - 1)
console.log(width - 1)
newImg.forEach(pixel => {
  console.log(pixel)
})