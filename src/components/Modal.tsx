import { useState } from "react"
import Button from '@/components/Button';
import { MouseEvent } from 'react';

interface Props {
  show: Boolean;
  title: string;
  setShow: Function;
  content: React.JSX.Element;
  // submit:(event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Modal({ show, setShow, title, content}: Props) {
  const closeForm = () => {
    setShow();
  }

  return (
    show ? (
      <div className='modal flex flex-col space-y-4' >
        <div onClick={closeForm} className='z-[99] fixed inset-0 bg-gray-300 bg-opacity-50 w-[100%] h-[100%]'></div>
        <div className='z-[99] card bg-white absolute left-[25%] top-[25%] w-3/6 m-auto'>

          <div className='title m-1'>
            <h2 className=' text-center text-xl text-[#1D3557] font-bold'>{title}
            </h2>
          </div>
          <div className='content flex flex-col w-[80%] m-auto'>
            {content}
          </div>
        {/* <div className='button w-[20%] m-auto mt-3'>
          <Button text="Submit" handleClick={submit} />
        </div> */}
        </div>
      </div>) :
      <div></div>
  )

}