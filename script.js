     var likes = document.getElementsByClassName("like");
     var qte = document.getElementsByClassName("Quant");
     var minus = document.getElementsByClassName("minus-btn"); 
     var plus = document.getElementsByClassName("plus-btn");
     var prices = document.getElementsByClassName("price");
     var deletes = document.getElementsByClassName("delete");
     const listPrices = [1379.0, 176.0, 249.0];
     var finalprice= document.getElementsByClassName("finalprice");
     
     for(let i=0;i<likes.length;i++)
     {
        let like= likes[i];
        like.addEventListener("click", function(){
        if (like.style.color== "red")
        {
        like.style.color="black"
        }
        else 
        like.style.color = "red";
                  });

     }

for (let i = 0; i < plus.length; i++) {
    let pls = plus[i];
    let prix = prices[i].innerText;
  
    pls.addEventListener("click", function () {
      const prixFix = prices[i].innerText;
      qte[i].value++;
      prices[i].innerText = listPrices[i] * qte[i].value;
      totalPrice();
    });
  }
  
  for (let i = 0; i < minus.length; i++) {
    let mns = minus[i];
    mns.addEventListener("click", function () {
      if (qte[i].value > 1) {
        qte[i].value--;
        prices[i].innerText = listPrices[i] * qte[i].value;
        totalPrice();
      }
    });
  }
  for (let i = 0; i < deletes.length; i++) {
    let del = deletes[i];
  
    del.addEventListener("click", function () {
      del.parentElement.remove();
      totalPrice();
    });
  }
  
  function totalPrice() {
    let sum = 0;
  
    for (let i = 0; i < prices.length; i++) {
      sum = sum + parseFloat(prices[i].innerText);
    }
    console.log(sum);
    finalPrice.value = sum;
  }
