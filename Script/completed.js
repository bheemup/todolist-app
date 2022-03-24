

 var data =JSON.parse(localStorage.getItem("comdata"))||[];
   
    data.map(myfuction);
    
       
       function myfuction(el){
        

        var tr=document.createElement("tr");

        var td1 =document.createElement("td");
        td1.innerText=el.itemname;

        var td2 =document.createElement("td");
        td2.innerText=el.itemqty;

        var td3 =document.createElement("td");
        td3.innerText=el.itemprio;

        tr.append(td1,td2,td3);
     console.log(tr)
     
     document.querySelector("#body").append(tr);


    }
    

