// components/SteamWidget.tsx
import React from 'react';
import './SteamWidget.css';

const SteamWidget: React.FC = () => {
  return (
    <div className="steam-widget-container">
      <iframe
        title="Steam Widget"
        src="https://store.steampowered.com/widget/2410050/"
        width="646"
        height="190"
      />
    </div>
  );
};

export default SteamWidget;
