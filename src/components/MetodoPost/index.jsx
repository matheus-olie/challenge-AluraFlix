export async function saveVideo(video) {
    try {
      const response = await fetch('http://localhost:3001/videos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(video),
      });
      return response.ok;
    } catch (error) {
      console.error('Erro ao salvar o vídeo:', error);
      return false;
    }
  }
  