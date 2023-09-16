import React from 'react';
import './ArtistCard.scss';
import { InstagramOutlined, MessageOutlined } from '@ant-design/icons';

const ArtistCard = () => {
  return (
    <div className='artist-card'>
      <h5 className='title'>
        Sound producer: <span>Vladislav Golovchenko</span>
      </h5>
      <div className='contacts'>
        <p>Contacts:</p>
        <a
          href='https://instagram.com/vladislavgolovchenko?igshid=NzZhOTFlYzFmZQ=='
          className='icon'>
          <InstagramOutlined />
        </a>
        <a href='https://t.me/vladislavgolovchenko' className='icon'>
          <MessageOutlined />
        </a>
      </div>
    </div>
  );
};

export default ArtistCard;
