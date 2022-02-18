import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

import { useDispatch, useSelector } from 'react-redux';
import { actionsCreators as cgActions } from '../redux/modules/category';
import {history} from '../redux/configureStore';

export default function Category(props) {
  console.log(props);
  const dispatch = useDispatch()
  const [selectedIndex, setSelectedIndex] = React.useState();

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const mainOnClick = (event, index)=>{
    handleListItemClick(event, index)
    window.location.href = '/'
    // history.replace('/CS')
    }

const csOnClick = (event, index)=>{
    handleListItemClick(event, index)
    window.location.href = '/CS'
    // history.replace('/CS')
    }
  // if 이게 1이면 새 리스트에 카테고리 CS인것 넣어주기
  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItemButton
          selected={selectedIndex === 0}
          onClick={() => window.location.href = '/'}
        >
        
          <ListItemText primary="전체보기" />
        </ListItemButton>
      </List>
      <Divider />
      <List component="nav" aria-label="secondary mailbox folder">
        <ListItemButton
          selected={selectedIndex === 1}
          onClick={() => window.location.href = '/CS'}
        >
          <ListItemText primary="Computer Science" />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 2}
          onClick={() => window.location.href = '/Java'}
        >
          <ListItemText primary="JAVA" />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 3}
          onClick={() => window.location.href = '/JavaScript'}
        >
          <ListItemText primary="JavaScript" />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 4}
          onClick={() => window.location.href = '/React'}
        >
          <ListItemText primary="React" />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 5}
          onClick={() => window.location.href = '/Spring'}
        >
          <ListItemText primary="Spring" />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 6}
          onClick={() => window.location.href = '/etc'}
        >
          <ListItemText primary="기타" />
        </ListItemButton>
      </List>
    </Box>
  );
}