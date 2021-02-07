new Vue({
    el:'#app',
    data: {
        title: 'Becoming a Vue ninja',
        name: 'Roger'
    },
    methods: {
        updateName(evt){
            // console.log(evt.target.value);
            this.name = evt.target.value;
        }
    }
})