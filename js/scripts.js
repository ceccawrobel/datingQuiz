
$(document).ready(function() {
  $("#preferences").submit(function(event) {
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();

    console.log("age is " + age);
    console.log("gender pref is " + gender);

    if (age < 18 && gender === "male") {
      $("#youngMale").show();
    } else if (age < 18 && gender === "female") {
      $("#youngFemale").show();
    } else if (age < 18 && gender === "other") {
      $("#youngMale").show();
      $("#youngFemale").show();
    } else if (age >= 18 && age <=40 && gender === "male") {
      $("#midMale").show();
    } else if (age >= 18 && age <=40 && gender === "female") {
      $("#midFemale").show();
    } else if (age >= 18 && age <=40 && gender === "other") {
      $("#midMale").show();
      $("#midFemale").show();
    } else if (age > 40 && gender === "male") {
      $("#oldMale").show();
    } else if (age > 40 && gender === "female") {
      $("#oldFemale").show();
    } else if (age > 40 && gender === "other") {
      $("#oldMale").show();
      $("#oldFemale").show();
    }

    event.preventDefault();
  });
});
