// -----------------ARRAY-----------------
var phonesarray = ['iphone x', 'iphone 8' , 'samsung s9', 'samsung s8','iphone 11'];
// Converts single arrays to strings
phoneslicex = phonesarray[0].toString();
phoneslice8 = phonesarray[1].toString();
phoneslices9 = phonesarray[2].toString();
phoneslices8 = phonesarray[3].toString();
phoneslices11 = phonesarray[4].toString();

var price = [1000, 700, 800, 600,2000];
var costprice=  [900, 600, 500, 400, 2000];

// -----------------OBJECTS-----------------
var iphonex = {
  Name: phonesarray[0],
  RetailPrice: price[0],
  CostPrice: costprice[0],
  UnitsSold:0,
  Release:true
};
// console.log(iphonex);

var iphone8 = {
  Name: phonesarray[1],
  RetailPrice: price[1],
  CostPrice: costprice[1],
  UnitsSold:0,
  Release:true
};
// console.log(iphone8);

var samsungs9 = {
  Name: phonesarray[2],
  RetailPrice: price[2],
  CostPrice: costprice[2],
  UnitsSold:0,
  Release:true

};
// console.log(samsungs9);

var samsungs8 = {
  Name: phonesarray[3],
  RetailPrice: price[3],
  CostPrice: costprice[3],
  UnitsSold:0,
  Release:true
};
// console.log(samsungs8);

var iphone11 = {
  Name: phonesarray[4],
  RetailPrice: price[4],
  CostPrice: costprice[4],
  UnitsSold:0,
  Release:false
};
// console.log(iphone11);

// -----------------Intro-----------------
var phoneChoice = prompt('What phone would you like to purchase today?');

// if statement to see if the name entered matches field insert + if phone release is TRUE
// -----------------BOOLEAN-----------------
if (iphonex.Name === phoneChoice && iphonex.Release === true) {
  alert('Lucky you we have some in stock');
}
else if (iphone8.Name === phoneChoice && iphone8.Release === true) {
  alert('Lucky you we have some in stock');
}
else if (samsungs9.Name === phoneChoice && samsungs9.Release === true) {
  alert('Lucky you we have some in stock');
}
else if (samsungs8.Name === phoneChoice && samsungs8.Release === true) {
  alert('Lucky you we have some in stock');
}
else if (iphone11.Name === phoneChoice && iphone11.Release === true) {
  alert('Lucky you we have some in stock');
}else {
  var nostock = prompt(`Unfortunately this phone is not released into the market or we have None in stock! HOWEVER, we have alternatives such as ${phonesarray}. Would you like to continue?`);

  // If they want to carry on they are asked again which phone they want, otherwise system says goodbye
  if (nostock === 'no'){
    window.close();
  }
  else{
    var phoneChoice = prompt('What phone would you like to purchase?');
  }
}
// Place phone in same variable as direct 'i want a phone '
var phone = phoneChoice;

var quan = prompt('How many would you like? \nNote: 3 phones can be purchased max!');

if(quan > 3){
  alert('Sorry only 3 items can be purchased');
}else{
  alert(`Great! The total cost will be processed for you now...`);
}

// the amount required is multiplied by the retail cost of the product (gathered from the object)
if (phone === phoneslicex) {
  alert(`The total cost today will be ${quan * iphonex.RetailPrice}`);
}
else if(phone === phoneslice8){
  alert(`The total cost today will be ${quan * iphone8.RetailPrice}`);
}
else if(phone === phoneslices9){
  alert(`The total cost today will be ${quan * samsungs9.RetailPrice}`);
}
else if(phone === phoneslices8){
  alert(`The total cost today will be ${quan * samsungs8.RetailPrice}`);
}
else{
  alert('processin error');}

  // Has payment been taken section!!
  alert('Payment Processing... Please Wait');

  alert('Payment Processed, Have a Great Day!');

  //window.close();
