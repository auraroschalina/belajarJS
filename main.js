// console.log("Hello World")
// alert("Notifikasi")
// prompt("Masukan saran")

// var Promnet = "Coding is Easy"
// console.log(Promnet)
// var Promnet = "Coding not Easy"
// console.log(Promnet)

// let Promnet = "Coding is Easy"
// console.log(Promnet)
// Promnet = "coding not easy"
// console.log(Promnet)

// const Promnet = "Coding is Easy"
// console.log(Promnet)
// Promnet = "coding not easy"
// console.log(Promnet)

// let totalPoin = prompt("Masukan poin anda")
//     if(totalPoin > 100){
//         document.write("<h2>Congratulation</h2>");
//     }
//     else{
//         document.write("<h2>Thank You</h2>")
//     }

// let x = 6;
// let y = 3;

// if (x < 10 && y > 1) {
//   console.log("a = true");
// } else {
//   console.log("a = false");
// }

// if (x < 10 && y < 1) {
//   console.log("b = true");
// } else {
//   console.log("b = false");
// }

// if (x == 5 || y == 5) {
//   console.log("c = true");
// } else {
//   console.log("c = false");
// }

// if (x == 6 || y == 5) {
//   console.log("d = true");
// } else {
//   console.log("d = false");
// }

// if (!(x == y)) {
//   console.log("e = true");
// } else {
//   console.log("e = false");
// }


// let x = 6;
// let y = 3;

// console.log(x<10 && y > 1)
// console.log(x<10 && y < 1)
// console.log(x==5||y==5)
// console.log(x==6||y==5)
// console.log(!(x==y))

// let p = document.querySelector("p")
// let button = document.querySelector("button")
// let input = document.querySelector("input")

// button.addEventListener('click', function(){
// let isi = input.value
// console.log(isi)
// p.innerHTML = isi
// })


let todolistinput = document.querySelector('#todolistinput');
let list = document.querySelector('#list');

function addItem() {
    let value = todolistinput.value.trim();
    if (value !== "") {
        let daftarItem = document.createElement("li");
        daftarItem.innerHTML = `<span>${value}</span><i></i>`;

        daftarItem.addEventListener("click", function(){
            this.classList.toggle('done');
            updateTextDecoration(this);
        });

        daftarItem.querySelector("i").addEventListener("click", function(){
            daftarItem.remove();
        });

        list.appendChild(daftarItem);
        todolistinput.value = "";
    }
}

function updateTextDecoration(item) {
    let textElement = item.querySelector('span');
    if (item.classList.contains('done')) {
        textElement.style.textDecoration = 'line-through';
    } else {
        textElement.style.textDecoration = 'none';
    }
}

todolistinput.addEventListener("keyup", function(event){
    if(event.key == "Enter") {
        addItem();
    }
});