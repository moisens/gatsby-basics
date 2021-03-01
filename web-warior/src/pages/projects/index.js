import React from 'react';
import Layout from '../../components/Layout';
import styles from '../../styles/projects.module.css';


export default function Project() {
  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects & Websites I've Created</h3>
        <p>Ux designer & web developer based in Brusssels</p>
      </div>
    </Layout>
  )
}
