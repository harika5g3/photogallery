// import { snapshotEqual } from 'firebase/firestore';
// import React,{useEffect,useState} from 'react';
// import {projectStorage} from "../firebase/config"

// const useStorage = (selected) =>
// {
//     const[progress,setProgress] = useState(0);
//     const [error,setError] = useState(null);
//     const [url,setUrl] = useState(null);
//      useEffect(() =>{
//          const storageRef = projectStorage.ref(selected.name);
//          storageRef.put(selected).on('state_changed',(snap) => {
//              let percentage = (snap.bytesTransferred/snap.totalBytes) *100;
//              setProgress(percentage)
//          },(err) =>{
//              setError(err);
//          }, async () =>{
//              const url = await storageRef.getDownloadUrl();
//              setUrl(url);
//          })
//      },[selected])
//      return {progress,url,error}
// }
// export default useStorage
import { useState, useEffect } from 'react';
import { projectStorage, projectFirestore,timestamp} from '../firebase/config';

const useStorage = (selected) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // references
    const storageRef = projectStorage.ref(selected.name);
    const collectionRef = projectFirestore.collection('images');
    
    storageRef.put(selected).on('state_changed', (snap) => {
      let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
      setProgress(percentage);
    }, (err) => {
      setError(err);
    }, async () => {
      const url = await storageRef.getDownloadURL();
      const createdAt = timestamp();
      await collectionRef.add({ url, createdAt });
      setUrl(url);
    });
  }, [selected]);

  return { progress, url, error };
}

export default useStorage;