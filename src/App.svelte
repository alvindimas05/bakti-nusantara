<script lang="ts">
  import Nav from "./Nav.svelte";
  import LiveMap from "./LiveMap.svelte";
  import Home from "./Home.svelte";
  import favicon from "$assets/favicon.ico";
  import { theme } from "./lib/localStorage";
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<div data-theme={$theme}>
  <Nav />
  <Home />
  <!-- <LiveMap /> -->
</div>
