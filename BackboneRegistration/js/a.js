var registrationModel = {};
var model1 = {};
var dbName = "user_details",
    link = "/api/v1/data";
link = link + "/" + dbName;
var reg = Backbone.Model.extend({
    defaults: {
        firstName: "",
        lastName: "",
        date: "",
        month: "",
        year: "",
        emailId: "",
        mobileNo: "",
        gender: "",
        address: "",
        city: "",
        pincode: "",
        state: "",
        country: "India",
        _id: "",
        _rev: "",
    }
});
model1 = new reg();

var view1 = Backbone.View.extend({
    el: $('form'),
    //   model: model1,
    my_template: _.template("<p id='firstName'>firstName:<strong ><%= firstName %></strong></p><p>lastName: <%= lastName %></p><p>Email: <%= emailId %></p> <button type='button' id='delete'>Delete</button>"),

    initialize: function() {
        console.log("aaaaaabbbbbbbbbbbbbbcccccccccc");
        this.render(model1);
    },

    render: function() {
        console.log("cccccccccc");
        this.$el.html(this.my_template(model1.toJSON()))
    },
    events: {
        'click #firstName strong': 'editField',
        'blur #inputText': "displayText",
        'click #delete':"deleteDocument"
    },
    displayText: function() {
        var documentId = model1.get("_id");
        console.log("idd" + documentId);
        var updatelink = link + "/" + documentId;
        console.log("abcd" + updatelink);
        var input = $('<strong/>', {
            'html': $("#firstName input").val()
        });
        model1.set("firstName ", $("#firstName input").val());
        $("#firstName").append(input);
        $("#firstName input").remove();
        $.ajax({
            url: updatelink,
            type: "PUT",
            dataType: "JSON",
            data: JSON.stringify(model1),
            contentType: "application/json; charset=UTF-8",
            success: function(data) {
                console.log(data);
                model1.set("_id", data.id);
                model1.set("_rev", data.rev);
            },
            error: function(err) {
                console.log(err);
            }
        });
    },
    editField: function(e) {
        console.log(e);
        var input = $('<input id="inputText"/>', {
            'type': 'text',
            'value': $('#firstName strong').html()
        });
        $('#firstName').append(input);
        $("#firstName strong").remove();
        input.focus();


    },
    deleteDocument:function(){
      var documentId = model1.get("_id");
      console.log("idd" + documentId);
      var docRev= model1.get("_rev")
      var updatelink = link + "/" + documentId+"?rev="+docRev;
      $.ajax({
          url: updatelink,
          type: "DELETE",
          success: function(data) {
              console.log(data);
              model1.set("_id", "");
              model1.set("_rev", "");
          },
          error: function(err) {
              console.log(err);
          }
      });

    }

});
var registrationView = Backbone.View.extend({

    el: $('form'),

    my_template: _.template($("#regustrationForm").html()),

    initialize: function() {
        this.render();
    },

    render: function() {
        this.$el.html(this.my_template);
    },
    events: {
        'click #submt': 'onFormSubmit',

    },
    getInput: function(name) {
        return this.$el.find('[name="' + name + '"]');
    },

    onFormSubmit: function(e) {
        this.$el.find('input[type="text"]').each(function() {
            model1.set(this.name, this.value);
        });
        this.$el.find('input[type="number"]').each(function() {
            model1.set(this.name, this.value);
        });
        // this.$el.find('input[type="radio"]:checked').each(function() {
        //     model1.set(this.name, this.value);
        // });
        // this.$el.find('input[type="checkbox"]:checked').each(function() {
        //     model1.set(this.name, this.value);
        // })
        // this.$el.find('input[type="textarea"]').each(function() {
        //     model1.set(this.name, this.value);
        // })
        this.$el.find('select[name]').each(function() {
            model1.set(this.name, this.value);
        })
        registrationModel = model1;
        console.log(registrationModel);
        console.log(model1.get('firstName'));
        console.log(model1.get('lastName'));
        createDoc(),
            route1.navigate("dashbord", {
                trigger: true
            });
    }
});
var loginView = Backbone.View.extend({
    el: $('form'),
    my_template: _.template($("#templateHTML").html()),

    initialize: function() {
        this.render();
    },
    render: function() {
        this.$el.html(this.my_template);
    }
});
createDoc = function() {
    var task = {
        "firstName": model1.get('firstName'),
        "lastName": model1.get('lastName'),
        "dateOfBirth": {
            "day": model1.get('date'),
            "month": model1.get("month"),
            "year": model1.get("year"),
        },
        "mobileNumber": model1.get("mobileNo"),
        "emailId": model1.get("emailId")
    };
    $.ajax({
        url: link,
        type: "POST",
        dataType: "JSON",
        data: JSON.stringify(task),
        contentType: "application/json; charset=UTF-8",
        success: function(data) {
            console.log(data);
            model1.set("_id", data.id);
            model1.set("_rev", data.rev);
        },
        error: function(err) {
            console.log(err);
        }
    });
};
var ApplicationRouter = Backbone.Router.extend({
    routes: {
        "login": "login",
        "registration": "registration",
        "dashbord": "dashbord"
    },
    registration: function() {
        var view3 = new registrationView()
        $("#content").html(view3.el);
    },
    login: function() {
        var view3 = new loginView()
            // $("#content").html(view3.el);
    },
    dashbord: function() {
        console.log("inside" + model1);
        var view3 = new view1();
        console.log('here');
        // $("#content").html(view3.el);
    }
});
var route1 = new ApplicationRouter();
Backbone.history.start();
