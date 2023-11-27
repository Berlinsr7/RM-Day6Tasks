class Circle
{
    constructor(radius, color)
    {
        this.Radius = radius;
        this.Color = color;
    }
    
    getRadius(){ return this.Radius;}
    set changeRadius(radius){ this.Radius = radius; }
    getColor(){ return this.Color; }
    set changeColor(color){ this.Color = color; }

    get Area()
    {
        return (Math.PI*Math.pow(this.Radius,2)).toFixed(2);
    }
    get Circumference()
    {
        return (2*Math.PI*this.Radius).toFixed(2);
    }
}

var circle = new Circle(5,"Blue");

console.log(`
Radius : ${circle.Radius}
Color : ${circle.Color}
Area of the Cicle is : ${circle.Area}
The Circumference of the ciclr is ${circle.Circumference}`);

circle.changeRadius = 10;
circle.changeColor = "Green";

console.log(`
After Changing the radius and Color
---------------------------------------
Radius : ${circle.Radius}
Color : ${circle.Color}
Area of the Cicle is : ${circle.Area}
The Circumference of the ciclr is ${circle.Circumference}`);
