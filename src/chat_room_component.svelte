<script>
  import { stanzas } from "./stores.js"

  import StanzaComponent from "./stanza_component.svelte"
</script>

<style>
</style>

<ul>
  {#each $stanzas as stanza}
    <StanzaComponent {stanza} />
  {/each}
</ul>
