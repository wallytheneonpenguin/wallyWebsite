
const news = document.getElementById('latestNews'); 

loadNews();

async function loadNews() { 
const res = await fetch('/api/latest_news'); 
  const messages = await res.json(); 
  news.innerHTML = messages;
}
