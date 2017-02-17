// var u1Timings = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// var u2Timings = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var u3Timings = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// var u4Timings = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

var actualWorkinghours = 16;
var original = [],
    a = [];
var msg = "";
var user1 = [],
    user2 = [],
    user3 = [],
    user4 = [];
var u1Booked = [],
    u2Booked = [],
    u3Booked = [],
    u4Booked = [];
user1index = 0, user2index = 0, user3index = 0, user4index = 0;
for (var i = 0; i < 5; i++) {
    var temp = Math.floor((Math.random() * 100) % (u1Timings.length - 1));
    console.log("aa"+user1)
    if ((user1.indexOf(temp)) == -1) {
            user1[user1index] = temp;
            u1Booked[user1index] = [user1[user1index], user1[user1index] + 1];
            user1index += 1;
        }


        var temp = Math.floor((Math.random() * 100) % (u2Timings.length - 1));
        if (user2.indexOf(temp)==-1) {
            user2[user2index] = temp;
            u2Booked[user2index] = [user2[user2index], user2[user2index] + 1];
            user2index += 1;
        }

        var temp = Math.floor((Math.random() * 100) % (u3Timings.length - 1));
        if (user3.indexOf(temp)==-1) {
            user3[user3index] = temp;
            u3Booked[user3index] = [user3[user3index], user3[user3index] + 1];
            user3index += 1;
        }

        var temp = Math.floor((Math.random() * 100) %( u4Timings.length - 1));
        if (user4.indexOf(temp)== -1) {
            user4[user4index] = temp;
            u4Booked[user4index] = [user4[user4index], user4[user4index] + 1];;
            user4index += 1;
        }

    }

    console.log("user1" + u1Booked);
    console.log("user2" + u2Booked);
    console.log("user3" + u3Booked);
    console.log("user4" + u4Booked);
    var temp1 = ""
    for (i = 0; i < u1Booked.length; i++) {
        temp1 += "[" + u1Booked[i][0] + "," + u1Booked[i][1] + "]";
    }
    var user1Detail = document.getElementById("user1");
    user1Detail.innerHTML ="user1 "+ temp1;

    var temp1 = ""
    for (i = 0; i < u2Booked.length; i++) {
        temp1 += "[" + u2Booked[i][0] + "," + u2Booked[i][1] + "]";
    }
    var user1Detail = document.getElementById("user2");
    user1Detail.innerHTML = "user2 "+temp1;

    var temp1 = ""
    for (i = 0; i < u3Booked.length; i++) {
        temp1 += "[" + u3Booked[i][0] + "," + u3Booked[i][1] + "]";
    }
    var user1Detail = document.getElementById("user3");
    user1Detail.innerHTML = "user3 "+temp1;

    var temp1 = ""
    for (i = 0; i < u4Booked.length; i++) {
        temp1 += "[" + u4Booked[i][0] + "," + u4Booked[i][1] + "]";
    }
    var user1Detail = document.getElementById("user4");
    user1Detail.innerHTML ="user4 "+ temp1;
    var index = 0;
    for (i = 0; i < 15; i++) {
        if (u1Timings.indexOf(i) > -1 && u2Timings.indexOf(i) > -1 && u3Timings.indexOf(i) > -1 && u4Timings.indexOf(i) > -1) {
            original[index] = i;
            //  a[index] = i;
            index += 1;
        }

    }

    var b = [];

    for (var row = 0; row < original.length; row++) {
        b[row] = [];
        b[row][0] = original[row];
        b[row][1] = original[row] + 1;
    }

    for (i = 0; i < u1Booked.length; i++) {
        var j = 0;
        for (var ind = 0; ind < b.length; ind++) {
            if (b[ind][0] == u1Booked[i][j]) {
                b = b.slice(0); // make copy
                b.splice(ind, 1);
            }
        }
    }
    console.log("availability of u1" + b);

    for (i = 0; i < u2Booked.length; i++) {
        var j = 0;
        for (var ind = 0; ind < b.length; ind++) {
            if (b[ind][0] == u2Booked[i][j]) {
                b = b.slice(0); // copying
                b.splice(ind, 1);
            }
        }
    }
    for (i = 0; i < u3Booked.length; i++) {
        var j = 0;
        for (var ind = 0; ind < b.length; ind++) {
            if (b[ind][0] == u3Booked[i][j]) {
                b = b.slice(0);
                b.splice(ind, 1);
            }
        }
    }
    for (i = 0; i < u4Booked.length; i++) {
        var j = 0;
        for (var ind = 0; ind < b.length; ind++) {
            if (b[ind][0] == u4Booked[i][j]) {
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
        str += b[i][1];
        console.log(str);
        msg += str + "  ";
    }

    function showMessage(e) {
        var divElement = document.createElement("div");
        divElement.innerHTML = "users available at" + msg;
        console.log(e.parentElement)
        parent = e.parentElement;
        parent.appendChild(divElement)

    }
