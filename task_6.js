let user_arr = [1, 1];
let sample = user_arr[0];
let check ;
for(let i = 0; i < user_arr.length; i++){
  if (user_arr[i] == sample) {
    check = true;
  }else {
    check = false;
  }
}
console.log(check);