import { useEffect, useRef, useState } from "react";

export const useShowItemPage = () => {
  const [showItem, setShowItem] = useState(false);
  const itemRef = useRef(false);

  useEffect(() => {
    const itemOffSet = itemRef.current.offsetTop;

    function queryPage() {
      const offSet = window.innerHeight / 2 ;
      if (window.pageYOffset > itemOffSet - offSet) {
        setShowItem(true);
      } else {
        setShowItem(false);
      }
    }

    window.addEventListener("scroll", queryPage);

    return () => {
      window.removeEventListener("scroll", queryPage);
    };
  }, []);

  return { showItem, itemRef };
};
