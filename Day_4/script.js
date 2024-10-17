function validate() {
    let un = document.getElementById("un").value;
    let pass = document.getElementById("pass").value;
    if (un == "1234" && pass == "1234")
      document.getElementById("res").innerHTML = "Login Success";
    else document.getElementById("res").innerHTML = "Login Failed";
  }
