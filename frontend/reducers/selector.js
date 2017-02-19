import {values} from 'lodash';

export const selectAllBenches = ({benches}) => values(benches);

export const selectBench = ({benches}, id) => {
  const bench = benches[id]
  return bench
}
