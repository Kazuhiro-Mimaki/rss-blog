import { Member } from "@src/types";

export const members: Member[] = [
  {
    name: "b1essk",
    role: "Engineer",
    bio: "徒然なるままに記事を書きます。夢は完全に理解すること。",
    avatarSrc: "/avatars/mimatin.png",
    sources: [
      "https://zenn.dev/b1essk/feed",
      "https://qiita.com/Kazuhiro_Mimaki/feed.atom"
    ],
    includeUrlRegex: "zenn.dev|qiita.com",
    twitterUsername: "b1essk",
    githubUsername: "Kazuhiro-Mimaki",
    websiteUrl: "https://https://mk-portfolio-site.netlify.app/",
  },
  {
    name: "b1essk",
    role: "Engineer",
    bio: "徒然なるままにポエムを書きます。",
    avatarSrc: "/avatars/mimatin.png",
    sources: ["https://note.com/b1essk/rss"],
    includeUrlRegex: "note.com",
    includeTitleRegex: "2021",
  }
];
