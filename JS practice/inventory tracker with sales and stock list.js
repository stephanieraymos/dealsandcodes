/* INSTRUCTIONS
To run this file, click in the Console below and type: node 2_product.js 
If the console isn't visible, click the View menu above and choose Show Console.

You can clear the console by typing `clear` and pressing enter.

If your program is stuck in an infinite loop, you can break out of the program by typing ctrl + C.
*/

// 1. Create an object named product, with the following 3 properties. 
// Make up the values for the properties, just make sure the inventory is a whole number (it's the number of that product currently in stock) and unit_price is a floating point number like 45.99
// -- name
// -- inventory
// -- unit_price
// before moving to the next step, make sure you've created the object correctly by logging it to the console like this: console.log(product)

// 2. Create a function named addInventory(). The function should accept 2 parameters -- the product object, and the number to add to the inventory. The function adjusts the product object's inventory property by adding the number passed into the function. 
// For example, if the inventory of the product is currently 2, calling addInventory(product, 3) will set the value of inventory to 5
/* Add a console.log() message to the function that includes a message that looks something like this:
"3 chairs added to the inventory"
In this example, "chair" is the name of the product.
*/

// 3. Call the addInventory() function


// 4. Create a function named processSale(). The function should accept 2 parameters -- the product object, and the number to of products that were sold. The function adjusts the product object's inventory property by subtracting the number passed into the function. The function also returns the total sale which is the unit_price multiplied by the number passed into the function
// For example, if the inventory of the product is currently 5 and the unit_price is 10, calling processSale(product, 2) will set the value of inventory to 3 and return the value of 20. 
/* Add a console.log() message to the function that includes a message that looks something like this:
"2 chairs sold"
In this example, "chair" is the name of the product.
*/


/* 5. Call the processSale() function. When you call the processSale() function log the return value to the console so the message looks something like this:
"Total sale: $20"
*/


// 6. Run your code by typing node 2_product.js in the console below

let product = {
  name: "Zox strap",
  inventory: 201,
  unit_price: 13.00
};


function addInventory(prod, quantity){
  prod.inventory += quantity;
  console.log(quantity + " " + prod.name + "s added to the inventory.");
  console.log(prod.inventory + " " + prod.name + "s in stock.");
};

addInventory(product, 3);

function processSale(prod, quantity) {
 prod.inventory -= quantity;
 console.log(quantity + " " + prod.name + "s sold");
  return quantity * prod.unit_price;
};
  
  processSale(product, 21);
  console.log("Total sale: $" + processSale(product, 3));