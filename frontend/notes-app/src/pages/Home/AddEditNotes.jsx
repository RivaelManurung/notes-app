import React, { useState } from "react";
import TagInput from "../../components/Input/TagInput";
import { MdClose } from "react-icons/md";

const AddEditNotes = ({ onClose }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState([]);
  const [error, setError] = useState(null);

  const addNewNote = async() => {};
  const editNoted = async() => {};
  const handleAddNote = () => {
    if (!title) {
      setError("Please enter a title");
      return;
    }
    if (!content) {
      setError("Please enter content");
      return;
    }
    setError(""); // Clear error if all validations pass
    
    if (type === "edit"){
        editNoted();
    }else{
        addNewNote();
    }
  };

  return (
    <div className="px-5 py-5">
      <div className="relative">
        <button
          className="flex rounded-full w-10 h-10 justify-center items-center absolute -top-3 -right-3 hover:bg-slate-500"
          onClick={onClose}
        >
          <MdClose className="text-xl text-slate-400" />
        </button>
      </div>

      <div className="flex flex-col gap-2">
        <label className="input-table">TITLE</label>
        <input
          type="text"
          className="text-3xl text-slate-950 outline-none"
          placeholder="Go To Gym At 5"
          value={title}
          onChange={(e) => setTitle(e.target.value)} // Corrected target access
        />
      </div>

      <div className="flex flex-col gap-2 mt-2">
        <label className="input-table">CONTENT</label>
        <textarea
          type="text"
          className="text-sm text-slate-950 outline-none rounded bg-slate-50 p-2"
          placeholder="Content"
          rows={10}
          value={content}
          onChange={(e) => setContent(e.target.value)} // Corrected target access
        />
      </div>

      <div className="mt-3">
        <label className="input-table">TAGS</label>
        <TagInput tags={tags} setTags={setTags} />
      </div>

      {error && <p className="text-red-500 text-xs pt-4">{error}</p>} {/* Display error */}

      <button className="btn-primary font-medium mt-5 p-3" onClick={handleAddNote}>
        ADD
      </button>
    </div>
  );
};

export default AddEditNotes;
