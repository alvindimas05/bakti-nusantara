<script lang="ts">
    import Fa from "svelte-fa";
    import logoBanu from "./assets/logo-banu.png";
    import {
        faDiscord,
        faFacebook,
        faWhatsapp,
    } from "@fortawesome/free-brands-svg-icons";
</script>

<nav class="navbar bg-base-100 fixed top-0 left-0 z-10 border-b">
    <div class="container mx-auto grid grid-cols-2">
        <div>
            <button><img alt="Logo Banu" class="w-10 md:w-20" src={logoBanu} /></button>
        </div>
        <div class="grid justify-items-end">
            <div class="w-fit grid grid-cols-[repeat(3,min-content)] gap-4">
                <a href="https://discord.com/invite/fXH6QqrbFX"
                    ><Fa icon={faDiscord} /></a
                >
                <a href="https://chat.whatsapp.com/GPGsJKXVDrEGdrd4ctXJvL"
                    ><Fa icon={faWhatsapp} /></a
                >
                <a href="https://www.facebook.com/groups/rutinitaspemainmc/"
                    ><Fa icon={faFacebook} /></a
                >
            </div>
        </div>
    </div>
</nav>
