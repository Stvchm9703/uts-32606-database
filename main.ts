import { opine } from "https://deno.land/x/opine@2.3.3/mod.ts";
import * as trpc from "https://esm.sh/@trpc/server@9.27.2";
import * as trpcExpress from "https://esm.sh/@trpc/server@9.27.2/adapters/express";
import * as flags from "https://deno.land/std/flags/mod.ts"
import { load as envLoad } from "https://deno.land/std/dotenv/mod.ts";
import * as fetchSet from './src/spotify-api-fetch/fetch.ts';

import { cac } from 'https://unpkg.com/cac/mod.ts';
import kia from "https://deno.land/x/kia@0.4.1/mod.ts";

export function trpc_server() {
  const app = opine(); // opine is express ported to deno


  // apply tRPC router as a middleware
  // app.use("/trpc",
  //   trpcExpress.createExpressMiddleware({
  //     router: appRouter,
  //     createContext: () => null,
  //   })
  // );

  //app.use(opineCors()); // uncomment to use cors

  app.listen(5005); // start server
  return app;
}

export function add(a: number, b: number): number {
  return a + b;
}


export async function cli_fetch_main(arg: any, env: any) {
  const [spotify_client_id, spotify_client_secr] = [env['SPOTIFY_CLIENT_ID'], env['SPOTIFY_CLIENT_SECRET']]

  /// do all exec
  if (arg._.length == 1) {
    await fetchSet.tokenPrefetch({ spotify_client_id, spotify_client_secr });

  }
}

// Learn more at https://deno.land/manual/examples/module_metadata#concepts
if (import.meta.main) {
  // const argSet = flags.parse(Deno.args);
  // const envSet = await envLoad()

  // if ((argSet._).indexOf("fetch") == 0) {
  //   cli_fetch_main(argSet, envSet)
  // }

  const cli = cac('spot-prisma', 'small fetch and migrate db project')
  cli.command()
}


