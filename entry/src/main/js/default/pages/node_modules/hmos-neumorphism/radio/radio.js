export default {
    data: {
        visible: false,
    },
    toggleShow: function() {
        this.visible = !this.visible;
        this.$emit('checkEvent');
    },
    onInit(){
        if(this.checked=='true') this.visible=true;
    }
}