import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import NoteCard from "../../components/Cards/NoteCard";
import { MdAdd } from "react-icons/md";
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-4 mt-">
        <NoteCard 
          title="Meeting on 7th July"
          date="7th July 2022"
          content="Meeting on 7th July"
          tags="Meeting"
          isPinned={true}
          onEdit={() => {}}
          ondeleted={() => {}}
          onPinNoted={() => {}}
        />
        </div>
      </div>

      <button className="w-16 h-14 flex items-center justify-center rounded-2xl bg-primary hover:bg-blue-600 absolute right-10 bottom-10">
        <MdAdd className="text-{32px} text-white"/>
      </button>
    </>
  );
};

export default Home;
