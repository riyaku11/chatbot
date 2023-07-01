import React from 'react'
import Dropdown from './components/Dropdown'
import Button from './components/Button';

const App = () => {

  const items = [
    { id: 1, name: 'Chat GPT' },
    { id: 2, name: 'Open AI' },
    { id: 3, name: 'Google Bard' },
  ];

  const items_1 = [
    { id: 1, name: 'Turbo (Default)' },
    { id: 2, name: 'Open AI' },
    { id: 3, name: 'Google Bard' },
  ];




  return (
    <div className=' p-2 bg-[#222623] flex flex-col w-[440px] h-100 fixed top-0 right-0 text-center content-center h-screen'>
    {/* header starts */}
    <div className=' p-1 flex flex-row mx-auto border-b border-slate-400 '>
      <div className=' mt-3 cursor-pointer'><img className='h-10 w-10' src="https://img.icons8.com/?size=512&id=6Q2SAdhaPhXM&format=png" alt="logo" srcset="" /></div>
      <div className='mt-3 p-2 ml-0  text-xl text-white font-semibold cursor-pointer'>Your.AI</div>

<div className="flex w-[270px]">
      <div className='ml-16 mt-6 cursor-pointer'><img className='h-7 w-7' src="https://img.icons8.com/?size=512&id=1Iw1563rY6Yj&format=png" alt="" srcset="" /></div>
      <div className='ml-4 mt-6 mr-3 cursor-pointer rounded-full hover:bg-slate-600'><img className='h-7 w-7 p-1' src="https://img.icons8.com/?size=512&id=Nt1QWkclVVhB&format=png" alt="" srcset="" /></div>
      <div className=' max-w-xl ml-3 mt-6 mr-1 text-[10px] text-white font-semibold hover:underline w-8 '><a href="www">Shortcut: <span className="flex">alt+w</span></a></div>
      <div className=' ml-8 mt-6 rounded-full hover:bg-slate-600 p-1'><img className='h-5 w-6 hover:cursor-pointer' src="https://img.icons8.com/?size=512&id=11997&format=png" alt="" srcset="" /></div>
      </div>
    </div>
    {/* header ends */}

    {/* dropdowns */}
    <div className='mt-4 mx-auto flex  '>
      <div className="mx-6 mb-3"><Dropdown items={items} heading="AI Provider"/></div>
      <div className="mx-6"><Dropdown items={items_1} heading="Model"/></div>
    </div>

    {/* chat section */}
    <div className='h-96'>
<div className='flex ml-20 mt-[330px] '>
<div className='mx-4'><Button cont="Regenerate" src="https://img.icons8.com/?size=512&id=59023&format=png"/></div>
    <div><Button cont="Continue" src="https://img.icons8.com/?size=512&id=63264&format=png"/></div>

</div>
    
    </div>
    {/* chat section ends  */}


    {/* input field  */}
    <div className=' flex flex-col border-[0.25px] border-white rounded-md overflow-hidden hover:bg-slate-300 hover:text-black' >
    <input type="text" placeholder='   Ask AI...' className=' bg-[#222623] text-white h-36 text-left border-bg-[#484d49]' />
    <div className='bg-[#222623] flex'> 
    <div className='mx-3 ml-32 my-2'><Button cont="Use Prompt" src="https://img.icons8.com/?size=512&id=HYV9SWXDR6HH&format=png"/></div>
    <div className='my-2'><div className="min-w-[5px] cursor-pointer py-4 max-h-2 max-w-[150px] overflow-hidden flex items-center bg-violet-500 hover:bg-slate-700 p-4 rounded-md border-violet-500 border-[2px]">
      <img
        src="https://img.icons8.com/?size=512&id=80625&format=png"
        alt="Card "
        className="w-6 h-6 rounded-full object-cover mr-2"
      />
      <div>
        <p className="text-sm text-white font-semibold">Generate</p>
      </div>
    </div></div>
    </div>
    </div>
    {/* input field ends */}

    <div className='flex '>
      <div className=' my-2 text-white text-xs hover:underline'><a href="gg">Contact Us</a></div>
      <div className='ml-16 my-2 text-white text-xs hover:underline'><a href="dfdfd">Your.AI.me v1.0.1 - New Prompts: Write & Draft with AI</a></div>

    </div>

    </div>
  )
}

export default App