import { apiUrl1 } from "../Constant";

async function PostInterests(interests) {
    try {
        const rs = await fetch(
            apiUrl1 + 'user/interests',
            {
                credentials: 'include', /*important*/
                headers: {
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify({interests}),
                method: 'POST'
            }
        )
        return rs;
    } catch (error) {
        return new Error(error.message);
    }
}

export default PostInterests;