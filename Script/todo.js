

    var tododata =JSON.parse(localStorage.getItem("tododata"));
    var completed = JSON.parse(localStorage.getItem("comdata")) || [];
    tododata.map(test);
    function test(el){
        var tr=document.createElement("tr");

    var td1 =document.createElement("td");
    td1.innerText= el.itemname;

    var td2 =document.createElement("td");
    td2.innerText= el.itemqty;

    var td3 =document.createElement("td");
    td3.innerText= el.itemprio;

    var td4 =document.createElement("button");
    td4.innerText ="completed";
    td4.style.fontSize="25px";
    td4.style.margin="20px";
  td4.style.cursor ="pointer";
  td4.addEventListener("click",function(){
      markcompleted(el);
  })
  

    tr.append(td1,td2,td3,td4);


    document.querySelector("tbody").append(tr);
    }

    function markcompleted(el){
        
        completed.push(el);
        localStorage.setItem("comdata",JSON.stringify(completed));
        console.log(completed)
    }
