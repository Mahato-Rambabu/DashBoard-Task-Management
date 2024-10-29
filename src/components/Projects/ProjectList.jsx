import React from 'react';

const ProjectList = ({ projects }) => (
  <div className="p-4 w-full">
    {projects.map((project, index) => (
      <div key={index} className="mb-4 bg-white p-4 rounded shadow">
        <h3 className="text-xl font-semibold">{project.name}</h3>
        <p className="text-gray-700">{project.description}</p>
        <ul className="list-disc pl-5 mt-2 text-gray-600">
          {project.tasks.split(',').map((task, i) => (
            <li key={i}>{task.trim()}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

export default ProjectList;
