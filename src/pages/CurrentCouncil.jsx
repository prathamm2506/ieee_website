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
import arush from "../assets/SE25/Aarush Srivastava.webp.webp"
import adil from "../assets/SE25/Adil.webp"
import aditi from "../assets/SE25/Aditi Ekawade.webp"
import anushka from "../assets/SE25/Anushka Patil.webp"
import archiet from "../assets/SE25/Archiet Tanwar.webp"
import dhruv from "../assets/SE25/Dhruv Thakur.webp"
import dishaD from "../assets/SE25/Disha Dhamecha.webp"
import dishaT from "../assets/SE25/Disha Talreja .webp"
import fahad from "../assets/SE25/Fahad bhati.webp"
import gunjan from "../assets/SE25/Gunjan Athwani.webp"
import harshP from "../assets/SE25/Harsh Patange .webp"
import himanshi from "../assets/SE25/Himanshi Dhanrajani .webp"
import james from "../assets/SE25/James Lijo.webp"
import janhavi from "../assets/SE25/Janhavi Deshmukh .webp"
import jitendra from "../assets/SE25/Jitendra Kokate.HEIC.webp"
import kashvi from "../assets/SE25/Kashvi Tickoo.webp"
import manasvini from "../assets/SE25/Manaswini Joshi.webp"
import mugdha from "../assets/SE25/Mugdha Kulkarni .JPG.webp"
import nikhil from "../assets/SE25/Nikhil Kherajani .webp"
import riju from "../assets/SE25/Riju Mishra.webp"
import riya from "../assets/SE25/Riya Pailwan.webp"
import shubhada from "../assets/SE25/Shubhada Deshmukh.webp"
import tia from "../assets/SE25/Tia Khanna .webp"
import utkarsh from "../assets/SE25/Utkarsh Poojari .webp"
import vansh from "../assets/SE25/Vansh Lalwani .webp"
import varnika from "../assets/SE25/Varnika.webp"
import vidushi from "../assets/SE25/Vidushi Singh .webp"


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
        <div className="w-full mx-auto px-4 flex flex-col items-center my-8">
          <h3 className="uppercase my-8">se council</h3>
          <div className="w-full flex flex-row flex-wrap justify-center items-center gap-8">
            <Card
              name="Aarush Srivastava"
              role="SE Coordinater"
              image={arush}
              // email="krishdambir2718@gmail.com"
              // github="https://github.com/krishgit24"
              linkedin="https://www.linkedin.com/in/aarush-srivastava-094a37332?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            />
            <Card
              name="Adil"
              role="SE Coordinater"
              image={adil}
              // email="krishdambir2718@gmail.com"
              github="https://github.com/adil162006"
              linkedin="https://www.linkedin.com/in/mohammad-adil-shaikh-8a43b3320/"
            />
            <Card
              name="Aditi"
              role="SE Coordinater"
              image={aditi}
              // email="krishdambir2718@gmail.com"
              github="https://github.com/ekawadeaditi06"
              linkedin="https://www.linkedin.com/in/aditi-ekawade-1a534733b"
            />
            <Card
              name="Anushka Patil "
              role="SE Coordinater"
              image={anushka}
              // email="krishdambir2718@gmail.com"
              github="https://github.com/anushkapatil2303"
              linkedin="http://www.linkedin.com/in/anushka-patil-43b804377"
            />
            <Card
              name="Archiet Tanwar"
              role="SE Coordinater"
              image={archiet}
              // email="krishdambir2718@gmail.com"
              github="https://github.com/archiettanwar"
              linkedin="https://www.linkedin.com/in/archiet-tanwar-914995377/"
            />
            <Card
              name="Dhruv Thakur"
              role="SE Coordinater"
              image={dhruv}
              // email="krishdambir2718@gmail.com"
              github="https://github.com/Dhruvnthakur"
              linkedin="https://www.linkedin.com/in/dhruv-thakur-885217361/"
            />
            {/* <Card
              name="Disha Dhamecha"
              role="SE Coordinater"
              image={dishaD}
              email="krishdambir2718@gmail.com"
              github="https://github.com/krishgit24"
              linkedin="https://www.linkedin.com/in/krish-dambir-1701a2289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            /> 
             <Card
              name="Disha Talreja"
              role="SE Coordinater"
              image={dishaT}
              email="krishdambir2718@gmail.com"
              github="https://github.com/krishgit24"
              linkedin="https://www.linkedin.com/in/krish-dambir-1701a2289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            />  */}
            <Card
              name="Fahad Bhati"
              role="SE Coordinater"
              image={fahad}
              // email="krishdambir2718@gmail.com"
              github="https://github.com/Fahadbhati182"
              linkedin="https://www.linkedin.com/in/fahad-bhati-40426b32a/"
            />
            <Card
              name="Gunjan Athwani"
              role="SE Coordinater"
              image={gunjan}
              // email="krishdambir2718@gmail.com"
              github="https://github.com/gunjanathwani27112006"
              // linkedin="https://www.linkedin.com/in/krish-dambir-1701a2289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
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
              name="Himashi Dhanrajani "
              role="SE Coordinater"
              image={himanshi}
              // email="krishdambir2718@gmail.com"
              // github="https://github.com/krishgit24"
              linkedin="https://www.linkedin.com/in/himanshi-dhanrajani-936081329?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
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
              name="Janhavi Deshmukh"
              role="SE Coordinater"
              image={janhavi}
              // email="krishdambir2718@gmail.com"
              github="https://github.com/janhavid0910-sudo"
              linkedin="https://www.linkedin.com/in/janhavi-deshmukh-324b51376?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            />
             {/* <Card
              name="Jitendra Kokate"
              role="SE Coordinater"
              image={jitendra}
              email="krishdambir2718@gmail.com"
              github="https://github.com/krishgit24"
              linkedin="https://www.linkedin.com/in/krish-dambir-1701a2289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            /> */}
             <Card
              name="Kaashvi Tickoo"
              role="SE Coordinater"
              image={kashvi}
              // email="krishdambir2718@gmail.com"
              github="https://github.com/Kashvitickoo"
              linkedin="https://www.linkedin.com/in/kashvi-tickoo-96b752316/"
            />
             <Card
              name="Manaswini Joshi"
              role="SE Coordinater"
              image={manasvini}
              // email="krishdambir2718@gmail.com"
              github="https://github.com/Manas-wini-code"
              linkedin="https://www.linkedin.com/in/manaswini-joshi-4a1605370?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            />
             <Card
              name="Mugdha Kulkarni"
              role="SE Coordinater"
              image={mugdha}
              // email="krishdambir2718@gmail.com"
              github="https://github.com/2024mugdhakulkarni-cpu"
              linkedin="https://www.linkedin.com/in/mugdha-kulkarni-a4a47b299?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            />
             <Card
              name="Nikhil Khejrani"
              role="SE Coordinater"
              image={nikhil}
              // email="krishdambir2718@gmail.com"
              github="https://github.com/nikhil645-hit"
              linkedin="https://www.linkedin.com/in/nikhilkherajani/"
            />
             <Card
              name="Riju Mishra"
              role="SE Coordinater"
              image={riju}
              // email="krishdambir2718@gmail.com"
              // github="https://github.com/krishgit24"
              linkedin="http://www.linkedin.com/in/riju-mishra-ab9a79355"
            />
             <Card
              name="Riya Pailwan"
              role="SE Coordinater"
              image={riya}
              // email="krishdambir2718@gmail.com"
              github="https://github.com/Riyas-code-tonic"
              linkedin="https://www.linkedin.com/in/riya-pailwan-131770376"
            />
             {/* <Card
              name="Shubhada Deshmukh"
              role="SE Coordinater"
              image={shubhada}
              email="krishdambir2718@gmail.com"
              github="https://github.com/krishgit24"
              linkedin="https://www.linkedin.com/in/krish-dambir-1701a2289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            /> */}
             <Card
              name="Tia Khanna "
              role="SE Coordinater"
              image={tia}
              // email="krishdambir2718@gmail.com"
              github="https://github.com/2024tiakhanna-pixie"
              // linkedin="https://www.linkedin.com/me?trk=p_mwlite_feed-secondary_nav"
            />
             <Card
              name="Utkarsh Poojari"
              role="SE Coordinater"
              image={utkarsh}
              // email="krishdambir2718@gmail.com"
              github="https://github.com/poojariutkarsh1"
              linkedin="https://www.linkedin.com/in/utkarsh-poojari-harupiku2006/"
            />
             <Card
              name="Vansh Lalwani"
              role="SE Coordinater"
              image={vansh}
              // email="krishdambir2718@gmail.com"
              github="https://github.com/VL0650"
              linkedin="https://www.linkedin.com/in/vansh-lalwani-9a58a0245/?trk=opento_sprofile_details"
            />
             <Card
              name="Varnika"
              role="SE Coordinater"
              image={varnika}
              // email="krishdambir2718@gmail.com"
              github="https://github.com/varnika-30"
              linkedin="https://www.linkedin.com/in/varnika-mandal-chaurasia-b46a86339/"
            />
             <Card
              name="Vidushi Singh"
              role="SE Coordinater"
              image={vidushi}
              // email="krishdambir2718@gmail.com"
              github="https://github.com/glitch-Mat"
              linkedin="https://www.linkedin.com/in/vidushi-singh-1879293a0/"
            />

          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentCouncil;
