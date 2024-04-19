import { initialize, mswLoader } from "msw-storybook-addon";
import type { Preview } from "@storybook/react";
import { themes } from "@storybook/theming";
initialize();

import "../src/app/globals.css";

const preview: Preview = {
  parameters: {
    docs: {
      theme: themes.normal,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    loaders: [mswLoader],
  },
};

export default preview;
