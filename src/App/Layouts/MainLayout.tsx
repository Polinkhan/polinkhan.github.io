import Navbar from "../Components/navbar/Navbar";

const MainLayout = ({ children }: any) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default MainLayout;
