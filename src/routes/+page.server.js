import { PUBLIC_DATOCMS_TOKEN } from "$env/static/public";


export async function load({ fetch}) {
  const response = await fetch('https://graphql.datocms.com', {
    method: 'POST',
    headers: {
      Authorization: `d688194135d9297a81eef054bce579`,
    },
    body: JSON.stringify({
      query: QUERY
    }),
  });
  
  const {data} = await response.json(QUERY);
  
  // console.log(data);
  return data ;
};

const QUERY = `
query Video {
  allProjects {
    title
    slug
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
  }
}
`;