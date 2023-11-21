var webstore = new Vue({
    el: '#app',
    data: {
        sitename: "After School Lessons",
        lessons: lessons,
        showLesson: true,
        order: {
            name: '',
            number: ''
        },
        cart: [],
    },
    methods: {
        addToCart(lesson) {
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
        },
        showCheckout() {
            this.showLesson = this.showLesson ? false : true;
        },
        submitForm() {
            alert('Order submitted!')
        },
    },
    computed: {
        cartItemCount: function() {
            return this.cart.length ;
        },
        canCheckOut(){
            return this.order.name !== "" && this.order.number !== "";
        }
       
    }
});