import styled from "styled-components";
import TabList from "@mui/lab/TabList";
import Tab from "@mui/material/Tab";

export const TabWrapper = styled(Tab)`
  padding: 1.25rem 1.55rem;
  border-radius: 0.25rem 0.25rem 0 0;
  border-width: 1px 1px 0 1px;
  background-color: #1b1e24;
  color: #ffffff;
`;

export const TabListWrapper = styled(TabList)`
  margin-top: 1.25rem;
  padding-left: 1rem;
  border-bottom: 1px solid #1b1e24;
`;
