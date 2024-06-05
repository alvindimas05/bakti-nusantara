<script lang="ts">
    import { SkinViewer } from "skinview3d";
    import { onMount } from "svelte";

    export let width: int,
        height: int,
        skin: string,
        nameTag: string,
        role: string;

    let canvas: HTMLCanvasElement;
    onMount(() => {
        let skinViewer = new SkinViewer({
            canvas,
            width,
            height,
            skin,
        });
        skinViewer.autoRotate = true;
    });
</script>

<div class="grid justify-items-center">
    <h1 class="text-center text-xl">{nameTag}</h1>
    <canvas bind:this={canvas}></canvas>
    <h1 class="mt-5 text-center text-xl">{role}</h1>
</div>
