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
    var temp= AnnaBooked;
    for (var i = 0; i < Anna.length; i++) {
        if (Anna[i] >= from && Anna[i] < to) {
            if (AnnaBooked.indexOf(Anna[i]) == -1) {
                AnnaBooked[AnnaBookedIndex] = Anna[i];
                AnnaBookedIndex++;
            }
            else{
                AnnaBooked=temp;
              console.log("already booked");
              break;
            }
        }
    }
}

function c2(from, to) {
     var temp= BettyBooked;
    for (var i = 0; i < Betty.length; i++) {
        if (Betty[i] >= from && Betty[i] < to) {
            if (BettyBooked.indexOf(Betty[i]) == -1) {
                BettyBooked[BettyBookedIndex] = Betty[i];
                BettyBookedIndex++;
            }
            else{
                BettyBooked=temp;
              console.log("already booked");
              break;
            }
        }
    }
}

function c3(from, to) {
   var temp=CaraBooked;
    for (var i = 0; i < Cara.length; i++) {
        if (Cara[i] >= from && Cara[i] < to) {
            if (CaraBooked.indexOf(Cara[i]) == -1) {
                CaraBooked[CaraBookedIndex] = Cara[i];
                CaraBookedIndex++;
            }
            else{
                CaraBooked=temp
              console.log("already booked");
              break;
            }
        }
    }
}

function c4(from, to) {
    var temp=DonnaBooked;
    for (var i = 0; i < Donna.length; i++) {
        if (Donna[i] >= from && Donna[i] < to) {
            if (DonnaBooked.indexOf(Donna[i]) == -1) {
                DonnaBooked[DonnaBookedIndex] = Donna[i];
                DonnaBookedIndex++;
            }
            else{
              DonnaBooked=temp;
                console.log("already booked");
                break;
            }
        }
    }
}
//unavailable events
function randTime(a) {
    var time = [];
    time[0] = Math.floor((Math.random() * 100) % (10)) + a;
    var temp = Math.floor((Math.random() * 100) % (4));
    time[1] = time[0]  + temp;
    return time;
}
var Annatime=randTime(Anna[0]);
c1(Annatime[0],Annatime[1]);
Annatime=randTime(Anna[0]);
c1(Annatime[0],Annatime[1]);
var Bettytime=randTime(Betty[0]);
c2(Bettytime[0], Bettytime[1]);
Bettytime=randTime(Betty[0]);
c2(Bettytime[0],Bettytime[1]);
var Caratime=randTime(Cara[0]);
c3(Caratime[0],Caratime[1]);
var Donnatime=randTime(Donna[0]);
c4(Donnatime[0], Donnatime[1]);
Donnatime=randTime(Donna[0])
c4(Donnatime[0], Donnatime[1]);

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
