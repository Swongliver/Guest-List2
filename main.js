var list=[];
var namesWithoutComma=[];
var displayStudents=[];
var names="";
function submit1(){
    
    
   
    names=document.getElementById("name_of_the_student_1").value;
    list.push(names);  
    list.sort();
    
    
        displayStudents.push("<h4>" + names + "</h4>");
        
    
    document.getElementById("list").innerHTML=displayStudents.join(" ");
    console.log(displayStudents)
   
    
}
function sorting(){
    displayStudents.sort();
    
    
       
                 
     document.getElementById("sortList").innerHTML=displayStudents.join(" ");   
}
function show1(){
   
         
       
                 
     document.getElementById("showList").innerHTML=displayStudents.join(" ");
     document.getElementById("sort_button").style.display="inline";
}
function search()
{

        var s= document.getElementById("search1").value;
        var found=0;
        var j;
        for( j=0; j<displayStudents.length; j++)
     {
         if(s == list[j]){
            found=found+1;
         }
     }
     document.getElementById("search_result").innerHTML="name found "+found+" time/s";
      console.log("found name" +found+" time/s")
}