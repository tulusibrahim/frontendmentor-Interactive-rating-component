import './App.css';
import star from './images/icon-star.svg'
import thanks from './images/illustration-thank-you.svg'
import React, { useState } from 'react';

function App() {
  const [thank, setThank] = useState(false)
  const [rate, setRate] = useState(0)
  return (
    <div className="flex justify-center items-center h-screen w-screen" style={{ backgroundColor: 'hsl(216, 12%, 8%)' }}>
      <div className=' h-fit w-5/6 md:w-1/4 lg:w-1/4 p-5 rounded-2xl flex justify-start items-center flex-col' style={{ backgroundColor: '#1F2630', color: 'white' }}>
        {
          thank ?
            <div className='flex justify-center flex-col'>
              <img src={thanks} alt="" className='w-2/4 self-center my-2' />
              <div className=' w-full my-3 flex justify-center'>
                <div className='text-center rounded-full bg-bg-rating w-3/4 p-2 text-btn-orange'>
                  You selected {rate} out of 5
                </div>
              </div>
              <div className='text-center w-full font-bold text-xl tracking-wide'>
                Thank you!
              </div>
              <div className='text-center w-full' style={{ color: 'hsl(217, 12%, 63%)' }}>
                We appreciate you taking the time to give a rating. If you ever need a support, don't hesitate to get in touch!
              </div>
            </div>
            :
            <>
              <div className='rounded-full w-8 h-8 flex justify-center items-center self-start my-2' style={{ backgroundColor: '#272E38' }}>
                <img src={star} alt="" />
              </div>
              <div className='font-bold w-full text-xl py-2'>
                How did we do?
              </div>
              <div className='w-full' style={{ color: 'hsl(217, 12%, 63%)' }}>
                Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
              </div>
              <div className='flex flex-row my-3 justify-between w-full'>
                <button onClick={() => setRate(1)} className='active:bg-btn-orange rounded-full mx-1 w-8 h-8 flex justify-center items-center bg-bg-rating hover:bg-rating-hover cursor-pointer'>
                  1
                </button>
                <button onClick={() => setRate(2)} className='active:bg-btn-orange rounded-full mx-1 w-8 h-8 flex justify-center items-center bg-bg-rating hover:bg-rating-hover cursor-pointer'>
                  2
                </button>
                <button onClick={() => setRate(3)} className='active:bg-btn-orange rounded-full mx-1 w-8 h-8 flex justify-center items-center bg-bg-rating hover:bg-rating-hover cursor-pointer'>
                  3
                </button>
                <button onClick={() => setRate(4)} className='active:bg-btn-orange rounded-full mx-1 w-8 h-8 flex justify-center items-center bg-bg-rating hover:bg-rating-hover cursor-pointer'>
                  4
                </button>
                <button onClick={() => setRate(5)} className='active:bg-btn-orange rounded-full mx-1 w-8 h-8 flex justify-center items-center bg-bg-rating hover:bg-rating-hover cursor-pointer'>
                  5
                </button>
              </div>
              <button onClick={() => setThank(true)} className='rounded-full tracking-widest w-3/5 flex justify-center py-2 mt-2 bg-btn-orange hover:bg-btn-hover hover:text-btn-orange duration-150'>
                SUBMIT
              </button>
            </>
        }
      </div>
    </div>
  );
}

export default App;
