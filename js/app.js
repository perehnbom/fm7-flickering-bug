var myApp=new Framework7();

var count = 0;
function increment(){
	setTimeout(function(){
		count++;
		Dom7('.counter').html('' + count);
		increment();
	}, 1000);
}

increment();