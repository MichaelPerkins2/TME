<script>

</script>

<template>
    <div id="main" class="container sign-in">
        <form>
            <h2 style="text-align: center;">Sign-In</h2>
            <div class="container">
                <label style="margin: 0;" for="uname"><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="uname" required>

                <label style="margin: 0;" for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required>

                <button type="submit">Login</button>
            </div>
        </form>
    </div>
</template>

<style>
.sign-in form {
    border: 1px solid #34568B;
  }
  
  input[type=text], input[type=password] {
    width: 100%;
    padding: 1em 1.5em;
    margin: 1em 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
  }
  
  button {
    background-color: #34568B;
    color: white;
    padding: 1em 1.5em;
    margin: 1em 0;
    width: 100%;
  }
  
  button:hover {
    opacity: 0.8;
  }
  
  .sign-in  {
    padding: 1em;
  }
  
  form .container {
    width: 50%;
    padding: 16px;
  }
</style>