import React from 'react';
import './styles.css';

const Iframer = () => {
  return (
    <div className='Iframer'>
      <iframe
        loading='lazy'
        title='dfdi'
        src='https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FDelightfulFamilyDevelopmentInitiative%2F&tabs=timeline&width=340&height=400&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=451259033255946'
        width={340}
        height={400}
        style={{ border: 'none', overflow: 'hidden' }}
        scrolling='no'
        frameBorder={0}
        allowFullScreen={true}
        allow='autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share'></iframe>
    </div>
  );
};

export default Iframer;

