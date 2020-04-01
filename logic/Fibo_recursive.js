function Fibo(n){
  if (n==0){
      return 0;
  }else if (n==1){
      return 1;
  };

  resultado=Fibo(n-1)+Fibo(n-2);
  return resultado
}
self.addEventListener('message', function(event){
  for (let i=1; i<=event.data; i++){
    self.postMessage(Fibo(i));
  };
},false);