// GENERAR LA QUERY PARA SABER LA CANTIDAD DE USUARIOS ONLINE
let xhr;
if(window.XMLHttpRequest) xhr = new XMLHttpRequest();
else new ActiveXObject("Microsoft.XMLHTTP");

xhr.open("GET", `https://api.mcsrvstat.us/2/server.proyecto40.es`);
xhr.addEventListener('load', (data) => {
    const online = document.getElementById("info-users");
    const users_online = document.getElementById("users_online");
    
    users_online.textContent = JSON.parse(data.target.response).players.online;
    online.style.display='inline-block';
    

});

xhr.send();