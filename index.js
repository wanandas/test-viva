// q1
function inputName(firstName, lastName) {
  if (firstName === "Siamsmile") {
    console.log("Best Online Marketplace Platform");
  } else {
    console.log(`Hello Siamsmile, My name is ${firstName} ${lastName}`);
  }
}

inputName("Siamsmile", "test");
inputName("test", "test");

// q2

const arrayObj = [{ name: "test" }, { name: "test" }, { name: "test" }];
const copy = [...arrayObj];

// q3
// สามารถส่งฟังก์ชันเป็นพารามิเตอร์ของฟังก์ชั่นได้และ สามารถถูก return ออกมาจากฟังก์ชั่นได้ เช่นกันเสมือนเป็นตัวแปร
function add(x, y) {
  return x + y;
}
var a = add;
var b = a(1, 2);
