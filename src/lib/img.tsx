// @ts-ignore
import satori, { init } from 'satori/wasm';
// @ts-ignore
import yogaInit from 'yoga-wasm-web';
import yogaWasm from '../assets/yoga.wasm';
import { Resvg, initWasm } from '@resvg/resvg-wasm';
import resvgWasm from '../assets/resvg.wasm';
import notoSans from '../assets/Noto_Sans_JP/NotoSansJP-Regular.otf';
import { ReactNode } from 'react';

const genModuleInit = () => {
  let isInit = false;
  return async () => {
    if (isInit) {
      return;
    }

    init(await yogaInit(yogaWasm));
    await initWasm(resvgWasm);
    isInit = true;
  };
};
const moduleInit = genModuleInit();

export const generateImage = async (node: ReactNode) => {
  await moduleInit();

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
