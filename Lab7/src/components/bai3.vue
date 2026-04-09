<template>
    <div class="row">
    <div class="col-md-6 p-5">
        <h1>Form đăng ký</h1>
        <form @submit.prevent="handleSubmit">
            <div class="mb-3">
                <label>Họ và tên:</label>
                <input v-model="username" type="text" class="form-control" placeholder="Nhập họ và tên"/>
            </div>
            <div class="mb-3">
                <label>Email:</label>
                <input v-model="email" type="email" class="form-control" placeholder="Email"/>
            </div>
            <div class="mb-3">
                <label>Mật khẩu:</label>
                <input v-model="password" type="password" class="form-control" placeholder="Nhập mật khẩu"/>
            </div>
            <div class="mb-3">
                <label>Ngày sinh:</label>
                <input v-model="date" type="date" class="form-control"/>
            </div>

            <div class="mb-3">
                <label class="form-label d-block">Giới tính:</label>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" value="Nam" v-model="radio" name="gender">
                    <label class="form-check-label">Nam</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" value="Nữ" v-model="radio" name="gender">
                    <label class="form-check-label">Nữ</label>
                </div>
            </div>

            <div class="mb-3">
                <label class="form-label d-block">Ngôn ngữ:</label>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" value="Tiếng Việt" v-model="language">
                    <label class="form-check-label">Tiếng Việt</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" value="Tiếng Anh" v-model="language">
                    <label class="form-check-label">Tiếng Anh</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" value="Tiếng Trung" v-model="language">
                    <label class="form-check-label">Tiếng Trung</label>
                </div>
            </div>

            <button class="btn btn-primary">Đăng ký</button>
        </form>
    </div>

    <div class="col-md-6 p-5">
        <h2>Thông tin đã đăng ký</h2>
        <p><strong>Họ và tên: </strong>{{ username }}</p>
        <p><strong>Email: </strong>{{ email }}</p>
        <p><strong>Ngày sinh: </strong>{{ date }}</p>
        <p><strong>Giới tính: </strong>{{ radio }}</p>
        <p><strong>Ngôn ngữ: </strong>{{ language.join(', ') }}</p>
    </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const username = ref('');
const email = ref('');
const password = ref('');
const date = ref('');
const radio = ref('');
const language = ref([]);

const handleSubmit = () => {
    console.log('username:', username.value);
    console.log('email:', email.value);
    console.log('password:', password.value);
    console.log('date of birth:', date.value);
    console.log('gender:', radio.value);
    console.log('language:', language.value);
};
</script>
