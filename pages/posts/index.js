import Link from 'next/link';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const CardComponent = ({post}) =>(
    <Card sx={{ minWidth: 275 }} className="mb-4">
      <CardContent>
        <Typography sx={{ fontSize: 30 }} gutterBottom>
          {post.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" >
            {post.body}
        </Typography>
      </CardContent>
      <CardActions>
        <Link href={`/posts/${post.id}`}>
            <a>Learn More</a>
        </Link>
      </CardActions>
    </Card>
)

function Index({posts}) {
    // console.log(context)
    return (
        <div className="container py-5">
            <h2 className="mb-5">Posts Page</h2>

            <div className="post-list">
                {posts.map((post, i) => <div key={post.id}><CardComponent post={post}/></div>)}
            </div>
        </div>
    )
}

export default Index;

export async function getStaticProps(context){
    try{ 
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
        const posts = response.data;
        return {
            props:{
                posts,
            },
            revalidate: 10
        }
    }
    catch(e){
        console.log(e)
    }
    
}
