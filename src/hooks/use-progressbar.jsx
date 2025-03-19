import React, { useEffect, useRef } from 'react'

export const useProgressBar = () => {
   const progressRef = useRef(null)

   const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const percent = (scrollTop / scrollHeight) * 100;

      if (progressRef.current) {
         progressRef.current.style.width = `${percent}%`
      }
   }

   useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   }, [handleScroll]);

   return {
      progressRef
   }
}
