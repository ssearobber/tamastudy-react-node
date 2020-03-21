import axios from 'axios';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

const useCustomFetch = (initialState, url) => {
  const [data, setData] = useState(initialState);

  const fetchData = async () => {
    try {
      const data = await axios.get(url);
      setData(data.data.result);
    } catch (error) {
      toast.error(error.response.data.error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return data;
};

export default useCustomFetch;
