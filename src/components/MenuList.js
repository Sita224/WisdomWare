import {useState} from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';

const ListItem = ({ name }) => {
    return (<ListItemButton>
        <ListItemIcon>
            <SendIcon />
        </ListItemIcon>
        <ListItemText primary={name} />
    </ListItemButton>)

}

const AccordianItem = ({ name }) => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <>
            <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={name} />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="Starred" />
                    </ListItemButton>
                </List>
            </Collapse>
        </>)
}



const menuListData = [
    { id: 'item_1', name: 'HTML5', icon: 'SendIcon', isAccordian: 'No' },
    { id: 'item_2', name: 'CSS', icon: 'SendIcon', isAccordian: 'No' },
    { id: 'item_3', name: 'JavaScript', icon: 'SendIcon', isAccordian: 'Yes' },
    { id: 'item_4', name: 'TypeScript', icon: 'SendIcon', isAccordian: 'Yes' },
    { id: 'item_5', name: 'React', icon: 'SendIcon', isAccordian: 'Yes' },
    { id: 'item_6', name: 'Redux', icon: 'SendIcon', isAccordian: 'Yes' },
    { id: 'item_7', name: 'Node', icon: 'SendIcon', isAccordian: 'Yes' },
]

export default function MenuList() {


    return (
        <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: '' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
        >
            {menuListData.map((ele) => {
                return ele.isAccordian === 'No' ? <ListItem name={ele.name} key={ele.id} /> : <AccordianItem name={ele.name} key={ele.id} />
            })}

        </List>
    );
}