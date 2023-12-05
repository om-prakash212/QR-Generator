let qrText = document.getElementById("qrText");
let qrImg = document.getElementById("qrImg");
let ImgBox = document.getElementById("ImgBox");


function generateQR(){
    qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=1500x150DD&data=" + qrText.value;

    qrText.value = '';

}