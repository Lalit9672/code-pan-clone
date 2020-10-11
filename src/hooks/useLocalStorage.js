import React,{useState,useEffect} from 'react'

const PREFIX='codepen-clone-'
export default function useLocalStorage(key,initialValue) {
    const prefixKey=PREFIX +key;
    const[value,setValue]=useState(()=>
    {
        const jsonValue=localStorage.getItem(prefixKey);
        console.log(jsonValue)
        if(jsonValue!=null)return JSON.parse(jsonValue);
       
        
    })
    useEffect(()=>
    {
        localStorage.setItem(prefixKey,JSON.stringify(value))
        
    },[prefixKey,value])
    return [value,setValue];

}
