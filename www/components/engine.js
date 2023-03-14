function calcularconsumo() {
    var km = document.getElementById('km').value;
    var gas = document.getElementById('gas').value;

    var media = km / gas;

    if(media >20){
 document.getElementById("Extremamente").innerHTML = "<h3><=20km/l | Extremamente Econômico</h3>"
}

else if((media >=12) && (media <20)) {
document.getElementById("Economico").innerHTML = "<h3> <=12km/l---->20km/l | Econômico</h3>"
}

else if((media >=8) && (media <12)) {
document.getElementById("Normal").innerHTML = "<h3><=8km/l---->12km/l | Normal</h3>"
}

else{
document.getElementById("Alto").innerHTML = "<h3>>8km/l | Alto consumo</h3>"
}
}
