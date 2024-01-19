"use client";
import { useEffect, useState } from "react";

export default function Star() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newStar = {
        id: new Date().getTime(),
        left: Math.random() * window.innerWidth + "px",
        top: Math.random() * window.innerHeight + "px",
      };

      setStars((prevStars) => [...prevStars, newStar]);

      setTimeout(() => {
        setStars((prevStars) =>
          prevStars.filter((star) => star.id !== newStar.id)
        );
      }, 5000);
    }, 200);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      {stars.map((star) => (
        <div
          key={star.id}
          className={"absolute w-[2px] h-[2px] bg-white z-[-1]"}
          style={{ left: star.left, top: star.top }}
        />
      ))}
    </div>
  );
}
