'use strict';

import { container } from './modules/Container.js';
import { acceptTermsOfUse } from './modules/Terms.js';
import { renderImageToCanvas } from './modules/Image.js';
import { GetData } from './modules/Api.js';

const { images, terms_of_use } = await GetData();

await acceptTermsOfUse(terms_of_use);

images.forEach(async ({ image_url }) => {
  const image = await renderImageToCanvas(image_url);

  container.append(image);
});
