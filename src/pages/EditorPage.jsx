import { ListFilter } from 'lucide-react';
import React, { useState } from 'react';
import Avatar from 'react-avatar';
import Editor from '../components/Editor';
import CodeEditor from '../components/Editor';

function EditorPage() {
  const [clients, setClients] = useState([
    { socketId: 1, username: 'Hello' },
    { socketId: 2, username: 'Bro' },
  ]);

  return (
    <div className="bg-gray-900 h-screen text-white flex">
      {/* Sidebar */}
      <div className="shadow-lg bg-gray-800 p-4 w-60 flex flex-col items-center relative">
        <div className="flex items-center space-x-2 mb-2">
          <ListFilter className="text-green-400 text-xl" />
          <h2 className="text-white font-bold text-lg">Sincronía</h2>
        </div>
        <div className="w-full border-t border-white my-3"></div> {/* White line */}
        <div className="text-gray-400 text-sm w-full flex-grow">
          <h3 className="text-green-500 font-semibold mb-3">Connected Users</h3>
          <ul className="space-y-3">
            {clients.map((client) => (
              <li
                key={client.socketId}
                className="flex items-center space-x-3 p-2 bg-gray-700 rounded-lg shadow-md"
              >
                 {/* Avatar component */}
                <Avatar
                  name={client.username}
                  size="40"
                  round={true}
                  color="#4CAF50"
                  fgColor="#fff"
                  className="shadow-lg"
                />
                <span className="text-white font-medium">{client.username}</span>
              </li>
            ))}
          </ul>
        </div>
        {/* Fixed Buttons */}
        <div className="w-full absolute bottom-0 left-0 px-4 pb-4 bg-gray-800">
          <button className="w-full bg-blue-600 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded-md transition duration-200 mb-2">
            COPY ROOM ID
          </button>
          <button className="w-full bg-green-600 hover:bg-red-800 text-white font-semibold py-2 px-4 rounded-md transition duration-200">
            Leave Now
          </button>
        </div>
      </div>
      {/* Main Content */}
      <div className="flex-grow p-6 bg-gray-700 ml-1 shadow-md">
        <CodeEditor/>
      </div>
    </div>
  );
}

export default EditorPage;
