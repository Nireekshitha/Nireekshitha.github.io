var Anna = {
    workingTime: [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
    date: "22-02-2017",
    place: "bengaluru"
};
var Betty = {
    workingTime: [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
    date: "22-02-2017",
    place: "mysore"
};
var Cara = {
    workingTime: [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
    date: "22-02-2017",
    place: "tamilnadu"
};

var Donna = {
    workingTime: [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
    date: "22-02-2017",
    place: "kerala"
}
var AnnaBookedIndex = 0,
    DonnaBookedIndex = 0,
    BettyBookedIndex = 0,
    CaraBookedIndex = 0;
//Arrays for users unavailable
var AnnaBooked = [],
    BettyBooked = [],
    CaraBooked = [],
    DonnaBooked = [];
var msg = "";

function c1(from, to) {
    var temp = AnnaBooked;
    for (var i = 0; i < Anna.workingTime.length; i++) {
        if (Anna.workingTime[i] >= from && Anna.workingTime[i] < to) {
            if (AnnaBooked.indexOf(Anna.workingTime[i]) == -1) {
                AnnaBooked[AnnaBookedIndex] = Anna.workingTime[i];
                AnnaBookedIndex++;
            } else {
                AnnaBooked = temp;
                console.log("already booked");
                break;
            }
        }
    }
}

function c2(from, to) {
    var temp = BettyBooked;
    for (var i = 0; i < Betty.workingTime.length; i++) {
        if (Betty.workingTime[i] >= from && Betty.workingTime[i] < to) {
            if (BettyBooked.indexOf(Betty.workingTime[i]) == -1) {
                BettyBooked[BettyBookedIndex] = Betty.workingTime[i];
                BettyBookedIndex++;
            } else {
                BettyBooked = temp
                console.log("already booked");
                break;
            }
        }
    }
}

function c3(from, to) {
    var temp = CaraBooked;
    for (var i = 0; i < Cara.workingTime.length; i++) {
        if (Cara.workingTime[i] >= from && Cara.workingTime[i] < to) {
            if (CaraBooked.indexOf(Cara.workingTime[i]) == -1) {
                CaraBooked[CaraBookedIndex] = Cara.workingTime[i];
                CaraBookedIndex++;
            } else {
                CaraBooked = temp;
                console.log("already booked");
                break;
            }
        }
    }
}

function c4(from, to) {
    var temp = DonnaBooked;
    for (var i = 0; i < Donna.workingTime.length; i++) {
        if (Donna.workingTime[i] >= from && Donna.workingTime[i] < to) {
            if (DonnaBooked.indexOf(Donna.workingTime[i]) == -1) {
                DonnaBooked[DonnaBookedIndex] = Donna.workingTime[i];
                DonnaBookedIndex++;
            } else {
                DonnaBooked = temp;
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
    time[1] = time[0] + temp;
    return time;
}
var Annatime = randTime(Anna.workingTime[0]);
c1(Annatime[0], Annatime[1]);
Annatime = randTime(Anna.workingTime[0]);
c1(Annatime[0], Annatime[1]);
var Bettytime = randTime(Betty.workingTime[0]);
c2(Bettytime[0], Bettytime[1]);
Bettytime = randTime(Betty.workingTime[0]);
c2(Bettytime[0], Bettytime[1]);
var Caratime = randTime(Cara.workingTime[0]);
c3(Caratime[0], Caratime[1]);
var Donnatime = randTime(Donna.workingTime[0]);
c4(Donnatime[0], Donnatime[1]);
Donnatime = randTime(Donna.workingTime[0])
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
for (v = 0; v < Anna.workingTime.length; v++) {
    for (w = 0; w < Betty.workingTime.length; w++) {
        for (x = 0; x < Cara.workingTime.length; x++) {
            for (y = 0; y < Donna.workingTime.length; y++) {
                if (goal(Anna.workingTime[v], Betty.workingTime[w], Cara.workingTime[x], Donna.workingTime[y]) && constraint1(Anna.workingTime[v]) && constraint2(Betty.workingTime[w]) && constraint3(Cara.workingTime[x]) && constraint4(Donna.workingTime[y])) {
                    annaplaceWeather = showWeather(Anna.place);
                    bettyplaceWeather = showWeather(Betty.place);
                    caraplaceWeather = showWeather(Cara.place);
                    donnaplaceWeather = showWeather(Donna.place);
                    if((annaplaceWeather.date[2]+"-"+annaplaceWeather.date[1]+"-"+annaplaceWeather.date[0])==Anna.time){

                      
                    }

                    msg += "Anna, Betty, Cara, and Diana can hang out at: " + Anna.workingTime[v] + ":00";
                    msg += "<br>";
                    console.log("Anna, Betty, Cara, and Diana can hang out at: " + Anna.workingTime[v] + ":00")
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


function showWeather(city) {

    var url1 = "http://maps.googleapis.com/maps/api/geocode/json?address=" + city + "&sensor=false"
    var getReq1 = new XMLHttpRequest();
    getReq1.open("GET", url1, true);
    getReq1.send();
    console.log(getReq1);
    getReq1.onload = function() {
        console.log("inside" + getReq1);
        if (getReq1.readyState === getReq1.DONE) {
            if (getReq1.status === 200) {
                a = JSON.parse(getReq1.response);
                console.log(a);
                var cityLat = a.results[0].geometry.location.lat;
                var cityLng = a.results[0].geometry.location.lng;
                console.log(a.results[0].geometry.location.lat);
                console.log(a.results[0].geometry.location.lng);
                var url = "http://api.openweathermap.org/data/2.5/forecast?lat=" + cityLat + "&lon=" + cityLng + "&appid=2d03d9442e8165ef1f8092817b356f62";
                var getReq = new XMLHttpRequest();
                getReq.open("GET", url, true);
                getReq.send();
                console.log(getReq);
                getReq.onload = function() {
                    console.log("inside" + getReq);
                    if (getReq.readyState === getReq.DONE) {
                        if (getReq.status === 200) {
                            var forecastData = JSON.parse(getReq.response);
                            console.log(JSON.parse(getReq.response));
                            var listData = forecastData.list;
                            var today = listData[0].dt_txt;
                            var todayDate = today.split(" ")[0].split("-");
                            console.log("date" + todayDate[0]);
                            var l = 0;
                            for (i = 0; i < listData.length; i++) {
                                if (((listData[i].dt_txt).indexOf(todayDate[0] + "-" + todayDate[1] + "-" + todayDate[2]) >= 0) || ((listData[i].dt_txt).indexOf(todayDate[0] + "-" + todayDate[1] + "-" + (parseInt(todayDate[2]) +
                                        1)) >= 0)) {
                                    arr[l] = {
                                        date: ((listData[i].dt_txt).split(" "))[0].split("-"),
                                        time: (((listData[i].dt_txt).split(" "))[1].split(":"))[0],
                                        weather: listData[i].weather[0].main
                                    };
                                    console.log(arr[l]);
                                }
                                l = l + 1;
                            }
                            console.log("todayDate" + todayDate);
                            console.log("array date" + arr[0].date);
                            console.log("array date" + arr[0].time);
                            return arr;
                        }
                    }
                }
            }
        }
    }
}
