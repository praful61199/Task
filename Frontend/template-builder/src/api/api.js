export const getTemplates = async () => {
    const response = await fetch('https://task-backend-1wc4.onrender.com/api/templates');
    return await response.json();
  };
  
  export const getTemplate = async (id) => {
    const response = await fetch(`https://task-backend-1wc4.onrender.com/api/templates/${id}`);
    return await response.json();
  };
  
  export const saveTemplate = async (template) => {
    const response = await fetch('https://task-backend-1wc4.onrender.com/api/templates', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(template),
    });
    return await response.json();
  };
  
