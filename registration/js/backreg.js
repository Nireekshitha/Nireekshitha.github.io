var reg = Backbone.Model.extend({
    defaults: {
        firstName: "",
        lastName: "",
        dateOfBirth:{
          date:"",
          month:"",
          year:""
        },
        emailId: "",
        mobileNo: "",
        gender: "",
        address: "",
        city: "",
        pincode: "",
        state:"",
        country:"India"
    }
});
var ApplicationRouter = Backbone.Router.extend({

    //map url routes to contained methods
    routes: {
      "registration":"",
        "dashboard": "dashbord"
    },

    dashboard: function() {
        $("#templateHTML").show();
    }

});
var view1 = Backbone.View.extend({

    el: $('form'),

    events: {
        'submit': 'onFormSubmit',

    },
    getInput: function(name) {
        return this.$el.find('[name="' + name + '"]');
    },
    onFormSubmit: function(e) {
        e.preventDefault();
        var model = new reg();

        this.$el.find('input[type="text"]').each(function() {
            model.set(this.name, this.value);
        })
        this.$el.find('input[type="number"]').each(function() {
            model.set(this.name, this.value);
        })
        this.$el.find('input[type="radio"]:checked').each(function() {
            model.set(this.name, this.value);
        })
        this.$el.find('input[type="checkbox"]:checked').each(function() {
            model.set(this.name, this.value);
        })
        this.$el.find('input[type="textarea"]').each(function() {
            model.set(this.name, this.value);
        })
        this.$el.find('select[name]').each(function(){
                model.set(this.name, this.value);
        })

        var router11 = new ApplicationRouter()
            //update url and pass true to execute route method
        router11.navigate("dashboard", true);

        console.log(model.get('firstName'));
        console.log(model.get('lastName'));

    }

});
var view2=new view1()
