/*
function shuffle(o) {
    for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}


    //one trial.
    var r = {};

    //all trials for one experiment.
    var claimData = [];

    //loops through 6 IAC blocks per participant.
    for(k=1; k<7; k++)
    {
        //loops through 10 trials per block.
        for(j=0; j<10; j++)
        {
            r['claimnr'] = j+1;
            r['item'] = items[j];
            r['amount'] = amounts[j];
            r['pcode'] = pcodes[j];
            r['accountnr'] = accountnrs[j];
            //$('body').append('<br><pre>'+JSON.stringify(r, null, ' '));
            claimData.push(r);
        }
        shuffle(items);
        shuffle(amounts);
        shuffle(pcodes);
        shuffle(accountnrs);
    }
*/ 

var claimnrs = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
/*var keys  = ['item', 'amount', 'pcode', 'accountnr'];
var items = ["milk", "coffee", "lunch", "dinner", "taxi", "hotel", "flight", "visit", "seminar", "printing"];
var amounts = [11.49, 52.64, 42.21, 39.47, 95.32, 40.85, 44.86, 78.90, 12.75, 59.97];
var pcodes = ["KBB654", "RXX711", "LMH755", "UGG992", "BRV477", "MVI029", "VPH581", "ZKF381", "HJE688", "IDQ133"];
var accountnrs = [883416, 468950, 591345, 753041, 488439, 144949, 973789, 121651, 636448, 330494];*/

var keys  = ['item', 'amount', 'pcode', 'accountnr'];
var amounts = [11.49, 52.64, 42.21, 39.47, 95.32, 40.85, 44.86, 78.90, 12.75, 59.97];
var accountnrs = [883416, 468950, 591345, 753041, 488439, 144949, 973789, 121651, 636448, 330494];

