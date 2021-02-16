export const config = {
  siteMeta: {
    title: "Daily progress",
    teamName: "Kazuhiro Mimaki",
    description: "RSS based blog.",
  },
  siteRoot:
    process.env.NODE_ENV === "production"
      ? "https://team-blog-hub.vercel.app"
      : "http://localhost:3000",
  headerLinks: [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Company",
      href: "https://zenn.dev/catnose99/articles/cb72a73368a547756862",
    },
    {
      title: "GitHub",
      href: "https://github.com/Kazuhiro-Mimaki",
    },
    {
      title: "Twitter",
      href: "https://twitter.com/b1essk",
    },
    {
      title: "Portfolio",
      href: "https://mk-portfolio-site.netlify.app/",
    },
  ],
};
