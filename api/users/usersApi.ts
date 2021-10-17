export async function getUser(id: string) {
  const response = await fetch(`https://hacker-news.firebaseio.com/v0/user/${id}.json`);
  return response.json();
}
