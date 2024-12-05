export const getTemplates = async () => {
    const response = await fetch('http://localhost:5000/api/templates');
    return await response.json();
  };
  
  export const getTemplate = async (id) => {
    const response = await fetch(`http://localhost:5000/api/templates/${id}`);
    return await response.json();
  };
  
  export const saveTemplate = async (template) => {
    const response = await fetch('http://localhost:5000/api/templates', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(template),
    });
    return await response.json();
  };
  