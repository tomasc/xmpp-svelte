<script>
  import { messages } from "./stores.js"

  import MessageComponent from "./message_component.svelte"
</script>

<style>

</style>

<ul>
  {#each $messages as message}
    <MessageComponent from={message.attrs.from}
                      to={message.attrs.to}
                      text={message.getChild("body").text()} />
  {/each}
</ul>
