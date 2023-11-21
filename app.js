var webstore = new Vue({
    el: '#app',
    data: {
        sitename: "After School Lessons",
        lessons: lessons,
        cart: [],
    },
    methods: {
        addToCart: function (lesson) {
            this.cart.push( lesson.id);
        },
        canAddToCart: function(lesson) {
            return lesson.spaces > this.cartCount(lesson.id);
        },
        cartCount(id) {
            let count = 0;
            for (let i = 0; i < this.cart.length; i++) {
                if (this.cart[i] === id) {
                    count++;
                }
            }
            return count;
        }
    },
    computed: {
        cartItemCount: function() {
            return this.cart.length ;
        },
       
    }
});