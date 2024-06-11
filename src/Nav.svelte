<script lang="ts">
    import Fa from "svelte-fa";
    import logoBanu from "./assets/logo-banu.png";
    import {
        faDiscord,
        faFacebook,
        faWhatsapp,
    } from "@fortawesome/free-brands-svg-icons";
    import { faMoon, faSun } from "@fortawesome/pro-regular-svg-icons";
    import { theme } from "./lib/localStorage";

    const changeTheme = () => theme.set($theme == "retro" ? "night" : "retro");
</script>

<nav class="navbar bg-base-100 fixed top-0 left-0 z-10 border-b">
    <div class="container mx-auto grid grid-cols-[auto_auto]">
        <div>
            <button
                ><img
                    alt="Logo Banu"
                    class="w-10 md:w-20"
                    src={logoBanu}
                /></button
            >
        </div>
        <div class="grid justify-items-end">
            <div class="w-fit grid grid-cols-[max-content_max-content]">
                <div class="grid justify-items-end">
                    <!-- <button class="w-fit grid grid-cols-[min-content_auto] me-4"
                        ><Fa class="me-2 text-end" icon={faMap} /><span
                            class="mt-[2px]">Live Map</span
                        >
                    </button> -->
                </div>
                <div class="grid justify-items-end">
                    <div
                        class="w-fit grid grid-cols-[repeat(4,min-content)] gap-4"
                    >
                        <button class="me-3" on:click={changeTheme}
                            ><Fa
                                icon={$theme == "retro" ? faSun : faMoon}
                                size="lg"
                            /></button
                        >
                        <a href="https://discord.com/invite/fXH6QqrbFX"
                            ><Fa icon={faDiscord} size="lg" /></a
                        >
                        <a
                            href="https://chat.whatsapp.com/GPGsJKXVDrEGdrd4ctXJvL"
                            ><Fa icon={faWhatsapp} size="lg" /></a
                        >
                        <a
                            href="https://www.facebook.com/groups/rutinitaspemainmc/"
                            ><Fa icon={faFacebook} size="lg" /></a
                        >
                    </div>
                </div>
            </div>
        </div>
    </div>
</nav>
