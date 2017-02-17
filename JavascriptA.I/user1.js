// var u1Timings = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// var u2Timings = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var u3Timings = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// var u4Timings = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
var u1Timings = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
var u2Timings = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
var u3Timings = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
var u4Timings = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
var actualWorkinghours = 16;
var original = [],
    a = [];
var msg = "";
var user1=[],user2=[],user3=[],user4=[];
var u1Booked=[],u2Booked=[],u3Booked=[],u4Booked=[];

//
//
// var u1Booked = [
//     [0, 1],
//     [1, 2],
//     [4, 5],
//     [5, 6],
//     [8, 9],
//     [10, 11],
//     [13, 14],
//     [14, 15]
// ];
// var u2Booked = [
//     [0, 1],
//     [1, 2],
//     [11, 12],
//     [5, 6],
//     [6,7],
//     [ 7, 8]
// ];
// var u3Booked = [
//   [0, 1],
//   [1, 2],
//   [12,13],
//   [13, 14],
//   [14, 15]
// ];
// var u4Booked = [
//     [0, 1],
//     [8, 9],
//     [14, 15]
// ];
var u1Booked = [
    [2,3],
    [3, 4]
];
var u2Booked = [
    [2, 3],
    [3, 4],
    [4,5],
    [5, 6],
    [6,7]
];
var u3Booked = [
  [10, 11],
  [11, 12],
  [12,13],
  [13, 14]

];
var u4Booked = [
  [9,10],
  [10, 11],
  [11, 12],
  [12,13]
];
var index = 0;
for (i = 0; i < 15; i++) {
    if (u1Timings.indexOf(i) > -1 && u2Timings.indexOf(i) > -1 && u3Timings.indexOf(i) > -1 && u4Timings.indexOf(i) > -1) {
        original[index] = i;
      //  a[index] = i;
        index += 1;
    }

}

var b = [];

  for (var row=0; row<original.length; row++) {
    b[row] = [];
      b[row][0] =original[row] ;
        b[row][1] =original[row] + 1;
    }

for (i = 0; i < u1Booked.length; i++) {
    var j = 0;
    for (var ind = 0; ind < b.length; ind++) {
        if( b[ind][0]==u1Booked[i][j]){
          b = b.slice(0); // make copy
          b.splice(ind, 1);
        }
    }
}
console.log("availability of u1" + b);

for (i = 0; i < u2Booked.length; i++) {
    var j = 0;
    for (var ind = 0; ind < b.length; ind++) {
        if( b[ind][0]==u2Booked[i][j]){
          b = b.slice(0); // copying
          b.splice(ind, 1);
        }
    }
}
for (i = 0; i < u3Booked.length; i++) {
    var j = 0;
    for (var ind = 0; ind < b.length; ind++) {
        if( b[ind][0]==u3Booked[i][j]){
          b = b.slice(0);
          b.splice(ind, 1);
        }
    }
}
for (i = 0; i < u4Booked.length; i++) {
    var j = 0;
    for (var ind = 0; ind < b.length; ind++) {
        if( b[ind][0]==u4Booked[i][j]){
          b = b.slice(0);
          b.splice(ind, 1);
        }
    }
}
console.log(b);


console.log("we can book conf room ");
for (i = 0; i < b.length; i++) {
    var str = b[i][0];
    str += " to ";
    str+=b[i][1];
    console.log(str);
    msg+=str+"  ";
}

function showMessage(e) {
    var divElement = document.createElement("div");
    divElement.innerHTML = msg;
    console.log(e.parentElement)
    parent = e.parentElement;
    parent.appendChild(divElement)

}
