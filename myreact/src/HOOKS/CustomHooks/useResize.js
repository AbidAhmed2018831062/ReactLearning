import { useCallback, useEffect, useState } from "react";
 const useResize=(screenSize)=>{
     const [screen,setScreen]=useState(false);
     const checkScreenSize=useCallback(()=>{
         setScreen(window.innerWidth<=screenSize?true:false);
     });
     useEffect(()=>{
         checkScreenSize();
         window.addEventListener("resize",checkScreenSize);
     },[checkScreenSize]);

     return screen;
 }
 
 export default useResize;