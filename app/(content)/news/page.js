import NewsList from "@/components/news-list";
import { getAllNews } from "@/lib/news";

export default function NewsPage() {
  const news = getAllNews(); // 클라이언트측에서는 작동 x
  // 클라이언트에서는 데이터베이스에 접근할 수 없기 때문

  return (
    <>
      <h1>News Page</h1>
      {<NewsList news={news} />}
    </>
  );
}
