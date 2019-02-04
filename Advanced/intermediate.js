$(document).ready(function(){
	//Advanced Exercise 1: Replacing all links in the index with codefactory. With the
	//attribute change selector.
	$("a[href]").attr("href", "http://www.codefactory.wien");


	//Question 2: changing the code tab to red. 
	$("code").css("color", "red");

	//Qeustion 3: Adding to the OL LI the background colour. 
	$("ol li").css("background-color", "#2a7b90");

	//Question 4: To put in text placeholder to the form. So grabbing the element, adding text.
	$("textarea").text("Express your Opinion");

	//Question 5: Replace the image with a new given image.
	$("img[src]").attr("src", "https://www.codefactory.wien/wp-content/uploads/2018/03/codefactory-vienna-footer-h.png");

	//Question 6: make the background orange, and font style as italic. 
	$("blockquote").css({"background-color": "orange", "font-style": "italic"});


	//Question 7: Changing the color of the wording logo, we have to do it in two lines as there are two different elements
	//to target. 
	$("h1#logo").css("color", "black");
	$("h1 span").css("color", "white");


	//Question 8: Remove the date from the page.
	$(".date").remove();

	
	//Question 9: Add to the sidebar the following three items. What we did was use append for all three adding 
	//new h1's and the content.
	$("#sidebar").append("<h1>New Templates</h1>");
	$("#sidebar").append("<h1>Order Template</h1>");
	$("#sidebar").append("<h1>Contact Us</h1>");


	//Question 10: 
	//$("#sidebar &quot;").text("When someone says: 'I want a programming language in which I need only to say what I wish, and done', give him a lollipop.");

	//For this, we are using and focuson on the p, but then adding the contains....in order to target the actual words.
	//as in this instance, there is no real other way to target the paragraph. 
	$("p:contains('Be not afraid')").text("When someone says: 'I want a programming language in which I need only to say what I wish, and done', give him a lollipop.");


});