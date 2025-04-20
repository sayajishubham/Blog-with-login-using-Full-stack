import PostContext from "../context/PostContext";
import Main from "../components/Main";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <PostContext.Provider>
      <section>
        <Main />
        <Footer />
      </section>
    </PostContext.Provider>
  );
}
