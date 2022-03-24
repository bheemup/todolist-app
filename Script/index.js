
document.addEventListener("submit",print);


function print(){
    event.preventDefault();
    var arr = JSON.parse(localStorage.getItem("tododata")) || [];
   var name1= document.querySelector("#name").value;
   var qunty =document.querySelector("#qty").value;
   var prio =document.querySelector("#priority").value;
 
 
   var obj ={
       itemname: name1,
       itemqty:qunty,
       itemprio:prio
   };

   arr.push(obj);

   console.log(JSON.parse(localStorage.getItem("tododata"))) 

    localStorage.setItem("tododata",JSON.stringify(arr))
}