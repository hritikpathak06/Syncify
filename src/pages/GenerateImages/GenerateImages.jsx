import React from 'react'
import Layout from '../Layout/Layout'
import AIImage from '../../components/AIImage/AIImage'
import "./GenerateImages.scss"

const GenerateImages = () => {
  return (
  <Layout>
    <div className='generate__images'>
        <h1>Generate Images</h1>
        <AIImage/>
    </div>
  </Layout>
  )
}

export default GenerateImages
