import React, { useState, useEffect, useRef } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';
import bgm from '../assets/60.mp3';
import './AudioPlayer.css';

const AudioPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [hasStarted, setHasStarted] = useState(false); // 添加状态跟踪是否已经开始播放
    const audioRef = useRef(null);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        // 设置音频属性
        audio.volume = 0.3;
        audio.loop = true;

        // 添加事件监听器
        const handlePlay = () => {
            setIsPlaying(true);
            setHasStarted(true); // 标记已经开始播放
            console.log('🎶 音乐开始播放');
        };

        const handlePause = () => {
            setIsPlaying(false);
            console.log('⏸️ 音乐暂停');
        };

        const handleCanPlay = () => {
            console.log('✅ 音频已准备就绪');
            // 只在还没开始播放时尝试自动播放
            if (!hasStarted) {
                tryPlayMusic();
            }
        };

        const handleError = (e) => {
            console.error('❌ 音频错误:', e);
        };

        audio.addEventListener('play', handlePlay);
        audio.addEventListener('pause', handlePause);
        audio.addEventListener('canplay', handleCanPlay);
        audio.addEventListener('error', handleError);

        // 播放音乐的函数
        const tryPlayMusic = async () => {
            try {
                await audio.play();
                console.log('✅ 音乐自动播放成功！');
                return true;
            } catch (error) {
                console.log('⚠️ 自动播放被阻止，等待用户交互...');
                return false;
            }
        };

        // 用户交互处理（只在还没开始播放时才监听）
        const handleUserInteraction = async (e) => {
            // 检查点击是否来自播放按钮，如果是则不处理
            if (e.target.closest('.play-pause-button')) {
                return;
            }
            
            if (!hasStarted && !isPlaying) {
                const success = await tryPlayMusic();
                if (success) {
                    console.log('🎵 通过用户交互启动音乐');
                }
            }
        };

        // 只在还没开始播放时才添加用户交互监听器
        if (!hasStarted) {
            // 立即尝试播放（可能会失败）
            tryPlayMusic();

            // 监听用户交互
            document.addEventListener('click', handleUserInteraction, true);
            document.addEventListener('keydown', handleUserInteraction, true);
            document.addEventListener('touchstart', handleUserInteraction, true);
        }

        return () => {
            audio.removeEventListener('play', handlePlay);
            audio.removeEventListener('pause', handlePause);
            audio.removeEventListener('canplay', handleCanPlay);
            audio.removeEventListener('error', handleError);
            // 清理用户交互监听器
            document.removeEventListener('click', handleUserInteraction, true);
            document.removeEventListener('keydown', handleUserInteraction, true);
            document.removeEventListener('touchstart', handleUserInteraction, true);
        };
    }, [hasStarted, isPlaying]);

    const togglePlay = (e) => {
        e.stopPropagation(); // 阻止事件冒泡
        
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
                console.log('🎵 用户手动暂停音乐');
            } else {
                audioRef.current.play().catch(error => {
                    console.log('手动播放失败:', error);
                });
                console.log('🎵 用户手动播放音乐');
            }
        }
    };

    return (
        <div className="audio-player">
            <audio 
                ref={audioRef} 
                src={bgm} 
                preload="auto"
            />
            <button 
                className="play-pause-button" 
                onClick={togglePlay}
                title={isPlaying ? "暂停音乐" : "播放音乐"}
            >
                {isPlaying ? <FaPause size={20} /> : <FaPlay size={20} />}
            </button>
        </div>
    );
};

export default AudioPlayer; 