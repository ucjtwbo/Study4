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

//Claim 0-2 are training trials and are using different numbers than the rest of the dataset.
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
 "amount-1": 39.47,
 "acccode-1": 591345,
 "amount-2": 42.21,
 "acccode-2": 753041
},
    
    {
 "claimnr": 2,
 "amount-1": 95.32,
 "acccode-1": 488439,
 "amount-2": 40.85,
 "acccode-2": 144949
},
    
{
 "claimnr": 3,
 "amount-1": 96.48,
 "acccode-1": 822933,
 "amount-2": 22.65,
 "acccode-2": 110610
},

{
 "claimnr": 4,
 "amount-1": 22.65,
 "acccode-1": 110610,
 "amount-2": 92.57,
 "acccode-2": 947266
},

{
 "claimnr": 5,
 "amount-1": 92.57,
 "acccode-1": 947266,
 "amount-2": 63.92,
 "acccode-2": 883173
},

{
 "claimnr": 6,
 "amount-1": 63.92,
 "acccode-1": 883173,
 "amount-2": 45.81,
 "acccode-2": 618089
},

{
 "claimnr": 7,
 "amount-1": 45.81,
 "acccode-1": 618089,
 "amount-2": 31.98,
 "acccode-2": 923416
},

{
 "claimnr": 8,
 "amount-1": 31.98,
 "acccode-1": 923416,
 "amount-2": 30.24,
 "acccode-2": 976274
},

{
 "claimnr": 9,
 "amount-1": 30.24,
 "acccode-1": 976274,
 "amount-2": 87.37,
 "acccode-2": 968411
},

{
 "claimnr": 10,
 "amount-1": 87.37,
 "acccode-1": 968411,
 "amount-2": 93.2,
 "acccode-2": 634665
},

{
 "claimnr": 11,
 "amount-1": 93.2,
 "acccode-1": 634665,
 "amount-2": 14.12,
 "acccode-2": 348617
},

{
 "claimnr": 12,
 "amount-1": 14.12,
 "acccode-1": 348617,
 "amount-2": 29.72,
 "acccode-2": 272210
},

{
 "claimnr": 13,
 "amount-1": 70.94,
 "acccode-1": 382247,
 "amount-2": 22.65,
 "acccode-2": 822933
},

{
 "claimnr": 14,
 "amount-1": 22.65,
 "acccode-1": 822933,
 "amount-2": 30.93,
 "acccode-2": 923416
},

{
 "claimnr": 15,
 "amount-1": 30.93,
 "acccode-1": 923416,
 "amount-2": 93.2,
 "acccode-2": 706420
},

{
 "claimnr": 16,
 "amount-1": 93.2,
 "acccode-1": 706420,
 "amount-2": 54.3,
 "acccode-2": 989462
},

{
 "claimnr": 17,
 "amount-1": 54.3,
 "acccode-1": 989462,
 "amount-2": 92.57,
 "acccode-2": 102083
},

{
 "claimnr": 18,
 "amount-1": 92.57,
 "acccode-1": 102083,
 "amount-2": 45.81,
 "acccode-2": 634665
},

{
 "claimnr": 19,
 "amount-1": 45.81,
 "acccode-1": 634665,
 "amount-2": 63.92,
 "acccode-2": 160744
},

{
 "claimnr": 20,
 "amount-1": 63.92,
 "acccode-1": 160744,
 "amount-2": 96.48,
 "acccode-2": 976274
},

{
 "claimnr": 21,
 "amount-1": 96.48,
 "acccode-1": 976274,
 "amount-2": 31.98,
 "acccode-2": 348617
},

{
 "claimnr": 22,
 "amount-1": 31.98,
 "acccode-1": 348617,
 "amount-2": 87.37,
 "acccode-2": 844100
},

{
 "claimnr": 23,
 "amount-1": 14.12,
 "acccode-1": 634665,
 "amount-2": 29.72,
 "acccode-2": 822933
},

{
 "claimnr": 24,
 "amount-1": 29.72,
 "acccode-1": 822933,
 "amount-2": 87.37,
 "acccode-2": 706420
},

