import {
  EditButton,
  List,
  ShowButton,
} from "@refinedev/mui";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { games } from "../../examples"
import { useEffect, useState } from "react";
import { Game } from "model/game";
import Tooltip from '@mui/material/Tooltip';
import Typography from "@mui/material/Typography";

const getTeamDescription = (lineup: string[], prefix: string) => {
  return `${prefix} ${lineup.join(", ")}`;
}

const columns: GridColDef<Game>[] = [
  { field: "date", headerName: "Date", width: 120, align: "center", headerAlign: "center", },
  {
    field: "score",
    headerName: "Score B:W",
    width: 120,
    valueGetter: (params) => {
      if (params.row.blackTeamGoals == null || params.row.whiteTeamGoals == null) { return "-" }
      else { return `${params.row.blackTeamGoals}:${params.row.whiteTeamGoals}` }
    },
    sortable: false,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "players",
    headerName: "Players",
    align: "center",
    headerAlign: "center",
    width: 100,
    valueGetter: (params) =>
      params.row.lineup.blackPlayers.length + params.row.lineup.whitePlayers.length,
    renderCell: (params) => (
      <Tooltip title={
        <>
          <Typography color="inherit">{getTeamDescription(params.row.lineup.blackPlayers, "Black team:")}</Typography>
          <Typography color="inherit">-----------</Typography>
          <Typography color="inherit">{getTeamDescription(params.row.lineup.whitePlayers, "White team:")}</Typography>
        </>}>
        <div>{params.value}</div>
      </Tooltip>
    ),
  },
  {
      field: "actions",
      headerName: "Actions",
      renderCell: function render({ row }) {
          return (
              <>
                  <EditButton hideText recordItemId={row.id} />
                  <ShowButton hideText recordItemId={row.id} />
              </>
          );
      },
      align: "center",
      headerAlign: "center",
      minWidth: 80,
      sortable: false
  },
  
];

export const GameList = () => {
  return (
    <List>
      <DataGrid columns={columns} rows={games} disableColumnFilter autoHeight disableSelectionOnClick />
    </List>
  );
};
