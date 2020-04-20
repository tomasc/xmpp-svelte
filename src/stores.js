import { get, readable, writable } from "svelte/store";

export const credentials = writable();
export const stanzas = writable([]);

let credentialKeys = ["service", "username", "password"];

export function storeCredentials() {
  let obj = get(credentials);
  for (let key in obj) {
    localStorage.setItem(`xmpp-svelte-credentials-${key}`, obj[key])
  }
}

export function restoreCredentials() {
  let obj = {};
  credentialKeys.forEach(function (key) {
    let value = localStorage.getItem(`xmpp-svelte-credentials-${key}`)
    if (value !== null) { obj[key] = value };
  });
  if (Object.keys(obj).length === credentialKeys.length) {
    credentials.set(obj)
  }
}

export function resetCredentials() {
  credentialKeys.forEach((key) =>
    localStorage.removeItem(`xmpp-svelte-credentials-${key}`)
  );
  credentials.set(null)
}
