// import React from "react";

// const Banner = () => {
//   return (
//     <section class="relative bg-[url(https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80)] bg-no-repeat bg-cover bg-center object-center ">
//       <div class="absolute inset-0 bg-black opacity-30"></div>

//       <div class="relative mx-auto max-w-screen-xl px-4 py-32  lg:flex lg:h-[600px] lg:items-center ">
//         <div class="max-w-xl text-center sm:text-left ">
//           <h1 class="text-3xl font-extrabold sm:text-6xl text-white">
//             Right Guidance at
//             <strong class="block font-extrabold text-rose-700">
//               Right Time
//             </strong>
//           </h1>

//           <p class="mt-4 max-w-lg sm:text-xl/relaxed">
//             Unleash Your Potential:
//             Boarding and Non-Boarding
//             Study Abroad Options
//           </p>

//           <div class="mt-8 flex justify-center md:justify-start text-center  flex-wrap">
//             <a
//               href="#"
//               class="block w-32  rounded bg-rose-600 px-10 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 md:w-44">
//               Enquiry
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Banner;

import { Carousel } from "@material-tailwind/react";

const Banner = () => {
  return (
    <Carousel
      className="md:h-[80vh] h-[60vh]"
      navigation={({
        setActiveIndex,
        activeIndex,
        length,
      }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length)
            .fill("")
            .map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i
                    ? "w-8 bg-white"
                    : "w-4 bg-white/50"
                }`}
                onClick={() =>
                  setActiveIndex(i)
                }
              />
            ))}
        </div>
      )}>
      <img
        src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
};

export default Banner;
