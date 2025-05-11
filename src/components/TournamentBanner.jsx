import Slider from "react-slick";
import "./TournamentBanner.css";
import tournament1 from "../assets/banner1.png";

const TournamentBanner = () => {
  const banners = [
    { id: 1, image: tournament1, title: "games" },
    { id: 2, image: tournament1, title: "games" },
    { id: 3, image: tournament1, title: "games" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="tournament-banner">
      <Slider {...settings}>
        {banners.map((banner) => (
          <div key={banner.id}>
            <img src={banner.image} alt={banner.title} className="banner-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TournamentBanner;
