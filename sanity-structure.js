import S from "@sanity/desk-tool/structure-builder";

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Projects")
        .child(S.documentTypeList("project").title("Projects")),
      S.divider(),
      S.listItem()
        .title("About")
        .child(
          S.editor()
            .id("about")
            .schemaType("about")
            .documentId("about")
            .title("About")
        ),
    ]);
