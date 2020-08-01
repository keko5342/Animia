import { useState, useEffect } from 'react';
import { API_URL } from '../config';

export default function useListName() {
  const [listName, setListName] = useState("未取得");

  useEffect(() => {
    if(window.location.hash){
      const qs = window.location.hash.replace('#', '?');
      fetch(`${API_URL}/auth/listName/${qs}`)
        .then(res => res.json().then(data => {
          //console.log(data);
          setListName(data);
        }))
    }
  }, []);

  return listName;
}