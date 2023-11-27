class CalculateUberPrice
{
    constructor(distance)
    {
        this.Distance = distance;
    }
    TotalCost()
    {
        return 50 + (this.Distance * 8);
    }
}

var distance = 10;
var price = new CalculateUberPrice(distance);
console.log(`
The total fare for the travelled distance of ${distance}km is ₹${price.TotalCost()}.  
                 ****Have a nice day*****`);