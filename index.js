// Write your solution in this file!
var customerName = `bob`;
var bestCustomer;
const leastFavoriteCustomer = `very bad`;

function upperCaseCustomerName(){
    customerName=customerName.toUpperCase()
    return customerName;
}

function setBestCustomer(){
    bestCustomer="not bob"
    return bestCustomer;
}

function overwriteBestCustomer(){
    bestCustomer="maybe bob";
}

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer=`not that good`;
}