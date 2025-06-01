import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import GuildInterface from './GuildInterface';
import { allGuildConfigs } from '../data/guildConfigs';

const GuildDemo = () => {
  const [searchParams] = useSearchParams();
  const guildFromUrl = searchParams.get('guild') || 'adventurerGuild';
  const [currentGuild, setCurrentGuild] = useState(guildFromUrl);

  // 当URL参数变化时更新当前工会
  useEffect(() => {
    setCurrentGuild(guildFromUrl);
  }, [guildFromUrl]);

  return (
    <div>
      {/* 工会界面组件 */}
      <GuildInterface 
        guildConfig={allGuildConfigs[currentGuild]}
        onGuildChange={setCurrentGuild}
        allGuildConfigs={allGuildConfigs}
      />
    </div>
  );
};

export default GuildDemo; 