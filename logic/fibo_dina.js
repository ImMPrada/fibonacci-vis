function Fibo_dina(n, valores){
  
  if (n==0){
      return 0;
  }else if (n==1){
      return 1;
  };

  if (valores.has(n)){
    return valores.get(n);
  }else{
    resultado=Fibo_dina(n-1,valores)+Fibo_dina(n-2,valores);
    valores.set(n,resultado);
  };
  return resultado;
}

self.addEventListener('message', function(event){
  for (let i=1; i<=event.data; i++){
    let valores= new Map();
    self.postMessage(Fibo_dina(i,valores));
  };
},false);


