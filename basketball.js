const rice = {
    wheat : 5,
    ragi : 7,
    paper : 20
};

const price = {
    wheat : 10,
    ragi : 20,
    paper : 1
};

function TotalPrice(rice,price)
{
    sum = 0;
    for(const product in rice)
    {
        if(rice.hasOwnProperty(product)&&price.hasOwnProperty(product))
        {
            sum+=rice[product]*price[product];
        }
    }
    
    alert("Basket Sum = "+sum);
    return sum;
}
function sum()
{
    TotalPrice(rice,price)
}