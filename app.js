new Vue({
    el:'#app',
    data: {
        title: 'Becoming a Vue ninja',
        showName: false
    },
    methods: {
        toogleShowName(){
            this.showName = !this.showName;
        }
    }
})