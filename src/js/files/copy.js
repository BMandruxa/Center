"use strict"
const text = document.getElementById("textone");
const textTwo = document.getElementById("texttwo");
/* return button to variable btn */
const btn = document.getElementById("copyText");

/* call function on button click */
btn.addEventListener("click", () => {
   btn.innerHTML = "Скопировано"
   setTimeout(() => { btn.innerHTML = "Скопировать в буфер" }, 3000)
   if (navigator && navigator.clipboard && navigator.clipboard.writeText)
      return navigator.clipboard.writeText(text.innerText + textTwo.innerText);
   return Promise.reject('The Clipboard API is not available.');
}) 