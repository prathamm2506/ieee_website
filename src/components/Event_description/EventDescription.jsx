import React, { useState, useEffect } from "react";


const EventDescription = ({
  title,
  subtitle,
  date,
  image,
  description,
  linkform,
  galleryImages   // 🔥 NEW PROP
}) => {

  const [loading, setLoading] = useState(true);

  // 🔥 SAMPLE GALLERY IMAGES
 const gallery = galleryImages || [];


  // 🔥 PRELOAD ALL IMAGES
  useEffect(() => {
    const images = [image, ...gallery];

    const preload = images.map((src) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
        img.onerror = resolve;
      });
    });

    Promise.all(preload).then(() => {
      setLoading(false);
    });
  }, [image]);

  // 🔥 LOADER
  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
        <div className="flex flex-col items-center gap-4">
          <div className="w-14 h-14 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
          <p className="text-sm text-gray-600 tracking-wide">
            Loading event...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full flex justify-center px-4 py-16 overflow-hidden bg-gradient-to-br from-[#eef2f7] via-[#f8fafc] to-[#e9edf3]">

      {/* 🔥 TECH BACKGROUND ELEMENTS */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-[#ec4415]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-120px] right-[-120px] w-[350px] h-[350px] bg-blue-400/10 rounded-full blur-3xl"></div>

      {/* subtle grid overlay */}
      <div className="absolute inset-0 opacity-[0.2] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      {/* Card */}
      <div className="relative max-w-5xl w-full bg-[#ecfdf5] backdrop-blur-xl 
      rounded-3xl shadow-xl hover:shadow-2xl transition duration-500 
      p-8 md:p-12 border border-white/40">

        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 tracking-tight">
            {title}
          </h1>

          <p className="text-lg text-gray-600 font-medium">
            {subtitle}
          </p>

          <p className="text-sm text-gray-400 mt-2 tracking-wide">
            {date}
          </p>
        </div>

        {/* Main Image */}
        <div className="flex justify-center mb-12 overflow-hidden rounded-2xl bg-white/40 p-2 backdrop-blur-sm">
          <img
            src={image}
            alt="event"
            className="rounded-xl shadow-md hover:scale-105 transition duration-500 max-h-[450px] w-full object-cover"
          />
        </div>

        {/* Description */}
        <div className="text-gray-700 text-lg leading-relaxed text-justify max-w-3xl mx-auto mb-12">
          {description}
        </div>

        {/* Register Button */}
        <div className="flex justify-center mb-12">
          <button
            onClick={() => window.open("https://forms.gle/gPrA2sc8sUVoVxbY8", "_blank")}
            className="px-10 py-3 bg-black text-white rounded-full font-semibold 
            hover:bg-white hover:text-black border border-black 
            transition duration-300 shadow-md hover:shadow-xl hover:scale-105"
          >
            REGISTER NOW
          </button>
        </div>

        {/* Gallery */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-center mb-8 text-gray-800">
            {/* Event Highlights  */}
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {gallery.map((img, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-xl shadow-sm hover:shadow-xl transition duration-300 bg-white/60 backdrop-blur-sm"
              >
                <img
                  src={img}
                  alt={`event-${index}`}
                  className="w-full h-40 md:h-48 object-cover hover:scale-110 transition duration-500"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default EventDescription;