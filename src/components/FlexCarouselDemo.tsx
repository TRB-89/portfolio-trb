import React from 'react';
import FlexCarousel from './FlexCarousel';

const items = [
  { src: '/images/one.jpg', alt: 'A chrome sculpture', title: 'Iridescence' },
  { src: '/images/two.jpg', alt: 'A figure on a white set', title: 'White Room' },
  {
    src: '/images/three.jpg',
    alt: 'A clay bust in profile',
    title: 'Clay Study',
    subtitle: 'Studio 04'
  }
];

export const FlexCarouselDemo: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '560px', position: 'relative' }}>
      <FlexCarousel
        items={items}
        preset="liquid"
        intro="rise"
        cardHeight={0.5}
        gap={12}
        squeeze={0.2}
        focusOnClick
        captions
        fit="natural"
        radius={0}
        lensWidth={0.74}
        lensHeight={1.18}
        tilt={62}
        roundness={1}
        bend={0.34}
        reach={0.38}
        curl="twist"
        dispersion={0.45}
        liquid={0}
        followCursor={false}
        autoplay={false}
        interval={4}
        captureWheel
      />
    </div>
  );
};

export default FlexCarouselDemo;
