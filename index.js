import { serve } from "https://deno.land/std@0.140.0/http/server.ts";


const page = () => "Hello";

serve((_req) => {
  return new Response(page(), {
    headers: { "content-type": "text/plain" },
  });
});
