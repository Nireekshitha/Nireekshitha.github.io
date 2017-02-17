var u1Timings = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
var u2Timings = [0, 1, 2, 3, 4, 5, 6, 7, 8,9, 10];
var u3Timings = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var u4Timings = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

var actualWorkinghours = 16;
var original = [],
    a = [];
var msg = "";
var u1Booked = [
    [0, 1, 2],
    [4, 5, 6],
    [8, 9, 10],
    [13, 14, 15]
];
var u2Booked = [
    [0, 1, 2],
    [11,12],
    [5, 6, 7, 8]
];
var u3Booked = [
    [0, 1, 2],
    [12, 13, 14, 15]
];
var u4Booked = [
    [0, 1],
    [8, 9],
    [14, 15]
];
var index = 0;
for (i = 0; i < 15; i++) {
    if (u1Timings.indexOf(i) > -1 && u2Timings.indexOf(i) > -1 && u3Timings.indexOf(i) > -1 && u4Timings.indexOf(i) > -1) {
        original[index] = i;
        a[index] = i;
        index += 1;
    }

}
// a=original;
console.log("aaa" + original);
console.log(a);
//var a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
for (i = 0; i < u1Booked.length; i++) {
    for (j = 0; j < u1Booked[i].length; j++) {
        var k = a.indexOf(u1Booked[i][j]);
        if (k != -1) {
            a.splice(k, 1);
        }
    }
}
console.log(a);
for (i = 0; i < u2Booked.length; i++) {
    for (j = 0; j < u2Booked[i].length; j++) {

        var k = a.indexOf(u2Booked[i][j]);
        if (k != -1) {
            a.splice(k, 1);
        }
    }
}
console.log(a);
for (i = 0; i < u3Booked.length; i++) {
    for (j = 0; j < u3Booked[i].length; j++) {
        var k = a.indexOf(u3Booked[i][j]);
        if (k != -1) {
            a.splice(k, 1);
        }
    }
}
console.log(a);
for (i = 0; i < u4Booked.length; i++) {
    for (j = 0; j < u4Booked[i].length; j++) {
        var k = a.indexOf(u4Booked[i][j]);
        if (k != -1) {
            a.splice(k, 1);
        }
    }
}
console.log(a);

console.log("we can book conf room ")
console.log("original" + original);
for (i = 0; i < a.length; i++) {
    var str = "";
    if (original.indexOf(a[i] - 1) > -1) {
        str = a[i] - 1 ;
    } else {
        str = a[i];
    }
    str += " to ";
    if (original.indexOf(a[i] + 1) > -1) {
        str += (a[i] + 1);
    } else {
        str += a[i] ;
    }
    msg+="\n,"+str;
    console.log(str);
}

function showMessage(e) {
    var divElement = document.createElement("div");
    divElement.innerHTML = msg;
    console.log(e.parentElement)
    parent = e.parentElement;
    parent.appendChild(divElement)

}
