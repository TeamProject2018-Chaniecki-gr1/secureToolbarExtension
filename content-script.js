var testComunicate = '<div style="background-color: red;width: 100%;height: 70px;position: fixed;top: 0;left: 0;">Testowy komunikat...</div>';

var div=document.createElement("div"); 
div.innerHTML = testComunicate;
document.body.style.marginTop = 70;
while(div.firstChild) {
    document.body.appendChild(div.firstChild)
}