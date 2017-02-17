var Anna = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
var Betty = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
var Cara = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
var Donna = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
var AnnaBookedIndex = 0,
    DonnaBookedIndex = 0,
    BettyBookedIndex = 0,
    CaraBookedIndex = 0;
//Arrays for users unavailable
var AnnaBooked = [],
    BettyBooked = [],
    CaraBooked = [],
    DonnaBooked = [];
var msg="";

function c1(from, to) {
    for (var i = 0; i < Anna.length; i++) {
        if (Anna[i] >= from && Anna[i] < to) {
            if (AnnaBooked.indexOf(Anna[i]) == -1) {
                AnnaBooked[AnnaBookedIndex] = Anna[i];
                AnnaBookedIndex++;
            }
            else{
              alert("already booked");
              break;
            }
        }
    }
}

function c2(from, to) {
    for (var i = 0; i < Betty.length; i++) {
        if (Betty[i] >= from && Betty[i] < to) {
            if (BettyBooked.indexOf(Betty[i]) == -1) {
                BettyBooked[BettyBookedIndex] = Betty[i];
                BettyBookedIndex++;
            }
            else{
              alert("already booked");
              break;
            }
        }
    }
}

function c3(from, to) {
    for (var i = 0; i < Cara.length; i++) {
        if (Cara[i] >= from && Cara[i] < to) {
            if (CaraBooked.indexOf(Cara[i]) == -1) {
                CaraBooked[CaraBookedIndex] = Cara[i];
                CaraBookedIndex++;
            }
            else{
              alert("already booked");
              break;
            }
        }
    }
}

function c4(from, to) {
    for (var i = 0; i < Donna.length; i++) {
        if (Donna[i] >= from && Donna[i] < to) {
            if (DonnaBooked.indexOf(Donna[i]) == -1) {
                DonnaBooked[DonnaBookedIndex] = Donna[i];
                DonnaBookedIndex++;
            }
            else{
              alert("already booked");
              break;
            }
        }
    }
}
//unavailable events
c1(11, 14);
c2(12, 15);
c2(15, 16);
c3(19, 23);
c4(18, 20);
c4(20, 22);


function goal(a, b, c, d) {
    if ((a == b) && (c == d) && (b == c)) {
        return true;
    }
}

//checking time a is available or not
function constraint1(a) {
    if (AnnaBooked.indexOf(a) == -1) {
        return true;
    }
}

function constraint2(a) {
    if (BettyBooked.indexOf(a) == -1) {
        return true;
    }
}

function constraint3(a) {
    if (DonnaBooked.indexOf(a) == -1) {
        return true;
    }
}

function constraint4(a) {
    if (CaraBooked.indexOf(a) == -1) {
        return true;
    }
}

//4 users available code
for (v = 0; v < Anna.length; v++) {
    for (w = 0; w < Betty.length; w++) {
        for (x = 0; x < Cara.length; x++) {
            for (y = 0; y < Donna.length; y++) {

                if (goal(Anna[v], Betty[w], Cara[x], Donna[y]) && constraint1(Anna[v]) && constraint2(Betty[w]) && constraint3(Cara[x]) && constraint4(Donna[y])) {
                  msg+="Anna, Betty, Cara, and Diana can hang out at: " + Anna[v] + ":00";
                  msg+="<br>";
                  console.log("Anna, Betty, Cara, and Diana can hang out at: " + Anna[v] + ":00")
                }
            }
        }
    }
}

function showMessage(e) {
    var divElement = document.createElement("div");
    divElement.innerHTML = msg;
    console.log(e.parentElement)
    parent = e.parentElement;
    parent.appendChild(divElement)

}
