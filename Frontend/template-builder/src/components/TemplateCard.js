// import React from 'react';
// import { Link } from 'react-router-dom';
// import './TemplateCard.css';

// const TemplateCard = ({ template }) => {
//   return (
//     <div className="template-card">
//       <h3>{template.name}</h3>
//       <p>{template.content.slice(0, 100)}...</p>
//       <Link to={`/edit/${template.id}`}>
//         <button className="edit-btn">Edit</button>
//       </Link>
//     </div>
//   );
// };

// export default TemplateCard;



import React from "react";

function TemplateCard({ template }) {
  return (
    <div className="template-card">
      <h3>{template.name}</h3>
      <div>{template.content}</div>
      <button>Edit</button>
    </div>
  );
}

export default TemplateCard;
