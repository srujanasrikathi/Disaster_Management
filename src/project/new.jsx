import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './new.css'; 


import kakinadaHos from '../assets/apollo-hospital.jpg';
import kaki2 from '../assets/GGH-hospital.jpg';
import kaki3 from '../assets/trust-hopsital.jpeg';
import kaki4 from '../assets/siddhartha-hospitals.jpg';
import kaki5 from '../assets/saisudha-hospital.jpeg';
import rjy1 from '../assets//Vijaya-hospital.jpg';
import rjy2 from '../assets/RAVI-HOSPITAL.jpg';
import rjy3 from '../assets/Delta-hospital.jpg';
import rjy4 from '../assets/siddhartha-hospitals.jpg';
import rjy5 from '../assets/Shri ram - hospital.jpg';
import vija1 from '../assets/Nagarjuna-Hospitals.jpg';
import vija2 from '../assets/Vasavi-hospital.jpg';
import vija3 from '../assets/ggh-hospital-vijayawada.jpg';
import vija4 from '../assets/Pioneer hospital.png';
import tiru1 from '../assets/Sri Venkateswara Institute of Medical Sciences hospital.jpeg';
import tiru2 from '../assets/Srinivasa-hospital.jpeg';
import tiru3 from '../assets/Kamineni Hospital.jpeg';
import tiru4 from '../assets/srivenkateswara-hospital.jpg';
import tiru5 from '../assets/sankalpa hospital.jpeg';
import vis1 from '../assets/Apollo-vizag-hospital.jpeg';
import vis2 from '../assets/Kims-hospital.jpeg';
import vis3 from '../assets/Care-hospital.jpeg';
import vis5 from '../assets/Government-vizag-hospital.jpg';
import vis4 from '../assets/Medicover-hospital.png';
import apkkd from '../assets/Ap-kkd-ps.jpg';
import apsarpa from '../assets/Ap-sarpavaram-ps.jpeg';
import aprjy from '../assets/Ap-rajamundry-ps.jpg';
import ap1 from '../assets/Ap-2 town-ps.jpeg';
import ap2 from '../assets/Ap-2 town-ps.jpeg';
import aptiru from '../assets/Ap-tirupati-ps.jpg';
import apgaju from '../assets/Ap-gajuwaka-ps.jpg';
import apmvp from '../assets/Ap-mvp-ps.jpeg';
import apvija from '../assets/Ap-vijayawada-fs.jpeg';
import apvizag from '../assets/Ap-vizag-fs.jpeg';
import aptirup from '../assets/Ap-tirupati-fs.jpeg';
import apguntu from '../assets/Ap-guntur-fs.jpeg';
import apkurn from '../assets/Ap-kurnool-fs.jpeg';
import kenf from '../assets/Ken-found-society.jpeg';
import prems from '../assets/Prema-samajam.jpeg';
import meeseva from '../assets/Meesava.jpeg';
import gunturss from '../assets/Guntur-ss.jpeg';
import hyhos5 from '../assets/hyderabad-owaisi-hospitals.jpeg';
import hyhos4 from '../assets/hyderabad-nims-hospitals.jpeg';
import hyhos3 from '../assets/hyderabad-care-hospital.jpg';
import hyhos2 from '../assets/hyderabad-yashoda-hospitals.jpeg';
import hyhos1 from '../assets/hyderabad-apollo-hospitals.jpg';
import warhos5 from '../assets/Warangal-siddhartha-hospital.jpeg';
import warhos4 from '../assets/Warangal-sankhya-hospital.jpg';
import warhos3 from '../assets/Warangal-vivekananda-hospital.jpg';
import warhos2 from '../assets/Warangal-government-hospital.jpeg';
import warhos1 from '../assets/Warangal-kakatiya-hospital.jpg';
import kmho5 from '../assets/Khamma-apollo-hospital.jpeg';
import kmho4 from '../assets/Khamma-krishna-hospital.jpeg';
import kmho3 from '../assets/Khammam-bhagya-hospital.png';
import kmho2 from '../assets/Khammam-prasad-hospital.jpg';
import kmho1 from '../assets/Khammam-government-hospital.jpeg';
import nijho5 from '../assets/Nizamabad-medicover-hospital.jpeg';
import nijho4 from '../assets/Nijamabad-sigma-hospital.jpeg';
import nijho3 from '../assets/Nijamabad-Nijamabad-hospital.jpeg';
import nijho2 from '../assets/Nizamanad-Government-hospital.jpeg';
import nijho1 from '../assets/Nizamanad-bharat-hospital.jpeg';
import knho5 from '../assets/Karimnagar-srikrishna-hospital.jpg'
import knho4 from '../assets/Karimnagar-kims-hospital.jpg'
import knho3 from '../assets/Karimnagar-noble-hospital.jpeg'
import knho2 from '../assets/Karimnagar-government-hospital.jpg'
import knho1 from '../assets/Karimnagar-apollo-hospital.jpg'
import tspo8 from '../assets/Ts-warangal-ps.jpeg';
import tspo7 from '../assets/Ts-samshabad-ps.jpg';
import tspo6 from '../assets/Ts-malkajgiri-ps.jpg';
import tspo5 from '../assets/Ts-kukatpalli-ps.jpg';
import tspo4 from '../assets/Ts-cyberabad-ps.jpg';
import tspo3 from '../assets/Ts-madhapur-ps.jpg';
import tspo2 from '../assets/Ts-jubilee-hills-ps.jpeg';
import tspo1 from '../assets/Ts-banjara-hills-ps.jpg';
import tsfi5 from '../assets/Ts-karimnagar-fs.jpeg';
import tsfi4 from '../assets/Ts-nizamabad-fs.jpeg';
import tsfi3 from '../assets/Ts-khammam-fs.jpeg';
import tsfi2 from '../assets/Ts-warangal-fs.jpeg';
import tsfi1 from '../assets/Ts-hyd-fs.jpeg';
// import tswel4 from '../assets/tg-warangal-community.jpg'
// import tswel3 from '../assets/tg-hyderabad-community.jpg'
import tswel2 from '../assets/Ts-relief-fund copy.jpeg'
import tswel1 from '../assets/hyd-welfare-society copy.jpg'
import thiru5 from '../assets/Thiruvananthapuram5.jpg'
import thiru4 from '../assets/Thiruvananthapuram4.jpg'
import thiru3 from '../assets/Thiruvananthapuram3.jpg'
import thiru2 from '../assets/Thiruvananthapuram2.jpg'
import thiru1 from '../assets/Thiruvananthapuram.jpg'
import koho5 from '../assets/Kochi Fortis Hospital.jpg'
import koho4 from '../assets/Kochi Lifecare Hospital.jpg'
import koho3 from '../assets/Kochi  Ernakulam Medical center.jpg'
import koho2 from '../assets/Kochi Amrita Institute of Medical Sciences.jpg'
import koho1 from '../assets/Kochi Lissie Hospital.jpg';
import calho5 from '../assets/Calicut Government District Hospital.jpg';
import calho4 from '../assets/Calicut Qasar Al Murjan Hospital.jpg';
import calho3 from '../assets/Calicut City Hospital.jpg';
import calho2 from '../assets/Calicut Govt. Medical College.jpg';
import calho1 from '../assets/Calicut Malabar Institute of Medical Sciences.jpg';

