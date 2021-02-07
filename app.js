new Vue({
    el:'#app',
    data: {
        title: 'Becoming a Vue ninja',
        coords: {x: 0, y: 0}
    },
    methods: {
        logEvent(evt){
            console.log(evt);
        },
        logCoords(evt){
            this.coords.x = evt.offsetX;
            this.coords.y = evt.offsetY;
        }
    }
})