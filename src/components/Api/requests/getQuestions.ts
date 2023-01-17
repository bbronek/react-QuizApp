import axios from 'axios';

const getQuestions = async (data: any) => {
    try {
        console.log(data.limit, ' ', data.difficulty, ' ' ,data.category)
        const category = data.category.toLowerCase().replace(/&/g, 'and').split(' ').join('_');
        return await axios.get(`https://the-trivia-api.com/api/questions?categories=${category}&limit=${data.limit}&region=PL&${data.difficulty}`);
    } catch (err) {
        console.log(err);
    }
}

export default getQuestions;