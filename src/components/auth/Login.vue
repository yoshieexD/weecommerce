<template>
    <div class="main">
        <form class="login-container">
            <span class="text">Username:</span>
            <div class="input-container">
            <input type="text"/>
            </div>
            <span class="text">Password:</span>
            <div class="input-container">
                <input type="password"/>
            </div>
            <div class="action-buttons">
            <button type="submit" class="login login-main">Login</button>
            <span class="text">or</span>
            <p class="register text">Wala pang Account? Register</p>
            </div>
        </form>
    </div>
</template>

<style>
.text{
    color: rgb(42, 37, 37);
}
.action-buttons{
display: flex;
flex-direction: column;
align-items: center;
}
.register{
    text-decoration: underline;
    cursor: pointer;
}
.input-container{
    border: 2px solid rgb(42, 37, 37) !important;
    padding: 10px 20px;
    margin-bottom:5px;
    border-radius: 5px;
    background-color: rgb(250, 239, 225);
}
input{
    border: 0;
    margin: 2px;
    background-color: rgb(250, 239, 225);

}
input:focus {
    outline: none;
}
.main {
      margin: 0;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
}

.login-container{
    display:flex;
    flex-direction: column;
    /* border: 3px solid rgb(42, 37, 37);
    padding: 100px 100px;
    border-radius: 10px; */
}
.login-main{
    width: 100%;
}
</style>