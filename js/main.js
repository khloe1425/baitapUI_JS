document.addEventListener("contextmenu", function (e) {
   e.preventDefault();
   //Prevent right click
}, false);
document.onkeydown = function (event) {
   event = (event || window.event); 
   if (event.keyCode == 123) {
       // Prevent F12 
       return false;
   } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
       // Prevent Ctrl+Shift+I 
       return false;
   }
}



/**
 * Bài 1
 */

document.getElementById("btnSalary").onclick = function(){
    var luong1Ngay = document.getElementById("inputNum1").value;
    var soNgay = document.getElementById("inputNum2").value;
    var salary = luong1Ngay * soNgay;

    document.getElementById("txtSalary").innerHTML = salary;
}

/**
 * Bài 2
 */

 document.getElementById("btnTB").onclick = function(){
   let inputElement = document.querySelectorAll(".bai2 .form-control");
   let sum = 0;
  for(let i = 0;i < inputElement.length;i++ ){
    sum += Number(inputElement[i].value);
   }
   document.getElementById("txtTB").innerHTML = sum/inputElement.length;
}


/**
 * Bài 3
 */

 document.getElementById("btnCurrency").onclick = function(){
    var usd = document.getElementById("usd").value;
    var vnd = new Intl.NumberFormat('vn-VN').format(usd * 23500);

    document.getElementById("txtCurrency").innerHTML = vnd;
 }

 /**
 * Bài 4
 */

  document.getElementById("btnCal").onclick = function(){
    var wd = document.getElementById("width").value;
    var hg = document.getElementById("height").value;

    var area = wd*hg;
    var perimeter  = (Number(wd)+Number(hg)) * 2;

    document.getElementById("txtCal").innerHTML = `
        Diện tích: ${area};
        Chu vi: ${perimeter}
    `;
 }


  /**
 * Bài 5
 */

   document.getElementById("btnSum").onclick = function(){
    var number = document.getElementById("number").value;
   
    var ten = Math.floor(number/10);
    var unit = number%10;

    document.getElementById("txtSum").innerHTML = ten + unit;
 }
