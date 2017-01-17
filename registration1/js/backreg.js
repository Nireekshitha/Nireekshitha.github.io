  var registrationModel = {}
  var reg = Backbone.Model.extend({
      // defaults: {
      //     firstName: "abcd",
      //     lastName: "",
      //     dateOfBirth: {
      //         date: "",
      //         month: "",
      //         year: ""
      //     },
      //     emailId: "abc@gmail.com",
      //     mobileNo: "",
      //     gender: "",
      //     address: "",
      //     city: "",
      //     pincode: "",
      //     state: "",
      //     country: "India"
      // }
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
  var view2 = Backbone.View.extend({

      el: $('form'),

      my_template: _.template($("#regustrationForm").html()),

      initialize: function() {
          this.render();
      },

      render: function() {
          this.$el.html(this.my_template);
      },
      events: {
          'submit': 'onFormSubmit',

      },
      getInput: function(name) {
          return this.$el.find('[name="' + name + '"]');
      },

      onFormSubmit: function(e) {


          this.$el.find('input[type="text"]').each(function() {
              model1.set(this.name, this.value);
          });
          // this.$el.find('input[type="number"]').each(function() {
          //     model1.set(this.name, this.model.value);
          // });
          // this.$el.find('input[type="radio"]:checked').each(function() {
          //     model1.set(this.name, this.value);
          // });
          // this.$el.find('input[type="checkbox"]:checked').each(function() {
          //     model1.set(this.name, this.value);
          // })
          // this.$el.find('input[type="textarea"]').each(function() {
          //     model1.set(this.name, this.value);
          // })
          // this.$el.find('select[name]').each(function() {
          //   model1.set(this.name, this.value);
          // })
          registrationModel=model1
          console.log(registrationModel);
          console.log(model1.get('firstName'));
          console.log(model1.get('lastName'));
          route1.navigate('dashbord');
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
  // var view3 = Backbone.View.extend({
  //     el: $('form'),
  //     events: {
  //         'submit': 'onFormSubmit',
  //     },
  //     getInput: function(name) {
  //         return this.$el.find('[name="' + name + '"]');
  //     },
  //
  //     onFormSubmit: function(e) {
  //
  //         this.$el.find('input[type="text"]').each(function() {
  //             model1.set(this.name, this.value);
  //         });
  //         this.$el.find('input[type="number"]').each(function() {
  //             model1.set(this.name, this.model.value);
  //         });
  //         this.$el.find('input[type="radio"]:checked').each(function() {
  //           model1.set(this.name, this.value);
  //         });
  //         this.$el.find('input[type="checkbox"]:checked').each(function() {
  //             model1.set(this.name, this.value);
  //         })
  //         this.$el.find('input[type="textarea"]').each(function() {
  //             model1.set(this.name, this.value);
  //         })
  //         this.$el.find('select[name]').each(function() {
  //             model1.set(this.name, this.value);
  //         })
  //
  //         console.log(model.get('firstName'));
  //         console.log(model.get('lastName'));
  //         route1.navigate('dashbord');
  //     }
  // });


  // var viw1 = new view3()
  var model1 = new reg();
  var ApplicationRouter = Backbone.Router.extend({
      routes: {
          "login": "login",
          "registration": "registration",
          "dashbord": "dashbord"
      },
      registration: function() {
          var view3 = new view2({
              model: model1
          })
          $("#content").html(view3.el);
      },
      login: function() {
          var view3 = new loginView()
          $("#content").html(view3.el);
      },
      dashbord: function() {
          var view3 = new view1();
            $("#content").html(view3.el);
      }
  });
  var route1 = new ApplicationRouter();
  Backbone.history.start();
