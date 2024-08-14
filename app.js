function fromEuroToDollar(euro){
    return euro * 1.07;
}

function fromDollarToYen(dollar){
    let euro = dollar / 1.07;
    let yen = euro * 156.5;
    return yen; 
}

function fromYenToPound(yen){
    let euro = yen / 156.5;
    let pound = euro * 0.87;
    return pound;
}
module.exports = {fromYenToPound, fromEuroToDollar , fromDollarToYen};