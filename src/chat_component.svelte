<script>
  import { onMount, onDestroy } from "svelte";
  import { credentials, storeCredentials, resetCredentials } from "./stores.js"
  import { stanzas } from "./stores.js"

  import ChatRoomComponent from "./chat_room_component.svelte"
  import MessageInputComponent from "./message_input_component.svelte"

  const { client, xml } = require("@xmpp/client");
  const debug = require("@xmpp/debug");

  const xmpp = client($credentials);

  debug(xmpp, true);

  xmpp.on("error", (err) => {
    console.error(err);
  });

  xmpp.on("offline", () => {
    console.log("offline");
  });

  xmpp.on("stanza", async (stanza) => {
    stanzas.update(n => n.concat([stanza]))
  });

  xmpp.on("online", async (address) => {
    await xmpp.send(xml("presence"));
    storeCredentials()
  });

  onMount(async () => {
    xmpp.start().catch(console.error);
  });

  onDestroy(async () => {
    await xmpp.send(xml("presence", { type: "unavailable" }));
    await xmpp.stop();
  });

  async function handleMessage(event) {
    const message = xml(
      "message",
      { type: "chat" },
      xml("body", {}, event.detail.text),
    );
    await xmpp.send(message);
  }

  function handleLogoutButtonClick() {
    resetCredentials()
  }
</script>

<style>
</style>

<section>
  <ChatRoomComponent />
  <MessageInputComponent on:message={handleMessage} />
  <aside>
    {$credentials.username}
    <button on:click={handleLogoutButtonClick}>Logout</button>
  </aside>
</section>
