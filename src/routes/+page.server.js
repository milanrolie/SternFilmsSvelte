import { PUBLIC_DATOCMS_TOKEN } from "$env/static/public";


export async function load({ fetch}) {
  const response = await fetch('https://graphql.datocms.com', {
    method: 'POST',
    headers: {
      Authorization: `${PUBLIC_DATOCMS_TOKEN}`,
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
    shortIntroduction
    projectDescription
    date
    videoLongMp4 {
      url
    }
    videoLongWebm {
      url
    }
    videoShortMp4 {
      url
    }
    videoShortWebm {
      url
    }
    projectInOneSentence
    tags
    thumbnail {
      url
    }
  }
}
`;