var theLink = {
  setColor: function(color) {
    // var alist = document.querySelectorAll("a");
    // var i = 0;
    // while (i < alist.length) {
    //    alist[i].style.color = color;
    //    i += 1;
    // }
    $("a").css("color", color);
  }
};
var theBody = {
  setColor: function(color) {
    $("body").css("color", color);
  },
  setBackgroundColor: function(color) {
    $("body").css("backgroundColor", color);
  }
};
function theNightDayHandler(self) {
  var target = document.querySelector("body");
  if (self.value === "night") {
    theBody.setBackgroundColor("black");
    theBody.setColor("white");
    self.value = "day";

    theLink.setColor("powderblue");
  } else {
    theBody.setBackgroundColor("white");
    theBody.setColor("black");
    self.value = "night";

    theLink.setColor("blue");
  }
}
