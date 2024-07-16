export const updateVideo = async (id, video) => {
    console.log('1', id, video)
    try {
        const response = await fetch(`http://localhost:3001/videos/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(video),
        });

        console.log('2',id, video)
        if (response.ok) {
            const updatedVideo = await response.json();
            console.log('Video atualizado com sucesso', updateVideo);
            return updateVideo;
        } else {
            const errorText = await response.text();
            console.error('Falha ao atualizar o video:', errorText);
            return null;
        }
    } catch (error) {
        console.error('Erro ao atualizar o video:', error);
        return null;
    }
};