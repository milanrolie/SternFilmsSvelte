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
  
  console.log(data);
  return data ;
};

const QUERY = `
{
  allProjects {
    id
    title
    _status
    _firstPublishedAt
    projectDescription
    videoThumbnail {
      id
      md5
      url
    }
    slug
    video {
      url
    }
  }
  
}
`;