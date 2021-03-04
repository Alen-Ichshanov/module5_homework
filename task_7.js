function arrayCheckElements(user_arr){
    let even_count = 0;
    let odd_count = 0;
    let zero_count = 0;
    for(let i = 0; i < user_arr.length; i++){
      if (+user_arr[i] == 0){
        zero_count += 1;
      }else {
        let check = +user_arr[i] % 2;
        if (check === 0 && !isNaN(user_arr[i])){
          even_count += 1;
        }else if(check !== 0 && !isNaN(user_arr[i])){
          odd_count += 1;
        }else {
          return;
        }
       }
    }
    let even_msg = `Number of even elements: ${even_count}`;
    let odd_msg = `Number of odd elements: ${odd_count}`;
    let zero_msg = `Number of zero elements: ${zero_count}`;
    console.log(even_msg);
    console.log(odd_msg);
    console.log(zero_msg);
  }
  
  let arr_1 = [1, 2, 0];
  let arr_2 = [1, 1, 1, null, 1];
  let arr_3 = [1, 2, 1, 1, "string", 1];
  let arr_4 = [1, 1, 1, 1, 1, 2];
  arrayCheckElements(arr_1);
  arrayCheckElements(arr_2);
  arrayCheckElements(arr_3);
  arrayCheckElements(arr_4);