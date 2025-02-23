import React from "react";
import img1 from '../../assets/photo.jpeg'

const Testimonials = () => {
  const testimonials = [
    {
      name: "Juhi Chhatlani",
      branch: "CMPN (2019 - 2023)",
      image: img1,
      text: "Being a member of IEEE Vesit was amazing. I have gained experience with the technical workshop conducted by the council. International membership of IEEE has helped me in publishing my research paper."
    },
    {
      name: "Mansi Kasar",
      branch: "EXTC (2018 - 2022)",
      image: img1,
      text: "IEEE has no doubt been an important factor in my growth. Since all the workshops conducted had given me insights and hands-on experience into various technology that help me to learn new things."
    },
    {
      name: "Vansh Pahuja",
      branch: "CMPN (2020 - 2024)",
      image: img1,
      text: "UI/UX and App development workshop that was conducted by IEEE has helped me to know more about these fields. Also, all the council members helped me if any doubt arises during workshops."
    },
    {
      name: "Madhumita Menon",
      branch: "EXTC (2018 - 2022)",
      image: img1,
      text: "I have been a part of the IEEE-VESIT family for 3 years and I am not exaggerating one bit when I say that choosing to get into this council was the best decision at the time."
    }
  ];

  const bgColors = [
    "bg-[var(--color2)]",
    "bg-[var(--color3)]",
    "bg-[var(--color2)]",
    "bg-[var(--color3)]"
  ];

  return (
    <div className="py-10">
      <h2 className="text-center my-8 uppercase">Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mx-auto px-6 lg:px-12">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`${bgColors[index % bgColors.length]} p-6 shadow-lg flex flex-col items-center text-justify`}
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-24 h-24 rounded-full mb-4"
            />
            <h3 className="text-[var(--black)] mb-1">
              {testimonial.name}
            </h3>
            <small className="text-[var(--black)] mb-3">
              {testimonial.branch}
            </small>
            <p className="text-[var(--black)]">{testimonial.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
