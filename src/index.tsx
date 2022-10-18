import { Hono } from 'hono';
import { generateImage } from './lib/img';

const app = new Hono();

app.get('/', async (c) => {
  const msg = c.req.query('msg') || 'Hello';
  const img = await generateImage(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <span
        style={{
          fontSize: '32px',
        }}
      >
        {msg}
      </span>
    </div>
  );
  return c.body(img);
});

export default app;
