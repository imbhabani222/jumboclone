import { InputAdornment, TextField } from "@mui/material"

import SearchIcon from "@mui/icons-material/Search"

import "./search.css"

const Search = () => {
  return (
    <TextField
      id="input-with-icon-textfield"
      label=""
      color="primary"
      size="small"
      placeholder="Search anything"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      variant="outlined"
      className="search"
    />
  )
}

export default Search
