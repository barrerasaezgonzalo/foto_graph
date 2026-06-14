import React, { useState } from "react";
import { PhotoCardProps } from "../types";

const PhotoCard: React.FC<PhotoCardProps> = ({ imageSrc, title, onClick }) => {
  const [clipPos, setClipPos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>): void => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setClipPos({ x, y });
  };

  return (
    <div
      onClick={onClick}
      onMouseMove={handleMouseMove}
      className="relative w-full h-[400px] overflow-hidden rounded-lg cursor-pointer bg-[#141414] border border-white/10"
    >
      <div
        className="absolute inset-0 bg-cover bg-center grayscale opacity-[0.030]"
        style={{ backgroundImage: `url(${imageSrc})` }}
      />

      <div
        className="absolute inset-0 bg-cover bg-center transition-[clip-path] duration-100 ease-out flex justify-center pb-8"
        style={{
          backgroundImage: `url(${imageSrc})`,
          clipPath: `circle(80px at ${clipPos.x}% ${clipPos.y}%)`,
        }}
      >
        <p className="absolute bottom-4 text-white font-light font-mono tracking-[0.2em] text-[12px] backdrop-blur-sm w-full uppercase bg-black/50 pl-4">
          {title}
        </p>
      </div>
    </div>
  );
};

export default PhotoCard;
