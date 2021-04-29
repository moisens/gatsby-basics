import React from "react";
import Layout from '../components/Layout';
import styles from '../styles/home.module.css';
import { graphql, Link } from 'gatsby';
// import Img from "gatsby-image"
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export default function Home({ data }) {
  const image = getImage(data.file.childrenImageSharp[0])
  //console.log(image);
  return(
    <Layout>
      <section className={styles.header}>
      <div>
        <h2>Design</h2>
        <h3>Develop & Deploy</h3>
        <p>Ux designer & web developer based in Brusssels</p>
        <Link className={styles.btn} to='/projects'>My Portfolio Projects</Link>
      </div>
      <GatsbyImage image={image} alt="header-image" />
    </section>
    </Layout>
  )
}

export const query = graphql `
  query Banner {
    file(relativePath: {eq: "banner.png"}) {
      childrenImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }

`;