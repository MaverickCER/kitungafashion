import Slider from '@ant-design/react-slick';

export function HomeSlider() {
  const settings = {
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    draggable: false,
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    swipe: false,
    vertical: false,
    fade: true
  };

  return (
    <Slider {...settings}>
      <div className="image-wrapper" data-index="1">
        <span className='text'>Handmade<br/>in the USA</span>
        <span className='img' />
      </div>
      <div className="image-wrapper" data-index="2">
        <span className='text'>“Kitunga” is the Swahili word for basket</span>
        <span className='img' />
      </div>
      <div className="image-wrapper" data-index="3">
        <span className='text'>Family Owned and Operated Small Business</span>
        <span className='img' />
      </div>
      <div className="image-wrapper" data-index="4">
        <span className='text'>Our Vibrant Colors Memic those found in the Congo Peafowl</span>
        <span className='img' />
      </div>
      <div className="image-wrapper" data-index="5">
        <span className='text'>Authentic High Quality Materials Imported from Africa</span>
        <span className='img' />
      </div>
      <div className="image-wrapper" data-index="6">
        <span className='text'>Follow Us<br/>on TikTok!<br/>KitungaFashion3</span>
        <span className='img' />
      </div>
    </Slider>
  );
}
