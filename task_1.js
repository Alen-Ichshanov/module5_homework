let user_val = +prompt("Введите значение:");
if (typeof user_val === "number" && !isNaN(user_val)) {
  if (user_val % 2 === 0) {
    console.log("Четное");
  } else {
    console.log("Нечетное");
  }
}else {
  console.log("Упс, кажется, вы ошиблись");
}