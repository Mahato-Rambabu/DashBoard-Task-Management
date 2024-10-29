import React, { useState, useRef, useEffect } from 'react';
import { IoAddCircleOutline, IoColorPaletteOutline } from 'react-icons/io5';
import { LuClock } from 'react-icons/lu';
import { AiOutlineEdit } from 'react-icons/ai';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { HiOutlinePencil } from 'react-icons/hi';
import { RiDeleteBinFill } from 'react-icons/ri';

const Todos = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [notes, setNotes] = useState([]);
  const [isFormExpanded, setFormExpanded] = useState(false);
  const [selectNote, setSelectNote] = useState(null);

  const formRef = useRef(null);

  function openNote(note) {
    setSelectNote(note);
  }

  function closeNote() {
    setSelectNote(null);
  }

  function deleteNote(note) {
    const newNotes = notes.filter((n) => n !== note);
    setNotes(newNotes);
    closeNote();
  }

  const handleSubmit = () => {
    if (title.trim() || description.trim()) {
      const newNote = { title, description };
      setNotes([newNote, ...notes]);
      setTitle('');
      setDescription('');
      setFormExpanded(false);
    }
  };

  const handleFormClick = () => setFormExpanded(true);

  useEffect(() => {
    function handleClickOutside(event) {
      if (formRef.current && !formRef.current.contains(event.target)) {
        handleSubmit();
        setFormExpanded(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [title, description]);

  const autoResizeTextarea = (e) => {
    e.target.style.height = 'auto';
    e.target.style.height = `${Math.min(e.target.scrollHeight, 500)}px`;
  };

  return (
    <div className=" pt-[10vh] flex h-screen overflow-auto bg-red-500">
      <div className="w-full flex flex-col">
        <div className="flex justify-center">
          <form
            ref={formRef}
            className="relative flex flex-col w-[80%] md:w-[50%] mx-auto mt-8 md:shadow-lg rounded-lg bg-white p-2 mb-4"
            onClick={handleFormClick}
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder={isFormExpanded ? 'Title' : 'Take a Note...'}
              className="px-4 py-2 border-none outline-none"
            />
            {!isFormExpanded && (
              <AiOutlineEdit
                size={20}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500"
              />
            )}
            {isFormExpanded && (
              <>
                <textarea
                  value={description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                    autoResizeTextarea(e);
                  }}
                  placeholder="Description"
                  className="resize-none px-4 py-2 border-none outline-none overflow-y-auto"
                  style={{ maxHeight: '500px' }}
                ></textarea>
                <div className="flex w-full py-1 px-4 gap-4">
                  <LuClock size={18} />
                  <IoColorPaletteOutline size={20} />
                  <IoAddCircleOutline size={20} />
                  <button type="submit" className="text-gray-600 font-semibold ml-auto">
                    Close
                  </button>
                </div>
              </>
            )}
          </form>
        </div>

        {/* Notes Section */}
        <div className="flex-grow p-4 overflow-y-auto Note-section">
          <div className="columns-1 sm:columns-2 lg:columns-4 gap-4 space-y-4">
            {notes.map((note, index) => (
              <div
                key={index}
                className="break-inside-avoid p-4 bg-white rounded shadow cursor-pointer overflow-hidden flex flex-col"
                onClick={() => openNote(note)}
              >
                <h1 className="text-xl font-semibold truncate">{note.title}</h1>
                <p
                  className="text-gray-700 overflow-hidden"
                  style={{
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: note.description.length > 500 ? 10 : 'none',
                    lineHeight: '1.5em',
                    whiteSpace: 'pre-wrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  {note.description}
                </p>
              </div>
            ))}
            {selectNote && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white p-4 rounded shadow-lg max-w-lg w-full max-h-[90vh] overflow-auto">
                  <button className="float-right text-gray-500" onClick={closeNote}>
                    <IoIosCloseCircleOutline size={26} />
                  </button>
                  <h2 className="text-2xl font-semibold mb-4">{selectNote.title}</h2>
                  <p className="mb-4 whitespace-pre-wrap">{selectNote.description}</p>

                  <div className="flex items-center gap-4 py-2 border-t-2">
                    <HiOutlinePencil size={18} className="cursor-pointer" />
                    <RiDeleteBinFill size={18} className="cursor-pointer" onClick={() => deleteNote(selectNote)} />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Todos;
