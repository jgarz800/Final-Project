<template>
<!--<div class="text-green-200 bg-green-800">-->
<div class="text-red-600 bg-black">
<div class="container flex items-center justify-between mx-auto">
        <!--<h1 class="text-3xl font-thin tracking-tighter">Valve<span class="font-normal">Router</span></h1>-->
        <nav>
            <router-link to="/">
                        <h1><img src="../assets/1280px-Valve_logo.svg.png" class="h-20 w-150"></h1>
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
                <router-link :to = "{ path: '/tech', name:'Tech'}">
                <li class="px-4 py-8 hover:cursor-pointer hover:bg-red-500 hover:text-black">Technology</li>
                </router-link>
                <router-link :to = "{ path: '/software', name:'Software'}">
                <li class="px-4 py-8 hover:cursor-pointer hover:bg-red-500 hover:text-black">Software</li>
                </router-link>
                <router-link :to = "{ path: '/merch', name:'Merch'}">
                <li class="px-4 py-8 hover:cursor-pointer hover:bg-red-500 hover:text-black">Merch</li>
                </router-link>
                <router-link :to = "{ path: '/blog', name:'Blog'}">
                <li class="px-4 py-8 hover:cursor-pointer hover:bg-red-500 hover:text-black">Blog</li>
                </router-link>
                <router-link :to = "{ path: '/contact', name:'Contact'}">
                <li class="px-4 py-8 hover:cursor-pointer hover:bg-red-500 hover:text-black">Contact Us</li>
                </router-link>
         </ul>
        </nav>
    </div>
</div>
</template>