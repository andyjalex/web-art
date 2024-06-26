let copyText = document.querySelector(".bottom__content");
let copyButton = copyText.querySelector("button");

copyButton.addEventListener("click", function () {
  var dummy = document.createElement("input");
  document.body.appendChild(dummy);
  dummy.setAttribute('value', 'ANDY@WEB-ART.IO');
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);

  copyButton.classList.add("active");
  window.getSelection().removeAllRanges();
  setTimeout(function () {
    copyButton.classList.remove("active");
  }, 2500);
});
