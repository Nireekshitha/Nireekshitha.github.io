define(['controller/deletelist'],function(deletelist) {
  var dbName = "my-sample-db",
      link = "/api/v1/data";
      var check=[];
  link = link + "/" + dbName;
  var  createSpanCloseMark,createCheckbox;

createCheckbox= function () {
      //creating tick mark before the li text
      var span1 = document.createElement("SPAN");
      span1.className = "check-item"
      var tick = document.createElement("INPUT");
      tick.name = "list";
      tick.type = "checkbox";
      tick.className = "ticklist";

      span1.appendChild(tick);
      var ticklabel = document.createElement("LABEL");
      ticklabel.htmlFor = tick.id;
      span1.appendChild(ticklabel);
      return span1;
  }

 function createSpanCloseMark(task) {
      var span2 = document.createElement("INPUT");
      span2.type = "button";
      span2.className = "closelist";
      span2.value = "X";
      span2.onclick = function() {
        deletelist.deleteTask(JSON.stringify(task))
      };
      return span2;
  }

  function displayTasks(tasks) {

      var x = 0,
          li;
      var ul = document.createElement("UL");

      for (var j = 0; j < tasks.length; j++) {
          console.log(j);
          li = document.createElement("LI");
          li.className = "listingStyle"
          var hr = document.createElement("HR");
          var checkbx = createCheckbox();
          li.appendChild(checkbx);
          var textnode = document.createTextNode(tasks[j].task);
          li.appendChild(textnode);
          check[j] = JSON.stringify(tasks[j]);
          var closemark = createSpanCloseMark(tasks[j])
          li.appendChild(closemark);
          li.appendChild(hr);
          ul.appendChild(li);
      }


      var listing = document.getElementById('listing');
      listing.textContent = '';
      listing.appendChild(ul)

  }
  function getcheck(){
    return check;
  }
  return {
        displayTasks:displayTasks,
        getcheck:getcheck,
         createSpanCloseMark: createSpanCloseMark
    };

});
