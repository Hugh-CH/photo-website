import React, {useState} from 'react';
import Layout from "../../components/Layout";
import Gallery from "../../components/Gallery";
import {page, Pages} from "../../helpers/pages";

const Home: React.FC = () => {

  const [currentPage, setCurrentPage] = useState<page>(Pages.home)

  return (
    <Layout currentPage={currentPage} setCurrentPage={setCurrentPage}>
      {currentPage.galleryName ? (
        <Gallery galleryName={currentPage.galleryName} numberOfImages={currentPage.numberOfImages ?? 0}/>
        ):(
        <div>
          {currentPage.title}
        </div>
        )}
      </Layout>
    )};

export default Home;