
let dontClickBTN = document.getElementById('dontClick');
let img = document.getElementById('gif');
let text = document.querySelector('.text');
let clicks = 0

let x = 1

dontClickBTN.onmouseover = function () {
    
    if (x === 1) {
        dontClickBTN.style.left = "-400px";
        dontClickBTN.style.top = "-600px";
        dontClickBTN.textContent = "Hinh nhu nham nut roi thi phai ";
        dontClickBTN.style.transition = "0.2s";

    } else if (x === 2) {
        dontClickBTN.style.left = "300px";
        dontClickBTN.style.top = "300px";
        dontClickBTN.textContent = "Nut dong y o ben kia co ma";
        dontClickBTN.style.transition = "0.2s";
    } else if (x === 3) {
        dontClickBTN.style.left = "-450px";
        dontClickBTN.style.top = "150px";
        dontClickBTN.textContent = "Dung co di vao day, bam vao nut xanh kia";
        dontClickBTN.style.transition = "0.2s";
    } else if (x === 4) {
        dontClickBTN.style.left = "300px";
        dontClickBTN.style.top = "-600px";
        dontClickBTN.textContent = "That su khong muon bam vao nut xanh sao?";
        dontClickBTN.style.transition = "0.2s";
    } else if (x === 5) {
        dontClickBTN.style.left = "-225px";
        dontClickBTN.style.top = "-300px";
        dontClickBTN.textContent = "Khong muon di choi voi anh sao";
        dontClickBTN.style.transition = "0.2s";
    } else if (x === 6) {
        dontClickBTN.style.left = "450px";
        dontClickBTN.style.top = "300px";
        dontClickBTN.textContent = "Suy nghi ki di ma...";
        dontClickBTN.style.transition = "0.2s";
    } else if (x === 7) {
        dontClickBTN.style.left = "-150px";
        dontClickBTN.style.top = "15px";
        dontClickBTN.textContent = "Di choi voi anh dii, anh thuong em lam";
        dontClickBTN.style.transition = "0.2s";
    } else if (x === 8) {
        dontClickBTN.style.left = "510px";
        dontClickBTN.style.top = "0px";
        dontClickBTN.textContent = "Em that su khong muon di sao...";
        dontClickBTN.style.transition = "0.2s";
    } else if (x === 9) {
        dontClickBTN.style.left = "-450px";
        dontClickBTN.style.top = "-150px";
        dontClickBTN.textContent = "Vay la em tu choi anh, da the thi...";
        dontClickBTN.style.transition = "2s";
    } else if (x === 10) {
        dontClickBTN.style.left = "-30px";
        dontClickBTN.style.top = "100px";
        dontClickBTN.textContent = "Hen nang hom khac vay :(";
        dontClickBTN.style.transsition="3s";
        img.src = "https://gifdb.com/images/high/crying-cat-498-x-498-gif-2dh1nqro85n7i50d.webp";
        img.style.opacity = 1;
        text.textContent = "See you later :<";
    } 

    x = x === 20 ? 1 : x + 1;
};

dontClickBTN.onclick = function() {
    alert('How? You are a cheater!')
}