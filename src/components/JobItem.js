// import React from 'react';
// const JobItem = ({ job, onDelete }) => {
//   const { id, title, description, company, location, date_posted } = job;

//   const handleDeleteClick = () => {
//     onDelete(id);
//   };

//   return (
//     <div className="card">
//       <h3>{title}</h3>
//       <p className="company">{company}</p>
//       <p className='description'>{description}</p>
//       <div className="extra content">
//           <span>
//           <i class="fa-solid fa-location-dot"></i>
//             {location}
//           </span>
//           <span>
//             <i className="fa-solid fa-calendar-days"></i>
//             { date_posted}
//           </span>
//           <span className="delete-icon-container" onClick={handleDeleteClick}>
//             <i className="fa-solid fa-pen"></i>
//             <span className="delete-text">Edit</span>
//           </span>
//           <span className="delete-icon-container" onClick={handleDeleteClick}>
//             <i className="fa-solid fa-trash-can"></i>
//             <span className="delete-text">Delete</span>
//           </span>
//         </div>

      
//     </div>
//   );
// };

// export default JobItem;


import React, { useState } from 'react';


const JobItem = ({ job, onDelete, onEdit }) => {
  const { id, title: initialTitle, description: initialDescription, company: initialCompany, location: initialLocation, date_posted: initialDatePosted } = job;
  
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(initialTitle);
  const [description, setDescription] = useState(initialDescription);
  const [company, setCompany] = useState(initialCompany);
  const [location, setLocation] = useState(initialLocation);
  const [datePosted, setDatePosted] = useState(initialDatePosted);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleDeleteClick = () => {
        onDelete(id);
      };
    

  const handleSaveClick = () => {
    const editedJob = {
      id,
      title,
      description,
      company,
      location,
      date_posted: datePosted
    };
    onEdit(editedJob);
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    // Reset the input fields to initial values
    setTitle(initialTitle);
    setDescription(initialDescription);
    setCompany(initialCompany);
    setLocation(initialLocation);
    setDatePosted(initialDatePosted);
    setIsEditing(false);
  };

  return (
    <div className="card">
      {isEditing ? (
        <>
          {/* <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          <textarea value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
          <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} />
          <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
          <input type="date" value={datePosted} onChange={(e) => setDatePosted(e.target.value)} />
          <div>
          <span className="delete-icon-container" onClick={handleSaveClick}>
             <i className="fa-solid fa-pen"></i>
             <span className="delete-text">Save</span>
           </span>
           <span className="delete-icon-container" onClick={handleCancelClick}>
             <i className="fa-solid fa-trash-can"></i>
             <span className="delete-text">Cancel</span>
           </span>
          </div> */}
          <form  className="job-form edit">
            <label>
                Title:
                <input type="text" name="title" value={title}   onChange={(e) => setTitle(e.target.value)}  required />
            </label>
            <label>
                Description:
                <textarea name="description" value={description} onChange={(e) => setDescription(e.target.value)} required />
            </label>
            <label>
                Company:
                <input type="text" name="company" value={company}  onChange={(e) => setCompany(e.target.value)} required />
            </label>
            <label>
                Location:
                <input type="text" name="location" value={location} onChange={(e) => setLocation(e.target.value)} required />
            </label>
            <label>
                Date Posted:
                <input type="date" name="date_posted" value={datePosted} onChange={(e) => setDatePosted(e.target.value)}required />
            </label>
            <div className='button-holder'>
              <button type="button" onClick={handleSaveClick}>Save</button>
              <button type="button" onClick={handleCancelClick}>Cancel</button>
            </div>
        </form>
        </>
      ) : (
        <>
        <h3>{title}</h3>
        <p className="company">{company}</p>
        <p className='description'>{description}</p>
        <div className="extra content">
            <span>
            <i class="fa-solid fa-location-dot"></i>
              {location}
            </span>
            <span>
              <i className="fa-solid fa-calendar-days"></i>
              {datePosted}
            </span>
            <span className="delete-icon-container" onClick={handleEditClick}>
              <i className="fa-solid fa-pen"></i>
              <span className="delete-text">Edit</span>
            </span>
            <span className="delete-icon-container" onClick={handleDeleteClick}>
              <i className="fa-solid fa-trash-can"></i>
              <span className="delete-text">Delete</span>
            </span>
          </div>
        </>
      )}
    </div>
  );
};

export default JobItem;
