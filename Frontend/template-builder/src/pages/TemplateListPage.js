




import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function TemplateListPage() {
  const [templates, setTemplates] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch templates from the backend
    fetch("http://localhost:5000/api/templates")
      .then((response) => response.json())
      .then((data) => {
        setTemplates(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching templates:", error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>Template Library</h2>
      <Link to="/create-template">
        <button>Create New Template</button>
      </Link>
      <div className="template-list">
        {isLoading ? (
          <p>Loading templates...</p>
        ) : templates.length > 0 ? (
          templates.map((template) => (
            <div key={template._id} className="template-card">
              <h3>{template.name}</h3>
              <p>{template.content}</p>
              <Link to={`/edit-template/${template._id}`}>
                <button>Edit</button>
              </Link>
            </div>
          ))
        ) : (
          <p>No templates available. Create your first template!</p>
        )}
      </div>
    </div>
  );
}

export default TemplateListPage;


