// DOM - Document Object Model
// Truy cập 1 phần tử của DOM bằng JS
// TRuy cập qua id
let table = document.getElementById("table");
console.log({ table });

// truy cập thông qua class
let tds = document.getElementsByClassName("td");
console.log(tds);

// truy cập thông qua tên thẻ
let trs = document.getElementsByTagName("tr");
console.log(trs);

// sử dụng bộ chọn CSS
let td = document.querySelectorAll("td.td");
console.log(td);

// cách di chuyển vị trí phần tử
// di chuyển về node cha

// let p = document.querySelector(".box p");
// console.log(p.nextElementSibling); // truy xuất tiếp theo của p

// let box = document.querySelector(".box h2").parentNode;
// console.log(box);  // truy xuất từ con đến cha

// console.log(document.querySelector("tr").lastElementChild); //truy xuất con cuối


let box = document.querySelector(".btn");
console.log(box);
box.addEventListener("contextmenu", function () {
    alert("ban vua mousedown vao the div.box")
})

// keyup, key
window.addEventListener("scroll", function (e) {
    console.log("ban vua cuon trang");
})
