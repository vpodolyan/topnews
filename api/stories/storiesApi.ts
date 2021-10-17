export async function getTopStories() {
  const response = await fetch(
    'https://hacker-news.firebaseio.com/v0/topstories.json',
  );

  return response.json();
}

export async function getStory(id: number) {
  const response = await fetch(
    `https://hacker-news.firebaseio.com/v0/item/${id}.json`,
  );
  return response.json();
}
