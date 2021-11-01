class DataSource {
    static movieList() {
        return fetch(
            'https://api.themoviedb.org/3/discover/movie?api_key=b630ee7a2236b851708ee9545fef18ac&language=en-US&sort_by=popularity.desc'
            )
            .then(response => {
                return response.json()
            })
            .then(responseJson => {
                if (responseJson.results) {
                    return Promise.resolve(responseJson.results);
                } else {
                    return Promise.reject('Data not found')
                }
            })
        }

    static tvList() {
        return fetch(
            'https://api.themoviedb.org/3/discover/tv?api_key=b630ee7a2236b851708ee9545fef18ac&language=en-US&sort_by=popularity.desc'
            )
            .then(response => {
                return response.json()
            })
            .then(responseJson => {
                if (responseJson.results) {
                    return Promise.resolve(responseJson.results);
                } else {
                    return Promise.reject('Data not found')
                }
            })
        }

    static searchMovie(keyword) {
        return fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=b630ee7a2236b851708ee9545fef18ac&query=${keyword}
            `
            )
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if (responseJson.results) {
                    return Promise.resolve(responseJson.results);
                } else {
                    return Promise.reject(`${keyword} is not found`);
                }
            })
        }
    };

export default DataSource;
