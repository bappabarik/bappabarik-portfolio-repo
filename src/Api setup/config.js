import axios from 'axios';

class FetchData{
    api;
    constructor(){
        this.api = axios.create({
            baseURL: import.meta.env.VITE_GITHUB_BASE_URL,
            headers: {
              'Authorization': `token ${import.meta.env.VITE_GITHUB_ACCESS_TOKEN}`
            }
    });
    }

    async getData(slug){
        try {
            return await this.api.get(slug)
        } catch (error) {
            console.log(error); 
            return new Promise((resolve, reject) => {
                const response = {data: [
                    {
                        id: 1,
                        name: "codebeetles-blog",
                        homepage: "https://codebeetles-blog.vercel.app/",
                        html_url: "https://github.com/bappabarik/codebeetles-blog"
                    }
                ]}
                resolve(response)
            })
        }
    }
}

const fetchData = new FetchData()

export default fetchData