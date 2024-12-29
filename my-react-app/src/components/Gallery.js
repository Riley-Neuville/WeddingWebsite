import React, { useState, useEffect } from "react";
import "../Gallery.css";

const importAll = (requireContext) => requireContext.keys().map(requireContext);

const images = importAll(
  require.context("../Images", false, /\.(png|jpe?g|svg)$/)
);

// Helper function to shuffle an array
const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Helper function to split images into columns
const splitIntoColumns = (images, numColumns) => {
  const columns = Array.from({ length: numColumns }, () => []);
  images.forEach((img, index) => {
    columns[index % numColumns].push(img); // Distribute images evenly
  });
  return columns;
};

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const numColumns = 3; // Change this to adjust the number of columns

  // Shuffle the images before splitting into columns
  const shuffledImages = shuffleArray(images);
  const columns = splitIntoColumns(shuffledImages, numColumns);

  useEffect(() => {
    // Wait for all images to load
    const imagePromises = images.map((src) => {
      const img = new Image();
      img.src = src;
      return new Promise((resolve) => {
        img.onload = resolve;
        img.onerror = resolve; // Handle errors to avoid infinite loading
      });
    });

    Promise.all(imagePromises).then(() => setLoading(false));
  }, []);

  return (
    <>
      {/* Header */}
      <header className="gallery-header">
        <h1>Welcome to our Photo Gallery</h1>
        <br />
        <p>Enjoy this collection of memories from our 8 years together!</p>
      </header>

      {loading ? (
        <div className="loading-spinner">
          <img src="/spinner.gif" alt="Loading..." />
        </div>
      ) : (
        <div className="gallery">
          {columns.map((columnImages, columnIndex) => (
            <div key={columnIndex} className="gallery-column">
              {columnImages.map((img, index) => (
                <img key={index} src={img} alt={`Gallery Image ${index + 1}`} />
              ))}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Gallery;
