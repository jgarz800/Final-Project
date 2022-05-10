<script setup>
import {ref} from 'vue'
import { useRouter } from 'vue-router'
import useAuth from '../composables/useAuth'
const { isAuthenticated, login} = useAuth();
const username = ref("");
const password = ref("");
const router = useRouter();
const logginIn = () => {
    login(username.value, password.value)
    if (isAuthenticated.value){
        router.push("/");
    }
}
</script>

<template>
    <div class="flex flex-col items-center justify-center space-y-12 min-h-screen-nonav">
        <div class="flex items-center justify-center overflow-hidden">
            <img src="../assets/1280px-Valve_logo.svg.png" class="" style="background-image: url('https://wallpaperaccess.com/full/2641074.gif');">
           
        </div>
        <div class="flex flex-col items-center justify-center space-y-12 min-h-screen-nonav">
            <form @submit.prevent="logginIn" class="flex flex-col p-4 space-y-4">
                <input type="text" class="p-2 px-10 border-2 rounded-lg" placeholder="Username" v-model="username" />
                <input type="password" class="p-2 px-10 border-2 rounded-lg" placeholder="Password" v-model="password" />
                <button @submit.prevent="logginIn" type="submit" class="py-4 text-red-200 bg-red-600 rounded-lg">Login/Register</button>
            </form>
        </div>
    </div>
</template>