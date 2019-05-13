export default {
    name:"first-page",
    created() {
        console.log(this.$store.getters.saleProducts);
    }
}