{
 "claimnr": 25,
 "amount-1": 87.37,
 "acccode-1": 706420,
 "amount-2": 93.2,
 "acccode-2": 483132
},

{
 "claimnr": 26,
 "amount-1": 93.2,
 "acccode-1": 483132,
 "amount-2": 51.59,
 "acccode-2": 618089
},

{
 "claimnr": 27,
 "amount-1": 51.59,
 "acccode-1": 618089,
 "amount-2": 40.87,
 "acccode-2": 989462
},

{
 "claimnr": 28,
 "amount-1": 40.87,
 "acccode-1": 989462,
 "amount-2": 19.69,
 "acccode-2": 883173
},

{
 "claimnr": 29,
 "amount-1": 19.69,
 "acccode-1": 883173,
 "amount-2": 54.3,
 "acccode-2": 272210
},

{
 "claimnr": 30,
 "amount-1": 54.3,
 "acccode-1": 272210,
 "amount-2": 22.65,
 "acccode-2": 844100
},

{
 "claimnr": 31,
 "amount-1": 22.65,
 "acccode-1": 844100,
 "amount-2": 98.06,
 "acccode-2": 382247
},

{
 "claimnr": 32,
 "amount-1": 98.06,
 "acccode-1": 382247,
 "amount-2": 83.71,
 "acccode-2": 947266
},

{
 "claimnr": 33,
 "amount-1": 30.24,
 "acccode-1": 968411,
 "amount-2": 29.72,
 "acccode-2": 249162
},

{
 "claimnr": 34,
 "amount-1": 29.72,
 "acccode-1": 249162,
 "amount-2": 54.3,
 "acccode-2": 110610
},

{
 "claimnr": 35,
 "amount-1": 54.3,
 "acccode-1": 110610,
 "amount-2": 23.99,
 "acccode-2": 965503
},

{
 "claimnr": 36,
 "amount-1": 23.99,
 "acccode-1": 965503,
 "amount-2": 70.94,
 "acccode-2": 976274
},

{
 "claimnr": 37,
 "amount-1": 70.94,
 "acccode-1": 976274,
 "amount-2": 83.71,
 "acccode-2": 483132
},

{
 "claimnr": 38,
 "amount-1": 83.71,
 "acccode-1": 483132,
 "amount-2": 92.57,
 "acccode-2": 348617
},

{
 "claimnr": 39,
 "amount-1": 92.57,
 "acccode-1": 348617,
 "amount-2": 87.37,
 "acccode-2": 822933
},

{
 "claimnr": 40,
 "amount-1": 87.37,
 "acccode-1": 822933,
 "amount-2": 22.65,
 "acccode-2": 272210
},

{
 "claimnr": 41,
 "amount-1": 22.65,
 "acccode-1": 272210,
 "amount-2": 98.06,
 "acccode-2": 844100
},

{
 "claimnr": 42,
 "amount-1": 98.06,
 "acccode-1": 844100,
 "amount-2": 14.12,
 "acccode-2": 989462
},

{
 "claimnr": 43,
 "amount-1": 40.87,
 "acccode-1": 989462,
 "amount-2": 30.93,
 "acccode-2": 947266
},

{
 "claimnr": 44,
 "amount-1": 30.93,
 "acccode-1": 947266,
 "amount-2": 22.65,
 "acccode-2": 102083
},

{
 "claimnr": 45,
 "amount-1": 22.65,
 "acccode-1": 102083,
 "amount-2": 30.24,
 "acccode-2": 976274
},

{
 "claimnr": 46,
 "amount-1": 30.24,
 "acccode-1": 976274,
 "amount-2": 19.69,
 "acccode-2": 968411
},

{
 "claimnr": 47,
 "amount-1": 19.69,
 "acccode-1": 968411,
 "amount-2": 45.81,
 "acccode-2": 634665
},

{
 "claimnr": 48,
 "amount-1": 45.81,
 "acccode-1": 634665,
 "amount-2": 93.2,
 "acccode-2": 844100
},

