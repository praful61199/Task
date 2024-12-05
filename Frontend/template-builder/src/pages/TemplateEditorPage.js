




import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function TemplateEditorPage() {
  const navigate = useNavigate();
  const { id: templateId } = useParams(); // Retrieve templateId from the URL
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (templateId) {
      // Fetch template details for editing
      fetch(`https://task-backend-1wc4.onrender.com/api/templates/${templateId}`)
        .then((response) => response.json())
        .then((data) => {
          setName(data.name);
          setContent(data.content);
        })
        .catch((error) => console.error("Error fetching template:", error));
    }
  }, [templateId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = templateId
      ? `https://task-backend-1wc4.onrender.com/api/templates/${templateId}` // Edit URL
      : "https://task-backend-1wc4.onrender.com/api/templates"; // Create URL
    const method = templateId ? "PUT" : "POST";

    fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, content }),
    })
      .then((response) => response.json())
      .then(() => {
        navigate("/"); // Redirect back to the template list
      })
      .catch((error) => console.error("Error saving template:", error));
  };

  return (
    <div>
      <h2>{templateId ? "Edit Template" : "Create New Template"}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Content:
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </label>
        <button type="submit">{templateId ? "Update" : "Create"}</button>
      </form>
    </div>
  );
}

export default TemplateEditorPage;

