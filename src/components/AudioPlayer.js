import React, { useState, useEffect, useRef } from 'react';
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa';
import bgm from '../assets/60.mp3';
import './AudioPlayer.css';

const AudioPlayer = () => {
    const [isMuted, setIsMuted] = useState(false);
    const audioRef = useRef(null);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = 0.3; // 设置默认音量为30%
            audioRef.current.loop = true;  // 设置循环播放
            
            // 添加调试事件监听器
            const audio = audioRef.current;
            
            audio.addEventListener('loadstart', () => {
                console.log('🎵 音频开始加载...');
            });
            
            audio.addEventListener('canplay', () => {
                console.log('✅ 音频可以播放');
            });
            
            audio.addEventListener('play', () => {
                console.log('▶️ 音频开始播放');
            });
            
            audio.addEventListener('pause', () => {
                console.log('⏸️ 音频暂停');
            });
            
            audio.addEventListener('error', (e) => {
                console.error('❌ 音频加载错误:', e);
                console.error('错误代码:', audio.error?.code);
                console.error('错误信息:', audio.error?.message);
            });
            
            // 尝试播放
            const playAudio = async () => {
                try {
                    await audio.play();
                    console.log('🎶 自动播放成功');
                } catch (error) {
                    console.log('⚠️ 自动播放被阻止，需要用户交互:', error.message);
                }
            };
            
            // 添加用户交互检测
            const handleFirstInteraction = () => {
                playAudio();
                document.removeEventListener('click', handleFirstInteraction);
                document.removeEventListener('keydown', handleFirstInteraction);
            };
            
            document.addEventListener('click', handleFirstInteraction);
            document.addEventListener('keydown', handleFirstInteraction);
            
            return () => {
                document.removeEventListener('click', handleFirstInteraction);
            };
        }
    }, []);

    const toggleMute = () => {
        if (audioRef.current) {
            setIsMuted(!isMuted);
            audioRef.current.muted = !isMuted;
            console.log(isMuted ? '🔊 取消静音' : '🔇 静音');
        }
    };

    return (
        <div className="audio-player">
            <audio ref={audioRef} src={bgm} />
            <button className="mute-button" onClick={toggleMute}>
                {isMuted ? <FaVolumeMute size={20} /> : <FaVolumeUp size={20} />}
            </button>
        </div>
    );
};

export default AudioPlayer; 