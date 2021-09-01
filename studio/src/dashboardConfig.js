export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "612fe8327fa18622afae6999",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-skhr42to",
                  apiId: "7f016d72-b5db-4f61-97a2-ef710da920ff",
                },
                {
                  buildHookId: "612fe8331a57d70093ff5709",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-81iosveo",
                  apiId: "8e4f76a8-b505-4550-b504-bceb33f6c1fd",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/maptagsde/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-81iosveo.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
