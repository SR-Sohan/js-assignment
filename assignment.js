
// feetToMile

    function feetToMile(inputFeet){

        if(inputFeet <= -1){

            return "Warnning! This is wrong input";
        }else{

            var mile = inputFeet / 5280;
            return mile;
        }
    
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

        return "Warnning! you mistake something";

    }
   
}

var resultBrick = brickCalculator();

console.log(resultBrick);




// tinyFriend 

function tinyFriend(friendName){

    var smallName = friendName[0];

    for(var i = 0; i <friendName.length;i++){

        var friendSerial = friendName[i];

        if(friendSerial.length < smallName.length){

            smallName = friendSerial;
        }
    }

    return smallName;
    
}

var friendResult =  tinyFriend(['sohan','jitu','dev','nahid']);

console.log(friendResult);





