import React from 'react';
import axios from 'axios';

function Index({post}) {
    return (
        <div className="container py-5">
            <h1 className="mb-5">Single post</h1>

            <div>
                <h3>{post.title || "Post One"}</h3>
            </div>
        </div>
    )
}

export default Index;

export async function getStaticPaths() {
    const response  = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
    const posts =  response.data
  
    const paths = posts.map((post) => ({
      params: { id: post.id.toString()},
    }))
  
    // We'll pre-render only these paths at build time.
    // { fallback: blocking } will server-render pages
    // on-demand if the path doesn't exist.
    return { paths, fallback: false  }
  }

export async function getStaticProps(context) {
        const { params } = context
    try{
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
        const post =  response.data
        return {
            props: { post}
        }
    }
    catch(e){
        console.log(e)
    }
}

