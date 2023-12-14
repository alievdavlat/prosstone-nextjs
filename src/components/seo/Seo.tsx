import Head from 'next/head'
import React from 'react'


type Props = {
  title?:string;
  description?:string;
  image?:any;
  url?:string
}

const Seo:React.FC<Props> = ({ title, description, image, url })  => {
  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content={description} />
      {/* <!-- Facebook --> */}
      <meta property='og:title' content={title} />
      <meta property='og:site_name' content='Prostoone' />
      <meta property='og:description' content={description} />
      <meta property='og:url' content={'' + url} />
      <meta property='og:image' content={image} />
      <meta property='og:type' content='website' />
      <meta property='og:image:width' content='1200' />
      <meta property='og:image:height' content='630' />
      {/* <!-- Google Plus --> */}
      <meta itemProp='name' content='Prostone' />
      <meta itemProp='description' content={description} />
      <meta itemProp='image' content={image} />
      {/* <!-- Twitter --> */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={image} />
      <meta property='twitter:image:width' content='1200' />
      <meta property='twitter:image:height' content='630' />
    </Head>
  )
}

export default Seo