const ButtonComponent = () => {
  const [selectedState, setSelectedState] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [details, setDetails] = useState(null);
  const navigate = useNavigate();

  const stateData = {
    Andhrapradesh: {
      Hospitals: [
    // Kakinada
    { id: 1, name: 'Apollo Hospital', address: '13-1-3, Main Road Surya Rao Pet, Kakinada', contact: '0884-2345800', city: 'Kakinada', image: kakinadaHos },
    { id: 2, name: 'Government General Hospital', address: 'Suryaraopeta, Kakinada', contact: '0884-2375656', city: 'Kakinada', image: kaki2 },
    { id: 3, name: 'Trust Hospital', address: '14-1-2, Kothapet, Kakinada', contact: '0884-2378798', city: 'Kakinada', image:  kaki3},
    { id: 4, name: 'Siddhartha Hospital', address: '34-1-20, Temple Street, Kakinada', contact: '0884-42340102', city: 'Kakinada', image: kaki4 },
    { id: 5, name: 'Sai Sudha Hospital', address: '8-6-5, Jawahar Street, Salipeta, Kakinada', contact: '0884-2345979', city: 'Kakinada', image: kaki5 },

    // Rajahmundry Hospitals
    { id: 6, name: 'Vijaya Hospital', address: '24-1-19, Bhanugudi Junction, Rajahmundry', contact: '0883-2432156', city: 'Rajahmundry', image: rjy1 },
    { id: 7, name: 'Ravi Hospital', address: '8-10-13, Srikrishna Nagar, Rajahmundry', contact: '0883-2438798', city: 'Rajahmundry', image: rjy2 },
    { id: 8, name: 'Delta Hospital', address: '5-1-28, Venkateswara Nagar, Rajahmundry', contact: '0883-2471234', city: 'Rajahmundry', image: rjy3 },
    { id: 9, name: 'Siddhartha Hospital', address: '1-A, Devi Chowk, Rajahmundry', contact: '0883-2444800', city: 'Rajahmundry', image:  rjy4 },
    { id: 10, name: 'Shri Ram Hospital', address: '12-5-30, Tadepalligudem Road, Rajahmundry', contact: '0883-2467890', city: 'Rajahmundry', image:  rjy5 },

    // Vijayawada Hospitals
    { id: 11, name: 'Nagarjuna Hospital', address: '20-1-30, Kanuru, Vijayawada', contact: '0866-2463555', city: 'Vijayawada', image:  vija1 },
    { id: 12, name: 'Vasavi Hospital', address: '11-2-35, R.T.C. Colony, Vijayawada', contact: '0866-2478910', city: 'Vijayawada', image: vija2 },
    { id: 13, name: 'Government General Hospital', address: '1-1-25, NTR Circle, Vijayawada', contact: '0866-2465432', city: 'Vijayawada', image: vija3 },
    { id: 14, name: 'Pioneer Hospital', address: '7-2-4, Bhavanipuram, Vijayawada', contact: '0866-2487654', city: 'Vijayawada', image: vija4 },
 
    // Tirupati Hospitals
    { id: 16, name: 'Sri Venkateswara Institute of Medical Sciences', address: 'Alipiri Road, Tirupati', contact: '0877-2287777', city: 'Tirupati', image:  tiru1 },
    { id: 17, name: 'Srinivasa Hospital', address: '2-1-19, Tiruchanoor Road, Tirupati', contact: '0877-2262334', city: 'Tirupati', image: tiru2 },
    { id: 18, name: 'Kamineni Hospital', address: '5-1-18, Tirupati', contact: '0877-2221010', city: 'Tirupati', image: tiru3 },
    { id: 19, name: 'Sree Venkateswara Hospital', address: '1-1-28, Reddy Street, Tirupati', contact: '0877-2265689', city: 'Tirupati', image:  tiru4 },
    { id: 20, name: 'Sankalpa Hospital', address: 'Karakambadi Bazar St, Tata Nagar, Tirupati', contact: '0877-2289999', city: 'Tirupati', image:  tiru5 },

    // Visakhapatnam (Vizag) Hospitals
    { id: 21, name: 'Apollo Hospitals', address: '1-2-8, Gajuwaka, Vizag', contact: '0891-2730000', city: 'Vizag', image: vis1 },
    { id: 22, name: 'KIMS Hospital', address: '9-1-1, Gajuwaka, Vizag', contact: '0891-2775000', city: 'Vizag', image:  vis2 },
    { id: 23, name: 'Care Hospital', address: '7-2-35, MVP Colony, Vizag', contact: '0891-2500500', city: 'Vizag', image:  vis3 },
    { id: 24, name: 'Medicover Hospital', address: 'No-5, BRTS Rd, Arivola, Vizag', contact: '04068334455', city: 'Vizag', image: vis4 },
    { id: 25, name: 'Government Hospital', address: '3-2-21, Old Port Area, Vizag', contact: '0891-2554777', city: 'Vizag', image:  vis5 },
  ],
      PoliceStations : [
        { id: 1, name: 'Kakinada Police Station', address: 'Main Road, Kakinada', contact: '0884-2344567', city: 'Kakinada', image: apkkd },
        { id: 2, name: 'Sarpavaram Police Station', address: 'Sarpavaram Junction, Kakinada', contact: '0884-2358765', city: 'Kakinada', image:  apsarpa },
        { id: 3, name: 'Rajahmundry Police Station', address: 'Kotipalli Bus Stand, Rajahmundry', contact: '0883-2435678', city: 'Rajahmundry', image:  aprjy },
        { id: 4, name: 'One Town Police Station', address: 'One Town, Vijayawada', contact: '0866-2456789', city: 'Vijayawada', image:  ap1 },
        { id: 5, name: 'Two Town Police Station', address: 'Two Town, Vijayawada', contact: '0866-2467890', city: 'Vijayawada', image:  ap2 },
        { id: 6, name: 'Tirupati Police Station', address: 'West, Tirupati', contact: '0877-2281234', city: 'Tirupati', image: aptiru },
        { id: 7, name: 'Gajuwaka Police Station', address: 'Gajuwaka, Visakhapatnam', contact: '0891-2734567', city: 'Visakhapatnam', image:  apgaju },
        { id: 8, name: 'MVP Colony Police Station', address: 'MVP Colony, Visakhapatnam', contact: '0891-2745678', city: 'Visakhapatnam', image:  apmvp },
      ],
      FireStations: [
        { id: 1, name: 'Vijayawada Fire Station', address: 'MG Road, Vijayawada', contact: '0866-2471234', city: 'Vijayawada', image:  apvija },
        { id: 2, name: 'Visakhapatnam Fire Station', address: 'Beach Road, Visakhapatnam', contact: '0891-2546789', city: 'Visakhapatnam', image:  apvizag },
        { id: 3, name: 'Tirupati Fire Station', address: 'Renigunta Road, Tirupati', contact: '0877-2222345', city: 'Tirupati', image:  aptirup },
        { id: 4, name: 'Guntur Fire Station', address: 'Ring Road, Guntur', contact: '0863-2356789', city: 'Guntur', image:  apguntu },
        { id: 5, name: 'Kurnool Fire Station', address: 'Main Road, Kurnool', contact: '08518-245123', city: 'Kurnool', image: apkurn }
      ],
      Community: [
        { id: 1, name: 'Ken Foundation Society', address: 'Vizag', contact: '9885674949', city: 'Vizag', image:  kenf },
        { id: 2, name: 'Prema Samajam', address: 'Vizag', contact: '0891 2544774', city: 'Vizag', image: prems },
        { id: 3, name: 'MeeSeva Community center', address: 'Vijayawada', contact: '9100797268', city: 'Vijayawada', image:  meeseva },
        { id: 4, name: 'Guntur Social Services', address: 'Main Road, Guntur', contact: '0863-8765432', city: 'Guntur', image:  gunturss }
      ]
      
    },  
    Telangana :{
      Hospitals :[
         // Hyderabad
    { id: 1, name: 'Apollo Hospital', address: 'Hyderabad, Jubilee Hills', contact: '040-23312345', city: 'Hyderabad', state: 'Telangana', image:  hyhos1 },
    { id: 2, name: 'Yashoda Hospital', address: 'Secunderabad', contact: '040-27891122', city: 'Hyderabad', state: 'Telangana', image:  hyhos2 },
    { id: 3, name: 'Care Hospital', address: 'Banjara Hills, Hyderabad', contact: '040-67655555', city: 'Hyderabad', state: 'Telangana', image:  hyhos3 },
    { id: 4, name: 'NIMS Hospital', address: 'Punjagutta, Hyderabad', contact: '040-23310700', city: 'Hyderabad', state: 'Telangana', image:  hyhos4 },
    { id: 5, name: 'Owaisi Hospital', address: 'Shamshabad, Hyderabad', contact: '040-23512000', city: 'Hyderabad', state: 'Telangana', image:  hyhos5 },
  
    // Warangal Hospitals
    { id: 6, name: 'Kakatiya Medical College', address: 'Warangal', contact: '0870-2557557', city: 'Warangal', state: 'Telangana', image:  warhos1 },
    { id: 7, name: 'Government Hospital', address: 'Warangal', contact: '0870-2562233', city: 'Warangal', state: 'Telangana', image:  warhos2 },
    { id: 8, name: 'Vivekananda Hospital', address: 'Hanamkonda, Warangal', contact: '0870-2434444', city: 'Warangal', state: 'Telangana', image: warhos3 },
    { id: 9, name: 'Sankhya Hospital', address: 'Warangal', contact: '0870-2412345', city: 'Warangal', state: 'Telangana', image: warhos4 },
    { id: 10, name: 'Siddhartha Hospital', address: 'Warangal', contact: '0870-2456789', city: 'Warangal', state: 'Telangana', image: warhos5 },
  
    // Khammam Hospitals
    { id: 11, name: 'Government Hospital', address: 'Khammam', contact: '0874-2233445', city: 'Khammam', state: 'Telangana', image:  kmho1 },
    { id: 12, name: 'Prasad Hospital', address: 'Khammam', contact: '0874-2288999', city: 'Khammam', state: 'Telangana', image:  kmho2 },
    { id: 13, name: 'Bhagya Hospital', address: 'Khammam', contact: '0874-2223344', city: 'Khammam', state: 'Telangana', image:  kmho3 },
    { id: 14, name: 'Sri Krishna Hospital', address: 'Khammam', contact: '0874-2277655', city: 'Khammam', state: 'Telangana', image:  kmho4 },
    { id: 15, name: 'Apollo Pharmacy Hospital', address: 'Khammam', contact: '0874-2456789', city: 'Khammam', state: 'Telangana', image: kmho5 },
  
    // Nizamabad Hospitals
    { id: 16, name: 'Bharat Hospital', address: 'Nizamabad', contact: '08461-234567', city: 'Nizamabad', state: 'Telangana', image:  nijho1 },
    { id: 17, name: 'Government General Hospital', address: 'Nizamabad', contact: '08461-245678', city: 'Nizamabad', state: 'Telangana', image: nijho2 },
    { id: 18, name: 'Nizamabad Hospital', address: 'Nizamabad', contact: '08461-234890', city: 'Nizamabad', state: 'Telangana', image:  nijho3 },
    { id: 19, name: 'Sigma Hospital', address: 'Nizamabad', contact: '08461-248765', city: 'Nizamabad', state: 'Telangana', image: nijho4},
    { id: 20, name: 'Medicover Hospital', address: 'Nizamabad', contact: '08461-249876', city: 'Nizamabad', state: 'Telangana', image:  nijho5 },
  
    // Karimnagar Hospitals
    { id: 21, name: 'Apollo Hospitals', address: 'Karimnagar', contact: '08724-234567', city: 'Karimnagar', state: 'Telangana', image: knho1 },
    { id: 22, name: 'Government Hospital', address: 'Karimnagar', contact: '08724-245678', city: 'Karimnagar', state: 'Telangana', image: knho2 },
    { id: 23, name: 'Noble Hospital', address: 'Karimnagar', contact: '08724-234890', city: 'Karimnagar', state: 'Telangana', image: knho3 },
    { id: 24, name: 'KIMS Hospital', address: 'Karimnagar', contact: '08724-238900', city: 'Karimnagar', state: 'Telangana', image: knho4 },
    { id: 25, name: 'Srikrishna Hospital', address: 'Karimnagar', contact: '08724-249876', city: 'Karimnagar', state: 'Telangana', image: knho5},
      ],
      PoliceStations: [
        { id: 1,name: 'BanjaraHills Police Station', address: 'Road No 12, Banjara Hills, Hyderabad', contact: '040-27852785', city: 'Hyderabad', image: tspo8 },
        { id: 2, name: 'JubileeHills Police Station', address: 'Road No 36, Jubilee Hills, Hyderabad', contact: '040-23546987', city: 'Hyderabad', image: tspo7 },
        { id: 3, name: 'Madhapur Police Station', address: 'HITEC City Road, Madhapur, Hyderabad', contact: '040-23010123', city: 'Hyderabad', image: tspo6 },
        { id: 4, name: 'Cyberabad Commissionerate', address: 'Gachibowli, Hyderabad', contact: '040-27853456', city: 'Hyderabad', image: tspo5 },
        { id: 5, name: 'Kukatpally Police Station', address: 'NH 65, Kukatpally, Hyderabad', contact: '040-23155566', city: 'Hyderabad', image: tspo4 },
        { id: 6, name: 'Malkajgiri Police Station', address: 'Malkajgiri Main Road, Secunderabad', contact: '040-27012223', city: 'Secunderabad', image: tspo3},
        { id: 7, name: 'Shamshabad Police Station', address: 'Shamshabad, Hyderabad', contact: '040-29706122', city: 'Hyderabad', image: tspo2 },
        { id: 8, name: 'Warangal Police Station', address: 'Subedari, Warangal', contact: '0870-2511234', city: 'Warangal', image: tspo1 },
      ],
      FireStations:
      [
          { id: 1, name: 'Hyderabad Fire Station', address: 'Nampally, Hyderabad', contact: '040-23456789', city: 'Hyderabad', image: tsfi1 },
          { id: 2, name: 'Warangal Fire Station', address: 'Subedari, Warangal', contact: '0870-2456789', city: 'Warangal', image: tsfi2 },
          { id: 3, name: 'Khammam Fire Station', address: 'Wyra Road, Khammam', contact: '08742-234123', city: 'Khammam', image: tsfi3},
          { id: 4, name: 'Nizamabad Fire Station', address: 'Armoor Road, Nizamabad', contact: '08462-245123', city: 'Nizamabad', image: tsfi4 },
          { id: 5, name: 'Karimnagar Fire Station', address: 'Mukarrampura, Karimnagar', contact: '08782-234567', city: 'Karimnagar', image: tsfi5 }
      ],
      Community: [
        { id: 1, name: 'Hyderabad Welfare Society', address: 'Hyderabad', contact: '040-1234567', city: 'Hyderabad', image: tswel1 },
        { id: 2, name: 'Telangana Relief Fund', address: 'Warangal', contact: '0870-2345678', city: 'Warangal', image: tswel2},
        { id: 3, name: 'Hyderabad Community Hub', address: 'Banjara Hills, Hyderabad', contact: '040-7654321', city: 'Hyderabad', image: 'tg-warangal-community.jpg' },
        { id: 4, name: 'Warangal Community Center', address: 'Main Street, Warangal', contact: '0870-8765432', city: 'Warangal', image: 'tg-hyd-community.jpg' }
      ]
    },
    Kerela:{
      Hospitals:[
        // Thiruvananthapuram
    { id: 1, name: 'Sree Chitra Tirunal Institute for Medical Sciences', address: 'Thiruvananthapuram', contact: '0471-2521020', city: 'Thiruvananthapuram', state: 'Kerala', image: thiru1 },
    { id: 2, name: 'Medical College Hospital', address: 'Thiruvananthapuram', contact: '0471-2447715', city: 'Thiruvananthapuram', state: 'Kerala', image: thiru2 },
    { id: 3, name: 'KIMS Hospital', address: 'Thiruvananthapuram', contact: '0471-2440500', city: 'Thiruvananthapuram', state: 'Kerala', image: thiru3 },
    { id: 4, name: 'Kerala Institute of Medical Sciences', address: 'Thiruvananthapuram', contact: '0471-2440501', city: 'Thiruvananthapuram', state: 'Kerala', image: thiru4 },
    { id: 5, name: 'Aster Medcity', address: 'Thiruvananthapuram', contact: '0471-2440570', city: 'Thiruvananthapuram', state: 'Kerala', image: thiru5},

  // Kochi Hospitals
    { id: 6, name: 'Lissie Hospital', address: 'Kochi', contact: '0484-2391100', city: 'Kochi', state: 'Kerala', image: koho1 },
    { id: 7, name: 'Amrita Institute of Medical Sciences', address: 'Kochi', contact: '0484-2851234', city: 'Kochi', state: 'Kerala', image: koho2},
    { id: 8, name: 'Ernakulam Medical Centre', address: 'Kochi', contact: '0484-2391222', city: 'Kochi', state: 'Kerala', image: koho3 },
    { id: 9, name: 'Lifecare Hospital', address: 'Kochi', contact: '0484-4051234', city: 'Kochi', state: 'Kerala', image: koho4 },
    { id: 10, name: 'Fortis Hospital', address: 'Kochi', contact: '0484-4068900', city: 'Kochi', state: 'Kerala', image: koho5 },

  // Calicut Hospitals
    { id: 11, name: 'Malabar Institute of Medical Sciences', address: 'Calicut', contact: '0495-2746666', city: 'Calicut', state: 'Kerala', image: calho1 },
    { id: 12, name: 'Govt. Medical College', address: 'Calicut', contact: '0495-2301060', city: 'Calicut', state: 'Kerala', image: calho2},
    { id: 13, name: 'City Hospital', address: 'Calicut', contact: '0495-2701777', city: 'Calicut', state: 'Kerala', image: calho3 },
    { id: 14, name: 'Qasar Al Murjan Hospital', address: 'Calicut', contact: '0495-2742111', city: 'Calicut', state: 'Kerala', image: calho4 },
    { id: 15, name: 'Government District Hospital', address: 'Calicut', contact: '0495-2301480', city: 'Calicut', state: 'Kerala', image: calho5 },

  // Kottayam Hospitals
    { id: 16, name: 'PMC Hospital', address: 'Kottayam', contact: '0481-2568000', city: 'Kottayam', state: 'Kerala', image: '/Kottayam PMC Hospital.jpg' },
    { id: 17, name: 'Vijaya Hospital', address: 'Kottayam', contact: '0481-2565050', city: 'Kottayam', state: 'Kerala', image: '/Kottayam Vijaya Hospital.jpg' },
    { id: 18, name: 'Bharath Hospital', address: 'Kottayam', contact: '0481-2567000', city: 'Kottayam', state: 'Kerala', image: '/Kottayam Bharath Hospita.jpg' },
    { id: 19, name: 'Sree Ayyappa Hospital', address: 'Kottayam', contact: '0481-2580000', city: 'Kottayam', state: 'Kerala', image: '/Kottayam Sree Ayyappa Hospital.jpg' },
    { id: 20, name: 'Kottayam Medical College Hospital', address: 'Kottayam', contact: '0481-2563030', city: 'Kottayam', state: 'Kerala', image: '/Kottayam Kottayam Medical College Hospital.jpg' },

  // Kannur Hospitals
    { id: 21, name: 'Aster MIMS', address: 'Kannur', contact: '0497-2701111', city: 'Kannur', state: 'Kerala', image: '/Kannur Aster MIMS Hospital.jpg' },
    { id: 22, name: 'Govt. District Hospital', address: 'Kannur', contact: '0497-2701100', city: 'Kannur', state: 'Kerala', image: '/Kannur Govt. District Hospital.jpg' },
    { id: 23, name: 'Malabar Hospital', address: 'Kannur', contact: '0497-2702222', city: 'Kannur', state: 'Kerala', image: '/Kannur Malabar Hospital.jpg' },
    { id: 24, name: 'Sankara Hospital', address: 'Kannur', contact: '0497-2703333', city: 'Kannur', state: 'Kerala', image: '/Kannur Sankara Hospital.jpg' },
    { id: 25, name: 'Kairali Hospital', address: 'Kannur', contact: '0497-2704444', city: 'Kannur', state: 'Kerala', image: '/Kannur Kairali Hospital.jpg' },
    ],
    PoliceStations: [
      { id: 1, name: 'Trivandrum Police Station', address: 'MG Road, Trivandrum', contact: '0471-2321234', city: 'Trivandrum', image: 'public/Ker-trivandrum-ps.jpeg' },
      { id: 2, name: 'Kochi City Police Station',  address: 'Marine Drive, Kochi',  contact: '0484-2361234',  city: 'Kochi',  image: 'public/Ker-kochi-ps.jpeg' },
      { id: 3, name: 'Kozhikode Police Station',  address: 'Mananchira, Kozhikode',  contact: '0495-2725678',  city: 'Kozhikode',  image: 'public/Ker-kozhikode-ps.jpg' },
      { id: 4, name: 'Alappuzha Police Station',  address: 'Boat Jetty Road, Alappuzha',  contact: '0477-2251345',  city: 'Alappuzha',  image: 'public/Ker-alappuzha-ps.jpeg' },
      { id: 5, name: 'Thrissur Police Station',  address: 'Swaraj Round, Thrissur',  contact: '0487-2425678',  city: 'Thrissur',  image: 'public/Ker-thrisur-ps.jpg' },
      {id: 6, name: 'Kannur Police Station',address: 'Talap, Kannur',contact: '0497-2701234',city: 'Kannur',image: 'public/Ker-kannur-ps.jpeg' },
      {id: 7, name: 'Palakkad Police Station',address: 'Sulthanpet, Palakkad',contact: '0491-2521234',city: 'Palakkad',image: 'public/Ker-palakkad-ps.jpg' },
      {id: 8, name: 'Kottayam Police Station',address: 'Railway Station Road, Kottayam',contact: '0481-2561234',city: 'Kottayam',image: 'public/Ker-kottayam-ps.jpg' },
    ],
      FireStations: 
      [
          { id: 1, name: 'Trivandrum Fire Station', address: 'Vellayambalam, Trivandrum', contact: '0471-2341234', city: 'Trivandrum', image: 'public/Ker-trivandrum-fs.jpeg' },
          { id: 2, name: 'Ernakulam Fire Station', address: 'M G Road, Ernakulam', contact: '0484-2456789', city: 'Ernakulam', image: 'public/Ker-ernakulam-fs.jpg' },
          { id: 3, name: 'Kozhikode Fire Station', address: 'P T Usha Road, Kozhikode', contact: '0495-2351234', city: 'Kozhikode', image: 'public/Ker-kozhikode-fs.jpeg' },
          { id: 4, name: 'Thrissur Fire Station', address: 'M G Road, Thrissur', contact: '0487-2465678', city: 'Thrissur', image: 'public/Ker-thrissur-fs.jpeg' },
          { id: 5, name: 'Kannur Fire Station', address: 'Station Road, Kannur', contact: '0497-2223456', city: 'Kannur', image: 'public/Ker-kannur-fs.jpg' } 
      ],
      Community: [
        { id: 1, name: 'Kerala Social Service Society', address: 'Thiruvananthapuram', contact: '0471-1234567', city: 'Thiruvananthapuram', image: 'public/Ker-social-ss.jpeg' },
        { id: 2, name: 'Kerala Relief Fund', address: 'Kochi', contact: '0484-2345678', city: 'Kochi', image: 'public/Ker-relief-fund.jpeg' },
        { id: 3, name: 'Trivandrum Community Center', address: 'MG Road, Thiruvananthapuram', contact: '0471-7654321', city: 'Thiruvananthapuram', image: 'public/Trivandrum-cc.jpeg' },
        { id: 4, name: 'Kochi Community Hub', address: 'Marine Drive, Kochi', contact: '0484-8765432', city: 'Kochi', image: 'public/kochi-c-hub.jpeg' }
      ]
    },
    Karnataka :{
      Hospitals:[
        // Bangalore Hospitals
    { id: 1, name: 'Bangalore Medical College and Research Institute', address: 'Bangalore', contact: '080-22215511', city: 'Bangalore', state: 'Karnataka', image: '/Bangalore-medical-hospital.jpeg' },
    { id: 2, name: 'Manipal Hospital', address: 'Bangalore', contact: '080-22228282', city: 'Bangalore', state: 'Karnataka', image: '/Bangalore-manipal-hospital.jpeg' },
    { id: 3, name: 'Fortis Hospital', address: 'Bangalore', contact: '080-66212222', city: 'Bangalore', state: 'Karnataka', image: '/Bangalore-fortis-hospital.jpeg' },
    { id: 4, name: 'Apollo Hospital', address: 'Bangalore', contact: '080-26304646', city: 'Bangalore', state: 'Karnataka', image: '/Bangalore-apollo-hospital.jpg' },
    { id: 5, name: 'St. Johns Medical College Hospital', address: 'Bangalore', contact: '080-22065000', city: 'Bangalore', state: 'Karnataka', image: '/Bangalore-st-hospital.png' },

  // Mysore Hospitals
    { id: 6, name: 'JSS Hospital', address: 'Mysore', contact: '0821-2541490', city: 'Mysore', state: 'Karnataka', image: '/Mysore-jss-hospital.jpg' },
    { id: 7, name: 'K R Hospital', address: 'Mysore', contact: '0821-2412200', city: 'Mysore', state: 'Karnataka', image: '/Mysore-kr-hospital.jpeg' },
    { id: 8, name: 'Apollo BGS Hospital', address: 'Mysore', contact: '0821-2428444', city: 'Mysore', state: 'Karnataka', image: '/Mysore-apollo=hospital.jpg' },
    { id: 9, name: 'Karnataka Institute of Medical Sciences', address: 'Mysore', contact: '0821-2512805', city: 'Mysore', state: 'Karnataka', image: '/Mysore-kims-hospital.jpeg' },
    { id: 10, name: 'Vivekananda Hospital', address: 'Mysore', contact: '0821-2411555', city: 'Mysore', state: 'Karnataka', image: '/Mysore-vivekananda-hospital.jpg' },

  // Hubli Hospitals
    { id: 11, name: 'KLE Hospital', address: 'Hubli', contact: '0836-2222777', city: 'Hubli', state: 'Karnataka', image: '/Hubli-kle-hospital.jpg' },
    { id: 12, name: 'Dr. Reddy’s Hospital', address: 'Hubli', contact: '0836-2376868', city: 'Hubli', state: 'Karnataka', image: '/Hubli-drreddy-hospital.jpg' },
    { id: 13, name: 'KIMS Hubli', address: 'Hubli', contact: '0836-2212222', city: 'Hubli', state: 'Karnataka', image: '/Hubli-kims-hospital.jpg' },
    { id: 14, name: 'BGS Global Hospital', address: 'Hubli', contact: '0836-2223444', city: 'Hubli', state: 'Karnataka', image: '/Hubli=bgs-hospital.jpeg' },
    { id: 15, name: 'Sushrutha Hospital', address: 'Hubli', contact: '0836-2377777', city: 'Hubli', state: 'Karnataka', image: '/Hubli-sushrutha-hospital.jpeg' },

  // Mangalore Hospitals
    { id: 16, name: 'Kasturba Medical College Hospital', address: 'Mangalore', contact: '0824-2445000', city: 'Mangalore', state: 'Karnataka', image: '/Mangalore-kasturba-hospital.jpeg' },
    { id: 17, name: 'Father Muller Medical College Hospital', address: 'Mangalore', contact: '0824-2234000', city: 'Mangalore', state: 'Karnataka', image: '/Mangalore-father-hospital.jpeg' },
    { id: 18, name: 'AJ Hospital and Research Centre', address: 'Mangalore', contact: '0824-2233333', city: 'Mangalore', state: 'Karnataka', image: '/Manglore-aj-hospital.jpeg' },
    { id: 19, name: 'Narayana Health City', address: 'Mangalore', contact: '0824-2472222', city: 'Mangalore', state: 'Karnataka', image: '/Mangalore-narayana-hospital.jpg' },
    { id: 20, name: 'Shanthivijaya Hospital', address: 'Mangalore', contact: '0824-2414500', city: 'Mangalore', state: 'Karnataka', image: '/Mangalore-shanti-hospital.jpeg' },

  // Belgaum Hospitals
    { id: 21, name: 'KLE Dr. Prabhakar Kore Hospital', address: 'Belgaum', contact: '0831-2403100', city: 'Belgaum', state: 'Karnataka', image: '/Belgaum-kle-hospital.png' },
    { id: 22, name: 'Belgaum Institute of Medical Sciences', address: 'Belgaum', contact: '0831-2401472', city: 'Belgaum', state: 'Karnataka', image: '/Belgaum-hospital.jpg' },
    { id: 23, name: 'Vivekanand Hospital', address: 'Belgaum', contact: '0831-2400755', city: 'Belgaum', state: 'Karnataka', image: '/Belgaum-vivekananda-hospital.jpg' },
    { id: 24, name: 'Government Hospital', address: 'Belgaum', contact: '0831-2401234', city: 'Belgaum', state: 'Karnataka', image: '/Belgaum-government-hospital.jpeg' },
    { id: 25, name: 'Shri Shivaji Hospital', address: 'Belgaum', contact: '0831-2400987', city: 'Belgaum', state: 'Karnataka', image: '/Belgaum-shri-hospital.jpeg' },
    ],
    PoliceStations: [
      { id: 1, name: 'MG Road Police Station', address: 'MG Road, Bengaluru', contact: '080-22942123', city: 'Bengaluru', image: 'public/Kar-mg-ps.jpg' },
      { id: 2, name: 'Jayanagar Police Station', address: '4th Block, Jayanagar, Bengaluru', contact: '080-26547890', city: 'Bengaluru', image: 'public/Kar-jayanagar-ps.jpeg' },
      { id: 3, name: 'Indiranagar Police Station', address: 'Indiranagar, Bengaluru', contact: '080-25212345', city: 'Bengaluru', image: 'public/Kar-indiranagar-ps.jpeg' },
      { id: 4, name: 'Mysuru City Police Station', address: 'Irwin Road, Mysuru', contact: '0821-2421234', city: 'Mysuru', image: 'public/kar-mysuru-ps.jpeg' },
      { id: 5, name: 'Mangalore Police Station', address: 'Balmatta Road, Mangalore', contact: '0824-2445678', city: 'Mangalore', image: 'public/Kar-maglore-ps.jpeg' },
      {id: 6,name: 'Hubli City Police Station',address: 'Lamington Road, Hubli',contact: '0836-2441234',city: 'Hubli',image: 'public/Kar-hulbi=ps.jpeg' },
      {id: 7,name: 'Belagavi Police Station',address: 'College Road, Belagavi',contact: '0831-2435678',city: 'Belagavi',image: 'public/Kar-belgavi-ps.jpeg' },
      {id: 8,name: 'Davangere Police Station',address: 'MCC B Block, Davangere',contact: '0819-2231234',city: 'Davangere',image: 'public/Kar-devangere-ps.jpeg' },
    ],
      FireStations:
      [
          { id: 1, name: 'Bangalore Fire Station', address: 'Richmond Circle, Bangalore', contact: '080-23456789', city: 'Bangalore', image: 'public/Kar-bangalore-fs.jpg' },
          { id: 2, name: 'Mysore Fire Station', address: 'J L Puram, Mysore', contact: '0821-2456789', city: 'Mysore', image: 'public/Kar-mysore-fs.jpg' },
          { id: 3, name: 'Mangalore Fire Station', address: 'Hampankatta, Mangalore', contact: '0824-2341234', city: 'Mangalore', image: 'public/Kar-manglore-fs.JPG' },
          { id: 4, name: 'Hubli Fire Station', address: 'Lamington Road, Hubli', contact: '0836-2356789', city: 'Hubli', image: 'public/Kar-hulbi-fs.jpeg' },
          { id: 5, name: 'Belgaum Fire Station', address: 'College Road, Belgaum', contact: '0831-2451234', city: 'Belgaum', image: 'public/Kar-belgum-fs.png' } 
      ],
      Community: [
        { id: 1, name: 'Bangalore Development Trust', address: 'Bangalore', contact: '080-1234567', city: 'Bangalore', image: 'public/Bangalore-dev-trust.jpeg' },
        { id: 2, name: 'Karnataka Child Welfare', address: 'Mysore', contact: '0821-2345678', city: 'Mysore', image: 'public/Kar-child-welfare.jpeg' },
        { id: 3, name: 'Bangalore Community Center', address: 'Indiranagar, Bangalore', contact: '080-7654321', city: 'Bangalore', image: 'public/Bangalore-community-center.jpg' },
        { id: 4, name: 'Mysore Community Hub', address: 'Krishna Raja Sagara, Mysore', contact: '0821-8765432', city: 'Mysore', image: 'public/Kar-mysore-fs.jpg' }
      ]
    },
    Tamilnadu:{
      Hospitals:[
         // Chennai Hospitals
    { id: 1, name: 'Apollo Hospital', address: 'Greams Lane, Chennai', contact: '044-28291155', city: 'Chennai', state: 'Tamilnadu', image: './Chennai Apollo Hospital.jpg' },
    { id: 2, name: 'Fortis Malar Hospital', address: 'Adyar, Chennai', contact: '044-2498 9999', city: 'Chennai', state: 'Tamilnadu', image: '/Chennai Fortis Malar Hospital.jpg' },
    { id: 3, name: 'Madras Medical Mission Hospital', address: 'Kotturpuram, Chennai', contact: '044-2491 5353', city: 'Chennai', state: 'Tamilnadu', image: '/Chennai Madras Medical Mission Hospital.jpg' },
    { id: 4, name: 'MIOT International', address: 'Manapakkam, Chennai', contact: '044-4211 9999', city: 'Chennai', state: 'Tamilnadu', image: '/Chennai MIOT International.jpg' },
    { id: 5, name: 'Government General Hospital', address: 'Chennai', contact: '044-2530 3155', city: 'Chennai', state: 'Tamilnadu', image: '/Chennai Government General Hospital.jpg' },

  // Coimbatore Hospitals
    { id: 6, name: 'Ganga Hospital', address: 'Coimbatore', contact: '0422-2482888', city: 'Coimbatore', state: 'Tamilnadu', image: '/coimbatore Ganga Hospital.jpg' },
    { id: 7, name: 'Kovai Medical Center and Hospital', address: 'Coimbatore', contact: '0422-2455000', city: 'Coimbatore', state: 'Tamilnadu', image: '/coimbatore Kovai Medical Center and Hospital.jpg' },
    { id: 8, name: 'Sri Ramakrishna Hospital', address: 'Coimbatore', contact: '0422-2460456', city: 'Coimbatore', state: 'Tamilnadu', image: '/coimbatore Sri Ramakrihna Hospital.jpg' },
    { id: 9, name: 'Government Hospital', address: 'Coimbatore', contact: '0422-2345890', city: 'Coimbatore', state: 'Tamilnadu', image: '/coimbatore Government Hospital.jpg' },
    { id: 10, name: 'PSG Hospitals', address: 'Coimbatore', contact: '0422-2571940', city: 'Coimbatore', state: 'Tamilnadu', image: '/coimbatore PSG Hospitals.jpg' },

  // Madurai Hospitals
    { id: 11, name: 'Meenakshi Mission Hospital', address: 'Madurai', contact: '0452-2527272', city: 'Madurai', state: 'Tamilnadu', image: '/madurai Meenakshi Mission Holbital.jpg' },
    { id: 12, name: 'Government Rajaji Hospital', address: 'Madurai', contact: '0452-2530050', city: 'Madurai', state: 'Tamilnadu', image: '/madurai Government Rajaji Hospital.jpg' },
    { id: 13, name: 'Apollo Hospitals', address: 'Madurai', contact: '0452-4301301', city: 'Madurai', state: 'Tamilnadu', image: '/Madhuri Apollo hospital.jpg' },
    { id: 14, name: 'Sri Saran Medical Centre', address: 'Madurai', contact: '0452-4372838', city: 'Madurai', state: 'Tamilnadu', image: '/Madhuri Sri Saran Medical Centre.jpg' },
    { id: 15, name: 'Thangam Hospital', address: 'Madurai', contact: '0452-2622000', city: 'Madurai', state: 'Tamilnadu', image: '/Madhuri Thangam Hospital.jpg' },

  // Tiruchirappalli Hospitals
    { id: 16, name: 'Mahesh Hospital', address: 'Tiruchirappalli', contact: '0431-2404666', city: 'Tiruchirappalli', state: 'Tamilnadu', image: '/Tiruchirappalli Mahesh Hospital.jpg' },
    { id: 17, name: 'Tiruchirappalli Medical College Hospital', address: 'Tiruchirappalli', contact: '0431-2402222', city: 'Tiruchirappalli', state: 'Tamilnadu', image: '/Tiruchirappalli - Hospitals.jpg' },
    { id: 18, name: 'Apollo Hospitals', address: 'Tiruchirappalli', contact: '0431-2431000', city: 'Tiruchirappalli', state: 'Tamilnadu', image: '/Tiruchirappalli Apollo Hospitals.jpg' },
    { id: 19, name: 'Government Hospital', address: 'Tiruchirappalli', contact: '0431-2401234', city: 'Tiruchirappalli', state: 'Tamilnadu', image: '/Tiruchirappalli Government Hospital.jpg' },
    { id: 20, name: 'Nandha Hospital', address: 'Tiruchirappalli', contact: '0431-2400456', city: 'Tiruchirappalli', state: 'Tamilnadu', image: '/Tiruchirappalli Nandha Hospital.jpg' },

  // Salem Hospitals
    { id: 21, name: 'Vijay Hospital', address: 'Salem', contact: '0427-2431797', city: 'Salem', state: 'Tamilnadu', image: '/Salem-vijaya-hospital.jpg' },
    { id: 22, name: 'Government Hospital', address: 'Salem', contact: '0427-2411816', city: 'Salem', state: 'Tamilnadu', image: '/Salem-government-hospital.jpg' },
    { id: 23, name: 'Salem Kidney Centre', address: 'Salem', contact: '0427-2434201', city: 'Salem', state: 'Tamilnadu', image: '/Salem-salem-hospital.jpg' },
    { id: 24, name: 'Malar Hospital', address: 'Salem', contact: '0427-2407777', city: 'Salem', state: 'Tamilnadu', image: '/Salem-malar-hospital.jpeg' },
    { id: 25, name: 'Sankara Hospital', address: 'Salem', contact: '0427-2437400', city: 'Salem', state: 'Tamilnadu', image: '/Salem-sankara-hospital.jpg' },
    ],
    PoliceStations: [
      {id: 1,name: 'Teynampet Police Station',address: 'Anna Salai, Chennai',contact: '044-23451234',city: 'Chennai',image: 'public/Tam-teynampet-ps.jpeg' },
      {id: 2,name: 'Adyar Police Station',address: 'Lattice Bridge Road, Chennai',contact: '044-24567890',city: 'Chennai',image: 'public/Tam-adyar-ps.jpeg' },
      {id: 3,name: 'Coimbatore City Police Station',address: 'Race Course Road, Coimbatore',contact: '0422-2345678',city: 'Coimbatore',image: 'public/Tam-coimbatore-ps.jpeg' },
      {id: 4,name: 'Madurai South Police Station',address: 'South Masi Street, Madurai',contact: '0452-2351234',city: 'Madurai',image: 'public/Tam-madhurai-ps.jpeg' },
      {id: 5,name: 'Salem Town Police Station',address: 'Fort Main Road, Salem',contact: '0427-2223456',city: 'Salem',image: 'public/Tam-salem-ps.jpeg' },
      {id: 6,name: 'Trichy Town Police Station',address: 'Chathiram Bus Stand, Trichy',contact: '0431-2461234',city: 'Trichy',image: 'public/Tam-trichy-ps.jpg' },
      {id: 7,name: 'Tirunelveli Police Station',address: 'Junction, Tirunelveli',contact: '0462-2565678',city: 'Tirunelveli',image: 'public/Tam-tirunavelli-ps.jpeg' },
      {id: 8,name: 'Vellore Town Police Station',address: 'Officer\'s Line, Vellore',contact: '0416-2226789',city: 'Vellore',image: 'public/Tam-vellore-ps.jpeg' },
    ],
      FireStations:
       [
          { id: 1, name: 'Teynampet Fire Station', address: 'Anna Salai, Chennai', contact: '044-23451234', city: 'Chennai', image: 'public/Tam-Teynampet-fs.jpeg' },
          { id: 2, name: 'Adyar Fire Station', address: 'Lattice Bridge Road, Chennai', contact: '044-24567890', city: 'Chennai', image: 'public/Tam-adyar-fs.jpg' },
          { id: 3, name: 'Coimbatore City Fire Station', address: 'Race Course Road, Coimbatore', contact: '0422-2345678', city: 'Coimbatore', image: 'public/Tam-coimbatore-fs.jpeg' },
          { id: 4, name: 'Madurai South Fire Station', address: 'South Masi Street, Madurai', contact: '0452-2351234', city: 'Madurai', image: 'public/Tam-madurai-fs.jpeg' },
          { id: 5, name: 'Salem Town Fire Station', address: 'Fort Main Road, Salem', contact: '0427-2223456', city: 'Salem', image: 'public/Tam-salem-fs.jpeg' }
        ],
        Community: [
          { id: 1, name: 'Chennai  Volunteer Group', address: 'Chennai', contact: '044-1234567', city: 'Chennai', image: 'public/chennai-vol.jpeg' },
          { id: 2, name: 'Tamil Nadu Relief Society', address: 'Madurai', contact: '0452-2345678', city: 'Madurai', image: 'public/Tam-relief-society.jpg' },
          { id: 3, name: 'Chennai Community Center', address: 'Anna Nagar, Chennai', contact: '044-7654321', city: 'Chennai', image: 'public/Chennai-community-center.jpeg' },
          { id: 5, name: 'Madurai Community Hub', address: 'Kamarajar Salai, Madurai', contact: '0452-8765432', city: 'Madurai', image: 'public/madurai-community-hub.jpg' }
        ]
    }
  };

  const handleStateClick = (state) => {
    setSelectedState(state);
    setSelectedOption(null); 
    setDetails(null); 
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setDetails(stateData[selectedState][option]);
  };

  return (
    <div className="button-container-p">
      <h2 className='h2'> Emergency Contacts</h2>
      <div className="button-group-p">
        <button className="button-p" onClick={() => handleStateClick('Andhrapradesh')}>Andhrapradesh</button>
        <button className="button-p" onClick={() => handleStateClick('Telangana')}>Telangana</button>
        <button className="button-p" onClick={() => handleStateClick('Kerela')}>Kerela</button>
        <button className="button-p" onClick={() => handleStateClick('Karnataka')}>Karnataka</button>
        <button className="button-p" onClick={() => handleStateClick('Tamilnadu')}>Tamilnadu</button>
      </div>
      
      {selectedState && (
        <div className="options-container-p">
          <h3 className='h3'>{selectedState} Options:</h3>
          {Object.keys(stateData[selectedState]).map((option, index) => (
            <li key={index} className="option-item-p">
              <button className="option-p" onClick={() => handleOptionClick(option)}>
                {option}
              </button>
            </li>
          ))}
        </div>
      )}
      {selectedOption && details && selectedOption === "Hospitals" && (
        <div className="details-container-p">
          {details.map((hospital) => (
            <li key={hospital.id} className="hospital-item-p">
              <img src={hospital.image} className="hospital-image-p" />
              <div>
                <h5
                >{hospital.name}</h5>
                <p>{hospital.address}</p>
                <p>{hospital.contact}</p>
              </div>
            </li>
          ))}
          </div>
      )}
      {selectedOption && details && selectedOption === "PoliceStations" && (
        <div className="details-container-p police-station-container-p">
          {details.map((station) => (
            <li key={station.id} className="police-card-p">
              <img src={station.image} alt={station.name} className="police-image-p" />
              <div>
                <h5>{station.name}</h5>
                <p>{station.address}</p>
                <p>{station.contact}</p>
              </div>
            </li>
          ))}
        </div>
      )}
{selectedOption && details && selectedOption === "FireStations" && (
  <div className="details-container-p fire-station-container-p">
    {details.map((station) => (
      <li key={station.id} className="fire-card-p">
        <img src={station.image} alt={station.name} className="fire-image-p" />
        <div>
          <h5>{station.name}</h5>
          <p>{station.address}</p>
          <p>{station.contact}</p>
        </div>
      </li>
    ))}
  </div>
)}
{selectedOption && details && selectedOption === "Community-p" && (
        <div className="details-container-p community-container-p">
          {details.map((item) => (
            <li key={item.id} className="community-card-p">
              <img src={item.image} alt={item.name} className="community-image-p" />
              <div>
                <h5>{item.name}</h5>
                <p>{item.address}</p>
                <p>{item.contact}</p>
              </div>
            </li>
          ))}
        </div>
      )}
    </div>
  );
};

export default ButtonComponent;