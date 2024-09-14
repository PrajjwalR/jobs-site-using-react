import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Homecards from "./components/Homecards";
import JobsListings from "./components/JobsListings";

const App = () => {
  <>
    <Navbar></Navbar>
    <Hero title="Test title" subtitle="Subtitle"></Hero>
    <Homecards></Homecards>
    <JobsListings></JobsListings>
  </>;
};

export default App;
