import { useState } from 'react';
import { dataType, dataTypes } from '../screen/App/Dashboard';

export const useFilterHook = <T,>(data: T[], getText: (item: T) => string) => {
  const [search, setSearch] = useState('');

  const filteredItem = data.filter(item =>
    getText(item).toLowerCase().includes(search.toLowerCase()),
  );

  return {
    search,
    setSearch,
    filteredItem,
  };
};

export default useFilterHook;

// const datas: dataTypes[] = [
//   {
//     label: 'duro',
//   },
//   {
//     label: 'femi',
//   },
//   {
//     label: 'james',
//   },
// ];

// const {} = useFilterHook(datas, item=> item.label)
