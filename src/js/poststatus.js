// All the different status's to post!
var message = ["I am a teapot", 
"I am a well formed teapot", 
"I am a teapot and I have a spout",
"I am a pot that houses tea, colloquially known as a teapot", 
"I am a pot full of tea - a teapot you could say",
"They said I could be anything I wanted to be, so I became a teapot",
"I'm a little teapot, Short and stout, Here is my handle, Here is my spout, When I get all steamed up, I just shout, Tip me over and pour me out"
];

$( document ).ready(function() {

	// Find the status box and fill with message (assuming fb only has one on homepage)
	$('textarea').each(function(){
   		$(this).val(message[Math.floor(Math.random()*message.length)]);
	});

	// Find the post button, press it and let the background script know we're done.
	$('button').each(function(){
		if($(this).text() === "Post") {
   			$(this).trigger('click');
		}
   		chrome.runtime.sendMessage({greeting: "hello"}, function(response) {});
	});

});

