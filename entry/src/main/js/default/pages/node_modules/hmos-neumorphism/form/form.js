export default {
    handleReset: function() {
        this.$emit('resetEvent');
    },
    handleSubmit: function() {
        this.$emit('submitEvent');
    },
}