
var settings = [
    {color:"orange",backgroundColor:"#f37126", height:"30px", width:"30px"},
	{ color:"white",backgroundColor:"#FFF", height:"150px", width:"90px"},
	{color:"green",backgroundColor:"#3CAF50", height:"200px", width:"200px"},
	{color:"blue",backgroundColor:"#0014ff", height:"30px", width:"30px"}
	 
	
   ]
   
   
   var btn = document.getElementById("btn");
   var colorDiv = document.getElementById("colorDiv");
   
   
 
  var obj;
   var i = 0;
   
   function changeColor(){
  
      obj = settings[i];
	 console.log(obj);
	 for(var key in obj){
	 if(key=="color"){
	  colorDiv.innerHTML =obj[key];
	  
	 }
	 
	 if(key=="backgroundColor"){
	 colorDiv.style.backgroundColor = obj[key];
	     console.log(key)}
	      
	      
		
		  

		 }
		   i++;
		   if(i==settings.length){
				i=0
			
			}
		  
		   }
		
	btn.addEventListener("click",changeColor);
   
