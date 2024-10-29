import React, { useState, useReducer } from 'react';
import { GoPlus } from 'react-icons/go';
import ProjectFormModal from './ProjectFormModel';
import ProjectList from './ProjectList';

const projectsReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PROJECT':
      return [...state, action.payload];
    default:
      return state;
  }
};

const Projects = () => {
  const [projects, dispatch] = useReducer(projectsReducer, []);
  const [isFormVisible, setFormVisible] = useState(false);

  const handleAddProject = (projectData) => {
    dispatch({ type: 'ADD_PROJECT', payload: projectData });
    setFormVisible(false);
  };

  return (
    <div className="pt-[10vh] flex h-screen overflow-auto bg-[#ff9900] relative">
      {/* Plus Icon */}
      <div
        className="fixed bottom-20 right-20 hover:cursor-pointer"
        onClick={() => setFormVisible(true)}
      >
        <GoPlus size={48} />
      </div>

      {/* Form Modal */}
      {isFormVisible && (
        <ProjectFormModal
          onSubmit={handleAddProject}
          onClose={() => setFormVisible(false)}
        />
      )}

      {/* Project List */}
      <ProjectList projects={projects} />
    </div>
  );
};

export default Projects;
