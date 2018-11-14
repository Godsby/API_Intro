// 20181113162624
// https://dog.ceo/api/breeds/list/all
let APIResponse =
{
  "status": "success",
  "message": {
    "affenpinscher": [

    ],
    "african": [

    ],
    "airedale": [

    ],
    "akita": [

    ],
    "appenzeller": [

    ],
    "basenji": [

    ],
    "beagle": [

    ],
    "bluetick": [

    ],
    "borzoi": [

    ],
    "bouvier": [

    ],
    "boxer": [

    ],
    "brabancon": [

    ],
    "briard": [

    ],
    "bulldog": [
      "boston",
      "french"
    ],
    "bullterrier": [
      "staffordshire"
    ],
    "cairn": [

    ],
    "cattledog": [
      "australian"
    ],
    "chihuahua": [

    ],
    "chow": [

    ],
    "clumber": [

    ],
    "cockapoo": [

    ],
    "collie": [
      "border"
    ],
    "coonhound": [

    ],
    "corgi": [
      "cardigan"
    ],
    "cotondetulear": [

    ],
    "dachshund": [

    ],
    "dalmatian": [

    ],
    "dane": [
      "great"
    ],
    "deerhound": [
      "scottish"
    ],
    "dhole": [

    ],
    "dingo": [

    ],
    "doberman": [

    ],
    "elkhound": [
      "norwegian"
    ],
    "entlebucher": [

    ],
    "eskimo": [

    ],
    "frise": [
      "bichon"
    ],
    "germanshepherd": [

    ],
    "greyhound": [
      "italian"
    ],
    "groenendael": [

    ],
    "hound": [
      "afghan",
      "basset",
      "blood",
      "english",
      "ibizan",
      "walker"
    ],
    "husky": [

    ],
    "keeshond": [

    ],
    "kelpie": [

    ],
    "komondor": [

    ],
    "kuvasz": [

    ],
    "labrador": [

    ],
    "leonberg": [

    ],
    "lhasa": [

    ],
    "malamute": [

    ],
    "malinois": [

    ],
    "maltese": [

    ],
    "mastiff": [
      "bull",
      "tibetan"
    ],
    "mexicanhairless": [

    ],
    "mix": [

    ],
    "mountain": [
      "bernese",
      "swiss"
    ],
    "newfoundland": [

    ],
    "otterhound": [

    ],
    "papillon": [

    ],
    "pekinese": [

    ],
    "pembroke": [

    ],
    "pinscher": [
      "miniature"
    ],
    "pointer": [
      "german",
      "germanlonghair"
    ],
    "pomeranian": [

    ],
    "poodle": [
      "miniature",
      "standard",
      "toy"
    ],
    "pug": [

    ],
    "puggle": [

    ],
    "pyrenees": [

    ],
    "redbone": [

    ],
    "retriever": [
      "chesapeake",
      "curly",
      "flatcoated",
      "golden"
    ],
    "ridgeback": [
      "rhodesian"
    ],
    "rottweiler": [

    ],
    "saluki": [

    ],
    "samoyed": [

    ],
    "schipperke": [

    ],
    "schnauzer": [
      "giant",
      "miniature"
    ],
    "setter": [
      "english",
      "gordon",
      "irish"
    ],
    "sheepdog": [
      "english",
      "shetland"
    ],
    "shiba": [

    ],
    "shihtzu": [

    ],
    "spaniel": [
      "blenheim",
      "brittany",
      "cocker",
      "irish",
      "japanese",
      "sussex",
      "welsh"
    ],
    "springer": [
      "english"
    ],
    "stbernard": [

    ],
    "terrier": [
      "american",
      "australian",
      "bedlington",
      "border",
      "dandie",
      "fox",
      "irish",
      "kerryblue",
      "lakeland",
      "norfolk",
      "norwich",
      "patterdale",
      "russell",
      "scottish",
      "sealyham",
      "silky",
      "tibetan",
      "toy",
      "westhighland",
      "wheaten",
      "yorkshire"
    ],
    "vizsla": [

    ],
    "weimaraner": [

    ],
    "whippet": [

    ],
    "wolfhound": [
      "irish"
    ]
  }
}

//Part 1
// console.log(APIResponse.message);
// console.log(Object.keys(APIResponse.message));
console.log(Object.values(APIResponse.message));

//Part 2
// function capFirstLetter (str) {
//   return str.charAt(0).toUpperCase() + str.slice(1);
// }

let breedList = [];
let keys = Object.keys(APIResponse.message);
let values = Object.values(APIResponse.message);

for(let i = 0; i < keys.length; i ++) {
  if (values[i].length === 0) {
    breedList.push(keys[i][0].toUpperCase() + keys[i].slice(1));
  } else {
    for (let j = 0; j < values[i].length; j ++) {
      values[i][j]= values[i][j].charAt(0).toUpperCase() + values[i][j].slice(1) + " " + keys[i][0].toUpperCase() + keys[i].slice(1);
      breedList.push(values[i][j]);
    }
  }
}

console.log(breedList);


//Part 3
document.addEventListener("DOMContentLoaded", () => {

  let pick = document.querySelector("button");
    pick.addEventListener("click", event => {
    button.innerText = "Another One!";
    let newNode = document.createElement("p");
    let random = Math.floor(Math.random() * breedList.length);
    newNode.innerHTML = breedList[random];
    event.target.parentNode.appendChild(newNode);
  })
})
