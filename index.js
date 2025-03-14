// Write your solution in this file!
// 1. Global variable customerName
var customerName = 'bob';

// 2. Function to uppercase customerName
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// 3. Function to set bestCustomer
function setBestCustomer() {
  bestCustomer = 'not bob'; // No 'var', 'let', or 'const' makes it global
}

// 4. Function to overwrite bestCustomer
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

// 5. Constant for least favorite customer
const leastFavoriteCustomer = 'someone';

// This function tries to change a const variable, which is not allowed
function changeLeastFavoriteCustomer() {
  // This will throw an error
  leastFavoriteCustomer = 'new person';
}
