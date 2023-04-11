import React, { useEffect, useState } from 'react';
import { BsFillVolumeUpFill, BsVolumeDownFill, BsFillVolumeMuteFill } from 'react-icons/bs';
import { useStateProvider } from '../../utils/StateProvider';
import axios from 'axios';


const VolumeBar = () => {

const [{ token, devices }] = useStateProvider();
const [volume, setvolume] = useState(0);
const [ID, setID] = useState('');

  useEffect(() => {
    setvolume(devices?.volumn ? devices?.volumn : "" )
    setID(devices?.id)
  }, [devices])



const volumechange = async (e) => {
  const currentvalue = e.target?.value ? e.target.value : e ;
  setvolume(currentvalue)
  await axios.put("https://api.spotify.com/v1/me/player/volume", {}, {
    
    headers: {
      Authorization: "Bearer " + token,
      "content-Type": "application/json",
    },
    params: {
      'volume_percent': parseInt(currentvalue) , 
      'device_id':ID
    },
  })
  
}



return (
  <div className="hidden lg:flex flex-1 items-center justify-end">
    {volume <= 100 && volume > 50 && <BsFillVolumeUpFill size={25} color="#FFF" onClick={(e) => volumechange(0)} />}
    {volume <= 50 && volume > 0 && <BsVolumeDownFill size={25} color="#FFF" onClick={(e) => volumechange(0)} />}
    {volume === 0 && <BsFillVolumeMuteFill size={25} color="#FFF" onClick={(e) => volumechange(100)} />}
    <input
      type="range"
      step="any"
      value={volume}
      min='0'
      max='100'
      onChange={(e) => volumechange(e)}
      className="2xl:w-40 lg:w-32 md:w-32 h-1 ml-2"
    />
  </div>
)
};

export default VolumeBar;
