import marvel from './marvel';

export const index = async () => {
    const { data: { data = {} } } = await marvel.get('/characters');
    return data;
}

export const find = async id => {
    const { data: { data = {} } } = await marvel.get(`/characters/${id}`);
    return data;
}

export default {
    index,
    find,
}