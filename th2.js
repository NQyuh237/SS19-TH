let items = ["Backpack", "Miband Watch", "Ring"];
console.log(items);

let list1 = document.getElementById("list");
for (let i = 0; i < items.length; i++) {
    list1.insertAdjacentHTML("beforeend", `<li>${items[i]}<button onclick="xoa(${i})">remove</button></li>`)

}
list1.children[0].remove();
list1.children[1].remove();

let inputText = document.getElementById("input_Text");
let btnAdd = document.getElementById("btn_Add");

console.log(inputText);
console.log(btnAdd);

btnAdd.addEventListener("click", () => {
    items.push(inputText.value);
    list1.insertAdjacentHTML("beforeend", `<li>${items[items.length - 1]}<button onclick="xoa(${items.length - 1})">remove</button></li></li>`)
    inputText.value = "";
})
function xoa(vitri) {
    items.splice(vitri, 1);
    list.innerHTML = "";
    for (let i = 0; i < items.length; i++) {
        list1.insertAdjacentHTML("beforeend", `<li>${items[i]}<button onclick="xoa(${i})">remove</button></li>`)
    }
    console.log(items);
}
