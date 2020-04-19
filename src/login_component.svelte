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
  label {
    display: block;
  }
</style>

<div>
  <label>
    Service:
    <input bind:value={service} />
  </label>

  <label>
    Domain:
    <input bind:value={domain} />
  </label>

  <label>
    Resource:
    <input bind:value={resource} />
  </label>

  <label>
    Username:
    <input bind:value={username} />
  </label>

  <label>
    Password:
    <input type="password" bind:value={password} />
  </label>

  <button on:click={handleSubmitButtonClick}>Submit</button>
</div>
