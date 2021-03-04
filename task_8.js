let arr = new Map([

    ["apple", "green"],
  
    ["strawberry", "red"],
  
    ["blueberry",    "blue"],
    
    [1,    true],
    
    [false, "no"]
  ]);
  
  for (let pair of arr.entries()) {
    let arr_key = pair[0];
    let arr_val = pair[1]; 
    console.log(`Ключ = ${arr_key}, значение = ${arr_val}`);
  }