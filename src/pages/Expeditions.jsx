import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Header from '../components/Header';

const Expeditions = ({ setJoinedExpeditions }) => {
  const [expeditions, setExpeditions] = useState([
    {
      id: 1,
      title: 'Expedition to the Sharr monuntains',
      creator: 'John Doe',
      date: '2024-12-25', 
      participants: 1,
      maxParticipants: 6,
      image: 'https://skyhookcontentful.imgix.net/6MPvB1nbHtL2AQbxMi2D7y/af0829fe9fc4733a754e15705d99d33d/pixabay-pehrlich-himalayas.jpg?auto=compress%2Cformat%2Cenhance%2Credeye&crop=faces%2Ccenter&fit=crop&ar=1%3A1&w=576px&ixlib=react-9.7.0',
    },
    {
      id: 2,
      title: 'Fishing Expedition in Batllave',
      creator: 'Jane Smith',
      date: '2024-12-25',
      participants: 1,
      maxParticipants: 5,
      image: 'https://cdn.shopify.com/s/files/1/0060/3770/0678/t/19/assets/d8eeeec830b3--Main-image-1669px-x-624px.jpg?v=1720567116',
    },
    {
      id: 3,
      title: 'Expedition to the Gadime Cave',
      creator: 'Jane Smith',
      date: '2024-12-30',
      participants: 1,
      maxParticipants: 5,
      image: 'https://images.ctfassets.net/tftu3vbfu92u/13BiQrm2mVSr0SDkVNSeDi/4a67ad631485736ee3eb8fe799a99f70/cave-feature.jpg?q=75&&w=1024&fm=webp',
    },
    {
      id: 4,
      title: 'Cycling in Germia Park Expedition',
      creator: 'Some Name',
      date: '2024-02-02',
      participants: 1,
      maxParticipants: 5,
      image: 'https://www.les3vallees.com/media/cache/hero_single/20240627-cyclingtrophy-figurant-ete-coldelaloze-meribel-cc-lailafranchini-expinf-1920x1080-895.jpg',
    },
    {
      id: 5,
      title: 'Skiing expedition in Brezovica',
      creator: 'Jane Smith',
      date: '2025-02-26',
      participants: 1,
      maxParticipants: 15,
      image: 'https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_640,q_60,w_1600/v1/clients/montroseco/MOBT_winter_002_725c1208-7304-4fcd-bbe2-a33702faab5e.jpg'
    },
    {
      id: 6,
      title: 'Gryka e Rugoves Expedition',
      creator: 'Ruzhdi Halimi',
      date: '2025-03-15',
      participants: 1,
      maxParticipants: 5,
      image: 'https://www.visitdalarna.se/sites/cb_dalarna/files/styles/32_15_1920x900/public/yxing%C3%A5fallet.jpg.webp?itok=Mwaodgi2',
    },
  ]);

  const handleJoin = (expedition) => {
    const alreadyJoined = JSON.parse(localStorage.getItem('joinedExpeditions') || '[]').some(
      (exp) => exp.date === expedition.date
    );

    if (alreadyJoined) {
      toast.error('You cannot join two expeditions on the same date!', { position: "bottom-right" });
      return;
    }

    if (expedition.participants >= expedition.maxParticipants) {
      toast.error('This expedition is full!', { position: "bottom-right" });
      return;
    }

    setExpeditions((prev) =>
      prev.map((exp) =>
        exp.id === expedition.id
          ? { ...exp, participants: exp.participants + 1 }
          : exp
      )
    );

    const updatedJoinedExpeditions = [
      ...JSON.parse(localStorage.getItem('joinedExpeditions') || '[]'),
      expedition,
    ];
    localStorage.setItem('joinedExpeditions', JSON.stringify(updatedJoinedExpeditions));

    setJoinedExpeditions && setJoinedExpeditions(updatedJoinedExpeditions);

    toast.success('You have joined the expedition!', { position: "bottom-right" });
  };

  return (
    <div>
      <Header />
      <h2 className="text-xl text-center p-1 font-semibold mt-16 bg-white bg-gradient-to-r from-blue-500 to-green-500 text-white">Ready to start your next journey. Hop on a new expedition</h2>
      <div className="p-4 mt-4">
        {expeditions.map((expedition) => (
          <div
            key={expedition.id}
            className="flex justify-between items-center bg-cover bg-center p-4 rounded-lg shadow-md mb-4 "
            style={{ backgroundImage: `url(${expedition.image})` }}
          >
            <div className="text-white">
              <h2 className="text-xl font-bold">{expedition.title}</h2>
              <p>{expedition.creator}</p>
              <p>{expedition.date}</p>
              <p>{`${expedition.participants} / ${expedition.maxParticipants} people joined`}</p>
            </div>
            <button
              onClick={() => handleJoin(expedition)}
              className="bg-blue-500 text-white font-bold py-4 px-8 rounded-lg hover:bg-blue-600"
            >
              Join
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Expeditions;
