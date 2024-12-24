/* eslint-disable no-unused-vars */
import React, {useState, useCallback, useEffect} from 'react';
export default function useFlashHook(api, params) {
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize] = useState(10);

  const loadData = useCallback(
    async (size, number) => {
      setLoading(true);
      const res = await api({pageSize: size, pageNumber: number, ...params});
      if (pageNumber === 1) {
        setList(res);
      } else {
        setList(l => [...l, ...res]);
      }
      setLoading(false);
      setRefreshing(false);
    },
    [pageNumber, api, params],
  );

  useEffect(() => {
    loadData(pageSize, pageNumber);
  }, [loadData, pageSize, pageNumber]);

  const onRefresh = () => {
    if (loading) {
      return;
    }
    setPageNumber(1);
  };

  const onEndReached = () => {
    setPageNumber(n => n + 1);
  };

  return {
    refreshing,
    loading,
    list,
    onRefresh,
    onEndReached,
    setPageNumber,
  };
}
