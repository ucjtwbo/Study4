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
var keys  = ['item', 'amount', 'pcode', 'accountnr'];
var items = ["milk", "coffee", "lunch", "dinner", "taxi", "hotel", "flight", "visit", "seminar", "printing"];
var amounts = [11.49, 52.64, 42.21, 39.47, 95.32, 40.85, 44.86, 78.90, 12.75, 59.97];
var pcodes = ["KBB654", "RXX711", "LMH755", "UGG992", "BRV477", "MVI029", "VPH581", "ZKF381", "HJE688", "IDQ133"];
var accountnrs = [883416, 468950, 591345, 753041, 488439, 144949, 973789, 121651, 636448, 330494];


var claimData = [
    {
        "claimnr": 0,
        "item": "milk",
        "amount": 11.49,
        "pcode": "KBB654",
        "accountnr": 883416
    },

    {
        "claimnr": 1,
        "item": "milk",
        "amount": 11.49,
        "pcode": "KBB654",
        "accountnr": 883416
    },

    {
        "claimnr": 2,
        "item": "coffee",
        "amount": 52.64,
        "pcode": "RXX711",
        "accountnr": 468950
    },

    {
        "claimnr": 3,
        "item": "lunch",
        "amount": 42.21,
        "pcode": "LMH755",
        "accountnr": 591345
    },

    {
       "claimnr": 4,
       "item": "dinner",
       "amount": 39.47,
       "pcode": "UGG992",
       "accountnr": 753041
    },

{
 "claimnr": 5,
 "item": "taxi",
 "amount": 95.32,
 "pcode": "BRV477",
 "accountnr": 488439
},

{
 "claimnr": 6,
 "item": "hotel",
 "amount": 40.85,
 "pcode": "MVI029",
 "accountnr": 144949
},

{
 "claimnr": 7,
 "item": "flight",
 "amount": 44.86,
 "pcode": "VPH581",
 "accountnr": 973789
},

{
 "claimnr": 8,
 "item": "visit",
 "amount": 78.9,
 "pcode": "ZKF381",
 "accountnr": 121651
},

{
 "claimnr": 9,
 "item": "seminar",
 "amount": 12.75,
 "pcode": "HJE688",
 "accountnr": 636448
},

{
 "claimnr": 10,
 "item": "printing",
 "amount": 59.97,
 "pcode": "IDQ133",
 "accountnr": 330494
},

{
 "claimnr": 1,
 "item": "lunch",
 "amount": 40.85,
 "pcode": "BRV477",
 "accountnr": 753041
},

{
 "claimnr": 2,
 "item": "visit",
 "amount": 39.47,
 "pcode": "VPH581",
 "accountnr": 488439
},

{
 "claimnr": 3,
 "item": "coffee",
 "amount": 78.9,
 "pcode": "MVI029",
 "accountnr": 591345
},

{
 "claimnr": 4,
 "item": "seminar",
 "amount": 59.97,
 "pcode": "RXX711",
 "accountnr": 883416
},

{
 "claimnr": 5,
 "item": "taxi",
 "amount": 52.64,
 "pcode": "HJE688",
 "accountnr": 121651
},

{
 "claimnr": 6,
 "item": "flight",
 "amount": 11.49,
 "pcode": "ZKF381",
 "accountnr": 330494
},

{
 "claimnr": 7,
 "item": "dinner",
 "amount": 42.21,
 "pcode": "UGG992",
 "accountnr": 144949
},

{
 "claimnr": 8,
 "item": "milk",
 "amount": 12.75,
 "pcode": "LMH755",
 "accountnr": 973789
},

{
 "claimnr": 9,
 "item": "printing",
 "amount": 44.86,
 "pcode": "IDQ133",
 "accountnr": 636448
},

{
 "claimnr": 10,
 "item": "hotel",
 "amount": 95.32,
 "pcode": "KBB654",
 "accountnr": 468950
},

{
 "claimnr": 1,
 "item": "visit",
 "amount": 52.64,
 "pcode": "KBB654",
 "accountnr": 973789
},

{
 "claimnr": 2,
 "item": "flight",
 "amount": 39.47,
 "pcode": "LMH755",
 "accountnr": 121651
},

{
 "claimnr": 3,
 "item": "dinner",
 "amount": 95.32,
 "pcode": "ZKF381",
 "accountnr": 636448
},

{
 "claimnr": 4,
 "item": "taxi",
 "amount": 59.97,
 "pcode": "RXX711",
 "accountnr": 488439
},

{
 "claimnr": 5,
 "item": "milk",
 "amount": 44.86,
 "pcode": "BRV477",
 "accountnr": 591345
},

{
 "claimnr": 6,
 "item": "printing",
 "amount": 42.21,
 "pcode": "VPH581",
 "accountnr": 468950
},

{
 "claimnr": 7,
 "item": "coffee",
 "amount": 11.49,
 "pcode": "UGG992",
 "accountnr": 883416
},

{
 "claimnr": 8,
 "item": "lunch",
 "amount": 40.85,
 "pcode": "MVI029",
 "accountnr": 144949
},

{
 "claimnr": 9,
 "item": "seminar",
 "amount": 12.75,
 "pcode": "IDQ133",
 "accountnr": 330494
},

{
 "claimnr": 10,
 "item": "hotel",
 "amount": 78.9,
 "pcode": "HJE688",
 "accountnr": 753041
},

{
 "claimnr": 1,
 "item": "taxi",
 "amount": 44.86,
 "pcode": "HJE688",
 "accountnr": 488439
},

{
 "claimnr": 2,
 "item": "printing",
 "amount": 12.75,
 "pcode": "MVI029",
 "accountnr": 753041
},

{
 "claimnr": 3,
 "item": "lunch",
 "amount": 42.21,
 "pcode": "RXX711",
 "accountnr": 468950
},

{
 "claimnr": 4,
 "item": "coffee",
 "amount": 78.9,
 "pcode": "UGG992",
 "accountnr": 636448
},

{
 "claimnr": 5,
 "item": "milk",
 "amount": 39.47,
 "pcode": "LMH755",
 "accountnr": 883416
},

{
 "claimnr": 6,
 "item": "dinner",
 "amount": 95.32,
 "pcode": "IDQ133",
 "accountnr": 591345
},

{
 "claimnr": 7,
 "item": "seminar",
 "amount": 11.49,
 "pcode": "KBB654",
 "accountnr": 144949
},

{
 "claimnr": 8,
 "item": "flight",
 "amount": 59.97,
 "pcode": "BRV477",
 "accountnr": 973789
},

{
 "claimnr": 9,
 "item": "visit",
 "amount": 40.85,
 "pcode": "ZKF381",
 "accountnr": 121651
},

{
 "claimnr": 10,
 "item": "hotel",
 "amount": 52.64,
 "pcode": "VPH581",
 "accountnr": 330494
},

{
 "claimnr": 1,
 "item": "flight",
 "amount": 11.49,
 "pcode": "ZKF381",
 "accountnr": 488439
},

{
 "claimnr": 2,
 "item": "taxi",
 "amount": 40.85,
 "pcode": "HJE688",
 "accountnr": 591345
},

{
 "claimnr": 3,
 "item": "hotel",
 "amount": 39.47,
 "pcode": "MVI029",
 "accountnr": 636448
},

{
 "claimnr": 4,
 "item": "lunch",
 "amount": 95.32,
 "pcode": "VPH581",
 "accountnr": 121651
},

{
 "claimnr": 5,
 "item": "coffee",
 "amount": 44.86,
 "pcode": "UGG992",
 "accountnr": 753041
},

{
 "claimnr": 6,
 "item": "dinner",
 "amount": 12.75,
 "pcode": "IDQ133",
 "accountnr": 973789
},

{
 "claimnr": 7,
 "item": "milk",
 "amount": 52.64,
 "pcode": "RXX711",
 "accountnr": 883416
},

{
 "claimnr": 8,
 "item": "seminar",
 "amount": 42.21,
 "pcode": "KBB654",
 "accountnr": 330494
},

{
 "claimnr": 9,
 "item": "printing",
 "amount": 59.97,
 "pcode": "BRV477",
 "accountnr": 144949
},

{
 "claimnr": 10,
 "item": "visit",
 "amount": 78.9,
 "pcode": "LMH755",
 "accountnr": 468950
},

{
 "claimnr": 1,
 "item": "printing",
 "amount": 42.21,
 "pcode": "MVI029",
 "accountnr": 468950
},

{
 "claimnr": 2,
 "item": "seminar",
 "amount": 39.47,
 "pcode": "LMH755",
 "accountnr": 973789
},

{
 "claimnr": 3,
 "item": "dinner",
 "amount": 40.85,
 "pcode": "VPH581",
 "accountnr": 330494
},

{
 "claimnr": 4,
 "item": "taxi",
 "amount": 44.86,
 "pcode": "UGG992",
 "accountnr": 144949
},

{
 "claimnr": 5,
 "item": "coffee",
 "amount": 59.97,
 "pcode": "HJE688",
 "accountnr": 636448
},

{
 "claimnr": 6,
 "item": "milk",
 "amount": 78.9,
 "pcode": "RXX711",
 "accountnr": 591345
},

{
 "claimnr": 7,
 "item": "hotel",
 "amount": 11.49,
 "pcode": "ZKF381",
 "accountnr": 883416
},

{
 "claimnr": 8,
 "item": "lunch",
 "amount": 12.75,
 "pcode": "KBB654",
 "accountnr": 753041
},

{
 "claimnr": 9,
 "item": "flight",
 "amount": 95.32,
 "pcode": "IDQ133",
 "accountnr": 121651
},

{
 "claimnr": 10,
 "item": "visit",
 "amount": 52.64,
 "pcode": "BRV477",
 "accountnr": 488439
}
    ];