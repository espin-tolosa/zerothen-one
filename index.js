import { serve } from "https://deno.land/std@0.140.0/http/server.ts";

//import { Marked } from '@ts-stack/markdown';

//const page = () => Marked.parse('What do you __wish__ more?');

const page2 = () => `
<!DOCTYPE html>
<html>
<head>
  <title>My PowerPoint Slide</title>
  <style>
    body {
      background-color: #1c1c1c;
      color: #ffffff;
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
    }

    .container {
      margin: 0 auto;
      max-width: 960px;
      padding: 100px;
      text-align: center;
    }

    h1 {
      font-size: 72px;
      margin-bottom: 50px;
    }

    p {
      font-size: 36px;
      line-height: 1.5;
      margin-bottom: 50px;
    }

    .button {
      background-color: #ffffff;
      border-radius: 5px;
      color: #1c1c1c;
      display: inline-block;
      font-size: 24px;
      margin-top: 50px;
      padding: 10px 20px;
      text-decoration: none;
      transition: background-color 0.3s ease;
    }

    .button:hover {
      background-color: #f0f0f0;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Welcome to My PowerPoint Slide</h1>
    <p>This is an example of a web page that looks like a PowerPoint slide.</p>
    <a href="#" class="button">Click Here</a>
  </div>
</body>
</html>
`

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
  return new Response(page2(), {
    headers: { "content-type": "html" },
  });
});
