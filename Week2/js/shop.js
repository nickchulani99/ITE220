var product =[
	"Brooklyn T-shirt White",
	"Brooklyn T-shirt Black",
	"Apple WAtch",
	"Android Phone"
];
var prices = [10,10,199,159];
var productText ="";
var productElement = document.getElementById("product-list");

productText += "<li class='list-group-item'><span class='badge'>$" + prices[0]+"</span>" + product[0]+"</li>";
productText += "<li class='list-group-item'><span class='badge'>$" + prices[1]+"</span>" + product[1]+"</li>";
productText += "<li class='list-group-item'><span class='badge'>$" + prices[2]+"</span>"  + product[2]+"</li>";		
productText += "<li class='list-group-item'><span class='badge'>$" + prices[3]+"</span>" + product[3]+"</li>";

productElement.innerHTML = productText;

totalPrice = prices[0]+prices[1]+prices[2]+prices[3];

var totalPriceElement = document.getElementById("total-price");
totalPriceElement.textContent=totalPrice;



var totalPrice = 0;
    totalPrice = prices[0] + prices[1] + prices[2] + prices[3];

    var dicount = 0;
   dicount = totalPrice * 0.25;

   var finalPrice = totalPrice - dicount;


var totalpriceElement = document.getElementById("total-price");
    totalpriceElement.textContent = finalPrice





var today = new Date()
var curHr = today.getHours();
var greet;
if(curHr<12){
      greet= "Good morning";
}else if(curHr<18){
      greet="Good afternoon";
}else{
      greet= "Good evening";
}

document.getElementById("hello").innerHTML= "" +greet+"'";

var customerName="Nitesh";
var price= 10;
var quantity= 2;

var customerElement = document.getElementById("customer-name");
customerElement.textContent = customerName;

