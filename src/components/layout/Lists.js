import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import StorageRoundedIcon from "@material-ui/icons/StorageRounded";
import DescriptionRoundedIcon from "@material-ui/icons/DescriptionRounded";
import DateRangeRoundedIcon from "@material-ui/icons/DateRangeRounded";
import GavelRoundedIcon from "@material-ui/icons/GavelRounded";
import GroupRoundedIcon from "@material-ui/icons/GroupRounded";
import { Link } from "react-router-dom";
import Divider from "@material-ui/core/Divider";

const Lists = () => {
  return (
    <>
      <List>
        <ListItem component={Link} to="/">
          <ListItemIcon>
            <HomeRoundedIcon />
          </ListItemIcon>
          <ListItemText className="has-text-dark" primary="Inicio" />
        </ListItem>
        <ListItem component={Link} to="/archive">
          <ListItemIcon>
            <StorageRoundedIcon />
          </ListItemIcon>
          <ListItemText className="has-text-dark" primary="Arquivo" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem component={Link} to="/models">
          <ListItemIcon>
            <DateRangeRoundedIcon />
          </ListItemIcon>
          <ListItemText className="has-text-dark" primary="Agenda" />
        </ListItem>
        <ListItem component={Link} to="/models">
          <ListItemIcon>
            <GroupRoundedIcon />
          </ListItemIcon>
          <ListItemText className="has-text-dark" primary="Funcionarios" />
        </ListItem>
      </List>
    </>
  );
};

export default Lists;
