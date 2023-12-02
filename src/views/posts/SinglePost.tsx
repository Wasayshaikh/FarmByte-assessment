
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

type ApiType = {
  userId: number,
  id: number,
  title: string,
  body: string
}

const Post = ({ }) => {
  const pram = useParams()

  const [post, setPost] = useState<null | ApiType>(null)
  useEffect(() => {
    const getPost = async (): Promise<void> => {
      try {
        const result = await fetch("https://jsonplaceholder.typicode.com/posts/" + pram.id, {

          method: "GET"
        }

        ).then(r => r.json())
        setPost(result)
      } catch (error) {

      }

    }
    getPost()


  }, [])
  return (
    <div className="lg:container m-auto">
      <div className=" p-4">
        {post === null ? (<>loading</>) : (
          <>
            <h2 className=" text-xl py-3 font-bold">{post?.title}</h2>
            <p>{post?.body}</p>
          </>
        )}
      </div>

    </div>
  )
}
export default Post