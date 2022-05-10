<script setup>
import {useRouter} from 'vue-router'
import useAuth from '../composables/useAuth';
const { isAuthenticated, logout } = useAuth();
const router = useRouter()
const loggingOut = () => {
    logout()
    router.push("/")
}
</script>

<template>
<!--<div class="text-green-200 bg-green-800">-->
<div class="text-red-600 bg-black">
<div class="container flex items-center justify-between mx-auto">
        <!--<h1 class="text-3xl font-thin tracking-tighter">Valve<span class="font-normal">Router</span></h1>-->
        <nav>
            <router-link to="/">
                        <h1><img src="../assets/1280px-Valve_logo.svg.png" class="h-20 w-150" style="background-image: url('https://i.pinimg.com/originals/26/6b/e8/266be8ffd47b293b5aa0f3d35c19775d.gif');"></h1>
            </router-link>
        </nav>
        
        <nav>
            <ul class="flex space-x-4">
                <router-link to="/">
                <li class="px-4 py-8 hover:cursor-pointer hover:bg-red-500 hover:text-black">
                    Home
                </li>
                </router-link>
                <router-link :to = "{ name: 'About'}">
                <li class="px-4 py-8 hover:cursor-pointer hover:bg-red-500 hover:text-black">About</li>
                </router-link>
                <router-link v-if="!isAuthenticated" :to="{ path: '/login', name:'Login'}">
                <li class="px-4 py-8 hover:cursor-pointer hover:bg-red-500 hover:text-black">Login/Register</li>
                </router-link>
                <div v-else class="flex">
                <router-link :to = "{ path: '/blog', name:'Blog'}">
                    <li class="px-4 py-8 hover:cursor-pointer hover:bg-red-500 hover:text-black">Blog</li>
                </router-link>
                <button @click="loggingOut">
                    <li class="px-4 py-8 hover:cursor-pointer hover:bg-red-500 hover:text-black">Logout</li>
                </button>
                </div>
                <router-link :to = "{ path: '/software', name:'Software'}">
                <li class="px-4 py-8 hover:cursor-pointer hover:bg-red-500 hover:text-black">Software</li>
                </router-link>
                <router-link :to = "{ path: '/store', name:'Store'}">
                <li class="px-4 py-8 hover:cursor-pointer hover:bg-red-500 hover:text-black">Store</li>
                </router-link>
                <router-link :to = "{ path: '/contact', name:'Contact'}">
                <li class="px-4 py-8 hover:cursor-pointer hover:bg-red-500 hover:text-black">Contact Us</li>
                </router-link>
         </ul>
        </nav>
    </div>
</div>
</template>