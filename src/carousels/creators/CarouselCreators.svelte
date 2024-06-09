<script lang="ts">
    import Skinview3d from "./Skinview3d.svelte";
    import { getGPUTier } from "detect-gpu";

    import Reyya from "$assets/creators/Reyya.jpeg";
    import Nikashi from "$assets/creators/Nikashi33.png";
    import Jacktor from "$assets/creators/Jacktor29.png";
    import { onMount } from "svelte";

    let carouselCreators: HTMLDivElement;
    const maxCreator = 2;
    let currentCreator = 0;

    onMount(() => carouselCreators.scrollTo(0, 0));
    function changeCreator(inc: boolean) {
        let scrollRange =
            carouselCreators.getBoundingClientRect().width * (inc ? 1 : -1);
        if (
            (currentCreator == maxCreator && inc) ||
            (currentCreator == 0 && !inc)
        )
            scrollRange =
                carouselCreators.getBoundingClientRect().width *
                (maxCreator + 1) *
                (inc ? -1 : 1);

        if (inc) {
            currentCreator == maxCreator
                ? (currentCreator = 0)
                : currentCreator++;
        } else
            currentCreator == 0
                ? (currentCreator = maxCreator)
                : currentCreator--;

        carouselCreators.scrollBy(scrollRange, 0);
    }

    async function checkGpu() {
        const gpuTier = await getGPUTier();
        return gpuTier.tier < 2;
    }
</script>

{#if /Android|iPhone/i.test(navigator.userAgent)}
    <div class="relative">
        <button
            class="absolute left-0 top-1/2"
            on:click={() => changeCreator(false)}
        >
            <span class="text-3xl ms-4">&lt;</span>
        </button>
        <button
            class="absolute right-0 top-1/2"
            on:click={() => changeCreator(true)}
        >
            <span class="text-3xl me-4">&gt;</span>
        </button>
        <div class="carousel w-full mt-7 py-3" bind:this={carouselCreators}>
            <!-- {#await checkGpu() then optimize} -->
            <Skinview3d
                width={200}
                height={300}
                skin={Nikashi}
                nameTag="Nikashi33"
                role="Server Owner"
                autoRotate={false}
                show={currentCreator == 0}
            />
            <Skinview3d
                width={200}
                height={300}
                skin={Jacktor}
                nameTag="Jacktor29"
                role="Technical Operator"
                autoRotate={false}
                show={currentCreator == 1}
            />
            <Skinview3d
                width={200}
                height={300}
                skin={Reyya}
                nameTag="Reyya"
                role="Dev Operator"
                autoRotate={false}
                show={currentCreator == 2}
            />
            <!-- {/await} -->
        </div>
    </div>
{:else}
    <div class="grid grid-cols-3 mt-7">
        <Skinview3d
            width={200}
            height={300}
            skin={Jacktor}
            nameTag="Jacktor29"
            role="Technical Operator"
        />
        <Skinview3d
            width={200}
            height={300}
            skin={Nikashi}
            nameTag="Nikashi33"
            role="Server Owner"
        />
        <Skinview3d
            width={200}
            height={300}
            skin={Reyya}
            nameTag="Reyya"
            role="Dev Operator"
        />
    </div>
{/if}
