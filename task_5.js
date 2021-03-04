let user_arr = [22, 44, 56, 790, 10, 2, 0, 1];
let arr_len = `Количество элементов массива: ${user_arr.length}`;
console.log(arr_len);
for(let i = 0; i < user_arr.length; i++){
  let arr_elem = `Элемент #${i}: ${user_arr[i]}`;
  console.log(arr_elem);
}