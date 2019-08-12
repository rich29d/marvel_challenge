import backend from './backend';

export const index = async id => {
    const { data: { data = {} } } = await backend.get(`/characters/${id}/comics`);
    return data;
}

export default {index}