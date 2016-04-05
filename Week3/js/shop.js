var shop = {
  customerName:"Nitesh",
  totalPrice:0,
  products:[
  "Brooklyn T-shirt White",
  "Brooklyn T-shirt Black",
  "Apple Watch",
  "Android Phone"
  ],
  prices: [10,10,199,159],
  displayCustomerName: function(){
    var customerElement = document.getElementById("customer-name");
    customerElement.textContent=this.customerName;
  },

  displayProductList: function(){
    var productsText = "";
    var productsElements = document.getElementById("product-list");

    productsText += "<li class='list-group-item'><span class='badge'>$"+ this.prices[0]+"</span>" + this.products[0]+ "</li>";
    productsText += "<li class='list-group-item'><span class='badge'>$"+ this.prices[1]+"</span>" + this.products[1]+ "</li>";
    productsText += "<li class='list-group-item'><span class='badge'>$"+ this.prices[2]+"</span>" + this.products[2]+ "</li>";
    productsText += "<li class='list-group-item'><span class='badge'>$"+ this.prices[3]+"</span>" + this.products[3]+ "</li>";

    productsElements.innerHTML = productsText;
  },


calculateTotalPrice:function() {
  return(this.prices[0] + this.prices[1]+ this.prices[2]+ this.prices[3])*0.75;
},

  displayTotalPrice: function(){
    this.totalPrice=this.calculateTotalPrice();
    var totlePriceElement = document.getElementById("total-price");
    totlePriceElement.textContent = this.totalPrice;
}

}
shop.displayCustomerName();
shop.displayProductList();
shop.displayTotalPrice();

























// var product =[
// 	"Brooklyn T-shirt White",
// 	"Brooklyn T-shirt Black",
// 	"Apple WAtch",
// 	"Android Phone"
// ];
// var prices = [10,10,199,159];
// var productText ="";
// var productElement = document.getElementById("product-list");

// productText += "<li class='list-group-item'><span class='badge'>$" + prices[0]+"</span>" + product[0]+"</li>";
// productText += "<li class='list-group-item'><span class='badge'>$" + prices[1]+"</span>" + product[1]+"</li>";
// productText += "<li class='list-group-item'><span class='badge'>$" + prices[2]+"</span>"  + product[2]+"</li>";		
// productText += "<li class='list-group-item'><span class='badge'>$" + prices[3]+"</span>" + product[3]+"</li>";

// productElement.innerHTML = productText;

// totalPrice = prices[0]+prices[1]+prices[2]+prices[3];

// var totalPriceElement = document.getElementById("total-price");
// totalPriceElement.textContent=totalPrice;



// var totalPrice = 0;
//     totalPrice = prices[0] + prices[1] + prices[2] + prices[3];

//     var dicount = 0;
//    dicount = totalPrice * 0.25;

//    var finalPrice = totalPrice - dicount;


// var totalpriceElement = document.getElementById("total-price");
//     totalpriceElement.textContent = finalPrice





// var today = new Date()
// var curHr = today.getHours();
// var greet;
// if(curHr<12){
//       greet= "Good morning";
// }else if(curHr<18){
//       greet="Good afternoon";
// }else{
//       greet= "Good evening";
// }

// document.getElementById("hello").innerHTML= "" +greet+"'";

// var customerName="Nitesh";
// var price= 10;
// var quantity= 2;

// var customerElement = document.getElementById("customer-name");
// customerElement.textContent = customerName;

