if (localStorage.counter !== undefined) {
  document.getElementById("like").innerHTML = localStorage.counter;
}

function clickCounter() {
  localStorage.counter = document.getElementById("like").innerHTML;
  if (typeof Storage !== "undefined") {
    if (localStorage.counter) {
      localStorage.counter = parseInt(localStorage.counter) + 1;
    } else {
      localStorage.counter = 1;
    }
    document.getElementById("like").innerHTML = localStorage.counter;
  } else {
    document.getElementById("like").innerHTML = "Maaf gaess browsernya tidak mendukung web storage hihi...";
  }
}
