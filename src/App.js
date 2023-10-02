import logo from './footerlogo.png';
import './App.css';
import './index.css';
import image from './images.jpeg';
function App() {
  let link="Medical Professionals";
  return (
    <>
    <div className='flex justify-around'>
      <div className='image  h-[300px] w-[1300px] mt-[30px] rounded-tr-[20px] rounded-br-[20px] rounded-tl-[20px]'>
        <p className='text-[60px] font-bold text-white mt-[100px] ml-[40px]'>{link}</p>
      </div>
    </div>
    <div className='flex gap-[70px] justify-center mt-[30px]'>
      <div className='flex flex-col justify-around ml-[-23px] border-2 h-[290px] w-[250px] menu rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px]'>
        <a href='' className='ml-[30px] bg-orange-400 w-[200px] p-[5px] rounded-lg '>Medical Professionals</a>
        <a href='' className='ml-[30px]'>Signs and Symptoms</a>
        <a href='' className='ml-[30px]'>Diagnosis</a>
        <a href='' className='ml-[30px]'>Treatment</a>
        <a href='' className='ml-[30px]'>Monitoring Treatment</a>
        <a href='' className='ml-[30px]'>Medication Compliance</a>
        <a href='' className='ml-[30px]'>Other Therapies</a>
      </div>
      <div>
        <h1 className='text-orange-400 text-[40px]'>Medical Professionals</h1>
          <div className=' w-[950px] mt-[30px]'>
            <p className='text-[18px]'>This section provides basic information and resources about Wilson disease for medical professionals who may not<br/> have experience diagnosing and treating patients with the disease.  It is extremely important to diagnose and begin<br/> treatment of this rare disease as quickly as possible to avoid permanent damage to the liver, brain, and other organs.</p>
            <p className='text-[18px]'>Testing for Wilson disease should be done in patients who have:</p>
            <ul className='mt-[20px] ml-[60px]'>
              <li className='text-[16px] list-disc'>Unexplained abnormal liver function tests</li>
              <li className='text-[16px] list-disc'>Unexplained neurological symptoms</li>
              <li className='text-[16px] list-disc'>Unexplained psychiatric symptoms or behavioral and personality changes</li>
              <li className='text-[16px] list-disc'>Unexplained hemolytic anemia</li>
            </ul>
            <h1 className='font-bold text-[18px] mt-[20px]'>Physicians at our<a href='' className='text-cyan-500 hover:text-black'> Centers of Excellence</a> are willing to consult with physicians that had limited or no experience with Wilson disease.</h1>
          </div>
      </div>
    </div>
           <div className="flex  justify-center mt-[30px]">
              <img src={image} alt="image" className='h-[600px] w-[600px] rounded-tl-[20px]' />
              <div className='h-[600px] w-[700px] border-2 rounded-tr-[20px] menu '>
                <div className='text-center mt-[90px]'>
                   <h1 className=' tracking-[6px] text-orange-600'>WILSON DISEASE ASSOCIATION</h1>
                    <h1 className='mt-[25px] text-[50px] font-bold text-orange-300'>Contact Us</h1>
                  </div>
                <ul className='mt-[30px] flex flex-col gap-4 justfy-center ml-[150px]'>
                  <li className='text-[20px] tracking-[2px]'><i className='fa fa-phone bg-orange-400 text-white rounded-full mr-[20px]'></i>Toll Free: 866-961-0533</li>
                  <li className='text-[20px] tracking-[2px]'><i className='fa fa-phone bg-orange-400 text-white rounded-full mr-[20px]'></i>Phone: 414-961-0533</li>
                  <li className='text-[20px] tracking-[2px]'><i className='fa fa-envelope bg-orange-400 text-white rounded-full mr-[20px]'></i>Email:<a href="mailto:info@wilsonsdisease.org" className='text-cyan-500 hover:text-black'>info@wilsonsdisease.org</a></li>
                </ul>
                  <div className='text-center mt-[40px]'>
                      <button className='h-[60px] w-[400px] border-[1px] border-black bg-orange-400 font-bold text-white text-[20px] rounded hover:bg-purple-900'>More Ways to Contact Us</button>
                  </div>
              </div>
            </div>
            <footer className='h-[650px]  mt-[-50px]'>
              <div className='flex justify-center gap-10'>
                <div className='text-white w-[360px] mt-[90px]'>
                  <h1 className='font-bold'>Mailing address:</h1>
                  <p className='text-[17px]'>Wilson Disease Association<br/>224 W 35th St Ste 500<br/>#676<br/>New York, NY 10001</p>
                  <p className='mt-[10px]'>Phone: 414-961-0533<br/>Toll free: 866-961-0533</p><br/>
                   <a href='' className=''>info@wilsonsdisease.org</a>
                   <h1 className='font-bold mt-[10px]'>Follow us on social media</h1>
                   <ul className="text-center flex gap-4 mt-[15px]">
                        <li className="text-center"><a href="#" class="fa fa-facebook rounded"></a></li>
                        <li className="text-center"><a href="#" class="fa fa-twitter rounded"></a></li>
                        <li className="text-center"><a href="#" class="fa fa-google rounded"></a></li>
                        <li className="text-center"><a href="#" class="fa fa-linkedin rounded"></a></li>
                    </ul>
                </div>
                <div className='text-center text-white w-[360px] mt-[80px]'>
                    <p className='text-[22px] '>Wilson Disease Association is a Section 501(c)(3) nonprofit.</p>
                    <h1 className='text-[22px] mt-[30px]'>EIN 16-1154397</h1>
                    <img src={logo} className='h-[150px] w-[150px] ml-[110px] mt-[40px]'/>
                </div>
                <div className=' text-white w-[360px] mt-[80px]'>
                    <h1 className='text-[27px] text-white'>Subscribe to our newsletter</h1>
                    <button className='h-[40px] w-[200px] border-[1px] border-black bg-orange-400 font-bold text-white mt-[20px] rounded hover:bg-purple-900'>Join Our Mailing List!</button>
                    
                </div>
              </div>
              <div className='flex justify-center'>
                    <div className=' border-t-[1px] w-[1300px] mt-[80px] text-center text-white'>
                      <p className='mt-[30px] '>Privacy Policy and Terms of Use  Corporate Relations</p>
                      <p className='mt-[20px] text-[12px]'>©Copyright 2023 Wilson Disease Association | All Rights Reserved | Site Design and Development by Digital Dialogue, Inc.</p>
                    </div>
              </div>
            </footer>
    </>
  );
}

export default App;
