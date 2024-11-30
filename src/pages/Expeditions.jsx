import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Header from '../components/Header';

const Expeditions = ({ setJoinedExpeditions }) => {
  const [expeditions, setExpeditions] = useState([
    {
      id: 1,
      title: 'Expedition to the Alps',
      creator: 'John Doe',
      date: '2024-12-25',
      participants: 1,
      maxParticipants: 10,
      image: 'https://skyhookcontentful.imgix.net/6MPvB1nbHtL2AQbxMi2D7y/af0829fe9fc4733a754e15705d99d33d/pixabay-pehrlich-himalayas.jpg?auto=compress%2Cformat%2Cenhance%2Credeye&crop=faces%2Ccenter&fit=crop&ar=1%3A1&w=576px&ixlib=react-9.7.0',
    },
    {
      id: 2,
      title: 'Desert Adventure',
      creator: 'Jane Smith',
      date: '2024-12-25',
      participants: 2,
      maxParticipants: 5,
      image: 'https://via.placeholder.com/600x200',
    },
  ]);

  const handleJoin = (expedition) => {
    const alreadyJoined = JSON.parse(localStorage.getItem('joinedExpeditions') || '[]').some(
      (exp) => exp.date === expedition.date
    );

    if (alreadyJoined) {
      toast.error('You cannot join two expeditions on the same date!');
      return;
    }

    if (expedition.participants >= expedition.maxParticipants) {
      toast.error('This expedition is full!');
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

    toast.success('You have joined the expedition!');
  };

  return (
    <div>
      <Header />
      <div className="p-4 mt-20">
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
