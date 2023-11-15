/// <reference types="astro/client" />

type KVNamespace = import("@cloudflare/workers-types").KVNamespace;
type ENV = {
  // replace `MY_KV` with your KV namespace
  "alifyasa.dev": KVNamespace;
};

// Depending on your adapter mode
// use `AdvancedRuntime<ENV>` for advance runtime mode
// use `DirectoryRuntime<ENV>` for directory runtime mode
type Runtime = import("@astrojs/cloudflare").DirectoryRuntime<ENV>;
declare namespace App {
  interface Locals extends Runtime {}
}

/// <reference types="astro/client" />
interface ImportMetaEnv {
  readonly GITHUB_PAT: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
