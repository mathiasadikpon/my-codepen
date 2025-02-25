function validate() {
  let inputStr = document.getElementById("username").value;

  const myReg = /^[a-zA-Z0-9]+\d+$/; // Uncomment this line and add your regular expression literal here

  if (myReg.test(inputStr)) alert("Username accepted");
  else
    alert(
      "Username must contain only alphanumeric characters, contain a mininum of two characters, and end with a digit."
    );
}
