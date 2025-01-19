let qtyinput=document.querySelectorAll(".qty")
let price=document.querySelectorAll(".price")
let single_prd_price=document.querySelectorAll(".sin_prd_price")
let total=document.querySelector(".totalAmount")


for(let i=0; i<qtyinput.length; i++){
    qtyinput[i].addEventListener("input",function(){
       let qty=parseInt(qtyinput[i].value)
       let pricevalue=parseInt(price[i].innerText)
       single_prd_price[i].innerText=qty*pricevalue
       let totalAmount=0
       for(let j=0; j<single_prd_price.length; j++){
        
           if(single_prd_price[j].innerText!=""){
               totalAmount+=parseInt(single_prd_price[j].innerText)
           }

           
        
       }
       total.innerText=totalAmount
       
       
    })
}


