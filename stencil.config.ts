import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'awesome-elements',
  outputTargets: [
    reactOutputTarget({
      componentCorePackage: '@awesome-elements/layout',
      proxiesFile: './packages/react/src/components/stencil-generated/index.ts',
      includeImportCustomElements: true,
      includeDefineCustomElements: false,
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      dir: 'components',
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
