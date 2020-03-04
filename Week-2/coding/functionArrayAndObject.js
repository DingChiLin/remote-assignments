function avg(data){
    const total_price = data.products.reduce((sum, obj) => {
        return sum += obj.price;  
    }, 0);

    return total_price / data.products.length;
}

const result1 = avg({
    size:3, 
    products:[
        {
            name:"Product 1",
            price:100
        },
        {
            name:"Product 2",
            price:700
        },
        {
            name:"Product 3",
            price:250
        }
    ]
}); // show the average price of all products

console.log(result1);
