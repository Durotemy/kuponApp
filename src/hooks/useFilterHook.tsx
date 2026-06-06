import { useState } from 'react';

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
