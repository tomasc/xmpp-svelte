<script>
  // @see: https://github.com/xmppjs/xmpp.js/tree/master/packages/xml#reading
  export let stanza;

  import ChatMessageComponent from "./chat_message_component.svelte"
  import ChatPresenceComponent from "./chat_presence_component.svelte"
</script>

<style>

</style>

{#if stanza.is("message")}
  <ChatMessageComponent from={stanza.attrs.from} text={stanza.getChild("body").text()} />
{:else if stanza.is("presence")}
  <ChatPresenceComponent from={stanza.attrs.from} />
{/if}
