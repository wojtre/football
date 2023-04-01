import { ChangeEventHandler } from 'react';
import { InputBase, IconButton, Paper, Container, TextField } from '@mui/material';
import { Search } from "@mui/icons-material";


interface SearchBarProps {
    onChange: ChangeEventHandler<HTMLInputElement>;
    label: String;
}

export default function SearchBar(props: SearchBarProps) {
    return (
        <>
          <TextField
            id="standard-search"
            label={props.label}
            type="search"
            variant="standard"
            onChange={props.onChange}
            margin="normal"
            sx={{ width: 400 }}
          />
      </>
    );
}
