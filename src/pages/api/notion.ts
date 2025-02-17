const notionApiBase = 'https://api.notion.com/v1'
const token = import.meta.env.NOTION_TOKEN;

export async function getUsers() {
  const response = await fetch(notionApiBase + '/users', {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token}`,
      "Notion-Version": "2022-06-28"
    }
  });

  const data = await response.json();
  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" }
  });
}

export async function getResourcePages() {
  const NOTION_RC_DB_ID = import.meta.env.NOTION_RC_DB_ID;
  const response = await fetch(`${notionApiBase}/databases/${NOTION_RC_DB_ID}/query`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Notion-Version": "2022-06-28",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({}) // Empty body fetches all pages
  })

  const data = await response.json();
  const filteredData = data.results.filter((page: any) => {
    try {
      return page.properties.slug.rich_text[0]?.plain_text;
    } catch {
      return false;
    }
  });
  return new Response(JSON.stringify(filteredData), {
    headers: { "Content-Type": "application/json" }
  })
}