import { NextPage } from "next";
import { ContentWrapper } from "@src/components/ContentWrapper";
import { LinkBackHome } from "@src/components/LinkBackHome";
import { PageSEO } from "@src/components/PageSEO";

const Page: NextPage = () => {
  return (
    <>
      <PageSEO title="About" path="/about" />
      <ContentWrapper>
        <section className="about">
          <h1 className="about__title">About</h1>
          <div className="about__body">
            <p>
              このブログは以下のブログ・スターターをForkしてカスタマイズしたものです。
            </p>
            <p>
              <a href="https://zenn.dev/catnose99/articles/cb72a73368a547756862">
                チーム個々人のテックブログをRSSで集約するサイトをNext.jsで作った
              </a>
            </p>
            <p>
              Zenn、Qiita、noteから投稿情報を取得し、一覧にまとめて表示しています。
            </p>
          </div>
          <div className="about__actions">
            <LinkBackHome />
          </div>
        </section>
      </ContentWrapper>
    </>
  );
};

export default Page;
