import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import React, { useRef} from 'react';

function App() {
  const contentRef = useRef(null);
  const contentRef1 = useRef(null);

  const handleDownloadPDF = async () => {
    const content = contentRef.current;
    const canvas = await html2canvas(content, { scrollY: -window.scrollY, scale: 2 });
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
    });
    const pdfWidth = 480;
    const pdfHeight = 910;

    const scale = Math.min(pdfWidth / canvas.width, pdfHeight / canvas.height);

    const scaledWidth = canvas.width * scale;
    const scaledHeight = canvas.height * scale;

    pdf.addImage(canvas, 'PNG', 0, 0, scaledWidth, scaledHeight);

    const content1 = contentRef1.current;
    const canvas1 = await html2canvas(content1, { scrollY: -window.scrollY, scale: 2 });

    const scale1 = Math.min(pdfWidth / canvas1.width, pdfHeight / canvas1.height);

    const scaledWidth1 = canvas1.width * scale1;
    const scaledHeight1 = canvas1.height * scale1;

    pdf.addPage();

    pdf.addImage(canvas1, 'PNG', 0, 0, scaledWidth1, scaledHeight1);

    pdf.save('Resume.pdf');
  };



  return (
    <>
      <div ref={contentRef}>
        <div style={{ width: '2480px', height: '3808px', position: 'relative', background: 'white' }}>
          <div style={{ width: '760px', height: '1084px', left: '0px', top: '0px', position: 'absolute' }}>
            <div style={{ width: '640px', height: '963.56px', left: '0px', top: '0px', position: 'absolute', background: '#DEC802' }} />
          </div>
          <div style={{ paddingTop: '64px', left: '960px', top: '120px', position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '80px', display: 'inline-flex' }}>
            <div style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '56px', display: 'flex' }}>
              <div style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '20px', display: 'flex' }}>
                <div style={{ width: '1307px', color: 'black', fontSize: '120px', fontFamily: 'Roboto', fontWeight: 900, textTransform: 'uppercase', lineHeight: '120px', letterSpacing: '12px', wordWrap: 'break-word' }}>Abdul manan</div>
              </div>
              <div style={{ width: '600px', height: '4px', background: '#DEC802' }} />
              <div style={{ alignSelf: 'stretch', color: '#6A6A6A', fontSize: '50px', fontFamily: 'Roboto', fontWeight: 400, letterSpacing: '2px', wordWrap: 'break-word' }}>Graphics and UI/UX Designer</div>
            </div>
            <div style={{ width: '1307px', color: 'black', fontSize: '26px', fontFamily: 'Roboto', fontWeight: 400, lineHeight: '38px', letterSpacing: '1.30px', wordWrap: 'break-word' }}>UI/UX &amp; Graphic Designer with 1 year of experience in creating user-centered designs, combining design principles with technology. Currently freelancing on Upwork, seeking full-time onsite opportunity to use skills and creativity to drive business outcomes and enhance user experience.</div>
          </div>
          <div style={{ paddingTop: '64px', left: '960px', top: '717px', position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '80px', display: 'inline-flex' }}>
            <div style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '56px', display: 'flex' }}>
              <div style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '20px', display: 'flex' }}>
                <div style={{ width: '1307px', color: 'black', fontSize: '96px', fontFamily: 'Roboto', fontWeight: 900, textTransform: 'uppercase', lineHeight: '120px', letterSpacing: '9.60px', wordWrap: 'break-word' }}>PORTFOLIO</div>
              </div>
              <div style={{ width: '600px', height: '4px', background: '#DEC802' }} />
              <div style={{ alignSelf: 'stretch', color: '#6A6A6A', fontSize: '50px', fontFamily: 'Roboto', fontWeight: 400, letterSpacing: '2px', wordWrap: 'break-word' }}>https://www.behance.net/abdulmanan14</div>
            </div>
          </div>
          <div style={{ left: '1080px', top: '1158px', position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '140px', display: 'inline-flex' }}>
            <div style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '80px', display: 'flex' }}>
              <div style={{ width: '1343px', height: '77px', position: 'relative' }}>
                <div style={{ left: '0px', top: '0px', position: 'absolute', color: '#6A6A6A', fontSize: '48px', fontFamily: 'Roboto', fontWeight: 500, textTransform: 'uppercase', wordWrap: 'break-word' }}>EXPERIENCE</div>
                <div style={{ width: '120px', height: '4px', left: '0px', top: '76px', position: 'absolute', background: '#DEC802' }} />
              </div>
              <div style={{ width: '1227.83px', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                <div style={{ flex: '1 1 0', alignSelf: 'stretch', paddingLeft: '278px', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '10px', display: 'flex' }}>
                  <div style={{ width: '1.83px', alignSelf: 'stretch', background: '#DEC802' }} />
                </div>
                <div style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '80px', display: 'inline-flex' }}>
                  <div style={{ width: '1226px', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '48px', display: 'inline-flex' }}>
                    <div style={{ width: '211px', textAlign: 'right', color: 'black', fontSize: '30px', fontFamily: 'Roboto', fontWeight: 400, letterSpacing: '1.20px', wordWrap: 'break-word' }}>2020-21</div>
                    <div style={{ width: '38px', height: '38px', background: '#F7F7F4', borderRadius: '100px', border: '2px #DEC802 solid' }} />
                    <div style={{ flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '24px', display: 'inline-flex' }}>
                      <div style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '8px', display: 'flex' }}>
                        <div style={{ width: '881px', color: 'black', fontSize: '36px', fontFamily: 'Roboto', fontWeight: 500, wordWrap: 'break-word' }}>Creative Graphics and instructional Designer</div>
                        <div style={{ width: '881px', color: '#6A6A6A', fontSize: '32px', fontFamily: 'Roboto', fontWeight: 400, wordWrap: 'break-word' }}>Zillionelearning.pvt.ltd</div>
                      </div>
                      <div style={{ width: '881px', color: 'black', fontSize: '32px', fontFamily: 'Roboto', fontWeight: 400, lineHeight: '50px', wordWrap: 'break-word' }}>As a designer working on elearning course development, my role was to create visual aids and other learning materials using tools such as Illustrator and Articulate360. I used your design skills and knowledge of instructional design principles to create high-quality learning materials that supported the goals of the elearning courses. I have worked on projects for clients such as Ufone, Telenor, and PTCL, helping to create engaging and effective elearning courses that helped employees learn and develop new skills.</div>
                    </div>
                  </div>
                  <div style={{ width: '1226px', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '48px', display: 'inline-flex' }}>
                    <div style={{ width: '211px', textAlign: 'right', color: 'black', fontSize: '30px', fontFamily: 'Roboto', fontWeight: 400, letterSpacing: '1.20px', wordWrap: 'break-word' }}>2021-22</div>
                    <div style={{ width: '38px', height: '38px', background: '#F7F7F4', borderRadius: '100px', border: '2px #DEC802 solid' }} />
                    <div style={{ flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '24px', display: 'inline-flex' }}>
                      <div style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '8px', display: 'flex' }}>
                        <div style={{ width: '881px', color: 'black', fontSize: '36px', fontFamily: 'Roboto', fontWeight: 500, wordWrap: 'break-word' }}>Creative Graphic Designer and Video editor</div>
                        <div style={{ width: '881px', color: '#6A6A6A', fontSize: '32px', fontFamily: 'Roboto', fontWeight: 400, wordWrap: 'break-word' }}>pakistannow</div>
                      </div>
                      <div style={{ width: '881px', color: 'black', fontSize: '32px', fontFamily: 'Roboto', fontWeight: 400, lineHeight: '50px', wordWrap: 'break-word' }}>As a creative graphic designer in
                        PakistanNow, I was responsible for
                        designing Instagram posts and completing video editing tasks. These tasks likely required a strong eye for aesthetics and proficiency in design software. Overall, my role involved creating visually appealing and effective content for social media platforms.</div>
                    </div>
                  </div>
                  <div style={{ width: '1226px', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '48px', display: 'inline-flex' }}>
                    <div style={{ width: '211px', textAlign: 'right', color: 'black', fontSize: '30px', fontFamily: 'Roboto', fontWeight: 400, letterSpacing: '1.20px', wordWrap: 'break-word' }}>2022-2022</div>
                    <div style={{ width: '38px', height: '38px', background: '#F7F7F4', borderRadius: '100px', border: '2px #DEC802 solid' }} />
                    <div style={{ flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '24px', display: 'inline-flex' }}>
                      <div style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '8px', display: 'flex' }}>
                        <div style={{ width: '881px', color: 'black', fontSize: '36px', fontFamily: 'Roboto', fontWeight: 500, wordWrap: 'break-word' }}>Creative Graphics Designer</div>
                        <div style={{ width: '881px', color: '#6A6A6A', fontSize: '32px', fontFamily: 'Roboto', fontWeight: 400, wordWrap: 'break-word' }}>BrandixSoft</div>
                      </div>
                      <div style={{ width: '881px', color: 'black', fontSize: '32px', fontFamily: 'Roboto', fontWeight: 400, lineHeight: '50px', wordWrap: 'break-word' }}>As a creative graphic designer at Brandix Soft, I was responsible for creating a wide range of marketing materials including social media posts, ad campaigns, brochures, logos, and UI/UX designs. My role involved using your creativity and design skills to produce visually appealing and effective content that helped to promote the company's brand and products. </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ width: '2350px', height: '16px', left: '944px', top: '3508px', position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', background: '#DEC802' }} />
          <div style={{ width: '104px', height: '122px', left: '2352px', top: '3386px', position: 'absolute' }}>
            <div style={{ width: '122px', height: '104px', left: '0px', top: '122px', position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', background: '#DEC802' }} />
            <div style={{ left: '24px', top: '40px', position: 'absolute' }}><span style={{ color: 'white', fontSize: '36px', fontFamily: 'Roboto', fontWeight: 500, wordWrap: 'break-word' }}>1</span><span style={{ color: '#6A6A6A', fontSize: '36px', fontFamily: 'Roboto', fontWeight: 500, wordWrap: 'break-word' }}>/2</span></div>
          </div>
          <div style={{ width: '536px', height: '2109px', left: '160px', top: '1200px', position: 'absolute' }}>
            <div style={{ width: '536px', height: '1456px', left: '0px', top: '0px', position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '80px', display: 'inline-flex' }}>
              <div style={{ justifyContent: 'flex-start', alignItems: 'flex-end', gap: '32px', display: 'inline-flex' }}>
                <div style={{ width: '64px', height: '64px', position: 'relative' }}>
                  <div style={{ width: '48px', height: '48px', left: '5.33px', top: '8px', position: 'absolute', border: '2.46px #6A6A6A solid' }} />
                  <div style={{ width: '48px', height: '48px', left: '10.67px', top: '8px', position: 'absolute', border: '2.46px #6A6A6A solid' }} />
                </div>
                <div style={{ width: '124px', height: '59px', position: 'relative' }}>
                  <div style={{ left: '0px', top: '0px', position: 'absolute', color: '#6A6A6A', fontSize: '40px', fontFamily: 'Roboto', fontWeight: 400, textTransform: 'uppercase', wordWrap: 'break-word' }}>tools</div>
                  <div style={{ width: '80px', height: '4px', left: '0px', top: '59px', position: 'absolute', background: '#DEC802' }} />
                </div>
              </div>
              <div style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '40px', display: 'flex' }}>
                <div style={{ paddingLeft: '32px', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '40px', display: 'inline-flex' }}>
                  <div style={{ width: '64px', height: '64px', position: 'relative' }}>
                    <div style={{ width: '58.68px', height: '58.53px', left: '2.67px', top: '2.74px', position: 'absolute', background: '#C6B200' }} />
                    <div style={{ width: '64px', height: '64px', left: '-0px', top: '0px', position: 'absolute', background: '#F3DB00' }} />
                  </div>
                  <div style={{ width: '400px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '8px', display: 'inline-flex' }}>
                    <div style={{ color: '#6A6A6A', fontSize: '32px', fontFamily: 'Roboto', fontWeight: 400, wordWrap: 'break-word' }}>ADOBE PHOTOSHOP</div>
                    <div style={{ alignSelf: 'stretch', height: '12px', position: 'relative' }}>
                      <div style={{ width: '400px', height: '4px', left: '0px', top: '4px', position: 'absolute', background: '#C4C4C4' }} />
                      <div style={{ width: '200px', height: '12px', left: '0px', top: '0px', position: 'absolute' }}>
                        <div style={{ width: '188px', height: '4px', left: '0px', top: '4px', position: 'absolute', background: '#DEC802' }} />
                        <div style={{ width: '12px', height: '12px', left: '188px', top: '0px', position: 'absolute', background: '#DEC802', borderRadius: '9999px' }} />
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ paddingLeft: '32px', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '40px', display: 'inline-flex' }}>
                  <div style={{ width: '64px', height: '64px', position: 'relative' }}>
                    <div style={{ width: '58.63px', height: '58.41px', left: '2.69px', top: '2.75px', position: 'absolute', background: '#C6B200' }} />
                    <div style={{ width: '63.96px', height: '63.86px', left: '0.02px', top: '0.04px', position: 'absolute', background: '#F3DB00' }} />
                  </div>
                  <div style={{ width: '400px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '8px', display: 'inline-flex' }}>
                    <div style={{ color: '#6A6A6A', fontSize: '32px', fontFamily: 'Roboto', fontWeight: 400, wordWrap: 'break-word' }}>ADOBE ILLUStrator</div>
                    <div style={{ alignSelf: 'stretch', height: '12px', position: 'relative' }}>
                      <div style={{ width: '400px', height: '4px', left: '0px', top: '4px', position: 'absolute', background: '#C4C4C4' }} />
                      <div style={{ width: '200px', height: '12px', left: '0px', top: '0px', position: 'absolute' }}>
                        <div style={{ width: '188px', height: '4px', left: '0px', top: '4px', position: 'absolute', background: '#DEC802' }} />
                        <div style={{ width: '12px', height: '12px', left: '188px', top: '0px', position: 'absolute', background: '#DEC802', borderRadius: '9999px' }} />
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ paddingLeft: '32px', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '40px', display: 'inline-flex' }}>
                  <div style={{ width: '64px', height: '64px', position: 'relative' }}>
                    <div style={{ width: '58.67px', height: '58.52px', left: '2.67px', top: '2.74px', position: 'absolute', background: '#C6B200' }} />
                    <div style={{ width: '64px', height: '63.99px', left: '0px', top: '0.01px', position: 'absolute', background: '#F3DB00' }} />
                  </div>
                  <div style={{ width: '400px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '8px', display: 'inline-flex' }}>
                    <div style={{ color: '#6A6A6A', fontSize: '32px', fontFamily: 'Roboto', fontWeight: 400, wordWrap: 'break-word' }}>ADOBE INDESIGN</div>
                    <div style={{ alignSelf: 'stretch', height: '12px', position: 'relative' }}>
                      <div style={{ width: '400px', height: '4px', left: '0px', top: '4px', position: 'absolute', background: '#C4C4C4' }} />
                      <div style={{ width: '200px', height: '12px', left: '0px', top: '0px', position: 'absolute' }}>
                        <div style={{ width: '188px', height: '4px', left: '0px', top: '4px', position: 'absolute', background: '#DEC802' }} />
                        <div style={{ width: '12px', height: '12px', left: '188px', top: '0px', position: 'absolute', background: '#DEC802', borderRadius: '9999px' }} />
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ paddingLeft: '32px', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '40px', display: 'inline-flex' }}>
                  <div style={{ width: '64px', height: '64px', position: 'relative' }}>
                    <div style={{ width: '58.67px', height: '58.52px', left: '2.67px', top: '2.74px', position: 'absolute', background: '#C6B200' }} />
                    <div style={{ width: '64px', height: '63.99px', left: '0px', top: '0.01px', position: 'absolute', background: '#F3DB00' }} />
                  </div>
                  <div style={{ width: '400px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '8px', display: 'inline-flex' }}>
                    <div style={{ color: '#6A6A6A', fontSize: '32px', fontFamily: 'Roboto', fontWeight: 400, wordWrap: 'break-word' }}>ADOBE AFTER EFFECTS</div>
                    <div style={{ alignSelf: 'stretch', height: '12px', position: 'relative' }}>
                      <div style={{ width: '400px', height: '4px', left: '0px', top: '4px', position: 'absolute', background: '#C4C4C4' }} />
                      <div style={{ width: '200px', height: '12px', left: '0px', top: '0px', position: 'absolute' }}>
                        <div style={{ width: '188px', height: '4px', left: '0px', top: '4px', position: 'absolute', background: '#DEC802' }} />
                        <div style={{ width: '12px', height: '12px', left: '188px', top: '0px', position: 'absolute', background: '#DEC802', borderRadius: '9999px' }} />
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ paddingLeft: '32px', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '40px', display: 'inline-flex' }}>
                  <div style={{ width: '64px', height: '64px', position: 'relative' }}>
                    <div style={{ width: '58.67px', height: '58.52px', left: '2.67px', top: '2.74px', position: 'absolute', background: '#C6B200' }} />
                    <div style={{ width: '64px', height: '63.99px', left: '0px', top: '0.01px', position: 'absolute', background: '#F3DB00' }} />
                  </div>
                  <div style={{ width: '400px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '8px', display: 'inline-flex' }}>
                    <div style={{ color: '#6A6A6A', fontSize: '32px', fontFamily: 'Roboto', fontWeight: 400, wordWrap: 'break-word' }}>ADOBE Premiere</div>
                    <div style={{ alignSelf: 'stretch', height: '12px', position: 'relative' }}>
                      <div style={{ width: '400px', height: '4px', left: '0px', top: '4px', position: 'absolute', background: '#C4C4C4' }} />
                      <div style={{ width: '200px', height: '12px', left: '0px', top: '0px', position: 'absolute' }}>
                        <div style={{ width: '188px', height: '4px', left: '0px', top: '4px', position: 'absolute', background: '#DEC802' }} />
                        <div style={{ width: '12px', height: '12px', left: '188px', top: '0px', position: 'absolute', background: '#DEC802', borderRadius: '9999px' }} />
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ paddingLeft: '32px', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '40px', display: 'inline-flex' }}>
                  <div style={{ width: '64px', height: '64px', position: 'relative' }}>
                    <div style={{ width: '58.61px', height: '58.47px', left: '2.70px', top: '2.76px', position: 'absolute', background: '#C6B200' }} />
                    <div style={{ width: '64px', height: '64px', left: '0px', top: '0px', position: 'absolute', background: '#F3DB00' }} />
                    <div style={{ width: '39.30px', height: '29.81px', left: '12.13px', top: '15.19px', position: 'absolute', background: '#F3DB00' }} />
                  </div>
                  <div style={{ width: '400px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '8px', display: 'inline-flex' }}>
                    <div style={{ color: '#6A6A6A', fontSize: '32px', fontFamily: 'Roboto', fontWeight: 400, wordWrap: 'break-word' }}>ADOBE XD</div>
                    <div style={{ alignSelf: 'stretch', height: '12px', position: 'relative' }}>
                      <div style={{ width: '400px', height: '4px', left: '0px', top: '4px', position: 'absolute', background: '#C4C4C4' }} />
                      <div style={{ width: '200px', height: '12px', left: '0px', top: '0px', position: 'absolute' }}>
                        <div style={{ width: '188px', height: '4px', left: '0px', top: '4px', position: 'absolute', background: '#DEC802' }} />
                        <div style={{ width: '12px', height: '12px', left: '188px', top: '0px', position: 'absolute', background: '#DEC802', borderRadius: '9999px' }} />
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ paddingLeft: '32px', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '40px', display: 'inline-flex' }}>
                  <div style={{ width: '64px', height: '64px', position: 'relative' }}>
                    <div style={{ width: '41.45px', height: '64px', left: '11.27px', top: '0px', position: 'absolute' }}>
                      <div style={{ width: '20.72px', height: '21.33px', left: '0px', top: '42.67px', position: 'absolute', background: '#F3DB00' }} />
                      <div style={{ width: '20.72px', height: '21.33px', left: '0px', top: '21.33px', position: 'absolute', background: '#C6B200' }} />
                      <div style={{ width: '20.72px', height: '21.33px', left: '0px', top: '0px', position: 'absolute', background: '#C6B200' }} />
                      <div style={{ width: '20.72px', height: '21.33px', left: '20.73px', top: '0px', position: 'absolute', background: '#F3DB00' }} />
                      <div style={{ width: '20.72px', height: '21.33px', left: '20.73px', top: '21.33px', position: 'absolute', background: '#FFEC45' }} />
                    </div>
                  </div>
                  <div style={{ width: '400px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '8px', display: 'inline-flex' }}>
                    <div style={{ color: '#6A6A6A', fontSize: '32px', fontFamily: 'Roboto', fontWeight: 400, wordWrap: 'break-word' }}>Figma</div>
                    <div style={{ alignSelf: 'stretch', height: '12px', position: 'relative' }}>
                      <div style={{ width: '400px', height: '4px', left: '0px', top: '4px', position: 'absolute', background: '#C4C4C4' }} />
                      <div style={{ width: '200px', height: '12px', left: '0px', top: '0px', position: 'absolute' }}>
                        <div style={{ width: '188px', height: '4px', left: '0px', top: '4px', position: 'absolute', background: '#DEC802' }} />
                        <div style={{ width: '12px', height: '12px', left: '188px', top: '0px', position: 'absolute', background: '#DEC802', borderRadius: '9999px' }} />
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ paddingLeft: '32px', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '40px', display: 'inline-flex' }}>
                  <div style={{ width: '64px', height: '64px', position: 'relative' }}>
                    <div style={{ width: '31.82px', height: '38.10px', left: '0.12px', top: '23.79px', position: 'absolute', background: '#C6B200' }} />
                    <div style={{ width: '31.82px', height: '38.10px', left: '63.76px', top: '23.79px', position: 'absolute', transform: 'rotate(180deg)', transformOrigin: '0 0', background: '#C6B200' }} />
                    <div style={{ width: '37.86px', height: '38.10px', left: '13px', top: '23.79px', position: 'absolute', background: '#C6B200' }} />
                    <div style={{ width: '18.93px', height: '21.11px', left: '13px', top: '2.67px', position: 'absolute', background: '#F3DB00' }} />
                    <div style={{ width: '18.93px', height: '21.11px', left: '50.86px', top: '2.67px', position: 'absolute', transform: 'rotate(180deg)', transformOrigin: '0 0', background: '#F3DB00' }} />
                    <div style={{ width: '13.88px', height: '19.17px', left: '63.76px', top: '4.62px', position: 'absolute', transform: 'rotate(180deg)', transformOrigin: '0 0', background: '#C6B200' }} />
                    <div style={{ width: '13.88px', height: '19.17px', left: '0.12px', top: '4.62px', position: 'absolute', background: '#C6B200' }} />
                    <div style={{ width: '37.86px', height: '21.11px', left: '13px', top: '2.67px', position: 'absolute', background: '#FFEC45' }} />
                  </div>
                  <div style={{ width: '400px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '8px', display: 'inline-flex' }}>
                    <div style={{ color: '#6A6A6A', fontSize: '32px', fontFamily: 'Roboto', fontWeight: 400, wordWrap: 'break-word' }}>Sketch</div>
                    <div style={{ alignSelf: 'stretch', height: '12px', position: 'relative' }}>
                      <div style={{ width: '400px', height: '4px', left: '0px', top: '4px', position: 'absolute', background: '#C4C4C4' }} />
                      <div style={{ width: '200px', height: '12px', left: '0px', top: '0px', position: 'absolute' }}>
                        <div style={{ width: '188px', height: '4px', left: '0px', top: '4px', position: 'absolute', background: '#DEC802' }} />
                        <div style={{ width: '12px', height: '12px', left: '188px', top: '0px', position: 'absolute', background: '#DEC802', borderRadius: '9999px' }} />
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ paddingLeft: '32px', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '40px', display: 'inline-flex' }}>
                  <div style={{ width: '64px', height: '64px', position: 'relative' }}>
                    <div style={{ width: '11.59px', height: '11.15px', left: '6.34px', top: '41.16px', position: 'absolute', background: '#F3DB00' }} />
                    <div style={{ width: '11.62px', height: '11.72px', left: '0px', top: '30.66px', position: 'absolute', background: '#C6B200' }} />
                    <div style={{ width: '54.13px', height: '27.71px', left: '9.30px', top: '13.45px', position: 'absolute', background: '#FFEC45' }} />
                    <div style={{ width: '54.13px', height: '27.72px', left: '9.86px', top: '21.66px', position: 'absolute', background: '#C6B200' }} />
                    <div style={{ width: '53.83px', height: '23.81px', left: '9.87px', top: '21.65px', position: 'absolute', background: '#C6B200' }} />
                    <div style={{ width: '53.83px', height: '23.81px', left: '9.60px', top: '17.35px', position: 'absolute', background: '#F3DB00' }} />
                    <div style={{ width: '31.19px', height: '42.61px', left: '20.72px', top: '10.23px', position: 'absolute', background: '#C6B200' }} />
                    <div style={{ width: '12.56px', height: '51px', left: '29.93px', top: '6px', position: 'absolute', background: '#C6B200' }} />
                  </div>
                  <div style={{ width: '400px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '8px', display: 'inline-flex' }}>
                    <div style={{ color: '#6A6A6A', fontSize: '32px', fontFamily: 'Roboto', fontWeight: 400, wordWrap: 'break-word' }}>ZEPLIN</div>
                    <div style={{ alignSelf: 'stretch', height: '12px', position: 'relative' }}>
                      <div style={{ width: '400px', height: '4px', left: '0px', top: '4px', position: 'absolute', background: '#C4C4C4' }} />
                      <div style={{ width: '200px', height: '12px', left: '0px', top: '0px', position: 'absolute' }}>
                        <div style={{ width: '188px', height: '4px', left: '0px', top: '4px', position: 'absolute', background: '#DEC802' }} />
                        <div style={{ width: '12px', height: '12px', left: '188px', top: '0px', position: 'absolute', background: '#DEC802', borderRadius: '9999px' }} />
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ paddingLeft: '32px', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '40px', display: 'inline-flex' }}>
                  <div style={{ width: '64px', height: '64px', position: 'relative' }}>
                    <div style={{ width: '64px', height: '64px', left: '0px', top: '0px', position: 'absolute', background: '#DEC802' }} />
                    <div style={{ width: '43.46px', height: '36.87px', left: '11.67px', top: '12.43px', position: 'absolute', background: 'white' }} />
                  </div>
                  <div style={{ width: '400px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '8px', display: 'inline-flex' }}>
                    <div style={{ color: '#6A6A6A', fontSize: '32px', fontFamily: 'Roboto', fontWeight: 400, wordWrap: 'break-word' }}>INVISION</div>
                    <div style={{ alignSelf: 'stretch', height: '12px', position: 'relative' }}>
                      <div style={{ width: '400px', height: '4px', left: '0px', top: '4px', position: 'absolute', background: '#C4C4C4' }} />
                      <div style={{ width: '200px', height: '12px', left: '0px', top: '0px', position: 'absolute' }}>
                        <div style={{ width: '188px', height: '4px', left: '0px', top: '4px', position: 'absolute', background: '#DEC802' }} />
                        <div style={{ width: '12px', height: '12px', left: '188px', top: '0px', position: 'absolute', background: '#DEC802', borderRadius: '9999px' }} />
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ paddingLeft: '32px', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '40px', display: 'inline-flex' }}>
                  <div style={{ width: '64px', height: '64px', position: 'relative' }}>
                    <div style={{ width: '64px', height: '64px', left: '0px', top: '0px', position: 'absolute', background: '#DEC802' }} />
                    <div style={{ width: '13px', height: '13px', left: '20px', top: '31px', position: 'absolute', background: '#DEC802' }} />
                  </div>
                  <div style={{ width: '400px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '8px', display: 'inline-flex' }}>
                    <div style={{ color: '#6A6A6A', fontSize: '32px', fontFamily: 'Roboto', fontWeight: 400, wordWrap: 'break-word' }}>Abstract</div>
                    <div style={{ alignSelf: 'stretch', height: '12px', position: 'relative' }}>
                      <div style={{ width: '400px', height: '4px', left: '0px', top: '4px', position: 'absolute', background: '#C4C4C4' }} />
                      <div style={{ width: '200px', height: '12px', left: '0px', top: '0px', position: 'absolute' }}>
                        <div style={{ width: '188px', height: '4px', left: '0px', top: '4px', position: 'absolute', background: '#DEC802' }} />
                        <div style={{ width: '12px', height: '12px', left: '188px', top: '0px', position: 'absolute', background: '#DEC802', borderRadius: '9999px' }} />
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ paddingLeft: '32px', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '40px', display: 'inline-flex' }}>
                  <div style={{ width: '64px', height: '64px', position: 'relative' }}>
                    <div style={{ width: '45.38px', height: '63.12px', left: '9.31px', top: '0px', position: 'absolute', background: '#DEC802' }} />
                  </div>
                  <div style={{ width: '400px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '8px', display: 'inline-flex' }}>
                    <div style={{ color: '#6A6A6A', fontSize: '32px', fontFamily: 'Roboto', fontWeight: 400, wordWrap: 'break-word' }}>Principle</div>
                    <div style={{ alignSelf: 'stretch', height: '12px', position: 'relative' }}>
                      <div style={{ width: '400px', height: '4px', left: '0px', top: '4px', position: 'absolute', background: '#C4C4C4' }} />
                      <div style={{ width: '200px', height: '12px', left: '0px', top: '0px', position: 'absolute' }}>
                        <div style={{ width: '188px', height: '4px', left: '0px', top: '4px', position: 'absolute', background: '#DEC802' }} />
                        <div style={{ width: '12px', height: '12px', left: '188px', top: '0px', position: 'absolute', background: '#DEC802', borderRadius: '9999px' }} />
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ paddingLeft: '32px', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '40px', display: 'inline-flex' }}>
                  <div style={{ width: '64px', height: '64px', position: 'relative' }}>
                    <div style={{ width: '32px', height: '38px', left: '0px', top: '26px', position: 'absolute', background: '#FFEC45' }} />
                    <div style={{ width: '32px', height: '41px', left: '0px', top: '13px', position: 'absolute', background: '#C6B200' }} />
                    <div style={{ width: '64px', height: '64px', left: '0px', top: '0px', position: 'absolute', background: '#C6B200' }} />
                  </div>
                  <div style={{ width: '400px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '8px', display: 'inline-flex' }}>
                    <div style={{ color: '#6A6A6A', fontSize: '32px', fontFamily: 'Roboto', fontWeight: 400, wordWrap: 'break-word' }}>PROTOPIE</div>
                    <div style={{ alignSelf: 'stretch', height: '12px', position: 'relative' }}>
                      <div style={{ width: '400px', height: '4px', left: '0px', top: '4px', position: 'absolute', background: '#C4C4C4' }} />
                      <div style={{ width: '200px', height: '12px', left: '0px', top: '0px', position: 'absolute' }}>
                        <div style={{ width: '188px', height: '4px', left: '0px', top: '4px', position: 'absolute', background: '#DEC802' }} />
                        <div style={{ width: '12px', height: '12px', left: '188px', top: '0px', position: 'absolute', background: '#DEC802', borderRadius: '9999px' }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ width: '536px', height: '520px', left: '0px', top: '1589px', position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '80px', display: 'inline-flex' }}>
              <div style={{ justifyContent: 'flex-start', alignItems: 'flex-end', gap: '32px', display: 'inline-flex' }}>
                <div style={{ width: '64px', height: '64px', position: 'relative' }}>
                  <div style={{ width: '45.49px', height: '52.16px', left: '9.26px', top: '5.33px', position: 'absolute', border: '2.67px #6A6A6A solid' }} />
                </div>
                <div style={{ width: '260px', height: '59px', position: 'relative' }}>
                  <div style={{ left: '0px', top: '0px', position: 'absolute', color: '#6A6A6A', fontSize: '40px', fontFamily: 'Roboto', fontWeight: 400, textTransform: 'uppercase', wordWrap: 'break-word' }}>Other Tools</div>
                  <div style={{ width: '80px', height: '4px', left: '0px', top: '59px', position: 'absolute', background: '#DEC802' }} />
                </div>
              </div>
              <div style={{ width: '536px', height: '376px', position: 'relative' }}>
                <div style={{ width: '536px', height: '64px', paddingLeft: '32px', left: '0px', top: '0px', position: 'absolute', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '40px', display: 'inline-flex' }}>
                  <div style={{ width: '64px', height: '64px', position: 'relative' }}>
                    <div style={{ width: '54px', height: '63.85px', left: '5px', top: '0px', position: 'absolute', background: '#DEC802' }} />
                  </div>
                  <div style={{ width: '400px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '8px', display: 'inline-flex' }}>
                    <div style={{ color: '#6A6A6A', fontSize: '32px', fontFamily: 'Roboto', fontWeight: 400, wordWrap: 'break-word' }}>MAGENTO / ADOBE COMmERCE</div>
                    <div style={{ alignSelf: 'stretch', height: '12px', position: 'relative' }}>
                      <div style={{ width: '400px', height: '4px', left: '0px', top: '4px', position: 'absolute', background: '#C4C4C4' }} />
                      <div style={{ width: '200px', height: '12px', left: '0px', top: '0px', position: 'absolute' }}>
                        <div style={{ width: '188px', height: '4px', left: '0px', top: '4px', position: 'absolute', background: '#DEC802' }} />
                        <div style={{ width: '12px', height: '12px', left: '188px', top: '0px', position: 'absolute', background: '#DEC802', borderRadius: '9999px' }} />
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ width: '536px', height: '64px', paddingLeft: '32px', left: '0px', top: '104px', position: 'absolute', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '40px', display: 'inline-flex' }}>
                  <div style={{ width: '64px', height: '64px', position: 'relative' }}>
                    <div style={{ width: '64px', height: '44.80px', left: '0px', top: '53.80px', position: 'absolute', background: '#DEC802' }} />
                    <div style={{ width: '4.45px', height: '6.04px', left: '9.26px', top: '33.04px', position: 'absolute', background: 'white' }} />
                    <div style={{ width: '4.45px', height: '6.04px', left: '28.47px', top: '33.04px', position: 'absolute', background: 'white' }} />
                    <div style={{ width: '5.35px', height: '6px', left: '37.51px', top: '33.02px', position: 'absolute', background: 'white' }} />
                    <div style={{ width: '4.50px', height: '6px', left: '47.48px', top: '33.02px', position: 'absolute', background: 'white' }} />
                    <div style={{ width: '5.13px', height: '6px', left: '52.33px', top: '33.02px', position: 'absolute', background: 'white' }} />
                    <div style={{ width: '5.13px', height: '6px', left: '22.62px', top: '33.02px', position: 'absolute', background: 'white' }} />
                    <div style={{ width: '4.80px', height: '6.01px', left: '14.37px', top: '33.02px', position: 'absolute', background: 'white' }} />
                    <div style={{ width: '3.43px', height: '5.82px', left: '43.86px', top: '32.90px', position: 'absolute', background: 'white' }} />
                    <div style={{ width: '6.48px', height: '10.92px', left: '31.74px', top: '35.56px', position: 'absolute', background: 'white' }} />
                    <div style={{ width: '1.20px', height: '8.14px', left: '20.37px', top: '32.90px', position: 'absolute', background: 'white' }} />
                  </div>
                  <div style={{ width: '400px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '8px', display: 'inline-flex' }}>
                    <div style={{ color: '#6A6A6A', fontSize: '32px', fontFamily: 'Roboto', fontWeight: 400, wordWrap: 'break-word' }}>SALESFORCE CC - SFRA</div>
                    <div style={{ alignSelf: 'stretch', height: '12px', position: 'relative' }}>
                      <div style={{ width: '400px', height: '4px', left: '0px', top: '4px', position: 'absolute', background: '#C4C4C4' }} />
                      <div style={{ width: '200px', height: '12px', left: '0px', top: '0px', position: 'absolute' }}>
                        <div style={{ width: '188px', height: '4px', left: '0px', top: '4px', position: 'absolute', background: '#DEC802' }} />
                        <div style={{ width: '12px', height: '12px', left: '188px', top: '0px', position: 'absolute', background: '#DEC802', borderRadius: '9999px' }} />
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ width: '536px', height: '64px', paddingLeft: '32px', left: '0px', top: '208px', position: 'absolute', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '40px', display: 'inline-flex' }}>
                  <div style={{ width: '64px', height: '64px', position: 'relative' }}>
                    <div style={{ width: '29.90px', height: '29.73px', left: '30.67px', top: '6.86px', position: 'absolute', background: '#C6B200' }} />
                    <div style={{ width: '29.90px', height: '29.73px', left: '17.05px', top: '20.57px', position: 'absolute', background: '#C6B200' }} />
                    <div style={{ width: '29.91px', height: '29.73px', left: '3.43px', top: '34.27px', position: 'absolute', background: '#C6B200' }} />
                  </div>
                  <div style={{ width: '400px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '8px', display: 'inline-flex' }}>
                    <div style={{ color: '#6A6A6A', fontSize: '32px', fontFamily: 'Roboto', fontWeight: 400, wordWrap: 'break-word' }}>ATLASSIAN JIRA / COnfluencE</div>
                    <div style={{ alignSelf: 'stretch', height: '12px', position: 'relative' }}>
                      <div style={{ width: '400px', height: '4px', left: '0px', top: '4px', position: 'absolute', background: '#C4C4C4' }} />
                      <div style={{ width: '200px', height: '12px', left: '0px', top: '0px', position: 'absolute' }}>
                        <div style={{ width: '188px', height: '4px', left: '0px', top: '4px', position: 'absolute', background: '#DEC802' }} />
                        <div style={{ width: '12px', height: '12px', left: '188px', top: '0px', position: 'absolute', background: '#DEC802', borderRadius: '9999px' }} />
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ width: '536px', height: '64px', paddingLeft: '32px', left: '0px', top: '312px', position: 'absolute', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '40px', display: 'inline-flex' }}>
                  <div style={{ width: '64px', height: '64px', position: 'relative' }}>
                    <div style={{ width: '64px', height: '64px', left: '-0px', top: '-0px', position: 'absolute' }}>
                      <div style={{ width: '29.87px', height: '29.87px', left: '0px', top: '0px', position: 'absolute', background: '#C6B200' }} />
                      <div style={{ width: '29.87px', height: '29.87px', left: '34.13px', top: '0px', position: 'absolute', background: '#C6B200' }} />
                      <div style={{ width: '29.87px', height: '29.87px', left: '34.13px', top: '34.13px', position: 'absolute', background: '#F3DB00' }} />
                      <div style={{ width: '29.87px', height: '29.87px', left: '0px', top: '34.13px', position: 'absolute', background: '#FFEC45' }} />
                    </div>
                  </div>
                  <div style={{ width: '400px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '8px', display: 'inline-flex' }}>
                    <div style={{ color: '#6A6A6A', fontSize: '32px', fontFamily: 'Roboto', fontWeight: 400, wordWrap: 'break-word' }}>slack</div>
                    <div style={{ alignSelf: 'stretch', height: '12px', position: 'relative' }}>
                      <div style={{ width: '400px', height: '4px', left: '0px', top: '4px', position: 'absolute', background: '#C4C4C4' }} />
                      <div style={{ width: '200px', height: '12px', left: '0px', top: '0px', position: 'absolute' }}>
                        <div style={{ width: '188px', height: '4px', left: '0px', top: '4px', position: 'absolute', background: '#DEC802' }} />
                        <div style={{ width: '12px', height: '12px', left: '188px', top: '0px', position: 'absolute', background: '#DEC802', borderRadius: '9999px' }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img style={{ width: '640px', height: '721px', left: '120px', top: '120px', position: 'absolute' }} src="https://via.placeholder.com/640x721" />

        </div>
      </div>
      <div ref={contentRef1}>
        <div style={{ width: '2480px', height: '3808px', position: 'relative', background: 'white' }}>
          <div style={{ width: '3148px', height: '16px', left: '1577px', top: '3148px', position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', background: '#DEC802' }} />
          <div style={{ width: '104px', height: '122px', left: '2352px', top: '3386px', position: 'absolute' }}>
            <div style={{ width: '122px', height: '104px', left: '0px', top: '122px', position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', background: '#DEC802' }} />
            <div style={{ left: '24px', top: '40px', position: 'absolute' }}><span style={{ color: 'white', fontSize: '36px', fontFamily: 'Roboto', fontWeight: 500, wordWrap: 'break-word' }}>2</span><span style={{ color: '#6A6A6A', fontSize: '36px', fontFamily: 'Roboto', fontWeight: 500, wordWrap: 'break-word' }}>/2</span></div>
          </div>
          <div style={{ left: '160px', top: '240px', position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '140px', display: 'inline-flex' }}>
            <div style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '48px', display: 'flex' }}>
              <div style={{ width: '1329px', height: '77px', position: 'relative' }}>
                <div style={{ left: '0px', top: '0px', position: 'absolute', color: '#6A6A6A', fontSize: '48px', fontFamily: 'Roboto', fontWeight: 500, textTransform: 'uppercase', wordWrap: 'break-word' }}>Education</div>
                <div style={{ width: '120px', height: '4px', left: '0px', top: '76px', position: 'absolute', background: '#DEC802' }} />
              </div>
              <div style={{ width: '1331px', height: '190px', position: 'relative' }}>
                <div style={{ width: '1307px', left: '0px', top: '0px', position: 'absolute', color: 'black', fontSize: '30px', fontFamily: 'Roboto', fontWeight: 700, lineHeight: '42px', letterSpacing: '1.50px', wordWrap: 'break-word' }}>Matric ( 2012-14) CITY MODEL HIGH SCHOOL ELLAH ABAD</div>
                <div style={{ width: '1331px', height: '108px', paddingLeft: '24px', left: '0px', top: '82px', position: 'absolute', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '10px', display: 'inline-flex' }}>
                  <div style={{ width: '1307px', color: 'black', fontSize: '26px', fontFamily: 'Roboto', fontWeight: 400, lineHeight: '54px', letterSpacing: '1.30px', wordWrap: 'break-word' }}>Graduated from City Model High School, Ellahabad with a Matric degree, earning 936 out of 1050 marks. Demonstrated strong academic performance and a commitment to education.</div>
                </div>
              </div>
              <div style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '24px', display: 'flex' }}>
                <div style={{ width: '1307px', color: 'black', fontSize: '30px', fontFamily: 'Roboto', fontWeight: 700, lineHeight: '42px', letterSpacing: '1.50px', wordWrap: 'break-word' }}>ICS (2014-16)  GOVT COLLEGE UNIVERSITY LAHORE</div>
                <div style={{ paddingLeft: '24px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '24px', display: 'flex' }}>
                  <div style={{ width: '1307px', color: 'black', fontSize: '26px', fontFamily: 'Roboto', fontWeight: 400, lineHeight: '54px', letterSpacing: '1.30px', wordWrap: 'break-word' }}>Completed Intermediate in Computer Science degree from Government College University Lahore with a score of 806 out of 1100, demonstrating strong academic foundation and aptitude for computer science.</div>
                </div>
              </div>
              <div style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '24px', display: 'flex' }}>
                <div style={{ width: '1307px', color: 'black', fontSize: '30px', fontFamily: 'Roboto', fontWeight: 700, lineHeight: '42px', letterSpacing: '1.50px', wordWrap: 'break-word' }}>BACHELORS IN INFORMATION TECHNOLOGY (2016-20) QUAID I AZAM UNIVERSITY ISLAMABAD</div>
                <div style={{ paddingLeft: '24px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '24px', display: 'flex' }}>
                  <div style={{ width: '1307px', color: 'black', fontSize: '26px', fontFamily: 'Roboto', fontWeight: 400, lineHeight: '54px', letterSpacing: '1.30px', wordWrap: 'break-word' }}>Graduated with a Bachelor's degree in Information Technology from Quaid-i-Azam University Islamabad with a CGPA of 2.6 out of 4. Seeking opportunities to leverage academic knowledge and technical skills in a challenging work environment.</div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ left: '160px', top: '1159px', position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '48px', display: 'inline-flex' }}>
            <div style={{ width: '1329px', height: '77px', position: 'relative' }}>
              <div style={{ left: '0px', top: '0px', position: 'absolute', color: '#6A6A6A', fontSize: '48px', fontFamily: 'Roboto', fontWeight: 500, textTransform: 'uppercase', wordWrap: 'break-word' }}>Certification</div>
              <div style={{ width: '120px', height: '4px', left: '0px', top: '76px', position: 'absolute', background: '#DEC802' }} />
            </div>
            <div style={{ width: '1331px', height: '298px', position: 'relative' }}>
              <div style={{ width: '1307px', left: '0px', top: '0px', position: 'absolute', color: 'black', fontSize: '30px', fontFamily: 'Roboto', fontWeight: 700, lineHeight: '42px', letterSpacing: '1.50px', wordWrap: 'break-word' }}>Google professional ux certification</div>
              <div style={{ width: '1331px', height: '216px', paddingLeft: '24px', left: '0px', top: '82px', position: 'absolute', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '10px', display: 'inline-flex' }}>
                <div style={{ width: '1307px', color: 'black', fontSize: '26px', fontFamily: 'Roboto', fontWeight: 400, lineHeight: '54px', letterSpacing: '1.30px', wordWrap: 'break-word' }}>Hold a Google Professional UX certification from Coursera, demonstrating expertise in user-centered design principles, methodologies, and tools. Skilled in creating effective and user-friendly interfaces that meet business and user goals. Committed to providing exceptional user experiences and improving digital products.</div>
              </div>
            </div>
            <div style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '24px', display: 'flex' }}>
              <div style={{ width: '1307px', color: 'black', fontSize: '30px', fontFamily: 'Roboto', fontWeight: 700, lineHeight: '42px', letterSpacing: '1.50px', wordWrap: 'break-word' }}>UX FUNDAMENTALS</div>
              <div style={{ paddingLeft: '24px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '24px', display: 'flex' }}>
                <div style={{ width: '1307px', color: 'black', fontSize: '26px', fontFamily: 'Roboto', fontWeight: 400, lineHeight: '54px', letterSpacing: '1.30px', wordWrap: 'break-word' }}>Completed UX Fundamentals course on LinkedIn, gaining in-depth knowledge of user-centered design principles, methodologies, and tools. Skilled in conducting user research, creating wireframes and prototypes, and evaluating design solutions. Committed to using a user-centered approach to design digital products that meet user needs and improve the user experience.</div>
              </div>
            </div>
            <div style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '24px', display: 'flex' }}>
              <div style={{ width: '1307px', color: 'black', fontSize: '30px', fontFamily: 'Roboto', fontWeight: 700, lineHeight: '42px', letterSpacing: '1.50px', wordWrap: 'break-word' }}>Web design and development</div>
              <div style={{ paddingLeft: '24px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '24px', display: 'flex' }}>
                <div style={{ width: '1307px', color: 'black', fontSize: '26px', fontFamily: 'Roboto', fontWeight: 400, lineHeight: '54px', letterSpacing: '1.30px', wordWrap: 'break-word' }}>Completed a Web Design and Development course from PI Technical Institute, Bhara Kahu. Acquired hands-on experience in creating and maintaining websites using modern web design technologies. Skilled in HTML, CSS, JavaScript, and content management systems. Adept at creating visually appealing and user-friendly websites that meet business and user goals.</div>
              </div>
            </div>
          </div>
          <div style={{ left: '160px', top: '2312px', position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '48px', display: 'inline-flex' }}>
            <div style={{ width: '1329px', height: '77px', position: 'relative' }}>
              <div style={{ left: '0px', top: '0px', position: 'absolute', color: '#6A6A6A', fontSize: '48px', fontFamily: 'Roboto', fontWeight: 500, textTransform: 'uppercase', wordWrap: 'break-word' }}>Technical skilss</div>
              <div style={{ width: '120px', height: '4px', left: '0px', top: '76px', position: 'absolute', background: '#DEC802' }} />
            </div>
            <div style={{ paddingLeft: '24px', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '10px', display: 'inline-flex' }}>
              <div style={{ width: '1307px', color: 'black', fontSize: '26px', fontFamily: 'Roboto', fontWeight: 400, lineHeight: '54px', letterSpacing: '1.30px', wordWrap: 'break-word' }}>Wireframing and prototyping tools: such as Sketch, Figma, Adobe XD<br />User research tools: such as Google Analytics, UserTesting, Hotjar<br />Design tools: such as Adobe Creative Suite (Photoshop, Illustrator), Sketch, Figma<br />HTML/CSS: proficiency in front-end development and website creation<br />Interaction design: the ability to design and create animations and interactions that enhance the user experience<br />Mobile design: knowledge of design principles and techniques for mobile devices<br />Accessibility: the ability to design products that are accessible to users with disabilities<br />Usability testing: the ability to conduct user testing to evaluate design solutions<br />Agile development: familiarity with Agile methodologies and experience working in cross-functional teams<br />Content management systems: experience with popular CMS platforms such as WordPress, Drupal, Joomla, etc.<br />Cross-browser compatibility: the ability to ensure that designs look and function correctly on different browsers and devices.</div>
            </div>
          </div>
          <div style={{ left: '1719px', top: '1848px', position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '80px', display: 'inline-flex' }}>
            <div style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '48px', display: 'flex' }}>
              <div style={{ justifyContent: 'flex-start', alignItems: 'flex-end', gap: '32px', display: 'inline-flex' }}>
                <div style={{ width: '64px', height: '64px', position: 'relative' }}>
                  <div style={{ width: '21.33px', height: '34.67px', left: '21.33px', top: '5.33px', position: 'absolute', border: '2.67px #6A6A6A solid' }} />
                  <div style={{ width: '32px', height: '7.22px', left: '16px', top: '43.45px', position: 'absolute', border: '2.67px #6A6A6A solid' }} />
                  <div style={{ width: '0px', height: '8px', left: '32px', top: '50.67px', position: 'absolute', border: '2.67px #6A6A6A solid' }} />
                  <div style={{ width: '10.67px', height: '0px', left: '26.67px', top: '58.67px', position: 'absolute', border: '2.67px #6A6A6A solid' }} />
                </div>
                <div style={{ width: '229px', height: '59px', position: 'relative' }}>
                  <div style={{ left: '0px', top: '0px', position: 'absolute', color: '#6A6A6A', fontSize: '40px', fontFamily: 'Roboto', fontWeight: 400, textTransform: 'uppercase', wordWrap: 'break-word' }}>Languages</div>
                  <div style={{ width: '80px', height: '4px', left: '0px', top: '59px', position: 'absolute', background: '#DEC802' }} />
                </div>
              </div>
              <div style={{ width: '567px', color: 'black', fontSize: '40px', fontFamily: 'Roboto', fontWeight: 400, lineHeight: '80px', wordWrap: 'break-word' }}>English ( Intermediate)<br />Urdu (Expert)</div>
            </div>
            <div style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '48px', display: 'flex' }}>
              <div style={{ justifyContent: 'flex-start', alignItems: 'flex-end', gap: '32px', display: 'inline-flex' }}>
                <div style={{ width: '64px', height: '64px', position: 'relative' }}>
                  <div style={{ width: '37.33px', height: '37.33px', left: '13.33px', top: '5.33px', position: 'absolute', border: '2.67px #6A6A6A solid' }} />
                  <div style={{ width: '16px', height: '13.33px', left: '24px', top: '45.33px', position: 'absolute', border: '2.67px #6A6A6A solid' }} />
                  <div style={{ width: '9.33px', height: '20px', left: '5.33px', top: '10.67px', position: 'absolute', border: '2.67px #6A6A6A solid' }} />
                  <div style={{ width: '9.33px', height: '20px', left: '49.33px', top: '10.67px', position: 'absolute', border: '2.67px #6A6A6A solid' }} />
                </div>
                <div style={{ width: '151px', height: '59px', position: 'relative' }}>
                  <div style={{ left: '0px', top: '0px', position: 'absolute', color: '#6A6A6A', fontSize: '40px', fontFamily: 'Roboto', fontWeight: 400, textTransform: 'uppercase', wordWrap: 'break-word' }}>Others</div>
                  <div style={{ width: '80px', height: '4px', left: '0px', top: '59px', position: 'absolute', background: '#DEC802' }} />
                </div>
              </div>
              <div style={{ width: '567px', color: 'black', fontSize: '40px', fontFamily: 'Roboto', fontWeight: 400, lineHeight: '80px', wordWrap: 'break-word' }}>Driving license<br />Own vehicle</div>
            </div>
            <div style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '48px', display: 'flex' }}>
              <div style={{ justifyContent: 'flex-start', alignItems: 'flex-end', gap: '32px', display: 'inline-flex' }}>
                <div style={{ width: '64px', height: '64px', position: 'relative' }}>
                  <div style={{ width: '53.33px', height: '53.33px', left: '5.33px', top: '5.33px', position: 'absolute', border: '2.67px #6A6A6A solid' }} />
                  <div style={{ width: '0.03px', height: '0px', left: '32px', top: '18.67px', position: 'absolute', border: '2.67px #6A6A6A solid' }} />
                  <div style={{ width: '5.33px', height: '13.33px', left: '26.67px', top: '29.33px', position: 'absolute', border: '2.67px #6A6A6A solid' }} />
                  <div style={{ width: '10.67px', height: '0px', left: '26.67px', top: '42.67px', position: 'absolute', border: '2.67px #6A6A6A solid' }} />
                </div>
                <div style={{ width: '180px', height: '59px', position: 'relative' }}>
                  <div style={{ left: '0px', top: '0px', position: 'absolute', color: '#6A6A6A', fontSize: '40px', fontFamily: 'Roboto', fontWeight: 400, textTransform: 'uppercase', wordWrap: 'break-word' }}>Contact</div>
                  <div style={{ width: '80px', height: '4px', left: '0px', top: '59px', position: 'absolute', background: '#DEC802' }} />
                </div>
              </div>
              <div style={{ width: '567px', color: 'black', fontSize: '40px', fontFamily: 'Roboto', fontWeight: 400, lineHeight: '80px', wordWrap: 'break-word' }}>abdulmanan0771@gmail.com<br />+92-324-8505324</div>
            </div>
          </div>
          <div style={{ left: '1719px', top: '278px', position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '80px', display: 'inline-flex' }}>
            <div style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '48px', display: 'flex' }}>
              <div style={{ justifyContent: 'flex-start', alignItems: 'flex-end', gap: '32px', display: 'inline-flex' }}>
                <div style={{ width: '234px', height: '59px', position: 'relative' }}>
                  <div style={{ left: '0px', top: '0px', position: 'absolute', color: '#6A6A6A', fontSize: '40px', fontFamily: 'Roboto', fontWeight: 400, textTransform: 'uppercase', wordWrap: 'break-word' }}>Soft Skills</div>
                  <div style={{ width: '80px', height: '4px', left: '0px', top: '59px', position: 'absolute', background: '#DEC802' }} />
                </div>
              </div>
              <div style={{ width: '567px', color: 'black', fontSize: '40px', fontFamily: 'Roboto', fontWeight: 400, lineHeight: '80px', wordWrap: 'break-word' }}>Empathy<br />Communication<br />Collaboration<br />Adaptability<br />Problem-Solving<br />Attention to Detail<br />Time Management<br />Initiative<br />Presentation skill<br />Creativity<br />Critical Thinking<br />Negotiation skills<br />Project Management<br />Testing and validation<br />User Research<br />Flexibility<br />Interpersonal skills</div>
            </div>
          </div>
        </div></div>
      <button className='w-[80px] h-[40px] rounded-md font-juneauBold bg-green' onClick={handleDownloadPDF}>Generate</button>
    </>
  );
}

export default App;
