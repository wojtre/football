import {
  List,
} from "@refinedev/mui";
import { DataGrid } from "@mui/x-data-grid";
import { players } from "../../examples"
import { useEffect, useState } from "react";
import SearchBar from "components/searchBar";

export const PlayerList = () => {
  const [searchText, setSearchText] = useState("")
  const [filteredRows, setFilteredRows] = useState(players);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setFilteredRows(
        players.filter((row) =>
        row.name.toLowerCase().includes(searchText.toLowerCase())
        )
      );
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [searchText]);
  const columns = [
    { field: 'name', headerName: 'Name', width: 250 },
    { field: 'wins', headerName: 'Wins', width: 90 },
    { field: 'losses', headerName: 'Losses', width: 90 },
    { field: 'draws', headerName: 'Draws', width: 90 },
    { field: 'score', headerName: 'Score', width: 90 },
    { field: 'attendance', headerName: 'Attendance %', minWidth: 120 },
  ];



  return (
    <>
    <List>
      <SearchBar onChange={(e) => setSearchText(e.target.value)} label="Search player" />
      <DataGrid columns={columns} rows={filteredRows} autoHeight  disableColumnFilter checkboxSelection onSelectionModelChange={(ids) => console.log(ids)} />
    </List>
    </>
  );
};
