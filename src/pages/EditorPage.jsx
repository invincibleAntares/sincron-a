import { ListFilter } from 'lucide-react';
import React from 'react';

function EditorPage() {
  return (
    <div className="bg-gray-900 h-screen text-white flex">
      <div className="shadow-lg bg-gray-800 p-4 w-60 flex flex-col items-center">
        <div className="flex items-center space-x-2 mb-2">
          <ListFilter className="text-green-400 text-xl" />
          <h2 className="text-white font-bold text-lg">Sincronía</h2>
        </div>
        <div className="w-full border-t border-white my-3"></div> {/* White line */}
        <div className="text-gray-400 text-sm">
          <h3 className="text-green-500 font-semibold">Connected</h3>
        </div>
      </div>
      <div className="flex-grow p-6 bg-gray-700 ml-1 shadow-md">
        <h1 className="text-lg font-bold mb-4">Editor</h1>
      </div>
    </div>
  );
}

export default EditorPage;
