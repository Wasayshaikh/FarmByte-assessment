import { useEffect, useState } from "react"


export default function Posts() {
  const [post, setPost] = useState<null | Array<object>>(null);
  useEffect(() => {
     const getPost = async ():Promise<void> => {
      try {
        const posts = await fetch("https://jsonplaceholder.typicode.com/posts", {

          method: "GET"
        }

        ).then(r => r.json())
        setPost(posts)
      } catch (error) {
        
      }

    }
    getPost()


  }, [])
  console.log(typeof(post))
  console.log(post)
  return (
   
    <div>
      {post === null ? (<p>loading</p>):post.map((pp:any)=>(
        <div key={pp.id}>{pp.title}</div>
      ))

      }
    </div>
  )
}
