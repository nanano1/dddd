import React, { useState, useEffect, useRef } from 'react';
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa';
import bgm from '../assets/60.wav';
import './AudioPlayer.css';

const AudioPlayer = () => {
    const [isMuted, setIsMuted] = useState(false);
    const audioRef = useRef(null);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = 0.3; // 设置默认音量为30%
            audioRef.current.loop = true;  // 设置循环播放
        }
    }, []);

    const toggleMute = () => {
        if (audioRef.current) {
            setIsMuted(!isMuted);
            audioRef.current.muted = !isMuted;
        }
    };

    return (
        <div className="audio-player">
            <audio ref={audioRef} src={bgm} autoPlay />
            <button className="mute-button" onClick={toggleMute}>
                {isMuted ? <FaVolumeMute size={20} /> : <FaVolumeUp size={20} />}
            </button>
        </div>
    );
};

export default AudioPlayer; 