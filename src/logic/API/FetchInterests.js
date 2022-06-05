import { apiUrl1 } from "../Constant";

async function FetchInterests() {
    try {
        const rs = await fetch(
            apiUrl1 + `interests`,
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

export default FetchInterests;