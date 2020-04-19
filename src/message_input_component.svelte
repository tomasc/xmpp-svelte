<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  let text;

  function handleSendButtonClick(e) {
    dispatch("message", { text: text });
    text = "";
  }
</script>

<style>

</style>

<div>
  <input bind:value={text} />
  <button on:click={handleSendButtonClick}>Send</button>
</div>
