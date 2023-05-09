import React from 'react';
import Slider from './Slider';

const images = [
  'https://img1.akspic.ru/crops/3/6/8/1/7/171863/171863-anime-chernyj_klever_triada-yuki_tabata-chernyj_klever-rukav-1920x1080.jpg',
  'https://img2.akspic.ru/previews/8/2/8/1/7/171828/171828-nulevaya_materiya-r_e_m-nacuki_subaru-art-anime_art-550x310.jpg',
  'https://img3.akspic.ru/previews/5/6/6/1/7/171665/171665-rin_tosaka-luchnik-sablya-netfliks-tip_luny-550x310.jpg',
];

const App = () => {
  return (
    <div>
      <Slider images={images} />
    </div>
  );
};

export default App;
