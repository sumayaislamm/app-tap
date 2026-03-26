import React from 'react';

// Reusable component for the floating images
const FloatingImage = ({ src, alt, positionClass, animationDelay }) => (
  <div className={`absolute ${positionClass} ${animationDelay} animate-bounce-slow z-10`}>
    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden shadow-2xl border-4 border-white/10">
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover"
      />
    </div>
  </div>
);

const Images = () => {
  return (
    <div className="relative h-[309px] w-full">
    
      <FloatingImage 
        src="/stopwatch.png"
        alt="Timer"
        positionClass="top-[25%] left-[5%] md:left-[30%]"
        animationDelay="delay-0"
      />
      <FloatingImage 
        src="/time.png" 
        alt="Success"
        positionClass="top-[45%] left-[2%] md:left-[27%]"
        animationDelay="delay-150"
      />
      <FloatingImage 
        src="/power.png" 
        alt="Power"
        positionClass="bottom-[10%] left-[8%] md:left-[25%]"
        animationDelay="delay-300"
      />

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
        <img 
          src="/Iphone.png" 
          alt="Phone" 
          className="w-40 md:w-60 lg:w-72 shadow-2xl"
        />
      </div>

      <FloatingImage 
        src="/watch.png" 
        alt="Clock"
        positionClass="top-[25%] right-[5%] md:right-[30%]"
        animationDelay="delay-75"
      />
      <FloatingImage 
        src="/knife.png" 
        alt="Trello"
        positionClass="top-[45%] right-[2%] md:right-[27%]"
        animationDelay="delay-200"
      />
      <FloatingImage 
        src="/graph.png" 
        alt="Gaming"
        positionClass="bottom-[10%] right-[10%] md:right-[25%]"
        animationDelay="delay-500"
      />
    </div>
  );
};

export default Images;