import { ListFilter } from 'lucide-react';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

function HomePage() {
  const [roomId, setRoomId] = useState('');
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const createNewRoom = (e) => {
    e.preventDefault();
    const id = uuidv4();
    setRoomId(id);
    toast.success('Room created successfully');
  };

  const joinRoom = (e) => {
    e.preventDefault(); 
    if (!roomId || !username) {
      toast.error('Please fill all the fields');
      return;
    }
    // Redirect to the editor page
    navigate(`/editor/${roomId}`, { state: { username } });
  };

  const handleInputEnter = (e) => {
    if (e.code === 'Enter') {
      e.preventDefault(); // Prevent form submission
      joinRoom(e);
    }
  };

  return (
    <div className="bg-black min-h-screen flex justify-center items-center">
      <form className="bg-gray-800 p-8 rounded-lg shadow-lg space-y-6 w-full max-w-md">
        <div className="flex items-center justify-center space-x-3">
          <ListFilter className="text-blue-500 w-8 h-8" />
          <h1 className="text-3xl font-bold text-white">Sincronía</h1>
        </div>
        <p className="text-gray-400 text-center">
          Paste your invitation Room ID and enter your username to Join.
        </p>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Room ID"
            className="w-full px-4 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setRoomId(e.target.value)}
            value={roomId}
            onKeyUp={handleInputEnter}
          />
          <input
            type="text"
            placeholder="Username"
            className="w-full px-4 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            onKeyUp={handleInputEnter}
          />
        </div>
        <button
          type="button" // Ensure type is "button" to prevent form submission
          onClick={joinRoom}
          className="w-full bg-blue-600 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
        >
          Join Room
        </button>

        <div className="text-center text-gray-400">
          <span>
            If you don't have an invite
            <button
              type="button" // Ensure type is "button" to prevent form submission
              onClick={createNewRoom}
              className="mx-3 font-2xl text-white hover:text-blue-500"
            >
              create one!
            </button>
          </span>
        </div>
      </form>
    </div>
  );
}

export default HomePage;
