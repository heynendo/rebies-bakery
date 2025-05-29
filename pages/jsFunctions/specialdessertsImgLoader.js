document.addEventListener('DOMContentLoaded', () => {
    const imageContainer = document.getElementById('specialdesserts-images');
    const totalImages = 12;
    const startingRow = 1;
    const possibleExtensions = ['jpg', 'png', 'jpeg', 'webp', 'gif'];
    const fallbackImage = '../images/specialdesserts/specialdesserts-img1.png';
  
    function getImagesPerRow(width) {
      if (width > 1000) return 4;
      if (width > 600) return 3;
      return 2;
    }
  
    function getImageHeight(width) {
      if (width > 1200) return 275;
      if (width > 800) return 250;
      if (width > 600) return 200;
      else return 175;
    }
  
    // Image loader that avoids 404s in console
    function findValidImage(index) {
      return new Promise((resolve) => {
        let i = 0;
        const tryNext = () => {
          if (i >= possibleExtensions.length) return resolve(fallbackImage);
          const ext = possibleExtensions[i++];
          const path = `../images/specialdesserts/specialdesserts-img${index}.${ext}`;
          const testImg = new Image();
          testImg.onload = () => resolve(path);
          testImg.onerror = tryNext;
          testImg.src = path;
        };
        tryNext();
      });
    }
  
    let currentImagesPerRow = null;
  
    async function loadImages() {
      const width = window.innerWidth;
      const imagesPerRow = getImagesPerRow(width);
      const imageHeight = getImageHeight(width);
  
      if (imagesPerRow === currentImagesPerRow) return;
      currentImagesPerRow = imagesPerRow;
  
      imageContainer.innerHTML = '';
      imageContainer.style.display = 'grid';
      imageContainer.style.gridTemplateColumns = `repeat(${imagesPerRow}, 1fr)`;
  
      for (let i = 1; i <= totalImages; i++) {
        const src = await findValidImage(i);
        const img = document.createElement('img');
        img.src = src;
        img.title = "Click to view in a new page";
        img.onclick = () => window.open(img.src, '_blank');
  
        const row = startingRow + Math.floor((i - 1) / imagesPerRow);
        const col = ((i - 1) % imagesPerRow) + 1;
  
        img.style.gridRow = row;
        img.style.gridColumn = col;
        img.style.height = `${imageHeight}px`;
  
        imageContainer.appendChild(img);
      }
    }
  
    loadImages();
  
    let resizeTimeout;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(loadImages, 200);
    });
  });