'use client'
import { useState, useEffect } from 'react'
import Modal from './Modal'
import Image from 'next/image'


const TOKEN_IG = process.env.NEXT_PUBLIC_REACT_APP_TOKEN_INSTAGRAM;

async function fetchInstagram(){
  const response = await fetch(`https://graph.instagram.com/me/media?access_token=${TOKEN_IG}&fields=id, caption, media_type, media_url, permalink, thumbnail_url, timestamp, username`);
  const data = await response.json();
  //console.log(data)
  return data
}

function slimUpPosts(data){
  return data.map(node => {
    let caption = node.caption
    let media = node.media_type=="VIDEO"?node.thumbnail_url:node.media_url
    return {
      thumbnail: media,
      url: node.permalink,
      caption,
      id: node.id,
      media_url: node.media_url,
      type: node.media_type,
      permalink: node.permalink,
    }
  })
}

const Instagram = (props) => {
  const [data, setData] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [imageInstaURL, setImageInstaURL] = useState(false);
  const [imageInstaCaption, setImageInstaCaption] = useState(false);
  const [typeInsta, setTypeInsta] = useState(false);
  const [permalink, setPermalink] = useState(false);

  const openModal =  (caption, media_url, type, permalink) => {
    setImageInstaURL(media_url);
    setImageInstaCaption(caption);
    setTypeInsta(type);
    setPermalink(permalink);
    setModalOpen(true);
    let x = window.scrollX;
    let y = window.scrollY;
    window.onscroll = function(){window.scrollTo(x, y)};
  }
  const closeModal = () => {
    setModalOpen(false);
    window.onscroll = null;
  }

  useEffect(()=>{
    fetchInstagram().then((data)=> setData(data.data));
  },[])

  if(data === null){
    return <h2>Loading ...</h2>
  }

  if(data){
    const instaPosts = slimUpPosts(data)
    let images = [];
    for (let i=0; i<10; i++){
      images.push(instaPosts[i])
    }
    return(
      <div className='max-w-screen-2xl m-auto'>
        <div className="flex flex-row flex-wrap m-auto content-center pt-12 w-full">
          {images.map(({ thumbnail, caption, media_url, type, permalink}, index) => {
            return(
                <div className="m-1 bg-black p-1 w-[286px] h-[286px] flex flex-col transition-all hover:translate-y-[-3px] hover:shadow-[0px_10px_15px_-5px_rgb(76,75,16)] " key={index}>
                  <img className="max-h-full object-cover object-center" key={index} src={thumbnail} onClick={(e)=> openModal(caption, media_url, type, permalink, e)} alt="instagram"/>
                  {/*<Image key={index} src={thumbnail} onClick={(e)=> openModal(caption, media_url, type, permalink, e)} alt="instagram" width={300} height={300}/>*/}
                  {type==="VIDEO"&&<Image className=" ml-2 mt-[-35px] p-0 float-left" src="/assets/playIcon.png" alt="play" width={31} height={31}/>}
                </div>
            )
          })}
        </div>
        {modalOpen && <Modal permalink={permalink} imageInstaURL={imageInstaURL} imageInstaCaption={imageInstaCaption} typeInsta={typeInsta} closeModal={closeModal}/>}
      </div>
    )

  }
}


export default Instagram;