<script lang="ts">
  import Fa from "svelte-fa";
  import Notify from "simple-notify";
  import { faClipboard } from "@fortawesome/pro-regular-svg-icons";
  import logoBanu from "./assets/logo-banu.jpg";

  const addressJava = "baktinusantaramc.jacktor.com:7061";
  const addressBedrock = "baktinusantaramc.jacktor.com";
  const portBedrock = "7061";

  function copy(text: string) {
    navigator.clipboard.writeText(text);
    new Notify({
      text: "Server Address sudah dicopy!",
    });
  }
</script>

<div class="w-screen h-screen md:p-16 lg:p-32 relative">
  <div
    class="absolute top-0 left-0 w-full h-full bg-banu bg-no-repeat bg-cover blur-md"
  ></div>
  <div
    class="relative top-0 left-0 bg-black w-full h-full bg-opacity-50 grid md:grid-cols-[70%_30%]"
  >
    <div class="grid items-center w-full md:w-auto md:p-10 box-border">
      <div class="w-screen md:w-auto border-box px-5 pb-5 md:p-0">
        <p class="w-full text-sm md:text-lg">
          Halo semuanya, kabar baik untuk kita semua. Server Minecraft kami
          <b>Rutinitas Pemain Minecraft</b> atau sekarang dikenal sebagai
          <b>Bakti Nusantara</b>
          telah dibuka untuk umum. Kalian sudah bisa mengakses servernya. Minecraft
          Java dan Bedrock bisa bergabung dan bermain dalam satu server yang sama.
        </p>
        <div class="grid justify-items-center w-full mt-3 md:block md:mt-0">
          <a
            class="w-fit"
            href="minecraft:?addExternalServer=Bakti Nusantara|baktinusantaramc.jacktor.com:7061"
            ><button
              class="border-2 px-4 py-2 md:pb-1 md:pt-4 rounded md:text-lg"
              >Join Sekarang!</button
            ></a
          >
        </div>
        <p class="mt-5 md:mt-10 text-xs md:text-sm">
          Tidak bisa join? Kamu bisa join secara manual melalui server address
          dan port berikut.
        </p>
        <p class="text-lg mt-2 hidden md:block">
          Minecraft Java Edition 1.20.4+
        </p>
        <div class="grid grid-cols-[repeat(2,max-content)]">
          <div class="items-center mt-3 text-lg hidden md:grid">
            <span>Server Address :</span>
          </div>
          <div
            class="border px-3 text-center rounded-tl rounded-bl grid-cols-[repeat(2,min-content)] w-fit ms-2 hidden md:grid"
          >
            <p class="mt-4 mb-1">{addressJava}</p>
            <button
              class="ms-3 ps-3 border-l"
              on:click={() => copy(addressJava)}
              ><Fa size="lg" icon={faClipboard} /></button
            >
          </div>
        </div>
        <p class="text-sm md:text-lg mt-3 md:mt-6">
          Minecraft Bedrock Edition 1.20.40+
        </p>
        <div class="grid grid-cols-[repeat(2,max-content)] mt-2 md:mt-0">
          <div class="hidden md:grid items-center mt-3 md:text-lg">
            <span>Server Address :</span>
            <span class="mt-3">Port :</span>
          </div>
          <div>
            <div
              class="border px-3 text-center rounded-tl rounded-bl grid grid-cols-[repeat(2,min-content)] w-fit h-fit md:ms-2"
            >
              <p class="my-2 md:mt-4 md:mb-1 text-sm md:text-lg">
                {addressBedrock}
              </p>
              <button
                class="ms-3 ps-3 border-l"
                on:click={() => copy(addressBedrock)}
                ><Fa size="lg" icon={faClipboard} /></button
              >
            </div>
            <div
              class="border px-3 text-center rounded-tl rounded-bl grid grid-cols-[repeat(2,min-content)] w-fit h-fit md:ms-2 mt-3"
            >
              <p class="my-2 md:mt-4 md:mb-1 text-sm md:text-lg">
                {portBedrock}
              </p>
              <button
                class="ms-3 ps-3 border-l"
                on:click={() => copy(portBedrock)}
                ><Fa size="lg" icon={faClipboard} /></button
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="grid items-center justify-items-center mt-5 md:mt-0 order-first w-screen md:w-auto md:order-last"
    >
      <img
        class="rounded-md w-[70%] md:w-[90%]"
        alt="Logo Banu"
        src={logoBanu}
      />
    </div>
  </div>
</div>
