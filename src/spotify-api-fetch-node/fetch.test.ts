import { tokenPrefetch } from "./fetch.ts";

Deno.test(async function fetch_token() {
  const runtime_tkn = await tokenPrefetch();
  console.log(runtime_tkn);
})



if (import.meta.main) {
  const runtime_tkn = await tokenPrefetch();
  console.log(runtime_tkn);
}