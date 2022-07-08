import { getParagraphText, getTitle } from '../utils/General';

export const createBands = (): void => {
  const appBody = document.getElementById('app-body') as HTMLDivElement;
  appBody.appendChild(getTitle('Formar Bandas'));
  appBody.appendChild(getParagraphText('Em breve...'));
};
