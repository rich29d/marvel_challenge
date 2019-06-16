import marvel from './marvel';

export const index = async id => {
    const { data: { data = {} } } = await marvel.get(`/characters/${id}/comics`);
    return data;
}

export default {index}