window.onload = () => {
    let bmi_btn = document.querySelector("#bmi_btn");
    
    //pnt_btn.addEventListener("click", numberGame);
};




//NETS VS KNICKS
//Stores the scores from each round into an array then averages the 
//scores after 3 games to declare an outcome

var netsPnts = [];
var knicksPnts = [];

function NetsandKnicks(nets, knicks) {

    netsPnts.push(nets);
    knicksPnts.push(knicks);

    var net_total = 0;
    var knick_total = 0;

    for(var i = 0; i < netsPnts.length; i++) {
        net_total += netsPnts[i];
        knick_total += knicksPnts[i];
    
    }
     

    let avgNet = net_total / netsPnts.length;  
    let avgKnick = knick_total / knicksPnts.length;


    if (netsPnts.length > 2){
        if (avgNet == avgKnick){
            console.log(`DRAW!`);
        }else if(avgNet > avgKnick){ 
            if (avgNet >= 100){
                console.log(`NETS WIN!`);
            }else { 
                console.log(`No one wins, The Nets has had most points, but not enough to win. Shame.`)
            }
        }else{
            if (avgKnick >= 100){
                console.log(`KNICKS WIN!`);
            }else { 
                console.log(`No one wins, The Knicks had the most points, but not enough to win. Shame.`)
            }
        }
    }
}

NetsandKnicks(80, 80);
NetsandKnicks(82, 90);
NetsandKnicks(100, 106);
netsPnts = [];
knicksPnts = [];
NetsandKnicks(98, 108);
NetsandKnicks(110, 92);
NetsandKnicks(101, 110);
netsPnts = [];
knicksPnts = [];
//draw
NetsandKnicks(100,100);
NetsandKnicks(100,100);
NetsandKnicks(100,100);



//Tip

function BillTip(bill){
    let tip = 0; 
    let final_bill = 0; 

    function calc(p, b){
      
        tip = Number((p/b)*100).toFixed(2);
        final_bill = parseInt(bill) + parseFloat(tip); 
        console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${final_bill}`);

    }

    switch(true){
        case (bill < 30):
            //1% tip
            calc(1, bill);
            break; 
        case (bill > 30 && bill < 100): 
           calc(15, bill);
            break; 
         case (bill > 100): 
            calc(20, bill);
    }

}


BillTip(285);
BillTip(26);
BillTip(90);


//Temp Convertor with Arrows


const ConvertCelsiusToFahrenheit = (temp) => {
     let fah = (temp * 9/5) + 32;
     console.log(`${temp}C is ${fah.toFixed(1)}F`)
}

const ConvertFahrenheitToCelsius = (temp) => {
    let cels = (temp - 32) * 5 / 9;
    console.log(`${temp}F is ${cels.toFixed(1)}C`)
}

//cels to fah
ConvertCelsiusToFahrenheit(100);
ConvertCelsiusToFahrenheit(0);
ConvertCelsiusToFahrenheit(10);

//fah to cels
ConvertFahrenheitToCelsius(32);
ConvertFahrenheitToCelsius(10);
ConvertFahrenheitToCelsius(102);