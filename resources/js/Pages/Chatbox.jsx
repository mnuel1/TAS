import { Textarea, Button, IconButton, Rating} from "@material-tailwind/react";
import { LinkIcon } from "@heroicons/react/24/outline";
import React,{ useState, useEffect} from "react"; 
import axios from 'axios';
import { Avatar } from "@/Components/Avatar";


export function Chatbox({user, vehiclesId}) {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const [rating, setRating] = useState(1);
    

    useEffect(() => {
        axios.get(`/api/comments?vehicles_id=${vehiclesId}`)
            .then((response) => {
                const fetchedComments = response.data.comments.map((comment) => {
                    const nameParts = comment.user_name.split(' '); // Split the name into parts
                    const firstName = nameParts[0]; // First word
                    const firstnameInitial = firstName.split('')[0]; // First word
                    let lastNameInitial = ''; // First letter of the second word (if available)
                
                    if (nameParts.length > 1) {
                        lastNameInitial = nameParts[1].charAt(0); // Get the first letter of the second word
                    }
                
                    return {
                       ...comment,
                            firstName,
                            firstnameInitial,
                            lastNameInitial,
                        
                    };                    
                });
                setComments(fetchedComments);
            })
            .catch((error) => {
                console.error('Error fetching comments:', error);
            });
    }, [vehiclesId]);

    
    const handleCommentChange = (e) => {
        setNewComment(e.target.value);
    };

    const handleSubmit = () => {
        if (newComment) {
            const commentData = {
                user: user,
                vehicles_id: vehiclesId,
                comment: newComment,
                rating: rating,
            };
            
            axios
                .post("/api/comments", commentData)
                .then((response) => {
                    const commentItem = response.data.comment;
                    
                    setComments([...comments, commentItem]);
                    setNewComment("");

                    // Reload the current page
                    window.location.reload();
                })
                .catch((error) => {
                    console.error("Error posting comment:", error);
                });
        }
    };

    return (
        <div className="p-10 bg-white">
            <h2 className="text-2xl font-semibold mb-4">Comment Section</h2>
            <div className="mt-10">
              
                <div className="flex w-full flex-row items-center gap-2 rounded-[99px] border border-gray-900/10 bg-gray-900/5 p-2">
                    <Textarea
                        rows={1}
                        resize={false}
                        placeholder="Add your feedback here..."
                        className="min-h-full !border-0 focus:border-transparent"
                        containerProps={{
                        className: "grid h-full",
                        }}
                        labelProps={{
                        className: "before:content-none after:content-none",                        
                        }}
                        value={newComment}
                        onChange={handleCommentChange}
                    />
                    <Rating value={rating} onChange={setRating}/>
                    <div>
                        <IconButton variant="text" className="rounded-full" onClick={handleSubmit}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                            className="h-5 w-5"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                            />
                        </svg>
                        </IconButton>
                    </div>
                </div>
            </div>
            <div>
                <ul>
                    {comments.length > 0  ? (
                        comments.map((comment, index) => (
                            <li key={index} className="mb-6 p-2 rounded-md flex justify-between w-full border-b-2">
                                <div className="flex justify-center items-center">

                                    <Avatar initial={comment.firstnameInitial}/>
                                    <div className="flex flex-col gap-2 justify-center ml-4">
                                        <p className="text-xl "> {comment.firstName} {comment.lastNameInitial}</p>
                                        <p className="text-xs italic text-gray-500">Posted on: {new Date(comment.created_at).toDateString()}</p>                                    
                                        <p className="text-md text-gray-800 ">{comment.comment}</p>                        
                                    </div>                                
                                </div>
                                <Rating value={comment.rating} readonly className=""/>
                            </li>
                        ))
                    ) : (
                        <div className="flex flex-col items-center justify-center text-center">                    
                            <img src="data:image/png;base64,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"/>
                            There is no feedback yet. <br /> Add yours now!                    
                        </div>
                    )}
                </ul>
            </div>
            
            
            
        </div>
    );
}

