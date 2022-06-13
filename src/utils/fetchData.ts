export const fetchData = async (
    url: string,
    headers: Record<string, string>
) => {
    const response = await fetch(url);
    return await response.json();
};

export const exerciseRequestHeaders = {
    'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
};
