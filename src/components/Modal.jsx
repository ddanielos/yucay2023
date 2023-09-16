import Image from 'next/image'

const Modal = (props) => {
  const handleModalDialogClick = (e) => {
    e.stopPropagation();
  }

  return (
    <>
      <div className=" w-[100vw] h-[100vh] bg-[rgba(0,0,0,0.85)] fixed top-0 left-0 z-100 grid content-center items-center" onClick={props.closeModal}>
        <div className=" bg-primary-color p-2 w-[95vw] h-[95vh] max-w-[1000px] max-h-[700px] flex flex-row items-center content-around m-auto" onClick={handleModalDialogClick}>
          {
            props.typeInsta === "VIDEO"?
              <video className="ml-[-40px] h-[80vh] max-h-[600px] max-w-[600px] object-cover border-black border-4 border-solid " controls autoPlay={true}><source src={props.imageInstaURL} type="video/mp4"/></video>
            :
              <img className="ml-[40px] h-[80vh] max-h-[600px] max-w-[600px] object-cover border-black border-4 border-solid" src={props.imageInstaURL} alt=""/>
          }
          <div>
            <p className="p-[30px] font-roboto font-bold tracking-wider leading-6 text-justify">{props.imageInstaCaption}</p>
            <a className="ml-[20px] max-w-[200px] p-[10px] flex flex-row items-center content-center font-roboto font-bold cursor-pointer visited:text-black hover:text-shadow-sm shadow-gray-400 transition-all" href={props.permalink} target="_blank" rel="noreferrer">
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