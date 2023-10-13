var images = [];
var mota = [
    "Say hi ! Halloween",
    "Say hi ! Halloween",
    "Nhắn Dosh Để Đặt Bánh Liền Nha",
    "Order Nowww!!!",
    "Say hi ! Halloween",
    "Halloween coming soonnnn !",
]
var index = 0;
var sohinh = 6;
for (var i = 0; i < sohinh; i++) {
    images[i] = new Image();
    images[i].src = "images/" + i + ".png";
}
function prev() {
    index--;
    if (index < 0) index = images.length - 1;
    var anh = document.getElementById("anh");
    anh.src = images[index].src;
    document.getElementById("mota").innerHTML = mota[index];
}
function next() {
    index++;
    if (index >= images.length) index = 0;
    var anh = document.getElementById("anh");
    anh.src = images[index].src;
    document.getElementById("mota").innerHTML = mota[index];
}



setInterval("next()", 3000);