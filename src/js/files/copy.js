"use strict"
const text = document.getElementById("textone");
const textTwo = document.getElementById("texttwo");
/* return button to variable btn */
const btn = document.getElementById("copyText");

/* call function on button click */
btn.onclick = function () {
   text.select();
   textTwo.select();
   document.execCommand("copy");
}