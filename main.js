
    let dontClickBTN = document.getElementById('dontClick');
    let ClickkBTN = document.getElementById('Clickk');
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
            ClickkBTN.style.transform = "scale(1.25)";
            document.body.style.backgroundColor = "#C0C0C0";
            document.body.style.transition = "0.2s";


        } else if (x === 2) {
            dontClickBTN.style.left = "300px";
            dontClickBTN.style.top = "300px";
            dontClickBTN.textContent = "Nut dong y o ben kia co ma";
            dontClickBTN.style.transition = "0.2s";
            ClickkBTN.style.transform = "scale(1.5)";
            document.body.style.backgroundColor = "#A0A0A0";
            document.body.style.transition = "0.2s";

        } else if (x === 3) {
            dontClickBTN.style.left = "-450px";
            dontClickBTN.style.top = "150px";
            dontClickBTN.textContent = "Dung co di vao day, bam vao nut xanh kia";
            dontClickBTN.style.transition = "0.2s";
            ClickkBTN.style.transform = "scale(1.75)";
            document.body.style.backgroundColor = "#808080";
            document.body.style.transition = "0.2s";

        } else if (x === 4) {
            dontClickBTN.style.left = "300px";
            dontClickBTN.style.top = "-600px";
            dontClickBTN.textContent = "That su khong muon bam vao nut xanh sao?";
            dontClickBTN.style.transition = "0.2s";
            ClickkBTN.style.transform = "scale(2)";
            document.body.style.backgroundColor = "#606060";
            document.body.style.transition = "0.2s";

        } else if (x === 5) {
            dontClickBTN.style.left = "-225px";
            dontClickBTN.style.top = "-300px";
            dontClickBTN.textContent = "Khong muon di choi voi anh sao";
            dontClickBTN.style.transition = "0.2s";
            ClickkBTN.style.transform = "scale(2.25)";
            document.body.style.backgroundColor = "#505050";
            document.body.style.transition = "0.2s";

        } else if (x === 6) {
            dontClickBTN.style.left = "450px";
            dontClickBTN.style.top = "400px";
            dontClickBTN.textContent = "Suy nghi ki di ma...";
            dontClickBTN.style.transition = "0.2s";
            ClickkBTN.style.transform = "scale(2.5)";
            document.body.style.backgroundColor = "#404040";
            document.body.style.transition = "0.2s";

        } else if (x === 7) {
            dontClickBTN.style.left = "-150px";
            dontClickBTN.style.top = "15px";
            dontClickBTN.textContent = "Di choi voi anh dii, anh thuong em lam";
            dontClickBTN.style.transition = "0.2s";
            ClickkBTN.style.transform = "scale(2.75)";
            document.body.style.backgroundColor = "#303030";
            document.body.style.transition = "0.2s";

        } else if (x === 8) {
            dontClickBTN.style.left = "710px";
            dontClickBTN.style.top = "-300px";
            dontClickBTN.textContent = "Em that su khong muon di sao...";
            dontClickBTN.style.transition = "0.2s";
            ClickkBTN.style.transform = "scale(3)";
            document.body.style.backgroundColor = "#202020";
            document.body.style.transition = "0.2s";

        } else if (x === 9) {
            dontClickBTN.style.left = "-450px";
            dontClickBTN.style.top = "-150px";
            dontClickBTN.textContent = "Vay la em khong thich anh sao...";
            dontClickBTN.style.transition = "0.2s";
            ClickkBTN.style.transform = "scale(3.25)";
            document.body.style.backgroundColor = "#101010";
            document.body.style.transition = "0.2s";
        } else if (x === 10) {
            dontClickBTN.style.left = "-30px";
            dontClickBTN.style.top = "100px";
            dontClickBTN.textContent = "Hen em hom khac vay :(";
            dontClickBTN.style.transition="0.2s";
            img.src = "https://gifdb.com/images/high/crying-cat-498-x-498-gif-2dh1nqro85n7i50d.webp";
            img.style.opacity = 1;
            text.textContent = "See you later :<";
            ClickkBTN.style.transform = "scale(1)";
            ClickkBTN.style.transition="2s";
            document.body.style.backgroundColor = "#000000";
            document.body.style.transition = "5s";
        } 

        x = x === 20 ? 1 : x + 1;
    };

    dontClickBTN.onclick = function() {
        alert('Cut mm di!')
    }
    ClickkBTN.onclick = function() {
        alert('Ok em di nha nghi luon')
    }