import { createClient } from 'https://esm.sh/@supabase/supabase-js'

const news = document.getElementById('latestNews'); 

loadNews();

async function loadNews() { 
  const supabase = createClient('https://wqoizupthpyffpoflwjn.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indxb2l6dXB0aHB5ZmZwb2Zsd2puIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAzNDMwNTUsImV4cCI6MjA2NTkxOTA1NX0.FdDPG9OtIXgb70ZgT2Vc1enkDgUnryxpb53QRfUg-iE');

  const { data, error } = await supabase.from('latest_news').select();
  console.log(data);
  news.innerHTML = data
}
