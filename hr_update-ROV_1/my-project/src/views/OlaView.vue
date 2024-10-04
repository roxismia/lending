<script>
export default {
    data () {
        return {
            like: 0
        }
    },
    methods : {
likes () {
    this.like =this.like +1
}
    }
    
}
</script>

<template>
    <div class="border">
        <button @click="likes">лайкнуть</button>
        <div class="liker"></div>
        <div class="item">=</div>
        <div class="caunter">{{ this.like }}</div>
    </div>

</template>
<style>
.border {
    width: 300px;
    height: 300px;
    border: 2px solid #000;

}
</style>