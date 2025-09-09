// Blog functionality
document.addEventListener('DOMContentLoaded', () => {
  loadBlogPosts();
});

async function loadBlogPosts() {
  const postsContainer = document.getElementById('blog-posts');
  
  try {
    // In a real implementation, this would fetch from your CMS API
    // For now, we'll load from the content folder
    const response = await fetch('./content/blog/');
    
    if (!response.ok) {
      throw new Error('Failed to load blog posts');
    }
    
    // Parse the directory listing or use a predefined list
    const posts = await getBlogPosts();
    
    if (posts.length === 0) {
      postsContainer.innerHTML = `
        <div class="no-posts">
          <h3>Nog geen blog posts</h3>
          <p>De eerste blog posts komen binnenkort online!</p>
        </div>
      `;
      return;
    }
    
    // Sort posts by date (newest first)
    posts.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    // Render posts
    postsContainer.innerHTML = posts.map(post => createPostHTML(post)).join('');
    
  } catch (error) {
    console.error('Error loading blog posts:', error);
    postsContainer.innerHTML = `
      <div class="no-posts">
        <h3>Fout bij laden</h3>
        <p>Er is een fout opgetreden bij het laden van de blog posts.</p>
      </div>
    `;
  }
}

async function getBlogPosts() {
  // This is a simplified version - in production you'd fetch from your CMS API
  // For now, return the example post
  return [
    {
      title: "Welkom bij mijn blog",
      date: "2025-01-15T10:00:00.000Z",
      featured_image: "/assets/images/blog-example.jpg",
      excerpt: "Een korte introductie tot mijn blog over babymoon, cocoonen en shiatsu in de Ardennen.",
      tags: ["babymoon", "cocoonen", "introductie"],
      author: "Jana",
      slug: "welkom-bij-mijn-blog"
    }
  ];
}

function createPostHTML(post) {
  const date = new Date(post.date);
  const formattedDate = date.toLocaleDateString('nl-NL', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  const tagsHTML = post.tags.map(tag => 
    `<span class="blog-tag">${tag}</span>`
  ).join('');
  
  return `
    <article class="blog-post">
      ${post.featured_image ? `
        <img src="${post.featured_image}" alt="${post.title}" class="blog-post-image" onerror="this.style.display='none'">
      ` : ''}
      <div class="blog-post-content">
        <div class="blog-post-meta">
          <span>${formattedDate}</span>
          <span>•</span>
          <span>${post.author}</span>
        </div>
        <h2 class="blog-post-title">${post.title}</h2>
        <p class="blog-post-excerpt">${post.excerpt}</p>
        ${tagsHTML ? `<div class="blog-post-tags">${tagsHTML}</div>` : ''}
      </div>
    </article>
  `;
}
