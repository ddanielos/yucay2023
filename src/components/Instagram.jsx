'use client';
import { useState, useEffect } from 'react';
import Modal from './Modal';
import Image from 'next/image';

// Función para hacer la solicitud a la API del servidor
async function fetchInstagramData() {
  const response = await fetch('/api/instagram');
  const data = await response.json();
  return data;
}

function slimUpPosts(data) {
  return data.map((node) => {
    let caption = node.caption;
    let media = node.media_type === 'VIDEO' ? node.thumbnail_url : node.media_url;
    return {
      thumbnail: media,
      url: node.permalink,
      caption,
      id: node.id,
      media_url: node.media_url,
      type: node.media_type,
      permalink: node.permalink,
    };
  });
}

const Instagram = (props) => {
  const [data, setData] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [imageInstaURL, setImageInstaURL] = useState(false);
  const [imageInstaCaption, setImageInstaCaption] = useState(false);
  const [typeInsta, setTypeInsta] = useState(false);
  const [permalink, setPermalink] = useState(false);

  const openModal = (caption, media_url, type, permalink) => {
    setImageInstaURL(media_url);
    setImageInstaCaption(caption);
    setTypeInsta(type);
    setPermalink(permalink);
    setModalOpen(true);
    let x = window.scrollX;
    let y = window.scrollY;
    window.onscroll = function () {
      window.scrollTo(x, y);
    };
  };

  const closeModal = () => {
    setModalOpen(false);
    window.onscroll = null;
  };

  useEffect(() => {
    fetchInstagramData().then((data) => setData(data.data));
  }, []);

  if (data === null) {
    return <h2>Loading ...</h2>;
  }

  if (data) {
    const instaPosts = slimUpPosts(data);
    let images = [];
    let numImages = 10;
    if (screen.width < 1023) {
      numImages = 6;
    }

    for (let i = 0; i < numImages; i++) {
      images.push(instaPosts[i]);
    }

    return (
      <div className="max-w-screen-2xl m-auto">
        <div className="flex flex-row flex-wrap m-auto justify-around content-center pt-12 w-full">
          {images.map(({ thumbnail, caption, media_url, type, permalink }, index) => {
            return (
              <div
                className="m-1 bg-black p-1 w-[45vw] h-[180px] md:w-[286px] md:h-[286px] flex flex-col transition-all hover:translate-y-[-3px] hover:shadow-[0px_10px_15px_-5px_rgb(76,75,16)]"
                key={index}
              >
                <img
                  className="max-h-full object-cover object-center"
                  key={index}
                  src={thumbnail}
                  onClick={(e) => openModal(caption, media_url, type, permalink, e)}
                  alt="instagram"
                />
                {type === 'VIDEO' && (
                  <Image
                    className=" ml-2 mt-[-35px] p-0 float-left"
                    src="/assets/playIcon.png"
                    alt="play"
                    width={31}
                    height={33}
                    style={{ width: '31px', height: 'auto' }}
                  />
                )}
              </div>
            );
          })}
        </div>
        {modalOpen && (
          <Modal
            permalink={permalink}
            imageInstaURL={imageInstaURL}
            imageInstaCaption={imageInstaCaption}
            typeInsta={typeInsta}
            closeModal={closeModal}
          />
        )}
      </div>
    );
  }
};

export default Instagram;
