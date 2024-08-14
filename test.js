test('1 euro is 1.07 dollars', function(){
    const {fromEuroToDollar} = require('./app.js');

    let change = fromEuroToDollar(1);
    expect(change).toBe(1.07);
});


test('1.07 dollar is 156.5 yens', function(){
    const {fromDollarToYen} = require('./app.js');

    let change = fromDollarToYen(1.07);
    expect(change).toBeCloseTo(156.5, 1);
});


test('156.5 yen is 0.87 pounds', function(){
    const {fromYenToPound} = require('./app.js');

    let change = fromYenToPound(156.5);
    expect(change).toBeCloseTo(0.87, 1);
});