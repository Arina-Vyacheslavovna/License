var lic = document.getElementsByName("license");
var li1 = document.getElementById("li1");
var li2 = document.getElementById("li2");
var li3 = document.getElementById("li3");
var plan = document.getElementById("plan");
var count = document.getElementById("numberLicense").value;
var total = document.getElementById("totalPrice");

function calculate() {
  count = document.getElementById("numberLicense").value;
  check1();
  check2();
  check3();
}

function check1() {
  if (lic[0].checked) {
    li1.classList.add("active");
    li2.classList.remove("active");
    li3.classList.remove("active");
    plan.innerHTML = "#1";
    total.innerHTML = 13 * count;
  }
}

function check2() {
  if (lic[1].checked) {
    li1.classList.remove("active");
    li2.classList.add("active");
    li3.classList.remove("active");
    plan.innerHTML = "#2";
    total.innerHTML = 22 * count;
  }
}

function check3() {
  if (lic[2].checked) {
    li1.classList.remove("active");
    li2.classList.remove("active");
    li3.classList.add("active");
    plan.innerHTML = "#3";
    total.innerHTML = 34 * count;
  }
}
