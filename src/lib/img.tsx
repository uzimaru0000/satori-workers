// @ts-ignore
import satori, { init } from 'satori/wasm';
// @ts-ignore
import initYoga from 'yoga-wasm-web';
import { Resvg, initWasm } from '@resvg/resvg-wasm';
import type { ReactNode } from 'react';

const genModuleInit = () => {
  let isInit = false;
  return async () => {
    if (isInit) {
      return;
    }
    const { default: yogaWasm } = await import('../assets/yoga.wasm');
    const { default: resvgWasm } = await import('../assets/resvg.wasm');

    init(await initYoga(yogaWasm));
    await initWasm(resvgWasm);
    isInit = true;
  };
};
const moduleInit = genModuleInit();

export const generateImage = async (node: ReactNode) => {
  await moduleInit();
  const { default: notoSans } = await import(
    '../assets/Noto_Sans_JP/NotoSansJP-Regular.otf'
  );

  const svg = await satori(node, {
    width: 600,
    height: 400,
    fonts: [
      {
        name: 'NotoSansJP',
        data: notoSans,
        weight: 400,
        style: 'normal',
      },
    ],
  });

  const resvg = new Resvg(svg, {
    fitTo: {
      mode: 'width',
      value: 500,
    },
  });
  const pngData = resvg.render();
  const pngBuffer = pngData.asPng();

  return pngBuffer;
};