{
 "claimnr": 49,
 "amount-1": 93.2,
 "acccode-1": 844100,
 "amount-2": 23.99,
 "acccode-2": 110610
},

{
 "claimnr": 50,
 "amount-1": 23.99,
 "acccode-1": 110610,
 "amount-2": 31.98,
 "acccode-2": 348617
},

{
 "claimnr": 51,
 "amount-1": 31.98,
 "acccode-1": 348617,
 "amount-2": 92.57,
 "acccode-2": 272210
},

{
 "claimnr": 52,
 "amount-1": 92.57,
 "acccode-1": 272210,
 "amount-2": 54.3,
 "acccode-2": 965503
},

{
 "claimnr": 53,
 "amount-1": 92.57,
 "acccode-1": 483132,
 "amount-2": 22.65,
 "acccode-2": 160744
},

{
 "claimnr": 54,
 "amount-1": 22.65,
 "acccode-1": 160744,
 "amount-2": 70.94,
 "acccode-2": 706420
},

{
 "claimnr": 55,
 "amount-1": 70.94,
 "acccode-1": 706420,
 "amount-2": 83.71,
 "acccode-2": 989462
},

{
 "claimnr": 56,
 "amount-1": 83.71,
 "acccode-1": 989462,
 "amount-2": 87.37,
 "acccode-2": 883173
},

{
 "claimnr": 57,
 "amount-1": 87.37,
 "acccode-1": 883173,
 "amount-2": 31.98,
 "acccode-2": 965503
},

{
 "claimnr": 58,
 "amount-1": 31.98,
 "acccode-1": 965503,
 "amount-2": 63.92,
 "acccode-2": 348617
},

{
 "claimnr": 59,
 "amount-1": 63.92,
 "acccode-1": 348617,
 "amount-2": 54.3,
 "acccode-2": 110610
},

{
 "claimnr": 60,
 "amount-1": 54.3,
 "acccode-1": 110610,
 "amount-2": 30.93,
 "acccode-2": 382247
},

{
 "claimnr": 61,
 "amount-1": 30.93,
 "acccode-1": 382247,
 "amount-2": 45.81,
 "acccode-2": 976274
},

{
 "claimnr": 62,
 "amount-1": 45.81,
 "acccode-1": 976274,
 "amount-2": 51.59,
 "acccode-2": 634665
},

{
 "claimnr": 63,
 "amount-1": 45.81,
 "acccode-1": 348617,
 "amount-2": 83.71,
 "acccode-2": 272210
},

{
 "claimnr": 64,
 "amount-1": 83.71,
 "acccode-1": 272210,
 "amount-2": 63.92,
 "acccode-2": 923416
},

{
 "claimnr": 65,
 "amount-1": 63.92,
 "acccode-1": 923416,
 "amount-2": 22.65,
 "acccode-2": 382247
},

{
 "claimnr": 66,
 "amount-1": 22.65,
 "acccode-1": 382247,
 "amount-2": 31.98,
 "acccode-2": 883173
},

{
 "claimnr": 67,
 "amount-1": 31.98,
 "acccode-1": 883173,
 "amount-2": 98.06,
 "acccode-2": 968411
},

{
 "claimnr": 68,
 "amount-1": 98.06,
 "acccode-1": 968411,
 "amount-2": 96.48,
 "acccode-2": 844100
},

{
 "claimnr": 69,
 "amount-1": 96.48,
 "acccode-1": 844100,
 "amount-2": 93.2,
 "acccode-2": 483132
},

{
 "claimnr": 70,
 "amount-1": 93.2,
 "acccode-1": 483132,
 "amount-2": 23.99,
 "acccode-2": 706420
},

{
 "claimnr": 71,
 "amount-1": 23.99,
 "acccode-1": 706420,
 "amount-2": 30.24,
 "acccode-2": 965503
},

{
 "claimnr": 72,
 "amount-1": 30.24,
 "acccode-1": 965503,
 "amount-2": 14.12,
 "acccode-2": 822933
},
]