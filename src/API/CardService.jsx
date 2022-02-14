import * as axios from 'axios';

export default class CardService {
    static async getAll(limit = 10, page = 1) {
        try {
            const response = await axios.get('http://jsonplaceholder.typicode.com/photos', {
                params: {
                    _limit: limit,
                    _page: page
                }
            }
            )
            return response;
        } catch (e) {
            console.log(e)
        }
    }
}  