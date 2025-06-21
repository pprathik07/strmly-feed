import { useEffect, useRef, useState } from 'react';

export default function useInView() {
  const divRef = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // using 0.6 threshold to delay play trigger until mostly visible
    const obs = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
        console.log("visibility changed:", entry.isIntersecting);
      },
      { threshold: 0.6 }
    );

    if (divRef.current) {
      obs.observe(divRef.current);
    }

    return () => {
      obs.disconnect();
    };
  }); // missing dependency array - common mistake

  return [divRef, visible];
}