var claimData = [
{
 "claimnr": 0,
 "amount-1": 11.49,
 "acccode-1": 883416,
 "amount-2": 52.64,
 "acccode-2": 468950
},

{
 "claimnr": 1,
 "amount-1": 11.49,
 "acccode-1": 883416,
 "amount-2": 52.64,
 "acccode-2": 468950
},

{
 "claimnr": 2,
 "amount-1": 52.64,
 "acccode-1": 468950,
 "amount-2": 42.21,
 "acccode-2": 591345
},

{
 "claimnr": 3,
 "amount-1": 42.21,
 "acccode-1": 591345,
 "amount-2": 39.47,
 "acccode-2": 753041
},

{
 "claimnr": 4,
 "amount-1": 39.47,
 "acccode-1": 753041,
 "amount-2": 95.32,
 "acccode-2": 488439
},

{
 "claimnr": 5,
 "amount-1": 95.32,
 "acccode-1": 488439,
 "amount-2": 40.85,
 "acccode-2": 144949
},

{
 "claimnr": 6,
 "amount-1": 40.85,
 "acccode-1": 144949,
 "amount-2": 44.86,
 "acccode-2": 973789
},

{
 "claimnr": 7,
 "amount-1": 44.86,
 "acccode-1": 973789,
 "amount-2": 78.9,
 "acccode-2": 121651
},

{
 "claimnr": 8,
 "amount-1": 78.9,
 "acccode-1": 121651,
 "amount-2": 12.75,
 "acccode-2": 636448
},

{
 "claimnr": 9,
 "amount-1": 12.75,
 "acccode-1": 636448,
 "amount-2": 59.97,
 "acccode-2": 330494
},

{
 "claimnr": 10,
 "amount-1": 59.97,
 "acccode-1": 330494
},

{
 "claimnr": 1,
 "amount-1": 11.49,
 "acccode-1": 330494,
 "amount-2": 40.85,
 "acccode-2": 883416
},

{
 "claimnr": 2,
 "amount-1": 40.85,
 "acccode-1": 883416,
 "amount-2": 39.47,
 "acccode-2": 636448
},

{
 "claimnr": 3,
 "amount-1": 39.47,
 "acccode-1": 636448,
 "amount-2": 95.32,
 "acccode-2": 488439
},

{
 "claimnr": 4,
 "amount-1": 95.32,
 "acccode-1": 488439,
 "amount-2": 12.75,
 "acccode-2": 973789
},

{
 "claimnr": 5,
 "amount-1": 12.75,
 "acccode-1": 973789,
 "amount-2": 78.9,
 "acccode-2": 468950
},

{
 "claimnr": 6,
 "amount-1": 78.9,
 "acccode-1": 468950,
 "amount-2": 59.97,
 "acccode-2": 753041
},

{
 "claimnr": 7,
 "amount-1": 59.97,
 "acccode-1": 753041,
 "amount-2": 44.86,
 "acccode-2": 121651
},

{
 "claimnr": 8,
 "amount-1": 44.86,
 "acccode-1": 121651,
 "amount-2": 42.21,
 "acccode-2": 144949
},

{
 "claimnr": 9,
 "amount-1": 42.21,
 "acccode-1": 144949,
 "amount-2": 52.64,
 "acccode-2": 591345
},

{
 "claimnr": 10,
 "amount-1": 52.64,
 "acccode-1": 591345
},

{
 "claimnr": 1,
 "amount-1": 44.86,
 "acccode-1": 121651,
 "amount-2": 40.85,
 "acccode-2": 883416
},

{
 "claimnr": 2,
 "amount-1": 40.85,
 "acccode-1": 883416,
 "amount-2": 11.49,
 "acccode-2": 591345
},

{
 "claimnr": 3,
 "amount-1": 11.49,
 "acccode-1": 591345,
 "amount-2": 95.32,
 "acccode-2": 488439
},

{
 "claimnr": 4,
 "amount-1": 95.32,
 "acccode-1": 488439,
 "amount-2": 12.75,
 "acccode-2": 468950
},

{
 "claimnr": 5,
 "amount-1": 12.75,
 "acccode-1": 468950,
 "amount-2": 42.21,
 "acccode-2": 330494
},

{
 "claimnr": 6,
 "amount-1": 42.21,
 "acccode-1": 330494,
 "amount-2": 59.97,
 "acccode-2": 973789
},

{
 "claimnr": 7,
 "amount-1": 59.97,
 "acccode-1": 973789,
 "amount-2": 52.64,
 "acccode-2": 636448
},

{
 "claimnr": 8,
 "amount-1": 52.64,
 "acccode-1": 636448,
 "amount-2": 78.9,
 "acccode-2": 144949
},

{
 "claimnr": 9,
 "amount-1": 78.9,
 "acccode-1": 144949,
 "amount-2": 39.47,
 "acccode-2": 753041
},

{
 "claimnr": 10,
 "amount-1": 39.47,
 "acccode-1": 753041
},

{
 "claimnr": 1,
 "amount-1": 95.32,
 "acccode-1": 591345,
 "amount-2": 39.47,
 "acccode-2": 468950
},

{
 "claimnr": 2,
 "amount-1": 39.47,
 "acccode-1": 468950,
 "amount-2": 40.85,
 "acccode-2": 753041
},

{
 "claimnr": 3,
 "amount-1": 40.85,
 "acccode-1": 753041,
 "amount-2": 42.21,
 "acccode-2": 973789
},

{
 "claimnr": 4,
 "amount-1": 42.21,
 "acccode-1": 973789,
 "amount-2": 11.49,
 "acccode-2": 883416
},

{
 "claimnr": 5,
 "amount-1": 11.49,
 "acccode-1": 883416,
 "amount-2": 78.9,
 "acccode-2": 488439
},

{
 "claimnr": 6,
 "amount-1": 78.9,
 "acccode-1": 488439,
 "amount-2": 12.75,
 "acccode-2": 636448
},

{
 "claimnr": 7,
 "amount-1": 12.75,
 "acccode-1": 636448,
 "amount-2": 59.97,
 "acccode-2": 330494
},

{
 "claimnr": 8,
 "amount-1": 59.97,
 "acccode-1": 330494,
 "amount-2": 44.86,
 "acccode-2": 144949
},

{
 "claimnr": 9,
 "amount-1": 44.86,
 "acccode-1": 144949,
 "amount-2": 52.64,
 "acccode-2": 121651
},

{
 "claimnr": 10,
 "amount-1": 52.64,
 "acccode-1": 121651
},

{
 "claimnr": 1,
 "amount-1": 12.75,
 "acccode-1": 636448,
 "amount-2": 11.49,
 "acccode-2": 144949
},

{
 "claimnr": 2,
 "amount-1": 11.49,
 "acccode-1": 144949,
 "amount-2": 59.97,
 "acccode-2": 591345
},

{
 "claimnr": 3,
 "amount-1": 59.97,
 "acccode-1": 591345,
 "amount-2": 42.21,
 "acccode-2": 121651
},

{
 "claimnr": 4,
 "amount-1": 42.21,
 "acccode-1": 121651,
 "amount-2": 95.32,
 "acccode-2": 753041
},

{
 "claimnr": 5,
 "amount-1": 95.32,
 "acccode-1": 753041,
 "amount-2": 44.86,
 "acccode-2": 330494
},

{
 "claimnr": 6,
 "amount-1": 44.86,
 "acccode-1": 330494,
 "amount-2": 78.9,
 "acccode-2": 883416
},

{
 "claimnr": 7,
 "amount-1": 78.9,
 "acccode-1": 883416,
 "amount-2": 39.47,
 "acccode-2": 973789
},

{
 "claimnr": 8,
 "amount-1": 39.47,
 "acccode-1": 973789,
 "amount-2": 52.64,
 "acccode-2": 488439
},

{
 "claimnr": 9,
 "amount-1": 52.64,
 "acccode-1": 488439,
 "amount-2": 40.85,
 "acccode-2": 468950
},

{
 "claimnr": 10,
 "amount-1": 40.85,
 "acccode-1": 468950
},

{
 "claimnr": 1,
 "amount-1": 44.86,
 "acccode-1": 883416,
 "amount-2": 42.21,
 "acccode-2": 144949
},

{
 "claimnr": 2,
 "amount-1": 42.21,
 "acccode-1": 144949,
 "amount-2": 52.64,
 "acccode-2": 973789
},

{
 "claimnr": 3,
 "amount-1": 52.64,
 "acccode-1": 973789,
 "amount-2": 40.85,
 "acccode-2": 330494
},

{
 "claimnr": 4,
 "amount-1": 40.85,
 "acccode-1": 330494,
 "amount-2": 39.47,
 "acccode-2": 753041
},

{
 "claimnr": 5,
 "amount-1": 39.47,
 "acccode-1": 753041,
 "amount-2": 11.49,
 "acccode-2": 121651
},

{
 "claimnr": 6,
 "amount-1": 11.49,
 "acccode-1": 121651,
 "amount-2": 12.75,
 "acccode-2": 636448
},

{
 "claimnr": 7,
 "amount-1": 12.75,
 "acccode-1": 636448,
 "amount-2": 78.9,
 "acccode-2": 488439
},

{
 "claimnr": 8,
 "amount-1": 78.9,
 "acccode-1": 488439,
 "amount-2": 95.32,
 "acccode-2": 468950
},

{
 "claimnr": 9,
 "amount-1": 95.32,
 "acccode-1": 468950,
 "amount-2": 59.97,
 "acccode-2": 591345
},
    ]