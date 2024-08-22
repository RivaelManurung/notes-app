import React from "react";
import { MdOutlinePushPin } from "react-icons/md";
import { MdCreate, MdDelete } from "react-icons/md";
const NoteCard = ({
  title,
  date,
  content,
  tags,
  isPinned,
  onEdit,
  ondeleted,
  onPinNoted,
}) => {
  return (
    <div className="w-full p-4 border rounded bg-white hover:shadow-xl transition-all ease-in-out">
      <div className="flex items-center justify-between">
        <div>
          <h6 className="text-sm font-medium">{title}</h6>
          <span className="text-xs">{date}</span>
        </div>

        <MdOutlinePushPin
          className={`icon-btn ${isPinned ? "text-primary" : "text-slate-300 "}`}
          onClick={onPinNoted}
        />
      </div>

      <p className="text-xs text-slate-600 mt-2">{content?.slice(0, 60)}</p>

      <div className="flex items-center justify-between">
        <div className="text-xs text-slate-500 ">{tags}</div>
        <div className="flex items-center gap-2">
          <MdCreate
            className="icon-btn hover:text-green-600"
            onClick={onEdit}
          />
          <MdDelete
            className="icon-btn hover:text-red-600"
            onClick={ondeleted}
          />
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
