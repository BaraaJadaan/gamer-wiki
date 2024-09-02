import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import useGameQueryStore from "../store";
import ResetQuery from "../components/ResetQuery";
import { useNavigate } from "react-router-dom";


const Layout = () => {
  const searchText = useGameQueryStore((s) => s.gameQuery.searchText);
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  const navigate = useNavigate();

  return (
    <>
      <NavBar />
      {searchText && searchText.trim() !== "" && (
        <ResetQuery onClick={() => {setSearchText(''); navigate("/");} } />
      )}
      <Box padding={0}>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
