'use client'
import Image from 'next/image'
import { useEffect } from 'react'
import CloseButton from './CloseButton'

const Modal = (props) => {
  const { closeModal } = props;

  const handleModalDialogClick = (e) => {
    e.stopPropagation();
  }
  useEffect(() => {
    const blockNavigation = () => {
      history.pushState(null, null, location.href);
      window.onpopstate = function () {
        history.go(1);
      };
    };

    blockNavigation();

    return () => {
      window.onpopstate = null;
    };
  },[])

  return (
    <>
      <div className=" w-[100vw] h-[100vh] bg-[rgba(0,0,0,0.85)] fixed top-0 left-0 z-100 grid content-center items-center" onClick={props.closeModal}>
      <CloseButton closeModal={closeModal}/>
        <div className="bg-primary-color p-2 w-[95vw] h-[65vh] md:h-[95vh] max-w-[96%] max-h-[96%] md:max-w-[1000px] md:max-h-[700px] md:flex md:flex-row items-center md:content-around m-auto" onClick={handleModalDialogClick}>
          {
            props.typeInsta === "VIDEO"?
              <video className="mt-5 m-auto md:ml-[40px] w-[80vw] max-w-[95%] md:h-[80vh] md:max-h-[600px] md:max-w-[600px] object-cover border-black border-4 border-solid " controls autoPlay={true}><source src={props.imageInstaURL} type="video/mp4"/></video>
            :
              <img className="mt-5 m-auto md:ml-[40px] w-[80vw] max-w-[95%] md:h-[80vh] md:max-h-[600px] md:max-w-[600px] object-cover border-black border-4 border-solid" src={props.imageInstaURL} alt=""/>
          }
          <div>
            <p className="hidden md:block p-[30px] font-roboto font-bold tracking-wider leading-6 text-justify">{props.imageInstaCaption}</p>
            <a className="m-auto mt-4 md:mt-0 md:ml-[20px] max-w-[200px] p-[10px] flex flex-row items-center content-center font-roboto font-bold cursor-pointer visited:text-black hover:text-shadow-sm shadow-gray-400 transition-all" href={props.permalink} target="_blank" rel="noreferrer">
              <Image className=" mr-2.5" src="/assets/instagram.png" alt="instagram" width={40} height={40}/>
              Ver en Instagram
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal;