// Referencias do HTML
const lblOnline = document.querySelector("#lblOnline");
const lblOffline = document.querySelector("#lblOffline");

const socket = io();

socket.on("connect", () => {
  console.log("Conectado");

  lblOffline.style.display = "none";
  lblOnline.style.display = "";
});

socket.on("disconnect", () => {
  console.log("Desconectado do servidor");

  lblOnline.style.display = "none";
  lblOffline.style.display = "";
});
