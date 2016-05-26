(function(){
var task1 = {
	render: function(){
		document.getElementById("screenX").textContent = window.screenX;
		document.getElementById("screenY").textContent = window.screenY;
		document.getElementById("screenWidth").textContent = window.innerWidth;
		document.getElementById("screenHeight").textContent = window.innerHeight;
		document.getElementById("location").textContent = window.location.pathname;
	},
	resize: function(){
		window.addEventListener("resize", this.render);
	}, 
	
	devInfo: function(){
		var btnDev = document.getElementById("dev-info");
		btnDev.addEventListener("click", function(){
			var nameText = ["Nitesh Chulani", "Web Developer"]; 
			var nameLink = "<a href='https://github.com/nickchulani99/ITE220' target='_blank'>https://github.com/nickchulani99/ITE220</a>";
			var txt = "" + nameText[0] + "" + "<br>" + nameText[1] + "" + "<br>" + nameLink;
			var nameElement = document.getElementById("dev-info-container").innerHTML = txt;
			});
		}
		
}
task1.render();
task1.resize();
task1.devInfo();
})();