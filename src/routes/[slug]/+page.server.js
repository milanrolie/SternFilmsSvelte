import { PUBLIC_DATOCMS_TOKEN } from "$env/static/public";

export async function load({ fetch, params }) {
  const { slug } = params;

  const projectQuery = `
    query Project($slug: String) {
      project(filter: { slug: { eq: $slug } }) {
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
    }
  `;

  const allProjectsQuery = `
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

  const projectResponse = await fetch("https://graphql.datocms.com", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${PUBLIC_DATOCMS_TOKEN}`, // Ensure correct Authorization header format
      "Content-Type": "application/json", // Set content type
    },
    body: JSON.stringify({
      query: projectQuery,
      variables: { slug },
    }),
  });

  const allProjectsResponse = await fetch("https://graphql.datocms.com", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${PUBLIC_DATOCMS_TOKEN}`, // Ensure correct Authorization header format
      "Content-Type": "application/json", // Set content type
    },
    body: JSON.stringify({
      query: allProjectsQuery,
    }),
  });

  const projectData = await projectResponse.json();
  const allProjectsData = await allProjectsResponse.json();

  return { projectData, allProjectsData };
  

}


