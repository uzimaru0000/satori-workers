import { Hono } from 'hono';
import { Example } from './components/Example';
import { generateImage } from './lib/img';

const app = new Hono();

app.get('/', async (c) => {
  const msg = c.req.query('msg') || 'Hello';
  const img = await generateImage(<Example msg={msg} />);
  c.header('Cache-Control', 'max-age=604800');
  return c.body(img);
});

export default app;
