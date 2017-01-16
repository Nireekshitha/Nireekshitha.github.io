  var registrationModel={}
  var reg = Backbone.Model.extend({
      defaults: {
          firstName: "abcd",
          lastName: "",
          dateOfBirth: {
              date: "",
              month: "",
              year: ""
          },
          emailId: "abc@gmail.com",
          mobileNo: "",
          gender: "",
          address: "",
          city: "",
          pincode: "",
          state: "",
          country: "India"
      }
  });

  var view1 = Backbone.View.extend({

      el: $('form'),

      my_template: _.template("<p>firstName:<strong><%= firstName %></strong></p><p>lastName: <%= lastName %></p><p>Email: <%= emailId %></p>"),

      initialize: function() {
          this.render(this.model);
      },

      render: function() {
          this.$el.html(this.my_template(this.model.toJSON()));
      }

  });
  var view3 = Backbone.View.extend({

      el: $('form'),

      events: {
          'submit': 'onFormSubmit',

      },
      getInput: function(name) {
          return this.$el.find('[name="' + name + '"]');
      },

      onFormSubmit: function(e) {
          var model = new reg();
          this.$el.find('input[type="text"]').each(function() {
              model.set(this.name, this.value);
          });
          this.$el.find('input[type="number"]').each(function() {
              model.set(this.name, this.model.value);
          });
          this.$el.find('input[type="radio"]:checked').each(function() {
              model.set(this.name, this.value);
          });
          this.$el.find('input[type="checkbox"]:checked').each(function() {
              model.set(this.name, this.value);
          })
          this.$el.find('input[type="textarea"]').each(function() {
              model.set(this.name, this.value);
          })
          this.$el.find('select[name]').each(function() {
              model.set(this.name, this.value);
          })

          console.log(model.get('firstName'));
          console.log(model.get('lastName'));
      }
  });


  var viw1 = new view3()

  var ApplicationRouter = Backbone.Router.extend({
      //map url routes to contained methods
      routes: {
          "login": "",
          "registration": "dashbord"
      },

      dashbord: function() {
        var registrationModel=new reg()
          var view2 = new view1({  model: registrationModel  })
          $(document.body).html(view1.el);
      }

  });


  var route1 = new ApplicationRouter();
  Backbone.history.start();
