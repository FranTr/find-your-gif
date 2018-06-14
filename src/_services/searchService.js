
export const searchService = {
    create
};

function create(words, limit, lang) {
    
    const key = "HmJZxyJsaPbczJWwV1Ve2p2oyKkwkkKS"

    debugger;
    return fetch(`http://api.giphy.com/v1/gifs/search?q=${words.words}&api_key=${key}&limit=${words.limit}&lang=${words.lang}`)
        .then(response => {
            if (!response.ok) { 
                debugger;
                return Promise.reject(response.statusText);
            }
            debugger;
            return response.json();
        });

}