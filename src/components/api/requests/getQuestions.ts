import axios from "axios";

const getQuestions = async (data: any) => {
    try {
        console.log(data.limit, ' ', data.category)
        // const resp = await axios.get(`https://the-trivia-api.com/api/questions?categories=film_and_tv&limit=8&region=PL`);
        // return resp;
    } catch (err) {
        console.log(err);
    }
}

export default getQuestions;