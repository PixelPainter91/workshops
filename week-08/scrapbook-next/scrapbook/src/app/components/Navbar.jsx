"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [chatOpen, setChatOpen] = useState(false);
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    if (!message.trim()) return;
    console.log("Message sent:", message);
    setMessage("");
    setChatOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#61bd81] px-4 py-2 flex items-center justify-between">
        
        <h2 className="font-bold text-black text-xl">Scrapbook</h2>

        
        <ul className="flex items-center gap-4 text-white">
          <li>
            <Link href="/home" className="px-3 py-2 hover:bg-gray-700 rounded">
              Home
            </Link>
          </li>

          <li>
            <Link href="/about" className="px-3 py-2 hover:bg-gray-700 rounded">
              About
            </Link>
          </li>

          <li>
            <Link href="/mypage" className="px-3 py-2 hover:bg-gray-700 rounded">
              My Page
            </Link>
          </li>

          <li className="relative group">
            <button className="px-3 py-2 hover:bg-gray-700 rounded">
              My Profile
            </button>

            <ul className="absolute left-0 mt-2 hidden group-hover:block bg-gray-800 rounded shadow-lg min-w-[150px]">
              <li>
                <button
                  onClick={() => setChatOpen(true)}
                  className="block w-full text-left px-4 py-2 text-white hover:bg-gray-700"
                >
                  Chat
                </button>
              </li>
              <li>
                <a className="block px-4 py-2 text-white hover:bg-gray-700">
                  2
                </a>
              </li>
              <li>
                <a className="block px-4 py-2 text-white hover:bg-gray-700">
                  3
                </a>
              </li>
              <li>
                <a className="block px-4 py-2 text-white hover:bg-gray-700">
                  Settings
                </a>
              </li>
            </ul>
          </li>

         
          <li>
            <Image
              src="/assets/profileavatar.png"
              alt="Profile avatar"
              width={40}
              height={40}
              className="rounded-full border-2 border-white cursor-pointer"
            />
          </li>
        </ul>
      </nav>

     
      {chatOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[60] flex items-center justify-center"
          onClick={() => setChatOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white w-[90%] max-w-md rounded-xl p-5 shadow-xl"
          >
            <h3 className="text-lg font-semibold mb-3">Chat</h3>

            <textarea
              className="w-full border rounded-lg p-3 resize-none"
              rows={4}
              placeholder="Mock Social Messaging box..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <div className="flex justify-end gap-3 mt-4">
              <button
                className="px-4 py-2 bg-gray-400 text-white rounded"
                onClick={() => setChatOpen(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-[#61bd81] text-white rounded hover:opacity-90"
                onClick={sendMessage}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
