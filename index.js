import { serve } from "https://deno.land/std@0.140.0/http/server.ts";

//import { Marked } from '@ts-stack/markdown';

//const page = () => Marked.parse('What do you __wish__ more?');

const page = () => `
<!DOCTYPE html>
<html>
<head>
<title>0 << 1</title>
</head>

<body>


<div class="container prevent-select">
  <span class="box">
    <h2>What do you wish more?</h2>
  </span>
</div>


</body>

</html>

<style>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.prevent-select {
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
}
.box {
  padding: 0 50px 0 10px;
}

.box h2 {
  display: flex;
  align-items: center;
  gap: 2px;
}

@keyframes cursor-blink {
  0% {
    opacity: 0;
  }
}

.box h2::after {
  content: "";
  width: 5px;
  height: 20px;
  background: #000;
  display: inline-block;
  animation: cursor-blink 1.5s steps(2) infinite;
}
</style>

`


serve((_req) => {
  return new Response(page(), {
    headers: { "content-type": "html" },
  });
});
