import { useState, useEffect } from 'react';
import { API_URL } from '../config';

export default function useServerStatus(){
  const [isOnline, setIsOnline] = useState(false);

  useEffect(() => {
    fetch(`${API_URL}/wake-up`)
      .then(res => {
        if (res.ok) {
          setIsOnline(true);
        }
      })
  });

  return isOnline;
}