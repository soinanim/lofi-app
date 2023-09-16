import React from 'react';
import './InfoWidget.scss';
import { LineOutlined } from '@ant-design/icons';
import Draggable from 'react-draggable';
import { LinkedinOutlined, CommentOutlined } from '@ant-design/icons';

const InfoWidget = ({ widgetHandler }) => {
  return (
    <Draggable>
      <div className='info widget'>
        <div className='row'>
          <h3>Authors</h3>
          <LineOutlined
            className='close'
            onClick={() => widgetHandler('info')}
          />
        </div>
        <div className='content'>
          <div className='content-item'>
            <h5>Developer and author of the idea:</h5>
            <h4>Kristina Babiy</h4>
            <div className='buttons'>
              <p>Contacts:</p>

              <a
                title='LinkedIn'
                target='_blank'
                rel='noreferrer'
                href='https://www.linkedin.com/in/babiy-k/'
                className='icon'>
                <LinkedinOutlined style={{ fontSize: '16px' }} />
              </a>
              <a
                title='Telegram'
                target='_blank'
                rel='noreferrer'
                href='https://t.me/soinanim'
                className='icon'>
                <CommentOutlined style={{ fontSize: '16px' }} />
              </a>
            </div>
          </div>
          <div className='content-item'>
            <h5>Developer and innovator:</h5>
            <h4>Michael Lipovka</h4>
            <div className='buttons'>
              <p>Contacts:</p>

              <a
                title='LinkedIn'
                target='_blank'
                rel='noreferrer'
                href='https://www.linkedin.com/in/misha-lipovka-4b004a252/'
                className='icon'>
                <LinkedinOutlined style={{ fontSize: '16px' }} />
              </a>
              <a
                title='Telegram'
                target='_blank'
                rel='noreferrer'
                href='https://t.me/miwist'
                className='icon'>
                <CommentOutlined style={{ fontSize: '16px' }} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default InfoWidget;
