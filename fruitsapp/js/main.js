window.onload=function(){
    const result=document.getElementById("result");
    const fruits=document.querySelectorAll("[data-price]");
    for(let i=0;i<fruits.length;i++){
      fruits[i].addEventListener("change",numberChange);
    }
    function numberChange(){
      let sum=0;
      for(let i=0;i<fruits.length;i++){
        sum += fruits[i].value * fruits[i].getAttribute("data-price");
      }
      result.textContent=sum+"円です!";
    }
};