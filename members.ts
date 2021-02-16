import { Member } from "@src/types";

export const members: Member[] = [
  {
    name: "CatNose",
    role: "CTO",
    bio:
      "デザインが好きなプログラマー。開発者向けの情報共有プラットフォームzenn.devを開発しています。",
    avatarSrc: "/avatars/catnose.jpg",
    sources: [
      "https://zenn.dev/catnose99/feed",
      "https://medium.com/feed/@catnose99",
    ],
    includeUrlRegex: "medium.com|zenn.dev",
    twitterUsername: "catnose99",
    githubUsername: "catnose99",
    websiteUrl: "https://catnose99.com",
  },
  {
    name: "b1essk",
    role: "Engineer",
    bio: "徒然なるままに記事を書きます。夢は完全に理解すること。",
    avatarSrc: "/avatars/mimatin.png",
    sources: [
      "https://zenn.dev/b1essk/feed",
      "https://note.com/b1essk/rss"
    ],
    includeUrlRegex: "zenn.dev|note.com",
    twitterUsername: "b1essk",
    githubUsername: "Kazuhiro-Mimaki",
    websiteUrl: "https://https://mk-portfolio-site.netlify.app/",
  }
];
