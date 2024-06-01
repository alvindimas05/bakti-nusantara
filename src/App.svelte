<script lang="ts">
  import Fa from "svelte-fa";
  import { faClipboard } from "@fortawesome/pro-regular-svg-icons";
</script>

<div class="w-screen h-screen p-32 relative">
  <div
    class="absolute top-0 left-0 w-full h-full bg-banu bg-no-repeat bg-cover blur-md"
  ></div>
  <div
    class="relative top-0 left-0 bg-black w-full h-full bg-opacity-50 grid grid-cols-[70%_30%]"
  >
    <div class="grid items-center">
      <div class="p-10">
        <p class="text-lg">
          Halo semuanya, kabar baik untuk kita semua. Server Minecraft kami
          <b>Rutinitas Pemain Minecraft</b> atau sekarang dikenal sebagai
          <b>Bakti Nusantara</b>
          telah dibuka untuk umum. Kalian sudah bisa mengakses servernya. Minecraft
          Java dan Bedrock bisa bergabung dan bermain dalam satu server yang sama.
        </p>
        <a
          href="minecraft:?addExternalServer=Bakti Nusantara|baktinusantaramc.jacktor.com:7061"
          ><button class="border-2 px-4 pb-1 pt-4 rounded text-lg"
            >Join Sekarang!</button
          ></a
        >
        <p class="mt-10 text-sm">
          Tidak bisa join? Kamu bisa join secara manual melalui server address
          dan port berikut.
        </p>
        <p class="text-lg mt-2">Minecraft Java Edition 1.20.4+</p>
        <div class="grid grid-cols-[repeat(2,max-content)]">
          <div class="grid items-center mt-3 text-lg">
            <span>Server Address :</span>
          </div>
          <div
            class="border px-3 text-center rounded-tl rounded-bl grid grid-cols-[repeat(2,min-content)] w-fit ms-2"
          >
            <p class="mt-4 mb-1">baktinusantaramc.jacktor.com:7061</p>
            <button class="ms-3 ps-3 border-l"
              ><Fa size="lg" icon={faClipboard} /></button
            >
          </div>
        </div>
        <p class="text-lg mt-6">Minecraft Bedrock Edition 1.20.40+</p>
        <div class="grid grid-cols-[repeat(2,max-content)]">
          <div class="grid items-center mt-3 text-lg">
            <span>Server Address :</span>
            <span class="mt-3">Port :</span>
          </div>
          <div>
            <div
              class="border px-3 text-center rounded-tl rounded-bl grid grid-cols-[repeat(2,min-content)] w-fit h-fit ms-2"
            >
              <p class="mt-4 mb-1">baktinusantaramc.jacktor.com</p>
              <button class="ms-3 ps-3 border-l"
                ><Fa size="lg" icon={faClipboard} /></button
              >
            </div>
            <div
              class="border px-3 text-center rounded-tl rounded-bl grid grid-cols-[repeat(2,min-content)] w-fit h-fit ms-2 mt-3"
            >
              <p class="mt-4 mb-1">7061</p>
              <button class="ms-3 ps-3 border-l"
                ><Fa size="lg" icon={faClipboard} /></button
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="grid items-center">
      <img
        class="rounded-md w-[90%]"
        alt="Logo Banu"
        src="/assets/logo-banu.jpg"
      />
    </div>
  </div>
</div>
