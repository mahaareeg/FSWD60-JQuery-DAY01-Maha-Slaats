$("form").submit(function(e) {

	e.preventDefault();
	
	
	

});


$(document).ready(function(){
	
	//Question 1 applied, here we are removing the form. 
	//$("#myform").remove()

	//Question 2. This is the long way of doing the exercise. create 5 divs in one line. this creates a value
	//to be div 1 = 0, div 2 = 1 etc. I have darkened it out as it is actually a not so good solution. 
    //$("article").append(["<div></div>","<div></div>","<div></div>","<div></div>","<div></div>"])
    
    //Question 2 alternative quick solution. Create a FOR loop. Then we create our divs, and what follows is actually question
    //question 4 which is then in the loop, adding a class = box on each div. The loop drives off of the string 0, 1, 2, 3, 4, 5 of the
    //divs numbering.  
	for(i = 0; i<5 ; i++){
	$("article").append("<div></div>");
	$("article div:eq("+i+")").addClass("box");
}
	//Question 3. We want to grab then the input, target the ID MSG and then use attr to change the attribte value, we
	//select value with a comma between and then what our new value will be. 
	$("input#msg").attr("value","search for");
	//Question 5. We updated the weblink, again using the attribute adjustment. Ultimately targeting the p and
	//and the a for the web reference. 
	$("p a").attr("href","https://www.codefactory.wien");







});
