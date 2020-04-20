<script>
  import { onMount } from "svelte";
  import { credentials, restoreCredentials } from "./stores.js"

  import LoginComponent from "./login_component.svelte"
  import ChatComponent from "./chat_component.svelte"

  onMount(async () => {
    restoreCredentials()
  });
</script>

<style>
</style>

<main>
  {#if $credentials}
    <ChatComponent />
  {:else}
    <LoginComponent />
  {/if}
</main>
