import { useEffect, useState } from "react"
import PostCard from "../../components/PostCard";


type ApiType = {
  userId: number,
  id: number,
  title: string,
  body: string
}
const Posts = () => {
  const [posts, setPosts] = useState<null | Array<ApiType>>(null);
  useEffect(() => {
    const getPost = async (): Promise<void> => {
      try {
        const result = await fetch("https://jsonplaceholder.typicode.com/posts", {

          method: "GET"
        }

        ).then(r => r.json())
        setPosts(result)
      } catch (error) {

      }

    }
    getPost()


  }, [])
  return (

    <div className="lg:container m-auto py-4">

      <div className=" flex flex-wrap">
        {
          posts === null ? (<p>loading</p>) :
            posts.map(
              (post) =>
              (
                <PostCard key={post.id} data={post} />
              )
            )

        }
      </div>
    </div >
  )
}
export default Posts
