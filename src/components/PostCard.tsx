import { Link } from "react-router-dom"

type componentsProp = {
  data: {
    id: number,
    title: string,
    body: string
  }
}
const PostCard = ({ data }: componentsProp) => {
  return (
    <div className=" w-full sm:w-1/2 md:w-1/3 xl:w-1/4  p-4">
      <Link to={`/posts/` + data.id}>
        <div className="bg-secondary p-2 cursor-pointer hover:shadow-lg rounded-sm">
          <h3 className="text-lg font-semibold py-2 line-clamp-1 text-ellipsis">{data.title}</h3>
          <p className=" text-base text-justify line-clamp-3 text-ellipsis">{data.body}</p>
        </div>
      </Link>

    </div>
  )
}
export default PostCard