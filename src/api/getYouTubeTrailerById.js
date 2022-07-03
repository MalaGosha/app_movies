const trailerUrl = 'https://imdb-api.com/en/API/YouTubeTrailer/k_7dk17uyh/'

export async function getYouTubeTrailerById(id) {
    // return fetch(trailerUrl + id, {
    //     headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json',
    //         'Access-Control-Allow-Origin': '*'
    //     },
    //     body: JSON.stringify()
    // }).then((response) => {
    //     console.log("Status code get trailer is " + response.status)
    //     return response.json();
    // })


    return (
        {
            "imDbId": "string",
            "title": "string",
            "fullTitle": "string",
            "type": "string",
            "year": "string",
            "videoId": "string",
            "videoUrl": "https://www.youtube.com/watch?v=HXyb9xYzaI8&list=RDGMEMYH9CUrFO7CfLJpaD7UR85wVMHXyb9xYzaI8&start_radio=1&ab_channel=ClubSounds",
            "errorMessage": "string"
        }
    )
}

