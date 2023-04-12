import { useEffect } from 'react';
import appData from '@data/appData.json';
import scenes from '@data/Preview/header.json';
import HomeSlider from '@components/Home/HomeSlider';


const Header = () => {
  // useEffect(() => {
  //   setTimeout(() => {
  //     if (typeof Parallax !== 'undefined') {
  //       var scene = document.getElementById('js-scene');
  //       new Parallax(scene);

  //       var scene2 = document.getElementById('js-scene2');
  //       new Parallax(scene2);
  //     }
  //   });
  // }, []);

  return (
    <>
      <div >
        <div className="blog-page style-5 color-5">
          <HomeSlider style="5" />
        </div>
      </div>
    </>
  )
}

export default Header