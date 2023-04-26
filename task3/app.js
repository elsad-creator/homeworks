
function goster() {
    //? letler
    let deyer = document.getElementById("input-deyer").value;
    let cevre = document.getElementById("cevre");
    let cevreMelumat = document.getElementById("cevre-melumat");
    //! width hundurluk
    cevre.style.width = deyer + "px";
    cevre.style.height = deyer + "px";
    //? sahesi
    let uzunluq = 6 * deyer;
    let sahe = 3 * deyer * deyer;
    cevreMelumat.innerHTML = "uzunluq: " + uzunluq + " " +"sahe: " + sahe + "px";
  }