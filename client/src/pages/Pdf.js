// import React, { useState } from 'react';
// import jsPDF from 'jspdf';

// const PdfGenerator = () => {
//   const [formData, setFormData] = useState({
//     // Initialize the form data state, e.g., name, email, etc.
//     name: '',
//     email: '',
//     // Add more fields as needed
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const generatePdf = () => {
//     const pdf = new jsPDF();
//     // Generate the PDF content here using the form data
//     pdf.text(20, 20, `Name: ${formData.name}`);
//     pdf.text(20, 30, `Email: ${formData.email}`);
//     // Add more text or content as needed
//     pdf.save('form_data.pdf');
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         name="name"
//         value={formData.name}
//         onChange={handleInputChange}
//         placeholder="Name"
//       />
//       <input
//         type="email"
//         name="email"
//         value={formData.email}
//         onChange={handleInputChange}
//         placeholder="Email"
//       />
//       {/* Add more form fields */}
//       <button onClick={generatePdf}>Generate PDF</button>
//     </div>
//   );
// };

// export default PdfGenerator;


import React, { useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const ResumeTemplate = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [education, setEducation] = useState('');
  const [experience, setExperience] = useState('');

  const handleDownloadPDF = () => {
    const input = document.getElementById('resume-content');
    if (input) {
      html2canvas(input, {width:800, height:600}).then((canvas) => {
        const pdf = new jsPDF('p', 'mm', 'a4');
        pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 211, 298); // A4 size: 210x297 mm
        pdf.save('resume.pdf');
      });
    }
  };

  return (
    <div>
      <h1>Resume Template</h1>
      <div id="resume-content">
        <p style={{background:"yellow", fontSize:'25px', padding:'5px', width:'200px', height:'100px'}}>{name}</p>
        <p style={{background:"pink", fontSize:'25px', padding:'5px', width:'200px', height:'100px'}}>{email}</p>
        <p style={{background:"lightgreen", fontSize:'25px', padding:'5px', width:'200px', height:'100px'}}>{education}</p>
        <p style={{background:"orange", fontSize:'25px', padding:'5px', width:'200px', height:'100px'}}>{experience}</p>
      </div>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="text" placeholder="Education" value={education} onChange={(e) => setEducation(e.target.value)} />
      <input type="text" placeholder="Experience" value={experience} onChange={(e) => setExperience(e.target.value)} />
      <button onClick={handleDownloadPDF}>Download PDF</button>
    </div>
  );
};

export default ResumeTemplate;
