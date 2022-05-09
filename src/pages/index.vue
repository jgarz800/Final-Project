<template>
 
    <div class="flex flex-col items-center justify-center py-8 bg-black h-screen-nonav">
        <nav>
            <router-link :to = "{ name: 'About'}">
                <h1 class="px-20 py-5 text-3xl font-semibold tracking-tighter bg-red-500 text-black-500 hover:bg-black hover:text-red-500">About Us</h1>
            </router-link>
        </nav>
    </div>
    
    <div class="flex flex-col items-center justify-center h-screen-nonav">
        <iframe width="560" height="315" 
        src="https://www.youtube.com/embed/9Dy-KWjp-m0" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen></iframe>
    </div>

     <div class="container flex flex-col items-center justify-center">
        <p class="pt-10 pl-10 pr-10 text-white">
            Valve Software has existed since its inception in 1996 by Gabe Newell and Mike Harrington, who
            had previosly worked for Microsoft. Some of the first products are the memorable and influential
            such as Half Life(1998), and pioneered the way for many first person shooters just like it. Of course
            Valve is not limited to this software and spans from software such as Steam, which allows you to purchase 
            games, install them, and of course launch and play them! Valve is also heavily experimental and has attempted many
            things such as physics engines, Source and its latest iteration Source 2. Not to mention its many critically acclaimed 
            games which generally utilize this engine such as Counter Strike, Left 4 Dead, Portal, Dota and many more titles. The influence
            of Valves software can be especially seen and many credit the release of Half Life on the GoldSrc engine to be detrimental to 
            the current state of video games, and very much first person shooters. Many notably refer to the period in gaming as Pre-Half-Life
            and Post-Half-life. Valve Corporation, or rather Valve Software has long been the leading company in continuing the practice
            of originality and setting the industry example with original and creative ideas.
        </p>
    </div>

    <div class="flex flex-col items-center justify-center py-8 bg-black h-screen-nonav">
        <nav>
            <router-link :to = "{ path: '/login', name:'Login'}">
                <h1 class="px-20 py-5 text-3xl font-semibold tracking-tighter bg-red-500 text-black-500 hover:bg-black hover:text-red-500">Software</h1>
            </router-link>
        </nav>
    </div>

     <div class="flex flex-col items-center justify-center h-screen-nonav">
        <iframe width="560" height="315" 
        src="https://www.youtube.com/embed/9NZDwZbyDus" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen></iframe>
    </div>

    <div class="flex flex-col items-center justify-center py-8 bg-black h-screen-nonav">
        <nav>
            <router-link :to = "{ path: '/store', name:'Store'}">
                <h1 class="px-20 py-5 text-3xl font-semibold tracking-tighter bg-red-500 text-black-500 hover:bg-black hover:text-red-500">Store</h1>
            </router-link>
        </nav>
    </div>

    <div class="container flex flex-col items-center justify-center">
        <img src="../assets/AHLF036MRW_ReportTheVort_-1000x1000.png" width="560" height="315">
    </div>
    
</template>