function getImageUrl(image) {
  return new URL(`../assets/movie-covers/${image}`, import.meta.url).href;
}

export { getImageUrl };

