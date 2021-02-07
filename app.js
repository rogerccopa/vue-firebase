new Vue({
    el:'#app',
    data: {
        title: 'This is my app title',
        wage: 10
    },
    methods: {
        increaseWage: function(amount){
            this.wage += amount;
        }
    }
})