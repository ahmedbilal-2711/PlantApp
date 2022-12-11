// import onboard1 from "../assets/ivy-aralia-nizar-Si4PIiajJVU-unsplash.jpg";
// import onboard2 from "../assets/jannet-serhan-fSsAcx5URLA-unsplash.jpg";
// import onboard3 from "../assets/nordwood-themes-LrAsfltinp0-unsplash.jpg";
// import onboard4 from "../assets/onboard.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
const WelcomeSlider = () => {
  return (
    <div className="w-screen h-screen">
      <Swiper
        pagination={true}
        modules={[Pagination]}
        className="mySwiper w-2/3 h-3/4"
      >
        {/* <SwiperSlide>
          <img
            src={onboard1}
            alt=""
            className="h-full w-full object-top absolute"
          />
          <p className="relative top-6 left-3">
            We provide high quality plants just for you
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={onboard2} alt="" className="h-full w-full object-top" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={onboard4} alt="" className="h-full w-full object-top" />
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default WelcomeSlider;
