var Fibo_1__worker;

//startWorker inicia un trabajador
function startWorker() {
  //Evaluamos que si el trabajador fue creado, si no fue creado es que el navegador no los soporta
  if (typeof (Worker) !== "undefined") {
    //Evaluamos si el trabajador Fibo_1__worker ya existe, si no existe se crea
    if (typeof (Fibo_1__worker) == "undefined") {
      //Fibo_1__worker instanciado
      Fibo_1__worker = new Worker("../logic/fibo_recursive.js");
    }
    Fibo_1__worker.addEventListener('message',function(event){
      document.getElementById("resultFibo_recurrente").innerHTML=event.data; 
    },false);
    if (typeof (Fibo_2__worker) == "undefined") {
        //Fibo_1__worker instanciado
        Fibo_2__worker = new Worker("../logic/fibo_dina.js");
      }
      Fibo_2__worker.addEventListener('message',function(event){
        document.getElementById("resultFibo_dinamico").innerHTML=event.data; 
      },false);
    Fibo_1__worker.postMessage(45);
    Fibo_2__worker.postMessage(45);
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