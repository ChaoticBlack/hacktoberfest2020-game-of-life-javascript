import {renderLife} from 'renderer';

export const title = 'Tub with two up cis tails';

renderLife([
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 0, 0, 0, 0, 1, 0],
  [0, 0, 1, 0, 0, 1, 1, 1, 0],
  [0, 0, 1, 0, 1, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
]);
