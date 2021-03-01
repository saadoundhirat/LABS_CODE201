let userconfirm = confirm("if you want to continue please enter yes else no");
if (userconfirm == true) {
  let firtsname = prompt("hello user please enter your first name");
  console.log("answer:" + firtsname);
  let lastname = prompt("hello user please enter your last name");
  console.log("answer:" + lastname);
  let age = prompt("hello user please enter age");
  console.log("answer:" + age);
  let major = prompt("hello user please enter major");
  console.log("answer:" + major);
  let country = prompt(
    "HELLO" +
      firtsname +
      lastname +
      "YOUR AGE" +
      age +
      "CLOSE TO MY MINE" +
      "\nFOR LAST PLEASE ENTER WHERE ARE YOU FROM"
  );
  console.log("answer:" + country);

  alert(
    "FIRST AND LAST NAME:\n" +
      firtsname +
      lastname +
      "\n AGE:\n" +
      age +
      "\n MAJOR:\n" +
      major +
      "\n YOU ARE FROM\n" +
      country +
      "\nYOU INFORMATION HAVE BEEN SAVED"
  );
} else {
  console.log("thanks for visiting us let us see again");
}
