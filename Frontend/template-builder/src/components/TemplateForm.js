import React, { useState } from 'react';
import Button from './Button';
import './TemplateForm.css';

const TemplateForm = ({ onSubmit, initialData }) => {
  const [templateName, setTemplateName] = useState(initialData?.name || '');
  const [templateContent, setTemplateContent] = useState(initialData?.content || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name: templateName, content: templateContent });
  };

  return (
    <form className="template-form" onSubmit={handleSubmit}>
      <label>Template Name</label>
      <input
        type="text"
        value={templateName}
        onChange={(e) => setTemplateName(e.target.value)}
      />
      <label>Template Content</label>
      <textarea
        value={templateContent}
        onChange={(e) => setTemplateContent(e.target.value)}
      />
      <Button type="submit" className="submit-btn">Save Template</Button>
    </form>
  );
};

export default TemplateForm;
