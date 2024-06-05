<script lang="ts">
    export let src: string;
    export let alt: string;
</script>

<div class="carousel-item">
    <img {alt} {src} />
</div>

<style lang="scss">
    .carousel-item {
        @apply w-full md:w-1/3 h-full grid items-center;
        img {
            @apply min-w-full h-full object-cover;
        }
    }
</style>
