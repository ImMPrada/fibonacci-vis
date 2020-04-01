var Fibo_1__worker;
var i1 = 0;
//startWorker inicia un trabajador
function startWorker() {
  //Evaluamos que si el trabajador fue creado, si no fue creado es que el navegador no los soporta
  if (typeof (Worker) !== "undefined") {
    //Evaluamos si el trabajador Fibo_1__worker ya existe, si no existe se crea
    if (typeof (Fibo_1__worker) == "undefined") {
      //Fibo_1__worker instanciado
      Fibo_1__worker = new Worker("../logic/Fibo_recursive.js");
    }
    Fibo_1__worker.addEventListener('message',function(event){
      console.log(`i=${i1}, fib=${event.data}`);
      r1 = event.data/1000000;
      x1 = (i1 % 4 < 2) ? r1 : r1 * (-1);
      y1 = ((i1 + 1) % 4 < 2) ? r1 : r1 * (-1);
      d1 += "a" + r1 + "," + r1 + " 0 0 0" + x1 + "," + y1

      path1 = svg.append("path")
        .attr("d", d1)
        .style("stroke-width", 3)
        .style("stroke", "#1f78b4")
        .style("fill", "none");

      totalLength1 = path1.node().getTotalLength();

      path1.attr("stroke-dasharray", totalLength1 + " " + totalLength1)
        .attr("stroke-dashoffset", totalLength1)
        .transition()
        .duration(2000)
        .delay(500)
        .ease("exp")
        .attr("stroke-dashoffset", 0);

      i1 += 1;
    },false);
    if (typeof (Fibo_2__worker) == "undefined") {
        // Fibo_1__worker instanciado
        Fibo_2__worker = new Worker("../logic/fibo_dina.js");
      }
      Fibo_2__worker.addEventListener('message',function(event){
        // console.log(event.data); 
      },false);
    Fibo_1__worker.postMessage(50);
    Fibo_2__worker.postMessage(50);
  } else {
    document.getElementById("resultFibo_recurrente").innerHTML = "Sorry, your browser does not support Web Workers...";
    document.getElementById("resultFibo_dinamico").innerHTML = "Sorry, your browser does not support Web Workers...";
  }
}

function stopWorker() {
    Fibo_1__worker.terminate();
    Fibo_2__worker.terminate();
    Fibo_1__worker = undefined;
    Fibo_2__worker = undefined;
}