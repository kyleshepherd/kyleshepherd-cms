export default {
  name: "project",
  type: "document",
  title: "Project",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      name: "image",
      type: "image",
      title: " Image",
    },
    {
      name: "description",
      type: "text",
      title: "Description",
    },
    {
      name: "project",
      type: "url",
      title: "Project URL",
    },
    {
      name: "repo",
      type: "url",
      title: "Repo URL",
    },
    {
      name: "projectDate",
      type: "date",
      title: "Project Date",
    },
  ],
};
