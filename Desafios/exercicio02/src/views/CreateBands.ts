import { getParagraphText, getTitle } from '../utils';

export const createBands = (): void => {
  const appBody = document.getElementById('app-body')!;
  appBody.appendChild(getTitle('Buscar Músicos'));
  appBody.appendChild(getParagraphText('Em breve...'));
};
