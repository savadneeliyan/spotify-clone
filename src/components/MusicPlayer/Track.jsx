import React from 'react';

const Track = ({currentPlaying }) => (
  <div className="flex-1 flex items-center justify-start">
    <div className={`${currentPlaying?.img ? 'animate-[spin_10s_linear_infinite]' : ''} hidden sm:block h-16 w-16 mr-4`}>
      <img src={currentPlaying?.img} alt="cover art" className="rounded-full" />
    </div>
    <div className="w-[50%]">
      <p className="truncate text-white font-bold text-lg">
        {/* {activeSong?.title ? activeSong?.title : 'No active Song'} */}
        {currentPlaying ? currentPlaying.name : 'No active Song'}
      </p>
      <p className="truncate text-gray-300">
        {/* {activeSong?.subtitle ? activeSong?.subtitle : 'No active Song'} */}
        {currentPlaying?.artists?.join(", ")}
      </p>
    </div>
  </div>
);

export default Track;
