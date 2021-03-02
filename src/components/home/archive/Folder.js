import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";
import FolderIcon from "@material-ui/icons/Folder";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function Folder({ code, abr }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Badge
        badgeContent={`${code} - ${abr}`}
        color="primary"
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <FolderIcon style={{ fontSize: 150 }} />
      </Badge>
    </div>
  );
}
