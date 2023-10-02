import logo from './hederlogo.png'
import logo1 from './headerlogo1.png'
import './App.css';
function Header() {
    return (
      <>
        <div className="flex gap-4 justify-around h-[60px] bg-green-400 border-b-[5px] border-red-200 text-center">
                    <ul className="text-center flex gap-4 mt-[20px]">
                        <li className="text-center"><a href="#" className="text-center cursor-pointer hover:text-red-400">Home</a></li>
                        <li className="text-center"><a href="#" className="text-center cursor-pointer hover:text-red-400">Contact Us</a></li>
                        <li className="text-center"><a href="#" className="text-center cursor-pointer hover:text-red-400">About WDA</a></li>
                        <li className="text-center"><a href="#" className="text-center cursor-pointer hover:text-red-400">Make a Donation</a></li>
                    </ul>

                    <ul className="text-center flex gap-4 mt-[15px]">
                        <li className="text-center"><a href="#" class="fa fa-facebook rounded"></a></li>
                        <li className="text-center"><a href="#" class="fa fa-twitter rounded"></a></li>
                        <li className="text-center"><a href="#" class="fa fa-google rounded"></a></li>
                        <li className="text-center"><a href="#" class="fa fa-linkedin rounded"></a></li>
                    </ul>
                    <div className=" flex  mt-[20px]">
                        <button type="submit" className="mt-[-14px]"><i class="fa fa-search "></i></button>
                       <input type="search" className="w-[250px] h-[20px] outline-none" placeholder="Search..."  />
                    </div>
        </div>
        <div className="h-[180px] border-b-2 border-red-200 ">
              <div className="h-[150px] flex justify-around ">
                  <img src={logo} className='h-[70px] w-[300px] mt-[50px] ' />
                  <div className='flex gap-8 mt-[10px]'>
                      <button className='border-[1px] border-black h-[40px] w-[200px] mt-[54px] bg-orange-400 text-white rounded-lg hover:bg-purple-900'>Make a Donation</button>
                      <img src={logo} className='h-[50px] w-[200px] mt-[50px]' />
                  </div>
              </div>
              <div className=" flex gap-8 justify-center">
                  <div className="dropdown">
                    <p className="cursor-pointer hover:text-red-400 font-bold">DO I HAVE WILSON DISEASE?<i class="fa fa-angle-down"></i></p>
                     <div className="menubar border-2 h-[220px] bg-amber-400">
                      <a href="" className="block ml-[5px] p-[5px] text-white hover:bg-indigo-500">SIGNS&SYMPTOMS</a>
                      <a href="" className="block ml-[5px] p-[5px] text-white hover:bg-indigo-500 ">DIAGNOSIS</a>
                      <a href="" className="block ml-[5px] p-[5px] text-white hover:bg-indigo-500 ">FAMILY GENETICS</a>
                      <a href="" className="block ml-[5px] p-[5px] text-white hover:bg-indigo-500 ">KAYSER-FLEISCHER RINGS</a>
                      <a href="" className="block ml-[5px] p-[5px] text-white hover:bg-indigo-500 ">MYSTERY SYMPTOMS</a>
                     </div>
                  </div>
                  <div className="dropdown ">
                      <p className=" cursor-pointer hover:text-red-400 block font-bold">LIVING WITH WILSON DISEASE<i class="fa fa-angle-down"></i></p>
                      <div className="menubar border-2 h-[390px] bg-amber-400">
                      <a href="" className="block ml-[5px] p-[5px] text-white hover:bg-indigo-500">COPPER CONSCIOUS EATING</a>
                      <a href="" className="block ml-[5px] p-[5px] text-white hover:bg-indigo-500 ">TREATMENT</a>
                      <a href="" className="block ml-[5px] p-[5px] text-white hover:bg-indigo-500 ">CENTER OF EXCELLENCE</a>
                      <a href="" className="block ml-[5px] p-[5px] text-white hover:bg-indigo-500 ">PATIENT REGISTRY STUDY</a>
                      <a href="" className="block ml-[5px] p-[5px] text-white hover:bg-indigo-500 ">MONITORING YOUR TREATMENT</a>
                      <a href="" className="block ml-[5px] p-[5px] text-white hover:bg-indigo-500 ">PREGNANCY</a>
                      <a href="" className="block ml-[5px] p-[5px] text-white hover:bg-indigo-500 ">PATIENT ASSISTANCE</a>
                      <a href="" className="block ml-[5px] p-[5px] text-white hover:bg-indigo-500 ">NEW DIAGNNOSIS</a>
                      <a href="" className="block ml-[5px] p-[5px] text-white hover:bg-indigo-500 ">YOUTH</a>
                      </div>
                  </div>
                  <div className="dropdown">
                  <p className=" cursor-pointer hover:text-red-400 font-bold">MEDICAL PROFESSIONALS<i class="fa fa-angle-down"></i></p>
                  <div className="menubar border-2 h-[220px] bg-amber-400">
                      <a href="" className="block ml-[5px] p-[5px] text-white hover:bg-indigo-500">SIGNS&SYMPTOMS</a>
                      <a href="" className="block ml-[5px] p-[5px] text-white hover:bg-indigo-500 ">DIAGNOSIS</a>
                      <a href="" className="block ml-[5px] p-[5px] text-white hover:bg-indigo-500 ">FAMILY GENETICS</a>
                      <a href="" className="block ml-[5px] p-[5px] text-white hover:bg-indigo-500 ">KAYSER-FLEISCHER RINGS</a>
                      <a href="" className="block ml-[5px] p-[5px] text-white hover:bg-indigo-500 ">MYSTERY SYMPTOMS</a>
                     </div>
                  </div>
                  <div className="dropdown">
                  <p className=" cursor-pointer hover:text-red-400 font-bold">RESOURCE CENTER<i class="fa fa-angle-down"></i></p>
                  <div className="menubar border-2 h-[220px] bg-amber-400">
                      <a href="" className="block ml-[5px] p-[5px] text-white hover:bg-indigo-500">SIGNS&SYMPTOMS</a>
                      <a href="" className="block ml-[5px] p-[5px] text-white hover:bg-indigo-500 ">DIAGNOSIS</a>
                      <a href="" className="block ml-[5px] p-[5px] text-white hover:bg-indigo-500 ">FAMILY GENETICS</a>
                      <a href="" className="block ml-[5px] p-[5px] text-white hover:bg-indigo-500 ">KAYSER-FLEISCHER RINGS</a>
                      <a href="" className="block ml-[5px] p-[5px] text-white hover:bg-indigo-500 ">MYSTERY SYMPTOMS</a>
                     </div>
                  </div>
                  <div className="dropdown">
                  <p className=" cursor-pointer hover:text-red-400 font-bold">GET INVOLVED<i class="fa fa-angle-down"></i></p>
                  <div className="menubar border-2 h-[220px] bg-amber-400">
                      <a href="" className="block ml-[5px] p-[5px] text-white hover:bg-indigo-500">SIGNS&SYMPTOMS</a>
                      <a href="" className="block ml-[5px] p-[5px] text-white hover:bg-indigo-500 ">DIAGNOSIS</a>
                      <a href="" className="block ml-[5px] p-[5px] text-white hover:bg-indigo-500 ">FAMILY GENETICS</a>
                      <a href="" className="block ml-[5px] p-[5px] text-white hover:bg-indigo-500 ">KAYSER-FLEISCHER RINGS</a>
                      <a href="" className="block ml-[5px] p-[5px] text-white hover:bg-indigo-500 ">MYSTERY SYMPTOMS</a>
                     </div>
                  </div>
              </div>
        </div>
      </>
    );
  }
  
  export default Header;