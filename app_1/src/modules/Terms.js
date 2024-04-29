import { container } from './Container.js';

function TermOfUseParagraph({ title, content, text }) {
  return /*html*/ `
    <div style="display: flex; flex-direction: column; gap: 2px">
      <h2 style="font-weight: bold">${title}</h2>
      <p>${content || text || 'Empty'}</p>
    </div>
  `;
}

export async function acceptTermsOfUse({ paragraphs }) {
  await new Promise((resolve) => {
    container.innerHTML = /*html*/ `
      ${paragraphs
        .slice()
        .sort((a, b) => a.index - b.index)
        .map((x) => TermOfUseParagraph(x))
        .join('')}
      <button class="js-accept-button">Accept</button>
    `;

    //как вариант, создавать кнопку через document.createElement() и там событие добавлять.
    container
      .querySelector('.js-accept-button')
      .addEventListener('click', () => {
        container.innerHTML = '';

        resolve();
      });
  });
}
