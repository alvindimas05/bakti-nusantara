<script lang="ts">
    import { SkinViewer } from "skinview3d";
    import { onMount } from "svelte";

    export let width: number,
        height: number,
        skin: string,
        nameTag: string,
        role: string,
        show = true,
        autoRotate = true;

    let canvas: HTMLCanvasElement;
    let skinViewer: SkinViewer;
    onMount(setSkinViewer);
    $: show, setSkinViewer();

    function setSkinViewer() {
        skinViewer = new SkinViewer({
            canvas,
            width,
            height,
            skin,
        });
        if (!show && skinViewer != undefined) {
            setTimeout(() => skinViewer.dispose(), 500);
            return;
        }
        skinViewer.autoRotate = autoRotate;
    }
</script>

<div class="grid justify-items-center w-full carousel-item h-fit">
    <h1 class="text-center text-xl">{nameTag}</h1>
    <canvas bind:this={canvas}></canvas>
    <h1 class="mt-5 text-center text-xl">{role}</h1>
</div>
