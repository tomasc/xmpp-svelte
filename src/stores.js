import { get, readable, writable } from "svelte/store";

export const credentials = writable();
export const messages = writable([]);

let credentialKeys = ["service", "domain", "resource", "username", "password"];

export function storeCredentials() {
  let obj = get(credentials);
  for (let key in obj) {
    localStorage.setItem(`xmpp-svelte-credentials-${key}`, obj[key])
  }
}

export function restoreCredentials() {
  let obj = {};
  credentialKeys.forEach((key) =>
    obj[key] = localStorage.getItem(`xmpp-svelte-credentials-${key}`)
  );
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
