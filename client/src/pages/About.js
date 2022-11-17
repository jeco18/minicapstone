import React from "react";
import Navbar from "../components/Navbar";

function About() {
  return (
    <div className="w-10/12 mx-auto">
      <Navbar />
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap w-full mb-20">
            <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                Yema Buko Pie NONO Bakery
              </h1>
              <div class="h-1 w-20 bg-[#FFCC45] rounded"></div>
            </div>
            <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">
              Yema buko pie is best served when its chilled.. its different from
              any other buko pie where it has to be served hot or fresh baked..
              Craving for a pie?, Let Nono Bakery Yema Buko Pie and Ube Buko Pie
              satisfy your cravings, mas malamig mas masarap.
            </p>
          </div>
          <div class="flex flex-wrap md:-m-2 -m-1">
            <div class="flex flex-wrap w-1/2">
              <div class="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  class="w-full object-cover h-full object-center block"
                  src="https://dummyimage.com/500x300"
                />
              </div>
              <div class="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  class="w-full object-cover h-full object-center block"
                  src="https://dummyimage.com/501x301"
                />
              </div>
              <div class="md:p-2 p-1 w-full overflow-hidden">
                <iframe
                  src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F1595669857365555%2Fvideos%2F496313069195362%2F&show_text=false&width=560&t=4"
                  width="534"
                  height="314"
                  title="The Juans is for Yema Buko Pie"
                  frameborder="0"
                  allowfullscreen="true"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen="true"
                ></iframe>
              </div>
            </div>
            <div class="flex flex-wrap w-1/2">
              <div class="md:p-2 p-1 w-full">
                <iframe
                  width="535"
                  height="361"
                  src="https://www.youtube.com/embed/DK2rPuP6W0Y"
                  title="Biyahe ni Drew: Aprub na foodtrip sa Sorsogon!"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <div class="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  class="w-full object-cover h-full object-center block"
                  src="https://dummyimage.com/502x302"
                />
              </div>
              <div class="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  class="w-full object-cover h-full object-center block"
                  src="https://dummyimage.com/503x303"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
