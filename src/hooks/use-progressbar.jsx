import { useEffect, useRef, useState } from 'react'

export const useProgressBar = () => {
   const progressRef = useRef(null)
   const [scrollPercent, setScrollPercent] = useState(0)

   useEffect(() => {
      const handleScroll = () => {
         const scrollTop = window.scrollY;
         const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
         const percent = (scrollTop / scrollHeight) * 100;

         setScrollPercent(percent);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   useEffect(() => {
      if (progressRef.current) {
         progressRef.current.style.width = `${scrollPercent}%`;
      }
   }, [scrollPercent]);

   return { progressRef };
};

