import React from "react";
import Card from "../components/Card/Card";
import Udayan from "../assets/BE25/Udayan.webp";
import Unnati from "../assets/BE25/Unnati.webp";
import Anushka from "../assets/BE25/Anushka.webp";
import Harsh from "../assets/BE25/Harsh.webp";
import krish from "../assets/BE25/Krish.png";
import mahek from "../assets/BE25/Mahek.webp";
import nafeesa from "../assets/BE25/Nafeesa.webp";
import rajat from "../assets/BE25/Rajat.webp";
import samarth from "../assets/BE25/Samarth.webp";
import SarthakKadam from "../assets/BE25/Sarthak.webp";
import sonali from "../assets/BE25/Sonali.webp";
import Sudarsana from "../assets/BE25/Sudarsana.webp";
import Anshi from "../assets/TEs/Anshi.webp";
import Arnav from "../assets/BE25/Arnav.webp";
import ayush from "../assets/BE25/Ayush.webp";
import Ishan from "../assets/BE25/Ishan.webp";
import Kshitij from "../assets/BE25/Kshitij.webp";
import pratham from "../assets/BE25/Pratham.webp";
import Rakshit from "../assets/BE25/Rakshit.webp";
import Reet from "../assets/BE25/Reet.webp";
import Tanay from "../assets/BE25/Tanay.webp";
import greshaMam from "../assets/faculty/Gresha ma'am.webp"
import ashwiniMam from "../assets/faculty/Ashwini ma'am.webp"
import Akshit from "../assets/BE25/Akshit.webp"
import Nidhi from "../assets/BE25/Nidhi.webp"
import Shreshtha from "../assets/BE25/Shreshtha.webp"
import Purva from "../assets/BE25/Purva.webp"
import Vedika from "../assets/BE25/Vedika.webp"
import Shravani from "../assets/BE25/Shravani.webp"
import Shaunak from "../assets/BE25/Shaunak.webp"

