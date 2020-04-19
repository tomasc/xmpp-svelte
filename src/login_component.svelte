<script>
  import { credentials } from "./stores.js"

  let service = "jabber.uk";
  let domain = "jabber.uk";
  let resource = "xmpp-svelte-chatroom-name";
  let username = "tomasce";
  let password = "tygsex-6jammy-Sivgyn";

  function handleSubmitButtonClick() {
    credentials.set({
      service: service,
      domain: domain,
      resource: resource,
      username: username,
      password: password
    })
  }
</script>

<style>

</style>

<div>
  <p>
    <input bind:value={service} />
  </p>
  <p>
    <input bind:value={domain} />
  </p>
  <p>
    <input bind:value={resource} />
  </p>
  <p>
    <input bind:value={username} />
  </p>
  <p>
    <input bind:value={password} />
  </p>

  <button on:click={handleSubmitButtonClick}>Submit</button>
</div>
