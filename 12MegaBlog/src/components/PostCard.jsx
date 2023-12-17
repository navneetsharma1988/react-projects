/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import appwriteService from '../appwrite/config'



function PostCard({ $id, title, featuredImage }) {
    return (
        <Link to={`/post/${$id}`}>
            <div className="w-full bg-gray-100 rounded-xl px-4">
                <div className="w-full justify-center mb-4">
                    <img
                        src={appwriteService.getFilePreview(featuredImage)}
                        alt={title}
                        className="rounded-xl w-full"
                    />
                </div>
                <h2 className="text-xl font-bold">{title}</h2>
            </div>
        </Link>
    )
}

export default PostCard