const CurrentCouncil = () => {
  return (
    <div className="mt-24">
      <h2 className="text-center uppercase">Get to know us closer</h2>
      <div>
        <div className="w-full mx-auto px-4 flex flex-col items-center my-8">
          <h3 className="uppercase my-8">Faculty Incharge</h3>
          <div className="w-full flex flex-row flex-wrap justify-center items-center gap-8">
            {" "}
            <Card
              name="Dr. Gresha Bhatia"
              role="Deputy HOD - Computer"
              image={greshaMam}
              email="gresha.bhatia@ves.ac.in"
            />
            <Card
              name="Dr. Ashwini Sawant"
              role="Assistant Professor - EXTC"
              image={ashwiniMam}
              email="ashwini.sawant@ves.ac.in"
            />
          </div>
        </div>
        <div className="w-full mx-auto px-4 flex flex-col items-center my-8">
          <h3 className="uppercase my-8">senior council</h3>
          <div className="w-full flex flex-row flex-wrap justify-center items-center gap-8">
            <Card
              name="Rakshit Sharma"
              role="Chairperson"
              image={Rakshit}
              email="2022.rakshit.sharma@ves.ac.in"
              linkedin="https://www.linkedin.com/in/rakshit-kumar-sharma-5b25942ab/"
            />

            <Card
              name="Ayush Patil"
              role="Chief Executive Officer"
              image={ayush}
              email="2022.ayush.patil@ves.ac.in"
              linkedin="https://www.linkedin.com/in/ayush-patil-977a3134b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            />

            <Card
              name="Ishan Kiran Joshi"
              role="Senior Public Relations Head"
              image={Ishan}
              email="2022.ishan.joshi@ves.ac.in"
              github="https://github.com/Ishan2611"
              linkedin="https://www.linkedin.com/in/ishan-joshi-3677042a7/"
            />

            <Card
              name="Pratham Matkar"
              role="Senior Web Editor"
              image={pratham}
              email="d2022.pratham.matkar@ves.ac.in"
              github="https://github.com/prathamm2506"
              linkedin="https://www.linkedin.com/in/pratham-matkar-a2bb77257/"
            />

            <Card
              name="Kshitj Patki"
              role="Senior Treasurer"
              image={Kshitij}
              email="2022.kshitij.patki@ves.ac.in"
              github="https://github.com/Kush1612"
              linkedin="https://www.linkedin.com/in/kshitijpatki/"
            />


            {/* <Card
              name="Reet Sharma"
              role="Senior Public Relations Head"
              image={Reet}
              email="2022.reet.sharma@ves.ac.in"
            /> */}

            
            <Card
              name="Akshit Ramrane"
              role="Senior Graphics Head"
              image={Akshit}
              email="2022.akshit.ramrane@ves.ac.in"
              github="https://github.com/Akshit-Ramrane"
              linkedin="https://www.linkedin.com/in/akshit-ramrane-b1980825b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            />


            <Card
              name="Tanay Baisware"
              role="Senior Editor"
              image={Tanay}
              email="2022.tanay.baisware@ves.ac.in"
              linkedin="https://www.linkedin.com/in/tanay-baisware-21ab5b24b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            />

            <Card
              name="Shravani Kale"
              role="Senior Technical Head"
              image={Shravani}
              email="2021.shravani.kale@ves.ac.in"
              github="https://github.com/Algoscribe"
            />

            <Card
              name="Arnav Sawant"
              role="Senior Technical Head"
              image={Arnav}
              email="2022.arnav.sawant@ves.ac.in"
              github="https://github.com/arnavsawant9"
              linkedin="https://www.linkedin.com/in/arnavsawant9/"
            />

            <Card
              name="Anshi Tiwari"
              role="Women in Engineering"
              image={Anshi}
              email="2022.anshi.tiwari@ves.ac.in"
              github="https://github.com/anshi1108"
              linkedin="https://www.linkedin.com/in/anshi-tiwari-b4a6642a7/"
            />
          </div>
        </div>

        {/* T.E.s */}
        <div className="w-full mx-auto px-4 flex flex-col items-center my-8">
          <h3 className="uppercase my-8">junior council</h3>
          <div className="w-full flex flex-row flex-wrap justify-center items-center gap-8">
            <Card
              name="Shreshtha Kadam"
              role="Secretary"
              image={Shreshtha}
              email="d2023.shreshtha.kadam@ves.ac.in"
              github="https://github.com/Shreshtha0519"
              linkedin="https://www.linkedin.com/in/shreshtha-kadam-a68052233/"
            />

            <Card
              name="Nidhi Bamhane"
              role="Managing Executive Officer"
              image={Nidhi}
              email="2023.nidhi.bamhane@ves.ac.in"
              github="https://github.com/Nidhi2455"
              linkedin="https://www.linkedin.com/in/nidhi-bamhane-13a5b72b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            />

           

            <Card
              name="Udayan Kundu"
              role="Jr. PR Head"
              image={Udayan}
              email="udayankundu222@gmail.com"
              github="https://github.com/UdayanKundu222"
              linkedin="https://in.linkedin.com/in/udayan-kundu-3a9931248"
            />

            <Card
              name="Unnati S Singh"
              role="Jr. PR Head"
              image={Unnati}
              email="2023.unnati.singh@ves.ac.in"
              github="https://github.com/unnss18"
              linkedin="http://linkedin.com/in/unnati-s-6310b32a1"
            />

             <Card
              name="Mahek Kawna"
              role="Jr. Operations"
              image={mahek}
              email="2023.mahek.kawna@ves.ac.in"
              github="https://github.com/Mahekkawna"
              linkedin="https://www.linkedin.com/in/mahek-kawna-73530728b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            />
            
            <Card
              name="Krish Dambir"
              role="Jr. Web/App Editor"
              image={krish}
              email="krishdambir2718@gmail.com"
              github="https://github.com/krishgit24"
              linkedin="https://www.linkedin.com/in/krish-dambir-1701a2289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            />

            <Card
              name="Purva Mhatre"
              role="Jr. Web/App Editor"
              image={Purva}
              email="d2023.purva.mhatre@ves.ac.in"
              github="https://github.com/purvadeepak16"
            />


            <Card
              name="Rajat Saha"
              role="Jr. Treasurer"
              image={rajat}
              email="2023.rajat.saha@ves.ac.in"
              github="https://github.com/PikaPi1402"
              linkedin="https://www.linkedin.com/in/rajat-saha-90877a301"
            />

            <Card
              name="Anushka Sharma"
              role="Jr. Graphics Head"
              image={Anushka}
              email="2023.anushka.sharma@ves.ac.in"
              github="https://github.com/Anu-shhkaa"
              linkedin="https://www.linkedin.com/in/anushka-sharma-0543832a1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            />

            <Card
              name="Sarthak Kadam"
              role="Jr. Graphics Head"
              image={SarthakKadam}
              email="2023.sarthak.kadam@ves.ac.in"
              linkedin="https://www.linkedin.com/in/sarthak-kadam-1b7a20214?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            />

            <Card
              name="Harsh Patil"
              role="Jr. Editor"
              image={Harsh}
              email="2023.harsh.patil@ves.ac.in"
              github="https://github.com/HarshP295"
              linkedin="https://www.linkedin.com/in/harsh-patil-8b001630b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            />

            <Card
              name="Sonali Parishwad"
              role="Jr. Editor"
              image={sonali}
              email="2023.sonali.parishwad@ves.ac.in"
              github="https://github.com/sonali2905"
              linkedin="https://www.linkedin.com/in/sonali-parishwad-124a0934b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            />

            <Card
              name="Sudarsana Krishnan"
              role="Jr. Technical Head"
              image={Sudarsana}
              email="2023.krishnan.sudarsana@ves.ac.in"
              github="https://github.com/SudarsanaKrishnan"
              linkedin="https://www.linkedin.com/in/sudarsana-krishnan-4773a9346"
            />

            <Card
              name="Shaunak Karambelkar"
              role="Jr. Technical Head"
              image={Shaunak}
              email="2023.shaunak.karambelkar@ves.ac.in"
              linkedin="https://www.linkedin.com/in/shaunak-karambelkar-4282bb272?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            />

            <Card
              name="Nafeesa Farook Memon"
              role="Jr. Technical Head"
              image={nafeesa}
              email="2023.nafeesa.memon@ves.ac.in"
              github="https://github.com/nafeesa46"
              linkedin="https://in.linkedin.com/in/nafeesa-memon-15884b284"
            />

            <Card
              name="Samarth Ganesh Adsare"
              role="Jr. Technical Head"
              image={samarth}
              email="samarthad950@mail.com"
              github="https://github.com/Samarth-Ad"
              linkedin="https://www.linkedin.com/in/samarth-adsare-564a6229b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            />

            <Card
              name="Vedika Parab"
              role="Jr. Women In Engineering"
              image={Vedika}
              email="2023.vedika.parab@ves.ac.in"
              github="https://github.com/VedikaParab"
              linkedin="http://linkedin.com/in/vedika-parab"
            />
          </div>
        </div>

        {/* S.E. s */}
        {/* <div className="w-full mx-auto px-4 flex flex-col items-center my-8">
          <h3 className="uppercase my-8">se council</h3>
          <div className="w-full flex flex-row flex-wrap justify-center items-center gap-8"></div>
        </div> */}
      </div>
    </div>
  );
};

export default CurrentCouncil;
