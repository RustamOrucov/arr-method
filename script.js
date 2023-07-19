let example = "025468";

let arr = example.split("");
let newArr = [];
for (let i = 0; i < arr.length; i++) {
  newArr.push(arr[i]);
  if (arr[i] % 2 == 0 && arr[i + 1] % 2 == 0) {
    newArr.push("-");
  }
}
let str = newArr.join("");
console.log(str);
