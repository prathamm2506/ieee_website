import React from "react";
import Card from "../components/Card/Card";
import Udayan from "../assets/SECouncil/Udayan.JPG";
import Unnati from "../assets/SECouncil/Unnati_D9A.JPG";
import Vaidehi from "../assets/SECouncil/Vaidehi.jpg";
import aditi from "../assets/SECouncil/aditi.JPG";
import amogh from "../assets/SECouncil/amogh.JPG";
import Anushka from "../assets/SECouncil/Anushka.JPG";
import Bhavik from "../assets/SECouncil/Bhavik.JPG";
import diya from "../assets/SECouncil/diya.jpg";
import Faiza from "../assets/SECouncil/Faiza.JPG";
import Harsh from "../assets/SECouncil/HarshPatil_.jpg";
import Krish from "../assets/SECouncil/KrishDambir.JPG";
import Mahek from "../assets/SECouncil/Mahek.JPG";
import nafeesa from "../assets/SECouncil/nafeesa.JPG";
import naman from "../assets/SECouncil/naman.jpeg";
import prasad from "../assets/SECouncil/prasad.JPG";
import rajat from "../assets/SECouncil/rajat.JPG";
import samarth from "../assets/SECouncil/samarth.JPG";
import sanket from "../assets/SECouncil/sanket.JPG";
import SarthakKadam from "../assets/SECouncil/SarthakKadam.JPG";
import Shantanu from "../assets/SECouncil/Shantanu_.jpg";
import shravan from "../assets/SECouncil/shravan.JPG";
import sonali from "../assets/SECouncil/sonali.JPG";
import Sudarsana_Krishnan from "../assets/SECouncil/Sudarsana_Krishnan.jpg";
import Anshi from "../assets/TEs/Anshi.png";
import Arnav from "../assets/TEs/Arnav.jpg";
import ayush from "../assets/TEs/ayush.jpg";
import Ishan from "../assets/TEs/Ishan.jpg";
import Kshitij from "../assets/TEs/Kshitij.jpg";
import maithili from "../assets/TEs/maithili.jpg";
import piyush from "../assets/TEs/piyush.jpg";
import pratham from "../assets/TEs/pratham.png";
import Rakshit from "../assets/TEs/Rakshit.png";
import Reet from "../assets/TEs/Reet.jpg";
import Tanay from "../assets/TEs/Tanay.jpg";
import veydant from "../assets/TEs/veydant.jpg";
import ShantanuTE from "../assets/TEs/ShantanuTE.png"
import anjali from "../assets/TEs/anjali.png"
import anoushka from "../assets/BEs/anoushka.png"
import ashish from "../assets/BEs/ashish.png"
import gaurang from "../assets/BEs/gaurang.png"
import rishika from "../assets/BEs/rishika.png"
import nihit from "../assets/BEs/nihit.png"
import kirti from "../assets/BEs/kirti.png"
import kaushik from "../assets/BEs/kaushik.png";
import sneha from "../assets/BEs/sneha.png";
import aditri from "../assets/BEs/aditri.png";
import aditiTE from "../assets/TEs/aditiTE.png"
import greshaMam from "../assets/faculty/Gresha ma'am.png"
import ashwiniMam from "../assets/faculty/Ashwini ma'am.png"
import Akshit from "../assets/TEs/Akshit.jpg"
import Prasad from "../assets/BEs/Prasad.jpg"

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
              name="Gaurang Pramod Rane"
              role="Chairperson"
              image={gaurang}
              // instagram="https://instagram.com/krish"
              linkedin="https://www.linkedin.com/in/gaurang-rane-a45335245?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              // github="https://github.com/Gaurang0311"
              email="2021.gaurang.rane@ves.ac.in"
            />
            <Card
              name="Anoushka Menon"
              role="Chief Executive Officer"
              image={anoushka}
              // instagram="https://instagram.com/krish"
              linkedin="https://www.linkedin.com/in/anoushka-menon-5b2ab5260/"
              // github="https://github.com/Gaurang0311"
              email="2021.anoushka.menon@ves.ac.in "
            />
            <Card
              name="Kaushik Puli"
              role="Senior Public Relations Head"
              image={kaushik}
              linkedin="https://www.linkedin.com/in/kaushik-puli-451943260?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              email="2021.kaushika.puli@ves.ac.in"
            />
            <Card
              name="Rishika Chaubal"
              role="Senior Graphics Head"
              image={rishika}
              linkedin="https://www.linkedin.com/in/rishika-chaubal-712629287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              email="2021.rishika.chaubal@ves.ac.in"
            />
            <Card
              name="Prasad Gourshettiwar"
              role="Senior Treasurer"
              image={Prasad}
              linkedin="https://www.linkedin.com/in/prasad-gourshettiwar-4aa716227?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              email="2021.prasad.gourshettiwar@ves.ac.in"
            />
            <Card
              name="Sneha Ramesh Sumbe"
              role="Senior Web Editor"
              image={sneha}
              linkedin="https://www.linkedin.com/in/sneha-sumbe-642b45260?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              email="2021.sneha.sumbe@ves.ac.in"
            />
            <Card
              name="Kirti Srinivas Eppanapelli"
              role="Senior Editor"
              image={kirti}
              linkedin="https://www.linkedin.com/in/kirti-eppanapelli?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              email="d2021.kirti.eppanapelli@ves.ac.in"
            />
            <Card
              name="Ashish Prakash Nair"
              role="Senior Technical Head"
              image={ashish}
              linkedin="https://www.linkedin.com/in/ashish-nair-a25843266?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              email="2021.ashish.nair@ves.ac.in"
            />
            <Card
              name="Nihit Mistry"
              role="Senior Technical Head"
              image={nihit}
              linkedin="http://www.linkedin.com/in/nihit-mistry-b31a1a271"
              email="2021.nihit.mistry@ves.ac.in"
            />
            <Card
              name="Aditri Vishwas"
              role=" Women in Engineering"
              image={aditri}
              linkedin="https://www.linkedin.com/in/aditri-vishwas-382780280"
              // github="https://github.com/aditri31"
              email="2021.aditri.vishwas@ves.ac.in"
            />
            </div>
            </div>


            {/* T.E.s */}
            <div className="w-full mx-auto px-4 flex flex-col items-center my-8">
          <h3 className="uppercase my-8">junior council</h3>
          <div className="w-full flex flex-row flex-wrap justify-center items-center gap-8">
            <Card
              name="Veydant Sharma"
              role="Secretary"
              image={veydant}
              linkedin="https://www.linkedin.com/in/veydant-sharma-122339243?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              // github="https://github.com/vey-droid"
              email="2022.veydant.sharma@ves.ac.in"
            />
            <Card
              name="Ishan Kiran Joshi"
              role="Managing Executive Officer"
              image={Ishan}
              linkedin="https://www.linkedin.com/in/ishan-joshi-3677042a7/"
              // github="https://github.com/Ishan2611"
              email="2022.ishan.joshi@ves.ac.in"
            />
            <Card
              name="Kshitj Patki"
              role="Jr. Treasurer"
              image={Kshitij}
              linkedin="https://www.linkedin.com/in/kshitijpatki/"
              // github="https://github.com/Kush1612"
              email="2022.kshitij.patki@ves.ac.in "
            />
            <Card
              name="Ayush Patil"
              role="Jr. PR Head"
              image={ayush}
              linkedin="https://www.linkedin.com/in/ayush-patil-977a3134b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              email="2022.ayush.patil@ves.ac.in"
            />
            <Card
              name="Anshi Tiwari"
              role="Jr. PR Head"
              image={Anshi}
              linkedin="https://www.linkedin.com/in/anshi-tiwari-b4a6642a7/"
              // github="https://github.com/anshi1108"
              email="2022.anshi.tiwari@ves.ac.in"
            />
            <Card
              name="Akshit Ramrane"
              role="Jr. Graphics Head"
              image={Akshit}
              linkedin="https://www.linkedin.com/in/akshit-ramrane-b1980825b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              // github="https://github.com/Akshit-Ramrane"
              email="2022.akshit.ramrane@ves.ac.in"
            />
            <Card
              name="Maithili Latey"
              role="Jr. Graphics Head"
              image={maithili}
              // instagram="https://instagram.com/krish"
              linkedin="http://www.linkedin.com/in/maithili-latey-a8b645249"
              email="2022.maithili.latey@ves.ac.in"
            />
            
            <Card
              name="Anjali Thakrani"
              role="Jr. Web Editor"
              image={anjali}
              // instagram="https://instagram.com/krish"
              linkedin="https://www.linkedin.com/in/anjali-thakrani"
              // github="https://github.com/anjalithakrani"
              email="2022.anjali.thakrani@ves.ac.in"
            />
            <Card
              name="Pratham Matkar"
              role="Jr. Web Editor"
              image={pratham}
              linkedin="https://www.linkedin.com/in/pratham-matkar-a2bb77257/"
              // github="https://github.com/prathamm2506"
              email="d2022.pratham.matkar@ves.ac.in"
            />
            <Card
              name="Rakshit Sharma"
              role="Jr. Web Editor"
              image={Rakshit}
              linkedin="https://www.linkedin.com/in/rakshit-kumar-sharma-5b25942ab/"
              // github="https://github.com/Rakshit5467"
              email="2022.rakshit.sharma@ves.ac.in"
            />
            <Card
              name="Shantanu Bhosale"
              role="Jr. Technical Head"
              image={ShantanuTE}
              linkedin="https://www.linkedin.com/in/shantanu-bhosale-b37839220/"
              // github="https://github.com/JANGJONWOO"
              email="2022.shantanu.bhosale@ves.ac.in"
            />
            <Card
              name="Aditi Dubey"
              role="Jr. Technical Head"
              image={aditiTE}
              // github="https://github.com/Unyc1124"
              email="2022.aditi.dubey@ves.ac.in"
            />
            <Card
              name="Arnav Sawant"
              role="Jr. Technical Head"
              image={Arnav}
              linkedin="https://www.linkedin.com/in/arnavsawant9/"
              // github="https://github.com/arnavsawant9"
              email="2022.arnav.sawant@ves.ac.in"
            />
            <Card
              name="Piyush Pandey"
              role="Jr. Technical Head"
              image={piyush}
              linkedin="http://www.linkedin.com/in/piyush-pandey-09348b317"
              // github="https://github.com/itspandey22"
              email="2022.piyush.pandey@ves.ac.in"
            />
            <Card
              name="Reet Sharma"
              role="Jr. Women In Engineering"
              image={Reet}
              email="2022.reet.sharma@ves.ac.in"
            />
            <Card
              name="Tanay Baisware"
              role="Jr. Editor"
              image={Tanay}
              linkedin="https://www.linkedin.com/in/tanay-baisware-21ab5b24b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              email="2022.tanay.baisware@ves.ac.in"
            />
            {/* <Card
              name="Harsh Shah"
              role="Jr PR Incharge"
              image={img1}
              // instagram="https://instagram.com/krish"
              linkedin="https://www.linkedin.com/in/pratham-matkar-a2bb77257/"
              // github="https://github.com/prathamm2506"
              email="2022.harsh.shah@ves.ac.in"
            /> */}
            </div>
            </div>


            {/* S.E. s */}
            <div className="w-full mx-auto px-4 flex flex-col items-center my-8">
          <h3 className="uppercase my-8">se council</h3>
          <div className="w-full flex flex-row flex-wrap justify-center items-center gap-8">
            <Card
              name="Krish Dambir"
              role="S.E. Coordinator"
              image={Krish}
              linkedin="https://www.linkedin.com/in/krish-dambir-1701a2289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              // github="https://github.com/krishgit24"
              email="krishdambir2718@gmail.com"
            />
            <Card
              name="Sanket Bipin Patil "
              role="S.E. Coordinator"
              image={sanket}
              linkedin="https://www.linkedin.com/in/sanket-patil1708/"
              // github="https://github.com/sanketp17"
              email="sanketpatil0902@gmail.com"
            />
            <Card
              name="Nafeesa Farook Memon"
              role="S.E. Coordinator"
              image={nafeesa}
              linkedin="https://in.linkedin.com/in/nafeesa-memon-15884b284"
              // github="https://github.com/nafeesa46"
              email="nafeesa07memon@gmail.com"
            />
            <Card
              name="Naman Varma"
              role="S.E. Coordinator"
              image={naman}
              linkedin="https://www.linkedin.com/in/naman-varma-311b8134b/"
              // github="https://github.com/namanvarma21"
              email="namanvarma2005@gmail.com"
            />
            <Card
              name="Amogh Sanjay More"
              role="S.E. Coordinator"
              image={amogh}
              linkedin="https://www.linkedin.com/in/amogh-more-2a1066298?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              // github="https://github.com/Amoghmore1409"
              email="amoghmore1409@gmail.com"
            />
            <Card
              name="Shantanu Pawar "
              role="S.E. Coordinator"
              image={Shantanu}
              linkedin="https://www.linkedin.com/in/shantanu-pawar-4b05a5316?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              // github="https://github.com/Shantanupawar29"
              email="shantanupawar2005@gmail.com"
            />
            <Card
              name="Anushka Sharma  "
              role="S.E. Coordinator"
              image={Anushka}
              linkedin="https://www.linkedin.com/in/anushka-sharma-0543832a1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              // github="https://github.com/Anu-shhkaa"
              email="anushka.5aas@gmail.com"
            />
            <Card
              name="Udayan Kundu"
              role="S.E. Coordinator"
              image={Udayan}
              linkedin="https://in.linkedin.com/in/udayan-kundu-3a9931248"
              // github="https://github.com/UdayanKundu222"
              email="udayankundu222@gmail.com"
            />
            <Card
              name="Samarth Ganesh Adsare"
              role="S.E. Coordinator"
              image={samarth}
              linkedin="https://www.linkedin.com/in/samarth-adsare-564a6229b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              // github="https://github.com/Samarth-Ad"
              email="samarthad950@mail.com"
            />
            <Card
              name="Harsh Patil "
              role="S.E. Coordinator"
              image={Harsh}
              linkedin="https://www.linkedin.com/in/harsh-patil-8b001630b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              // github="https://github.com/HarshP295"
              email="harsh.patilin2005@gmail.com"
            />
            <Card
              name="Unnati S Singh "
              role="S.E. Coordinator"
              image={Unnati}
              linkedin="http://linkedin.com/in/unnati-s-6310b32a1"
              // github="https://github.com/unnss18"
              email="unnatishresth248@gmail.com"
            />
            <Card
              name="Bhavik Panjapi"
              role="S.E. Coordinator"
              image={Bhavik}
              linkedin="https://www.linkedin.com/in/bhavik-panjapi-259b772a6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              // github="https://github.com/BhavikPanjapi"
              email="panjapibhavik77@gmail.com"
            />
            <Card
              name="Rajat Saha"
              role="S.E. Coordinator"
              image={rajat}
              linkedin="http://www.linkedin.com/in/rajat-saha-90877a301"
              // github="https://github.com/PikaPi1402"
              email="rajatsaha1402@gmail.com"
            />
            <Card
              name="Vaidehi Setiya"
              role="S.E. Coordinator"
              image={Vaidehi}
              linkedin="https://www.linkedin.com/in/vaidehi-setiya-2879b834b/"
              // github="https://github.com/Mahekkawna"
              email="vaidehisetiya09@gmail.com"
            />
            <Card
              name="Mahek Kawna"
              role="S.E. Coordinator"
              image={Mahek}
              linkedin="https://www.linkedin.com/in/mahek-kawna-73530728b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              // github="https://github.com/vaidehi1603"
              email="2023.mahek.kawna@ves.ac.in"
            />
            <Card
              name="Sonali Parishwad "
              role="S.E. Coordinator"
              image={sonali}
              linkedin="https://www.linkedin.com/in/sonali-parishwad-124a0934b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              // github="https://github.com/sonali2905"
              email="2023.sonali.parishwad@ves.ac.in"
            />
            <Card
              name="Prasad Rane"
              role="S.E. Coordinator"
              image={prasad}
              linkedin="https://www.linkedin.com/me?trk=p_mwlite_feed-secondary_nav"
              // github="https://github.com/jerry4699"
              email="d2023.prasad.rane@ves.ac.in"
            />
            <Card
              name="Shaikh Faiza"
              role="S.E. Coordinator"
              image={Faiza}
              linkedin="https://www.linkedin.com/in/faiza-shaikh-aa6677274?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              // github="https://github.com/faiza231"
              email="d2023.faiza.shaikh@ves.ac.in"
            />
            <Card
              name="Diya Nagdev"
              role="S.E. Coordinator"
              image={diya}
              linkedin="https://www.linkedin.com/in/diya-nagdev-b79821346?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              // github="https://github.com/diyanagdev09"
              email="2023.diya.nagdev@ves.ac.in"
            />
            <Card
              name="Sarthak kadam"
              role="S.E. Coordinator"
              image={SarthakKadam}
              linkedin="https://www.linkedin.com/in/sarthak-kadam-1b7a20214?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              email="2023.sarthak.kadam@ves.ac.in"
            />
            <Card
              name="Aditi Panigrahi "
              role="S.E. Coordinator"
              image={aditi}
              linkedin="https://www.linkedin.com/in/aditi-panigrahi-5bb86228b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              // github="https://github.com/aditipanigrahi20"
              email="2023.aditi.panigrahi@ves.ac.in"
            />
            <Card
              name="Sudarsana Krishnan"
              role="S.E. Coordinator"
              image={Sudarsana_Krishnan}
              linkedin="https://www.linkedin.com/in/sudarsana-krishnan-4773a9346/overlay/about-this-profile/?lipi=urn:li:page:d_flagship3_profile_view_base;t6u9l7BlR8%20YZ6yiYW6suw=="
              // github="https://github.com/SudarsanaKrishnan"
              email="2023.krishnan.sudarsana@ves.ac.in"
            />
            <Card
              name="Shrawan Rane"
              role="S.E. Coordinator"
              image={shravan}
              email="raneshrawan7@gmail.com"
            />
            </div>
            </div>
          </div>
        </div>
  );
};

export default CurrentCouncil;
