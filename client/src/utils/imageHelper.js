export const getProductImage = (imagePath) => {
  if (!imagePath) {
    return "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=600&auto=format&fit=crop"; // luxury apparel fallback
  }
  
  if (imagePath.startsWith("http")) {
    return imagePath;
  }
  
  if (imagePath.startsWith("/images/")) {
    const pathLower = imagePath.toLowerCase();
    if (pathLower.includes("shoe")) {
      return "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=600&auto=format&fit=crop"; // Premium leather shoes
    }
    if (pathLower.includes("watch")) {
      return "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=600&auto=format&fit=crop"; // Luxury gold watch
    }
    if (pathLower.includes("hoodie")) {
      return "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=600&auto=format&fit=crop"; // Minimalist knit hoodie
    }
    if (pathLower.includes("mouse")) {
      return "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=600&auto=format&fit=crop"; // Ergonomic smart mouse
    }
  }

  // Otherwise, route to local Express uploads
  return `http://localhost:5000${imagePath}`;
};
