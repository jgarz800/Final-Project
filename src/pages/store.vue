<script>
    export default{
        name: "App",
        data: () => {
            return{
                cart:[],
                products: [
                    {
                        name: 'Dota Shirt',
                        cost: '$24.99',
                        number: 24.99,
                        image: "https://vsimgs3.forfansbyfans.com/image/cache/data/productimages/DOTA2/MensTshirts/21/MDOT981GL1_Underground_COF-280x280.png"
                    },
                    {
                        name: 'TF2 Shirt',
                        cost: '$24.99',
                        number: 24.99,
                        image: "https://vsimgs3.forfansbyfans.com/image/cache/data/productimages/TeamFortress2/MensTees/2020/MTRS109GL1_BLUThisIsABucket_SIL-280x280.png"
                    },
                    {
                        name: 'CSGO Hoodie',
                        cost: '$40.00',
                        number: 40.00,
                        image: "https://vsimgs3.forfansbyfans.com/image/cache/data/productimages/CSGO/Outerwear/MCOU095TCLC-Hyperbeast-front-280x280.png"
                    },
                ],
                mousepads: [
                    {
                        name: 'Dota Mouse',
                        cost: '$20.00',
                        number: 20.00,
                        image: "https://vsimgs3.forfansbyfans.com/image/cache/data/productimages/DOTA2/Mousepads/19/ADOT724MRW_HeroesPick_Updated-280x280.png"
                    },
                    {
                        name: 'TF2 Mouse',
                        cost: '$20.00',
                        number: 20.00,
                        image: "https://vsimgs3.forfansbyfans.com/image/cache/data/productimages/TeamFortress2/Mousepads/19/ATRS238MRW_2Fort-280x280.png"
                    },
                    {
                        name: 'CSGO Mouse',
                        cost: '$20.00',
                        number: 20.00,
                        image: "https://vsimgs3.forfansbyfans.com/image/cache/data/productimages/CSGO/HomeOffice/18/ACOU038MRW1_CluckerStrike-280x280.png"
                    },
                ],
        };
    },
    methods: {
        addItemToCart(product){
            console.log(product);
            this.cart.push(product);
            console.log(this.cart);
        },
        removeItemFromCart(product){
            this.cart.splice(this.cart.indexOf(product, 1));
        }
    },
    components: {

    }, computed: {
        totalCart(){
            return this.cart.reduce((cart, product) => cart + product.number, 0).toFixed(2)
            console.log(cart[cart.length])
        },
    }
    }

</script>

<template>
<div>
    <div class="flex flex-col items-center justify-center pb-10 h-screen-nonav">
        <h1 class="px-20 py-10 text-3xl text-center text-white bg-red-500 font-arial">
            Store
        </h1>
    </div>
    
    <div class="container flex items-center justify-between pt-10 mx-auto">
        <div class="px-20 py-5 text-white" v-for="product in products" :key="product.name">
            <img :src="product.image"/>
            <div class="">{{product.name}}</div>
            <div class="">{{product.cost}}</div>
            <button v-on:click="addItemToCart(product)" class="px-2 bg-red-500 rounded hover:bg-red-400">Add to Cart</button>
        </div>
    </div>
</div>

<div>
    <div class="container flex items-center justify-between pt-10 mx-auto">
        <div class="px-20 py-5 text-white" v-for="mousepad in mousepads" :key="mousepad.name">
            <img :src="mousepad.image"/>
            <div class="">{{mousepad.name}}</div>
            <div class="">{{mousepad.cost}}</div>
            <button v-on:click="addItemToCart(mousepad)" class="px-2 bg-red-500 rounded hover:bg-red-400">Add to Cart</button>
        </div>
    </div>
</div>

<div class="flex flex-col items-center justify-center pb-10 h-screen-nonav">
        <h1 class="px-20 py-10 text-3xl text-center text-white bg-red-500 rounded-lg font-arial">
            Cart
        </h1>
        <h2 class="px-20 py-10 text-3xl text-center text-white font-arial">
            Total Cost: ${{totalCart}}
        </h2>
    </div>

    <div class="container flex items-center justify-between pt-10 mx-auto">
        <div class="px-20 py-5 text-white" v-for="product in cart" :key="product.name">

            <img :src="product.image">
            <div class="">{{product.name}}</div>
            <div class="text-black bg-white rounded ">{{product.cost}}</div>
            <button v-on:click="removeItemFromCart(cart)" class="px-2 bg-red-500 rounded hover:bg-red-400">Remove From Cart</button>
        </div>

    </div>

</template>