import React, { useState, useEffect } from 'react';

function StoresRandoom() {
  const [catFact, setCatFact] = useState('');
  const [catImageUrl, setCatImageUrl] = useState('');

  useEffect(() => {
    const fetchCatFact = async () => {
      try {
        const response = await fetch('https://catfact.ninja/fact');
        const data = await response.json();
        setCatFact(data.fact);
      } catch(error) {
        console.error(error);
      }
    }

    fetchCatFact();
  }, []);

  useEffect(() => {
    if (catFact) {
      const generateCatImage = async () => {
        try {
          const firstWord = catFact.split(' ', 3).join(' ');
          const response = await fetch(`https://picsum.photos/400/400?random=${firstWord}`); 
          if (response.ok) {
            const imageUrl = response.url;
            setCatImageUrl(imageUrl);
          } else {
            console.error('Error fetching cat image:', response.statusText);
          }
        } catch(error) {
          console.error(error);
        }
      };

      generateCatImage();
      // Cambiar la imagen cada 5 segundos
    const intervalId = setInterval(generateCatImage, 3000);   
    return () => clearInterval(intervalId);
    }
  }, [catFact]);

  return (
    <>
<div className="text-center">
  <h1 className="text-2xl font-bold mb-4">Restaurantes</h1>  
  {catImageUrl && (
    <div className="mx-auto">
      <img src={catImageUrl} alt="random" className="mx-auto mb-4" width={400} height={400} style={{ marginLeft: '50px' }} />
    </div>
  )}
  {catImageUrl && <p>Restaurantes en Colombia</p>}
</div>

    </>
  );
}

export default StoresRandoom;
