<template>
<div class="container-fluid mb-3 text-center">
    <h6 :class="className" :style="styleData">Caculator - 22 - Nguyễn Võ Vĩnh Lộc</h6>
    <h3>Count {{ count }}</h3>

    <button @click="increment" class="btn btn-success">+</button>
    <button @click="decrement" class="btn btn-success">-</button>
    <button @click="reset" class="btn btn-danger">Reset</button>
    <button @click="changeClassName" class="btn btn-warning">Change class</button>
    <h2 v-html="count"></h2>
</div>
</template>
<script setup>
import { ref } from 'vue'
const count = ref(0)
const increment = () =>{
    count.value++
    styleData.value = 'font-size: '+ count.value+'rem'
} 
const decrement = () => {
    count.value--
    styleData.value = 'font-size: '+ count.value+'rem'
    if (count.value < 0) {
        count.value = 0
    }
}
const reset = () => (count.value = 0)
const content = 'Hello!'
const className = ref('text-red')
const styleData = ref('font-size: 5rem')
const changeClassName = () => {
    if (className.value === 'text-red') {
        className.value = 'text-blue'
    } else {
        className.value = 'text-red'
    }
}
</script>
<style scoped>
 .text-red {
    color:red
 }
 .text-blue {
    color:blue
 }
</style>