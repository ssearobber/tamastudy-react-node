import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';

const useCustomFetch = (initialState, url) => {
  const [data, setData] = useState(initialState);

  const fetchData = async () => {
    try {
      const data = await axios.get(url);
      setData(data.data.result);
    } catch (error) {
      toast.error(error.massage.data.error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return data;
};

export default useCustomFetch;
