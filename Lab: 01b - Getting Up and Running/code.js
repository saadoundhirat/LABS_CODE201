let userconfirm = confirm("if you want to continue please enter yes else no");
if (userconfirm == true) {
  let firtsname = prompt("hello user please enter your first name");
  let lastname = prompt("hello user please enter your last name");
  let age = prompt("hello user please enter age");
  let major = prompt("hello user please enter major");
  let country = prompt(
    "HELLO" +
      firtsname +
      lastname +
      "YOUR AGE" +
      age +
      "CLOSE TO MY MINE" +
      "\nFOR LAST PLEASE ENTER WHERE ARE YOU FROM"
  );

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
