var app = new Vue({
    el:'#app',
    devtools:true,
    data:{
        product:'Socks',
        image:'images/socksBlue.jpg',
        inStock:true,
        details:["80% cotton", "20% polyester", "Gender-neutral"],
        variants:[
            {
                variantId:2334,
                variantColor:"green"
            },
            {
                variantId:2335,
                variantColor:"blue"
            },
        ]
    }
})

Vue.config.devtools = true;