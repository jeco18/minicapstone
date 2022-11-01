import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import SideBg from "../assets/images/SideBg.png";

const Feedback = () => {
  return (
    <div className="mt-32 grid grid-cols-2">
      <div>
        <img
          className="w-11/12 rounded-xl drop-shadow-xl"
          src={SideBg}
          alt="pies"
        />
      </div>
      <div className="mt-12">
        <h1 className="font-bold text-2xl">
          What our customers say <br /> about us
        </h1>
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <figure class="flex flex-col justify-center items-center p-8 text-center bg-white">
              <blockquote class="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
                <p class="my-4 font-light">
                  Just tried the pie for the first time and it was delicious. I
                  special order a few different items and they are weekly
                  staples for lunch and dinner.
                </p>
              </blockquote>
              <figcaption class="flex justify-center items-center space-x-3">
                <img
                  class="w-10 h-10 rounded-full"
                  src="https://static8.depositphotos.com/1028979/1058/i/450/depositphotos_10580868-stock-photo-handsome-smiling-man-isolated-over.jpg"
                  alt="profile"
                />
                <div class="space-y-0.5 font-medium dark:text-white text-left">
                  <div>Chris Bonze</div>
                  <div class="text-sm font-light text-gray-500 dark:text-gray-400">
                    Customer
                  </div>
                </div>
              </figcaption>
            </figure>
          </SwiperSlide>
          <SwiperSlide>
            <figure class="flex flex-col justify-center items-center p-8 text-center bg-white">
              <blockquote class="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
                <p class="my-4 font-light">
                  Tried the ready to eat this trending pie today. First bite in
                  I knew I had to go back and get a few more for the weekend.
                  Outstanding!!!
                </p>
              </blockquote>
              <figcaption class="flex justify-center items-center space-x-3">
                <img
                  class="w-10 h-10 rounded-full"
                  src="https://st.depositphotos.com/1144472/2324/i/450/depositphotos_23240122-stock-photo-happy-smiling-young-woman-over.jpg"
                  alt="profile"
                />
                <div class="space-y-0.5 font-medium dark:text-white text-left">
                  <div>Mary Jane Iglesias</div>
                  <div class="text-sm font-light text-gray-500 dark:text-gray-400">
                    Customer
                  </div>
                </div>
              </figcaption>
            </figure>
          </SwiperSlide>
          <SwiperSlide>
            <figure class="flex flex-col justify-center items-center p-8 text-center bg-white">
              <blockquote class="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
                <p class="my-4 font-light">
                  Thank you for your food. It’s so fresh and delicious and it
                  takes the work and guess-work out of my busy life when it
                  comes to eating. Yema Buko Pie is AWESOME!
                </p>
              </blockquote>
              <figcaption class="flex justify-center items-center space-x-3">
                <img
                  class="w-10 h-10 rounded-full"
                  src="https://st3.depositphotos.com/1177973/17858/i/450/depositphotos_178581112-stock-photo-attractive-mature-man.jpg"
                  alt="profile"
                />
                <div class="space-y-0.5 font-medium dark:text-white text-left">
                  <div>Albert Tim</div>
                  <div class="text-sm font-light text-gray-500 dark:text-gray-400">
                    Customer
                  </div>
                </div>
              </figcaption>
            </figure>
          </SwiperSlide>
          <SwiperSlide>
            <figure class="flex flex-col justify-center items-center p-8 text-center bg-white">
              <blockquote class="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
                <p class="my-4 font-light">
                  Thanks for making the ONLY snack that’s totally pure and
                  tastes great too!
                </p>
              </blockquote>
              <figcaption class="flex justify-center items-center space-x-3">
                <img
                  class="w-10 h-10 rounded-full"
                  src="https://st.depositphotos.com/1034986/3482/i/450/depositphotos_34829071-stock-photo-funny-puppet-big-head-business.jpg"
                  alt="profile"
                />
                <div class="space-y-0.5 font-medium dark:text-white text-left">
                  <div>John Green</div>
                  <div class="text-sm font-light text-gray-500 dark:text-gray-400">
                    Customer
                  </div>
                </div>
              </figcaption>
            </figure>
          </SwiperSlide>
          <SwiperSlide>
            <figure class="flex flex-col justify-center items-center p-8 text-center bg-white">
              <blockquote class="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
                <p class="my-4 font-light">
                  Fantastic snacks! <br /> The prepared foods are delicious!
                </p>
              </blockquote>
              <figcaption class="flex justify-center items-center space-x-3">
                <img
                  class="w-10 h-10 rounded-full"
                  src="https://st.depositphotos.com/1144472/3914/i/450/depositphotos_39144473-stock-photo-businesswoman-showing-on-white.jpg"
                  alt="profile"
                />
                <div class="space-y-0.5 font-medium dark:text-white text-left">
                  <div>Ivonkan Quer</div>
                  <div class="text-sm font-light text-gray-500 dark:text-gray-400">
                    Customer
                  </div>
                </div>
              </figcaption>
            </figure>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
export default Feedback;
