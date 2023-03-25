import { serve } from "https://deno.land/std@0.140.0/http/server.ts";

import { Marked } from '@ts-stack/markdown';

const page = () => Marked.parse('What do you __wish__ more?');

serve((_req) => {
  return new Response(page(), {
    headers: { "content-type": "text/plain" },
  });
});
