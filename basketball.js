let basket = {
    wheat : 5,
    ragi : 7,
    paper : 20
};

let price = {
    wheat : 10,
    ragi : 20,
    paper : 1
};

function TotalPrice(basket,price)
{
    sum = 0;
    for(let product in basket)
    {
        if(basket.hasOwnProperty(product)&&price.hasOwnProperty(product))
        {
            sum+=basket[product]*price[product];
        }
    }
    
    alert("Basket Sum = "+sum);
    return sum;
}
alert(TotalPrice({'wheat':3,'ragi':2},{'wheat':2.3,'ragi':.90,'paper':99}))
