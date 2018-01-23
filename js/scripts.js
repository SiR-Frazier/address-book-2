//back-end logic
function Contact (first, last, phone, email){
  this.firstName = first;
  this.lastName = last;
  this.phone = phone;
  this.email = email;
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

Address.prototype.fullAddress = function () {
  return this.street + " , " + this.city + " , " + this.state + " " + this.zip;
}

//front-end logic
