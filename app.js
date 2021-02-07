new Vue({
    el:'#app',
    data: {
        title: 'This is my app title',
        name: 'Roger',
        classes: ['one','two']
    },
    methods: {
        greet(time){
            return `Good ${time}, ${this.name}`
        }
    }
})