let customer = { custName: "Smith", location: "Sydney"};

let order = {orderDesc: "iPhone 17", orderDate: "2025-09-17"};

let customerOrderMap = new Map();

customerOrderMap.set(customer, order);

customerOrderMap.get(customer);

console.log(customerOrderMap);

console.log(customerOrderMap.get(customer));
