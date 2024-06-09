<script lang="ts">
    // import Carousel from "svelte-carousel";
    import tradingHall from "$assets/carousel/trading-hall.jpeg";
    import cratesDungeon from "$assets/carousel/crates-dungeon.jpeg";
    import bedwars from "$assets/carousel/bedwars.jpeg";
    import economic from "$assets/carousel/economic.png";
    import buildBattle from "$assets/carousel/build-battle.png";
    import market from "$assets/carousel/market.png";
    import clan from "$assets/carousel/clan.png";
    import CarouselItem from "./CarouselItem.svelte";
    import { onMount } from "svelte";

    const autoScrollDelay = 5000;
    let carousel: HTMLDivElement;

    onMount(() => {
        const childCount = carousel.childElementCount - 3;
        var currentChild = 0;
        setInterval(() => {
            var scrollRange = 0;
            if (currentChild < childCount) {
                currentChild++;
                scrollRange = carousel.getBoundingClientRect().width / 3;
            } else {
                currentChild = 0;
                scrollRange = -(
                    (carousel.getBoundingClientRect().width / 3) *
                    childCount
                );
            }
            carousel.scrollBy(scrollRange, 0);
        }, autoScrollDelay);
    });
</script>

<div
    bind:this={carousel}
    class="carousel rounded w-full h-[17.5rem] md:h-[20rem]"
>
    <CarouselItem alt="Trading Hall" src={tradingHall} />
    <CarouselItem alt="Crates Dungeon" src={cratesDungeon} />
    <CarouselItem alt="Bedwars" src={bedwars} />
    <CarouselItem alt="Economic" src={economic} />
    <CarouselItem alt="Build Battle" src={buildBattle} />
    <CarouselItem alt="Market" src={market} />
    <CarouselItem alt="Clan" src={clan} />
</div>
