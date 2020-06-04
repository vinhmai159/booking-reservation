import { Application, send, Router } from 'https://deno.land/x/oak/mod.ts';

const app = new Application();
const router = new Router();

router.get('/api/message', (ctx) => {
  const message: any = {
    message: 'Hello from API!',
    timeStamp: new Date().toTimeString(),
  };
  ctx.response.body = message;
});

app.use(router.routes());
app.use(router.allowedMethods());
app.use(async (context) => {
  await send(context, context.request.url.pathname, {
    root: `${Deno.cwd()}/../dist/test-deno-angular`,
    index: 'index.html',
  });
});

app.listen({ port: 8080 });
console.log(`Listening on localhost:${8080}`);
