import { PUBLIC_DATOCMS_TOKEN } from "$env/static/public";
export async function load({ fetch, params }) {
  const { slug } = params;
  const response = await fetch("https://graphql.datocms.com", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${PUBLIC_DATOCMS_TOKEN}`,
    },
    body: JSON.stringify({
      query: QUERY,
      variables: { slug },
    }),
  });
  const { data } = await response.json();

  return data;
}

const QUERY = `query Video($slug: String) {
  project(filter: {slug: {eq: $slug}}) {
    id
    title
    videoLongWebm {
      url
    }
    videoShortMp4 {
      url
    }
    videoShortWebm {
      url
    }
    videoLongMp4 {
      id
    }
    tags
    projectInOneSentence
    shortIntroduction
    projectDescription
    date
    slug
  }
}`;
// allProjects {
//   id
//   title
//   _status
//   _firstPublishedAt
//   projectDescription
//   videoThumbnail {
//     id
//     md5
//     url
//   }
//   slug
// }

// const QUERY = `query article($slug: String) {
//   article(filter: {slug: {eq: $slug}}) {
//     title,
// 		introtext,
// 		story,
// 		image {
//       url
//     }
//   }
// }`;
