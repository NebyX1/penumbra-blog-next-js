'use client'

import React from 'react';
import { InstagramEmbed } from 'react-social-media-embed';

const InstagramFeed: React.FC = () => {
  return (
    <div>
      <InstagramEmbed url="https://www.instagram.com/penumbra_x_/" width={375} />
    </div>
  );
};

export default InstagramFeed;