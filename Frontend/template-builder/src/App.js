

// import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import TemplateList from "./components/TemplateList";
// import TemplateEditor from "./components/TemplateEditor";

// const App = () => {
//   return (
//     <Router>
//       <div>
//         <h1>Template Builder</h1>
//         <Switch>
//           <Route exact path="/" component={TemplateList} />
//           <Route path="/create" component={TemplateEditor} />
//           <Route path="/edit/:id" component={TemplateEditor} />
//         </Switch>
//       </div>
//     </Router>
//   );
// };

// export default App;


// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import TemplateListPage from './pages/TemplateListPage';
// import TemplateEditorPage from './pages/TemplateEditorPage';
// // import '../src/style.css'
// import Header from './components/Header';


// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<TemplateListPage />} />
//         <Route path="/create" element={<TemplateEditorPage />} />
//         <Route path="/edit/:id" element={<TemplateEditorPage />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TemplateListPage from "./pages/TemplateListPage";
import TemplateEditorPage from "./pages/TemplateEditorPage";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<TemplateListPage />} />
        <Route path="/edit-template/:id" element={<TemplateEditorPage />} />
        <Route path="/create-template" element={<TemplateEditorPage />} />
        <Route path="/edit-template/:id" element={<TemplateEditorPage />} />


      </Routes>
    </Router>
  );
}

export default App;

