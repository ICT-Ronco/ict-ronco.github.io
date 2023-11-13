function game() {
    var rect = document.getElementById("gamebox").getBoundingClientRect();
    var diff = 1
    const l = [10, 20, 30, 35]
    const min = [5, 10, 15, 20]
    var lvl = 0
    var i = 0
    document.getElementById("gameinfo").style="display:block"
    document.getElementById("nivel").innerHTML = "Nivel: " + (lvl + 1) + "<br><br> Objetivo: " + min[lvl]
    document.getElementById("crono").innerHTML = "Tiempo: " + diff + ""
    document.getElementById("start").style = "display:none;"
    document.getElementById("end").style = "display:inline-bloc;"
    document.getElementById("gamebox").innerHTML = "<div id='mouse'style=margin:50% 50%;'><img src='img/mouse.png'></img></div>"
    function crono() {
        diff++
        document.getElementById("crono").innerHTML = "Tiempo: " + diff + ""
    }

    function move() {    
    document.getElementById("mouse").style.margin=(Math.floor(Math.random(0-8)*96))+"%"+" "+(Math.floor(Math.random(0-8)*96))+"%"      
}      


    function winning() {
        if (diff == l[lvl] && i < min[lvl]) {
            alert("No has superado el nivel " + (lvl+1))
            location.reload()

        } else {
            if (diff == l[lvl] && i >= min[lvl]) {
             
             if (diff == l[3]) {
                alert('Enhorabuena el juego ha terminado')
                location.reload()
             }else{
             
                lvl++
                document.getElementById("nivel").innerHTML = "Nivel: " + (lvl + 1) + "<br><br> P.Mínima: " + min[lvl]
             }
            }
        }

    }
    
    setInterval(move, 1400);
    setInterval(crono, 1000);
    setInterval(winning, 1000);
    document.getElementById("mouse").onclick = function sumar() {
        if (i < 1) {
            i++
            document.getElementById("marcador").innerHTML = "Has pillado al ratón <br><br><span id='veces'> " + i + " </span>vez"

        } else {
            i++
            document.getElementById("marcador").innerHTML = "Has pillado al ratón <br><br><span id='veces'> " + i + " </span>veces"

        }

    }


}
document.write("<div id='gameinfo' style='display:none;'><p id='crono'></p><p id='nivel'></p><p id='marcador'>Pulsa en el ratón <br><br><span id='veces'>:(</span></p></div><div id='gamebox'></div>")
document.write("<button id='start' onclick=(game())>Empezar juego</button><button id='end' onclick=(location.reload()) style=display:none>Terminar juego</button>")
