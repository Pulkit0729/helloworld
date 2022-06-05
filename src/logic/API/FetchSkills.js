import { apiUrl1 } from "../Constant";

async function FetchSkills(search) {
    try {
        const rs = await fetch(
            apiUrl1 + `search/skills?search=${search}`,
            {
                credentials: 'include', /*important*/
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'GET'
            }
        )
        return rs;
    } catch (error) {
        return new Error(error.message);
    }
}

export default FetchSkills;