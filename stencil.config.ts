import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'awesome-elements',
  outputTargets: [
    reactOutputTarget({
      componentCorePackage: '@awesome-elements/layout',
      proxiesFile: './packages/react/src/components/stencil-generated/index.ts',
      includeDefineCustomElements: true,
      loaderDir: './loader',
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
