
// feetToMile

function feetToMile(inputFeet){

    var mile = inputFeet / 5280;

}

    var mileResult = feetToMile(7500);

    console.log(mileResult);

// woodCalculator 

function woodCalculator(chair,tabel,bed){

    var chairCount = chair;
    var tabelCount = tabel * 3;
    var bedCount = bed * 5;
    var totalCoutn = chairCount + tabelCount + bedCount;

    return totalCoutn;
}

    var woodCalculatorResult = woodCalculator(5,2,4);

    console.log(woodCalculatorResult);


// brickCalculator 

function brickCalculator(inputBrick){

    var perFloorIt = inputBrick;

    if(perFloorIt <=10){

        return perFloorIt * 15 * 1000;


    }else if(perFloorIt >=11 && perFloorIt<=20){

        return (perFloorIt - 10) * (12*1000) + (150000);

    } else if( perFloorIt > 20){

        return (perFloorIt - 20) * (10*1000) + (270000);

    }else{

        return "Please check input";

    }
   
}

var resultBrick = brickCalculator();

console.log(resultBrick);

// tinyFriend 

function tinyFriend(friendName){

    var smallName = friendName[0];

    for(var i = 0; i <friendName.length;i++){

        var friendNumbers = friendName[i];

        if(friendNumbers.length < smallName.length){

            smallName = friendNumbers;
        }
    }

    return smallName;
}

var friendResult =  tinyFriend([]);

console.log(friendResult);





