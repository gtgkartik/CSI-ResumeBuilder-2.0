import React, { useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ResumeTemplate = () => {
  const user = useSelector((state) => state.userState.user);
  const ps = useSelector((state) => state.userState.expSections);
  const [name, setName] = useState('Akshay');
  const [email, setEmail] = useState('guytyrd');
  const [education, setEducation] = useState('ftrdesdfg');
  const [experience, setExperience] = useState('rtdfgh');

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

  console.log(ps);

  return (
    <div>
      <h1>Resume Template</h1>
      <div id="resume-content">
        <p style={{background:"yellow", fontSize:'25px', padding:'5px', width:'200px', height:'100px'}}>{name}</p>
        <p style={{background:"pink", fontSize:'25px', padding:'5px', width:'200px', height:'100px'}}>{email}</p>
        <p style={{background:"lightgreen", fontSize:'25px', padding:'5px', width:'200px', height:'100px'}}>{education}</p>
        <p style={{background:"orange", fontSize:'25px', padding:'5px', width:'200px', height:'100px'}}>{experience}</p>
      </div>
      {/* <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="text" placeholder="Education" value={education} onChange={(e) => setEducation(e.target.value)} />
      <input type="text" placeholder="Experience" value={experience} onChange={(e) => setExperience(e.target.value)} /> */}
      <button onClick={handleDownloadPDF}>Download PDF</button>
    </div>
  );
};

export default ResumeTemplate;
