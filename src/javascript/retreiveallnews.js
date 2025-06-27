  import { createClient } from 'https://esm.sh/@supabase/supabase-js'
  import dayjs from 'https://esm.sh/dayjs';
 
  const supabase = createClient('https://wqoizupthpyffpoflwjn.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indxb2l6dXB0aHB5ZmZwb2Zsd2puIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAzNDMwNTUsImV4cCI6MjA2NTkxOTA1NX0.FdDPG9OtIXgb70ZgT2Vc1enkDgUnryxpb53QRfUg-iE');

  function formatTimestamp(isoString) {
      const date = new Date(isoString);
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return date.toLocaleDateString('en-US', options);
    }


  const { data, error } = await supabase.from('latest_news').select('*').order('created_date', { ascending: false });;

  console.log(data);

      const headers = Object.keys(data[0]);

  const tbody = document.getElementById('table-body');

      tbody.innerHTML = data.map(row => `
        <tr><td><div class="styledate">${formatTimestamp(row.created_date)}</div></td></tr>
        <tr><td></td></tr>
        <tr><td></td></tr>
        <tr><td></td></tr>
        <tr><td><div class="styletitle">${row.news_title}</div></td></tr>
        <tr><td></td></tr>
        <hr style="border: none; height: 1px; background-color: white;">
        <tr><td></td></tr>
        <tr><td></td></tr>
        <tr><td><div class="styledscription">${row.news_description}</div></td></tr>
        <tr style="height:50px;"><td></td></tr>
        `).join('');
