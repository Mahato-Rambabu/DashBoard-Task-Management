import React, { useRef } from 'react';
// import { useClickOutside } from './useClickOutside';

import { useEffect } from 'react';

const useClickOutside = (ref, handler) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        handler();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [ref, handler]);
};


const ProjectFormModel = ({ onSubmit, onClose }) => {
  const [projectData, setProjectData] = React.useState({
    name: '',
    description: '',
    tasks: '',
  });

  const formRef = useRef(null);
  useClickOutside(formRef, onClose);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProjectData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(projectData);
    setProjectData({ name: '', description: '', tasks: '' });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20">
      <form
        ref={formRef}
        className="bg-white p-6 rounded-lg shadow-lg flex flex-col space-y-4 w-1/2"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="name"
          value={projectData.name}
          onChange={handleChange}
          placeholder="Project Name"
          className="p-2 border rounded"
        />
        <textarea
          name="description"
          value={projectData.description}
          onChange={handleChange}
          placeholder="Description"
          className="p-2 border rounded resize-none"
        />
        <textarea
          name="tasks"
          value={projectData.tasks}
          onChange={handleChange}
          placeholder="Tasks (comma-separated)"
          className="p-2 border rounded resize-none"
        />
        <button type="submit" className="bg-blue-500 text-white py-2 rounded">
          Add Project
        </button>
      </form>
    </div>
  );
};

export default ProjectFormModel;
