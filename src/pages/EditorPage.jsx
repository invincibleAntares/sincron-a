import { ListFilter } from 'lucide-react';
import React, { useState } from 'react';
import Avatar from 'react-avatar'; // Import react-avatar

function EditorPage() {
  const [clients, setClients] = useState([
    { socketId: 1, username: 'Hello' },
    { socketId: 2, username: 'Bro' },
  ]);

  return (
    <div className="bg-gray-900 h-screen text-white flex">
      {/* Sidebar */}
      <div className="shadow-lg bg-gray-800 p-4 w-60 flex flex-col items-center">
        <div className="flex items-center space-x-2 mb-2">
          <ListFilter className="text-green-400 text-xl" />
          <h2 className="text-white font-bold text-lg">Sincronía</h2>
        </div>
        <div className="w-full border-t border-white my-3"></div> {/* White line */}
        <div className="text-gray-400 text-sm w-full">
          <h3 className="text-green-500 font-semibold mb-3">Connected Users</h3>
          <ul className="space-y-3">
            {clients.map((client) => (
              <li
                key={client.socketId}
                className="flex items-center space-x-3 p-2 bg-gray-700 rounded-lg shadow-md"
              >
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
      </div>
      {/* Main Content */}
      <div className="flex-grow p-6 bg-gray-700 ml-1 shadow-md">
        <h1 className="text-lg font-bold mb-4">Editor</h1>
      </div>
    </div>
  );
}

export default EditorPage;
