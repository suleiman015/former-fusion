fetch('/blog-index.json')
  .then(res => res.json())
  .then(posts => {
    if (!Array.isArray(posts) || posts.length === 0) return;
    posts.sort((a, b) => new Date(b.date) - new Date(a.date));
    const latest = posts[0];
    const now = new Date();
    const postDate = new Date(latest.date);
    const diffDays = (now - postDate) / (1000 * 60 * 60 * 24);
    if (diffDays < 7) {
      const notice = document.createElement('div');
      notice.style.background = '#2563eb';
      notice.style.color = 'white';
      notice.style.padding = '1rem 1.5rem';
      notice.style.borderRadius = '0.5rem';
      notice.style.marginBottom = '1.2rem';
      notice.style.maxWidth = '500px';
      notice.style.marginLeft = 'auto';
      notice.style.marginRight = 'auto';
      notice.innerHTML = `<strong>Neu:</strong> <a href="/blog/${latest.slug}" style="color:#fff;text-decoration:underline;">${latest.title}</a> vom ${latest.date}`;
      const target = document.getElementById('blog-notice');
      if (target) target.appendChild(notice);
    }
  }); 