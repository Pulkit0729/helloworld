import { apiUrl1 } from "../Constant";

async function PostSkills(skills) {
    try {
        const rs = await fetch(
            apiUrl1 + 'user/skills',
            {
                credentials: 'include', /*important*/
                headers: {
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify({
                    skills: skills
                }),
                method: 'POST'
            }
        )
        return rs;
    } catch (error) {
        return new Error(error.message);
    }
}

export default PostSkills;