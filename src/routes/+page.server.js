import { PUBLIC_DATOCMS_TOKEN } from "$env/static/public";


export async function load({ fetch}) {
  const response = await fetch('https://graphql.datocms.com', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${PUBLIC_DATOCMS_TOKEN}`,
    },
    body: JSON.stringify({
      query: QUERY
    }),
  });
  
  const {data} = await response.json(QUERY);
  
  return data ;
};

const QUERY = `
query Video {
  allProjects {
    title
    date
    video {
      url
    }
    shortIntroduction
    projectDescription
    videoThumbnail {
      url
    }
  }
}
`;