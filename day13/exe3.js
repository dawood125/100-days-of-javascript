let orders = [
    { id: 1, product: "Laptop", price: 1200, status: "delivered" },
    { id: 2, product: "Phone", price: 800, status: "pending" },
    { id: 3, product: "Tablet", price: 600, status: "delivered" },
    { id: 4, product: "Watch", price: 300, status: "cancelled" },
    { id: 5, product: "Headphones", price: 150, status: "delivered" },
];


let totalRevenue=orders.filter((order)=> order.status== "delivered").reduce((total,ordPrice)=> total+(ordPrice.price),0);

console.log(totalRevenue);