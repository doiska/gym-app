export enum RapidUrls {
    EXERCISES = 'https://exercisedb.p.rapidapi.com/exercises/',
    BODY_PARTS = 'https://exercisedb.p.rapidapi.com/exercises/bodyparts/',
}

const exerciseRequestHeaders = {
    'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
};

export type TExercise = {
    id: string;
    name: string;
    target: string;
    bodyPart: string;
    equipment: string;
    gifUrl: string;
};

export const fetchExercises = async <T = any>(url: string): Promise<T> => {
    const response = await fetch(url, {
        headers: exerciseRequestHeaders,
    });
    return await response.json();
};
