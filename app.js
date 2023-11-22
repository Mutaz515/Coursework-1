var webstore = new Vue({
    el: '#app',
    data: {
        sitename: "After School Lessons",
        lessons: lessons,
        showLesson: true,
        sortBy: '',
        sortOrder: '',
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
        getLessonDetails(lessonId) {
            return this.lessons.find((lesson) => lesson.id === lessonId);
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
        },
        sortedProducts() {
          return  this.lessons.sort((a, b) => {
                let modifier = 1;
                if (this.sortOrder === "desc") {
                  modifier = -1;
                }
                if (a[this.sortBy] < b[this.sortBy]) return -1 * modifier;
                if (a[this.sortBy] > b[this.sortBy]) return 1 * modifier;
                return 0;
              });
        }
    }
});