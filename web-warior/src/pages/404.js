import { Link } from 'gatsby';
import React from 'react'
import Layout from '../components/Layout';

export default function NotFound() {
  return (
    <Layout>
      <div>
        <h2>That page doesn't exists</h2>
        <Link to="/">Back Home</Link>
      </div>
    </Layout>
  )
}
