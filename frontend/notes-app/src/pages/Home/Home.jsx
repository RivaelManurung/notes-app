import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import NoteCard from "../../components/Cards/NoteCard";
import { MdAdd } from "react-icons/md";
import AddEditNotes from "./AddEditNotes";
import Modal from "react-modal";
const Home = () => {
  const [OpenAddEditModal, setOpenAddEditModal] = React.useState({
    isShown: false,
    type: "add",
    data: null,
  });

  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-4 mt-3">
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

      <button
        className="w-16 h-14 flex items-center justify-center rounded-2xl bg-primary hover:bg-blue-600 absolute right-10 bottom-10"
        onClick={() => {
          setOpenAddEditModal({
            isShown: true,
            type: "add",
            data: null,
          });
        }}
      >
        <MdAdd className="text-{32px} text-white" />
      </button>
      <Modal
        isOpen={OpenAddEditModal.isShown}
        onRequestClose={() => {}}
        style={{
          overlay: {
            backgroundColor: "rgba(0,0,0,0.2)",
          },
        }}
        contentLabel="Example Modal"
        className="w-[40%] max-h-3/4 bg-white rounded-md mx-auto mt-14 p-15 overflow-auto"
      >
        <AddEditNotes
        type={OpenAddEditModal.type}
        noteData = {OpenAddEditModal.data}
          onClose={() =>
            setOpenAddEditModal({ isShown: false, type: "add", data: null })
          }
        />
      </Modal>
    </>
  );
};

export default Home;
