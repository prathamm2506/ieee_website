import React from "react";
import Card from "../components/Card/Card";
import img1 from "../assets/test_img.webp";
import pratham from "../assets/TEs/pratham.webp";
import Rakshit from "../assets/TEs/Rakshit.webp";
import Harsh from "../assets/SECouncil/HarshPatil_.webp";
import Krish from "../assets/SECouncil/KrishDambir.JPG.webp";
import nafeesa from "../assets/SECouncil/nafeesa.JPG.webp";
import Sudarsana_Krishnan from "../assets/SECouncil/Sudarsana_Krishnan.webp";
import Arnav from "../assets/TEs/Arnav.webp";
import Shantanu from "../assets/SECouncil/Shantanu_.webp";
import Anushka from "../assets/SECouncil/Anushka.JPG.webp";
import sneha from "../assets/BEs/sneha.webp";
import kirti from "../assets/BEs/kirti.webp";
import anjali from "../assets/TEs/anjali.webp"
import adil from "../assets/SE25/Adil.webp"
import harshP from "../assets/SE25/Harsh Patange .webp"
import james from "../assets/SE25/James Lijo.webp"
import fahad from "../assets/SE25/Fahad bhati.webp"

const Developers = () => {
  return (
    <div className="mt-24">
      <h2 className="text-center uppercase">Minds Behind the Code</h2>
      <div>
            <div className="w-full mx-auto px-4 flex flex-col items-center my-8">
          {/* <h3 className="uppercase my-8">council for AY 23 - 34</h3> */}
          <div className="w-full flex flex-row flex-wrap justify-center items-center gap-8">
           
            <Card
              name="Pratham Matkar"
              role="Jr. Web Editor"
              image={pratham}
              linkedin="https://www.linkedin.com/in/pratham-matkar-a2bb77257/"
              github="https://github.com/prathamm2506"
              email="d2022.pratham.matkar@ves.ac.in"
            />
           
            <Card
              name="Krish Dambir"
              role="S.E. Coordinator"
              image={Krish}
              linkedin="https://www.linkedin.com/in/krish-dambir-1701a2289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              github="https://github.com/krishgit24"
              email="krishdambir2718@gmail.com"
            />
           
            <Card
              name="Harsh Patil "
              role="S.E. Coordinator"
              image={Harsh}
              linkedin="https://www.linkedin.com/in/harsh-patil-8b001630b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              github="https://github.com/HarshP295"
              email="harsh.patilin2005@gmail.com"
            />
           
              <Card
              name="Fahad Bhati"
              role="SE Coordinater"
              image={fahad}
              // email="krishdambir2718@gmail.com"
              github="https://github.com/Fahadbhati182"
              linkedin="https://www.linkedin.com/in/fahad-bhati-40426b32a/"
            />
             <Card
              name="Harsh Patange"
              role="SE Coordinater"
              image={harshP}
              // email="krishdambir2718@gmail.com"
              github="https://github.com/Harshp006"
              linkedin="https://www.linkedin.com/in/harsh-patange-ab30031b7/"
            />
             <Card
              name="James Lijo"
              role="SE Coordinater"
              image={james}
              // email="krishdambir2718@gmail.com"
              github="https://github.com/JamesLijo544"
              linkedin="https://www.linkedin.com/in/james-lijo-706163374"
            />
             <Card
              name="Adil"
              role="SE Coordinater"
              image={adil}
              // email="krishdambir2718@gmail.com"
              github="https://github.com/adil162006"
              linkedin="https://www.linkedin.com/in/mohammad-adil-shaikh-8a43b3320/"
            />
            </div>
            </div>
          </div>
        </div>
  );
};

export default Developers;
