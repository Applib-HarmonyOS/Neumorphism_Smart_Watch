export default {
    clickPrevious: function() {
        this.$emit('previousEvent');
    },
    clickNext: function() {
        this.$emit('nextEvent');
    }
}