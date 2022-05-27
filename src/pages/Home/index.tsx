import React, {useState} from 'react';
import Layout from "../../components/Layout";
import Gallery from "../../components/Gallery";

const Home: React.FC = () => {

    const [currentPage, setCurrentPage] = useState('home')


    return (
      <Layout currentPage={currentPage} setCurrentPage={setCurrentPage}>
          {currentPage === 'home' && <Gallery/>}
          {currentPage === 'spain' && <div> Spain </div>}
          {currentPage === 'lakes' && <div> Lakes </div>}
          {currentPage === 'about' && <div> About </div>}
      </Layout>
    )};

export default Home;