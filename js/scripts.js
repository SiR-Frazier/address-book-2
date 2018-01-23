//back-end logic
function Contact (first, last, phone, email){
  this.firstName = first;
  this.lastName = last;
  this.phone = phone;
  this.email = email;
  this.addresses = [];
}

function Address (street, city, state, zip){
  this.street = street;
  this.city = city;
  this.state = state;
  this.zip = zip;
}

Contact.prototype.fullName = function (){
  return this.firstName + " " + this.lastName;
}

Contact.prototype.phoneEmail = function (){
  return "Phone: " + this.phone + " and Email: " + this.email;
}

Address.prototype.fullAddress = function () {
  return this.street + " " + this.city + ", " + this.state + " " + this.zip;
}

//front-end logic

$(document).ready(function() {
  $("#new-contact").submit(function(event) {
    event.preventDefault();
    var inputtedFirstName = $(this).find("input#new-first-name").val();
    var inputtedLastName =  $(this).find("input#new-last-name").val();
    var inputtedPhoneNumber = $(this).find("input#phoneNumber").val();
    var inputtedEmail = $(this).find("input#email").val();
    var newContact = new Contact (inputtedFirstName, inputtedLastName, inputtedPhoneNumber, inputtedEmail);

    $(".newAddress").each(function(){
    var inputtedStreet = $(this).find("input#street").val();
    var inputtedCity = $(this).find("input#city").val();
    var inputtedState = $(this).find("input#state").val();
    var inputtedZip = $(this).find("input#zip").val();
    var newAddress = new Address (inputtedStreet, inputtedCity, inputtedState, inputtedZip);
    newContact.addresses.push(newAddress);

    $("ul#contacts").append('<li><span class="fullName">' + newContact.fullName() + '</span><br>' + '<div class="hideInfo">'+ newContact.phoneEmail()+ '<br>' + newAddress.fullAddress() + '</li></div>');

    $("#new-contact")[0].reset();
    });

    $(".fullName").unbind("click").click(function() {
       $(this).nextAll(".hideInfo").first().slideToggle("slow");
    });
  });
});
