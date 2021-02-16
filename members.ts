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
    name: "My Zenn",
    role: "Tech",
    bio: "Designing all of the apps in Foo company.",
    avatarSrc: "/avatars/zenn.jpg",
    sources: ["https://zenn.dev/b1essk/feed"],
  },
  {
    name: "Note",
    role: "Poem",
    bio: "Some texts here",
    avatarSrc: "/avatars/note.jpg",
    sources: ["https://note.com/b1essk/rss"],
  }
];
