function showMenu() {
  var el = document.getElementById("menu");
  if (el.style.display != "block") {
    el.style.display = "block";
  } else {
    el.style.display = "none";
  }
}

function changeImageText(numb) {
  const img = parent.document.getElementById("text-info");
  img.src = "./content/text-" + numb + ".svg";
}
