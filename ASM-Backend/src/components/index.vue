<template>
    <div class="template">
        <header>
            <h2 class="logo fw-bold"><img src="..." alt="" style="width: 150px;">Put logo here</h2>
            <nav class="navigation">
                <a href="index.vue">Home</a>
                <a href="Post.vue">Post</a>
                <a href="#">User</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
                <button class="btnLogin-popup fw-bold" @click="openPopup">Login</button>
            </nav>
        </header>

        <div class="wrapper" :class="{ active: !isLogin, 'active-popup': isPopup }">

            <span class="icon-close" @click="closePopup">
                <font-awesome-icon icon="xmark" />
            </span>

            <!-- LOGIN -->
            <div class="form-box login">
                <h2 class="fw-bold">Login</h2>
                <form>
                    <div class="input-box">
                        <span class="icon"><font-awesome-icon icon="fa-envelope"></span>
                        <input type="email" required>
                        <label>Email</label>
                    </div>

                    <div class="input-box">
                        <span class="icon"><font-awesome-icon icon="fa-key" /></span>
                        <input type="password" required>
                        <label>Password</label>
                    </div>

                    <button type="submit" class="btn fw-bold">Login</button>

                    <div class="login-register">
                        <p>
                            Don't have an account?
                            <a href="#" @click.prevent="openRegister">Register now</a>
                        </p>
                    </div>
                </form>
            </div>

            <!-- REGISTER -->
            <div class="form-box register">
                <h2 class="fw-bold">Registration</h2>
                <form>
                    <div class="input-box">
                        <span class="icon"><font-awesome-icon icon="fa-user" /></span>
                        <input type="text" required>
                        <label>Username</label>
                    </div>

                    <div class="input-box">
                        <span class="icon"><font-awesome-icon icon="fa-solid fa-envelope" /></span>
                        <input type="email" required>
                        <label>Email</label>
                    </div>

                    <div class="input-box">
                        <span class="icon"><font-awesome-icon icon="fa-key" /></span>
                        <input type="password" required>
                        <label>Password</label>
                    </div>

                    <button type="submit" class="btn fw-bold">Register</button>

                    <div class="login-register">
                        <p>
                            Already have an account?
                            <a href="#" @click.prevent="openLogin">Login</a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
        
    </div>
    
    <footer class="bg-dark text-white text-center py-3">
        ©Copyright by FPT Polytechnic
    </footer>
</template>
<script setup>
import { ref } from 'vue'

const isLogin = ref(true)
const isPopup = ref(false)

const openLogin = () => {
    isLogin.value = true
}

const openRegister = () => {
    isLogin.value = false
}

const openPopup = () => {
    isPopup.value = true
}

const closePopup = () => {
    isPopup.value = false
}
</script>
<style scoped>
* {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.template {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: url('../assets/images/background.jpg') no-repeat;
    background-size: cover;
    background-position: center;
}

header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 20px 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 99;
}

.btn {
    width: 100%;
    height: 45px;
    background: #162938;
    border: none;
    outline: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 1em;
    color: #fff;
    font-weight: 500;
}

.logo {
    font-size: 2em;
    color: #fff;
}

.login-register {
    font-size: .9em;
    color: black;
    text-align: center;
    font-weight: 500;
    margin: 25px 0 10px;
}

.login-register p a {
    color: black;
    text-decoration: none;
    font-weight: 600;
}

.login-register p a:hover {
    text-decoration: underline;
}

.navigation a {
    position: relative;
    font-size: 1.1em;
    color: #fff;
    text-decoration: none;
    font-weight: 500;
    margin-left: 40px;
}

.navigation a::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -6px;
    width: 100%;
    height: 3px;
    background: #fff;
    border-radius: 5px;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform .5s;
}

.navigation a:hover::after {
    transform-origin: left;
    transform: scaleX(1);
}

.navigation .btnLogin-popup {
    width: 130px;
    height: 50px;
    background: transparent;
    border: 2px solid #fff;
    outline: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 1.1em;
    color: #fff;
    font-weight: 500;
    margin-left: 40px;
    transition: .5s;
}

.navigation .btnLogin-popup:hover {
    background: #fff;
    color: #162938;
}

.wrapper {
    position: relative;
    width: 400px;
    height: 440px;
    background: transparent;
    border: 2px solid rgba(255, 255, 255, .5);
    border-radius: 20px;
    backdrop-filter: blur(20px);
    box-shadow: 0 0 30px rgba(0, 0, 0, .5);
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    transform: scale(0);
    transition: transform .5s ease, height .2s ease;
}

.wrapper.active-popup {
    transform: scale(1);
}

.wrapper.active {
    height: 520px;
}

.wrapper .form-box {
    width: 100%;
    padding: 40px;
}

.wrapper .form-box.login {
    transition: transform .18s ease;
    transform: translateX(0);
}

.wrapper.active .form-box.login {
    transition: none;
    transform: translateX(-400px);
}

.wrapper .form-box.register {
    position: absolute;
    transition: none;
    transform: translateX(400px);
}

.wrapper.active .form-box.register {
    transition: transform .18s ease;
    transform: translateX(0)
}

.wrapper .icon-close {
    position: absolute;
    top: 0;
    right: 0;
    width: 45px;
    height: 45px;
    background: black;
    font-size: 2em;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom-left-radius: 20px;
    cursor: pointer;
    z-index: 1;
}

.form-box h2 {
    font-size: 2em;
    color: black;
    text-align: center;
}

.input-box {
    position: relative;
    width: 100%;
    height: 50px;
    border-bottom: 2px solid black;
    margin: 30px 0;
}

.input-box label {
    position: absolute;
    top: 50%;
    left: 5px;
    transform: translateY(-50%);
    font-size: 1em;
    color: black;
    font-weight: 500;
    pointer-events: none;
    transition: .5s;
}

.input-box input:focus~label,
.input-box input:valid~label {
    top: -5px;
}

.input-box input {
    width: 100%;
    height: 100%;
    background: transparent;
    border: none;
    outline: none;
    font-size: 1em;
    color: black;
    font-weight: 600;
    padding: 0 35px 0 5px;
}

.input-box .icon {
    position: absolute;
    right: 8px;
    font-size: 1.2em;
    color: black;
    line-height: 57px;
}

.remember-forgot {
    font-size: .9em;
    color: black;
    font-weight: 500;
    margin: -15px 0 15px;
    display: flex;
    justify-content: space-between;
}

.remember-forgot label input {
    accent-color: black;
    margin-right: 3px;
}

.remember-forgot a {
    color: black;
    text-decoration: none;
}

.remember-forgot a:hover {
    text-decoration: underline;
}
</style>