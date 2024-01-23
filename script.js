const button1 = document.body.querySelector(".button1");
const button2 = document.body.querySelector(".button2");
const button3 = document.body.querySelector(".button3");
const count = document.body.querySelector(".count");
let sum = 0;

button1.addEventListener("click", () => {
    sum--;
    count.innerHTML = sum;
    color();
});
button2.addEventListener("click", () => {
    sum = 0;
    count.innerHTML = sum;
    color();
});
button3.addEventListener("click", () => {
    sum++;
    count.innerHTML = sum;
    color();
});

function color() {
    if (sum > 0) {
       count.style.color = "green";
    } else if (sum === 0) {
       count.style.color = "black";
    } else {
       count.style.color = "red";
    }
};