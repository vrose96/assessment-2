///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

const summedPrice = cart.reduce((sum, food) => sum + food.price, 0);
console.log(summedPrice)

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

const calcFinalPrice = (cartTotal, couponValue, tax) => cartTotal + (cartTotal * tax) - couponValue;

const cartTotal = 26.97;
const couponValue = 10
const tax = 0.06; 

const finalPrice = calcFinalPrice(cartTotal, couponValue, tax);
console.log(finalPrice);

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
//Name: To store the customer's first and last name and make sure the order is with the correct name.
//Data Type: String to represents textual data.

//Email: To store the customer's email address for communication and order.
//Data Type: String to represents textual data.

//Phone Number: To store the customer's phone number for order confirmation and delivery coordination if needed.
//Data Type: String, as it represents numerical data. It's important to note that there may be some special characters.

//Address: To store the customer's delivery address, which includes street, city, state, and zip code.
//Data Type: Object, with sub-properties like street, city, state, and zipCode, where each sub-property is a string.

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

const customer = {
    name: 'Viv Rose',
    email: 'vivrose@gmail.com',
    phoneNumber: '1234567890',
    address: {
        street: '123 Fake Dr.',
        city: 'Murray',
        state: 'Utah',
        zipCode: '84123'
    }
};
