import React from 'react';
import Layout from '../../components/Layout';
import styles from '../../styles/projects.module.css';
import { graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export default function Project({ data }) {
  //const projects = data.allMarkdownRemark.nodes;
  const projects = data.projects.nodes;
  const contact = data.contact.siteMetadata.contact;
  let image;

  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects & Websites I've Created</h3>
        <div className={styles.projects}>
          {projects.map(project => (
            <Link to={`/projects ${project.frontmatter.slug}`} key={`${project.id}`}>
              {console.log(project.frontmatter.thumbs.childrenImageSharp[0])}
              <div>
                <GatsbyImage image={getImage(project.frontmatter.thumbs.childrenImageSharp[0])} alt="img-thumb"/>
                <h3>{project.frontmatter.title}</h3>
                <p>{project.frontmatter.stack}</p>
              </div>
            </Link>
          ))}
        </div>
        <p>Like what you see? Email me at { contact } for a quote!</p>
      </div>
    </Layout>
  )
}

//export page query
export const query = graphql`
  query ProjectsPage {
    projects: allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          slug
          stack
          title
          thumbs {
            childrenImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
        id
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }

`; 