/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#the-app-namespace
// for information about these interfaces
declare namespace App {
  // interface Locals {}
  // interface Platform {}
  // interface Session {}
  // interface Stuff {}
}

declare module "svelte-fa/src/fa.svelte" {
  import Fa from "svelte-fa/src/index.js";
  export default Fa;
}

declare module "svelte-fa/src/fa-layers.svelte" {
  import FaLayers from "svelte-fa/src/index.js";
  export default FaLayers;
}

declare module "@nubolab-ffwd/svelte-fluent";
