import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import InputText from '../components/Toolkit/InputText';

const Toolkit = () => {
  return ( 
    <>
      <SEO noIndex />
      <Layout>
        <section className="sectiongap topgap">
          <div className="container">
            <div className="content__area">
              <InputText />
            </div>
          </div>
        </section>
      </Layout>
    </>
   );
}
 
export default Toolkit;