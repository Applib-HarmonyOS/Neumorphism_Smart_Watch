export default {
    clickLeft: function() {
        this.$emit('leftEvent');
    },
    clickMiddle: function() {
        this.$emit('middleEvent');
    },
    clickRight: function() {
        this.$emit('rightEvent');
    }
}