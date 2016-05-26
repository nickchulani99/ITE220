(function(){
var game = {
randomNumber: Math.floor(Math.random() * 23),
	init: function(){
		this.bindEvent();

},
bindEvent: function() {
	var self = this;
	var button1 = document.getElementById("one");
	button1.addEventListener("click",this.clickNumberButton);
	document.getElementById("two").addEventListener("click", this.clickNumberButton);
	document.getElementById("three").addEventListener("click", this.clickNumberButton);
	document.getElementById("four").addEventListener("click", this.clickNumberButton);
	document.getElementById("five").addEventListener("click", this.clickNumberButton);
	document.getElementById("six").addEventListener("click", this.clickNumberButton);
	document.getElementById("seven").addEventListener("click", this.clickNumberButton);
	document.getElementById("eight").addEventListener("click", this.clickNumberButton);
	document.getElementById("nine").addEventListener("click", this.clickNumberButton);
	document.getElementById("zero").addEventListener("click", this.clickNumberButton);
	var guessBtn = document.getElementById("guess");
	guessBtn.addEventListener("click",function(){
		self.guess(self);
	});
},
clickNumberButton: function(e){
	//alert("button one is clicked.");
	var userNumber = document.getElementById("userNumber");
	userNumber.value += e.target.textContent;
},
	guess:function(self){
		var userNumber = document.getElementById("userNumber");
		var alertMsg = document.getElementById("alertContainer");
		if (userNumber.value == self.randomNumber) {
		alertMsg.innerHTML = '<div class="alert alert-success alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><strong>Congratulations!</strong> Correct number.</div>';

		}else if (userNumber.value < self.randomNumber)
		{
		alertMsg.innerHTML = '<div class="alert alert-danger alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><strong>Oh no!</strong> Your guessing number too low.</div>';
		userNumber.value= "";
		
		}else {
		alertMsg.innerHTML = '<div class="alert alert-danger alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><strong>Oh no!</strong> Your guessing number too high.</div>';
		userNumber.value= "";

		}
	}
};

game.init();

})();