/*onst fs = require('fs');

// Read the data from users.json and products.json
const usersData = JSON.parse(fs.readFileSync('users.json', 'utf8'));
const productsData = JSON.parse(fs.readFileSync('products.json', 'utf8'));

// Extract the IDs from usersData and productsData with their respective types
const userIds = usersData.map(user => ({ id: user.id }));
const productIds = productsData.map(product => ({ pid: product.pid}));

// Combine the IDs
const combinedIds = [userIds, productIds];

// Write the combined IDs to a new JSON file
fs.writeFileSync('combinedIds.json', JSON.stringify(combinedIds, null, 2));

console.log('Combined IDs have been written to combinedIds.json');

*/



/*

const data = [
    {
        "id": 101,
        "pid": 201
    },
    {
        "id": 102,
        "pid": 202
    },
    {
        "id": 103,
        "pid": 203
    },
    {
        "id": 104,
        "pid": 204
    }
];

// Sample data for users and products
const usersData = [
    {
        "id": 101,
        "name": "Harichandana",
        "age": 30,
        "email": "harichandana@gmail.com"
    },
    {
        "id": 102,
        "name": "Vishnuvandana",
        "age": 25,
        "email": "vishnuvandana@gmail.com"
    }
];

const productsData = [
    {
        "pid": 201,
        "name": "Smartphone",
        "price": 499,
        "category": "Electronics"
    },
    {
        "pid": 202,
        "name": "Laptop",
        "price": 999,
        "category": "Electronics"
    },
    {
        "pid": 203,
        "name": "T-shirt",
        "price": 19.99,
        "category": "Clothing"
    },
    {
        "pid": 204,
        "name": "Sneakers",
        "price": 59.99,
        "category": "Shoes"
    }
];

const combine = require('./combine.json');
const findUserDataById = (id) => {
    return usersData.find(user => user.id === id);
};

// Function to find product data by PID
const findProductDataByPid = (pid) => {
    return productsData.find(product => product.pid === pid);
};

// Print the data using ID and PID
data.forEach(item => {
    const userData = findUserDataById(item.id);
    const productData = findProductDataByPid(item.pid);
    console.log(`ID: ${item.id}, PID: ${item.pid}`);
});




*/









const fs = require('fs');

// Read the data from users.json and products.json
const usersData = JSON.parse(fs.readFileSync('users.json', 'utf8'));
const productsData = JSON.parse(fs.readFileSync('products.json', 'utf8'));

const combinedData = require('./usersProducts.json');

// Print data based on id and pid
combinedData.forEach(({ id, pid }) => {
  const user = usersData.find(user => user.id === id);
  const product = productsData.find(product => product.pid === pid);
  
  if (user && product) {
   console.log(`User: ${user.name},${user.age}, ${user.email}, Product: ${product.name},${product.price},${product.category}`);
  } else {
   console.log(`Data not found for id: ${id} and pid: ${pid}`);
  }
});
