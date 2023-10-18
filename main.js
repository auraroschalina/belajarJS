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
                daftarItem.innerHTML = `<input type="checkbox"><label>${value}</label>`;

                list.appendChild(daftarItem);
                todolistinput.value = "";
            }
        }

        list.addEventListener("change", function (event) {
            let checkbox = event.target;
            if (checkbox.type === "checkbox") {
                updateTextDecoration(checkbox);
            }
        });

        function updateTextDecoration(checkbox) {
            let item = checkbox.parentElement;
            let textLabel = item.querySelector('label');
            if (checkbox.checked) {
                textLabel.style.textDecoration = 'line-through';
            } else {
                textLabel.style.textDecoration = 'none';
            }
        }

        todolistinput.addEventListener("keyup", function (event) {
            if (event.key == "Enter") {
                addItem();
            }
        })
        