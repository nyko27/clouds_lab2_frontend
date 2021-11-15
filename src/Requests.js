import axios from "axios";

const instance = axios.create({
    baseURL: `${process.env.REACT_APP_LOCAL_SERVER_NAME}`,
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
    },
});

export async function getMovies() {
    return (await instance.get(`/movies`)).data;
}

export async function getMovieById(id) {
    return (await instance.get(`/movies/${id}`)).data;
}

export async function addMovie(newMovie) {
    return (await instance.post("/movies/add", newMovie)).data;
}

export async function updateMovieById(id, updatedMovie) {
    return (await instance.patch(`/movies/${id}/update`, updatedMovie)).data;
}

export async function deleteMovieById(id) {
    return (await instance.delete(`/movies/${id}/remove`)).data;
}

export async function addCommentToMovie(movieId, comment) {
    return (await instance.post(`/movies/${movieId}/comments/add`, { text: comment })).data;
}

export async function deleteCommentById(commentId) {
    return (await instance.delete(`/comments/${commentId}/remove`)).data;
}

export async function getActorById(id) {
    return (await instance.get(`/actors/${id}`)).data;
}

export async function addActor(newActor) {
    return (await instance.post("/actors/add", newActor)).data;
}

export async function updateActorById(id, updatedActor) {
    return (await instance.patch(`/actors/${id}/update`, updatedActor)).data;
}

export async function deleteActorById(id) {
    return (await instance.delete(`/actors/${id}/remove`)).data;
}



export async function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}