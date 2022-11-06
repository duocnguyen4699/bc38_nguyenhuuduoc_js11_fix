// bài 1: tính lương nhân viên
//INPUT: lương 1 ngày = 100000vnđ, số ngày làm
document.getElementById('kiemtra').onclick = function () {
    var ngaycong = Number(document.getElementById('ngaycong').value);
    var tiencong = Number(document.getElementById('tiencong').value);
    // var luong1ngay = 100000;
    var tongluong = 0;
    //PROCESS: lấy input
    //         lương 1 ngày * số ngày làm
    //         in kết quả

    //OUTPUT:tính lương
    if (ngaycong > 0) {
        tongluong = ngaycong * tiencong;
    } else {

    }
    document.getElementById('ketqua').innerHTML = 'Tổng lương là:' + tongluong;
}





//*bài 2: tính số trung bình
/**
 * input: nhập vào 5 số thực
 * 
 * process: lấy input
 *          tính giá trị trung bình
 *          log kqua ra màn hình
 * 
 * output: kết quả
 */
document.getElementById('tinh').onclick = function () {
    var number = Number(document.getElementById('number').value);
    var number1 = Number(document.getElementById('number1').value);
    var number2 = Number(document.getElementById('number2').value);
    var number3 = Number(document.getElementById('number3').value);
    var number4 = Number(document.getElementById('number4').value);
    var giaTriTB = 0;
    var allnumber;
    // console.log("trung binh", sum)
    if (number > 0 && number1 > 0 && number2 > 0 && number3 > 0 && number4 > 0) {
        giaTriTB = (number + number1 + number2 + number3 + number4) / 5;
    } else {

    }
    document.getElementById('ketqua1').innerHTML = 'Giá trị TB là:' + giaTriTB;
}







// bài 3: quy đổi tiền
/**
 * input: nhập số usd, 1 usd = 23500vnđ
 * 
 * process: lấy input
 *          quy đổi usd = số usd * 23500vnđ
 *          log kqua ra màn hình
 * 
 * output: kết quả
 */
document.getElementById('tinhTong').onclick = function () {
    var USD = Number(document.getElementById("USD").value);
    var VNĐ = 23500;
    var sum = (VNĐ * USD);

    document.getElementById("ketqua3").innerHTML = ('Tổng: ' + sum)
}






//bài 4: tính diện tích và chu vi hình chữ nhật
/**
 * input: nhập 2 chiều dài và rộng hình chữ nhật
 * 
 * process: lấy input
 *          tính diện tích, chu vi hình chữ nhật
 *          log kqua ra màn hình
 * 
 * output: kết quả
 */
document.getElementById("tinhTongSA").onclick = function () {

    var width = Number(document.getElementById("width").value);
    var long = Number(document.getElementById("long").value);
    var dienTich = (long * width);
    var chuVi = (long + width) * 2;
    document.getElementById("ketqua4").innerHTML = (" Diện Tích Là: " + dienTich)
    document.getElementById("ketqua5").innerHTML = ("Chu Vi Là: " + chuVi)
}



//bài 5: tính tổng 2 ký số
/**
 * input: nhập vào 1 số có 2 chữ số (vd:23)
 * 
 * process: lấy input
 *          tính tổng 2 ký số (23 ==> 2+3=5) 
 *          log kqua ra màn hình
 * 
 * output: kết quả
 */
document.getElementById("tinhKySo").onclick = function () {
    var n = Number(document.getElementById("num").value);
    var num1 = Math.floor(n / 1000000);
    var num2 = Math.floor(n % 1000000 / 100000);
    var num3 = Math.floor(n % 100000 / 10000);
    var num4 = Math.floor(n % 10000 / 1000);
    var num5 = Math.floor(n % 1000 / 100);
    var num6 = Math.floor(n % 100 / 10);
    var num7 = Math.floor(n % 10 / 1);  
    var sum1 = (num1 + num2 + num3 + num4 + num5 + num6 + num7);

    document.getElementById("ketqua6").innerHTML = ('Tổng ký số là: ' + sum1)
}








