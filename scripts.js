function showMenu() {
  var el = document.getElementById("menu");
  if (el.style.display != "block") {
    el.style.display = "block";
  } else {
    el.style.display = "none";
  }
}

function changeImageText(numb) {
  const imgInfo = parent.document.getElementById("text-info");
  imgInfo.src = "./content/text-" + numb + ".svg";
  imgInfo.classList.add("animate");
  setTimeout(function () {
    imgInfo.classList.remove("animate");
  }, 1000);

  const imgNeurotem = parent.document.getElementById("neurotem-slides");
  imgNeurotem.src = "./content/neurotem-" + numb + ".png";
  imgNeurotem.classList.add("animate");
  setTimeout(function () {
    imgNeurotem.classList.remove("animate");
  }, 1000);
}
