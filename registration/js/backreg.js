var reg = Backbone.Model.extend({
    defaults: {
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        emailId: "",
        mobileno: "",
        gender: "",
        addres: "",
        city: "",
        pincode: ""
    }
});
var ApplicationRouter = Backbone.Router.extend({

    //map url routes to contained methods
    routes: {

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

        this.$el.find('input[name]').each(function() {
            model.set(this.name, this.value);
        })
        this.model.save();
        var router11 = new ApplicationRouter()
            //update url and pass true to execute route method
        router11.router.navigate("dashboard", true);


        console.log(model.get('firstName'));
        console.log(model.get('lastName'));

    }

    // onInputChange: function(e) {
    //     this.model.set(e.target.name, e.target.value);
    //
    // }


});
var view2=new view1()
