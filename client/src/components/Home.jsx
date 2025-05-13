import "./style/Home.css";
import Header from "./Header";
function Home( { isMenuOpen, setIsMenuOpen } ) {
  return (
    <>
      <Header
        headerTitle="Admin Dashboard"
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
    </>
  );
}

export default Home;
