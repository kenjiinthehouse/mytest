import React from 'react';
// 使用 ant-design布局及元件
import { Layout } from 'antd';
// 使用 material-ui 元件
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton'; // icon式btn
import Badge from '@material-ui/core/Badge'; //購物車徽章
import { withStyles } from '@material-ui/core/styles'; //購物車徽章
// 使用 material-ui icon
import SearchIcon from '@material-ui/icons/Search'; 
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

// ant-design Layout
const { Header } = Layout;
// material-ui 
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));
// 購物車徽章
const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -2,
    top: 0,
    // border: `1px none ${theme.palette.background.paper}`,
    padding: '0px',
  },
}))(Badge);

function MyNavbar(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <Header className="d-flex row">
      <div className="logo col-3" />
      <div className="col-1">
        <Button ref={anchorRef} onClick={handleToggle}>
          加入播客
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom' ? 'center top' : 'center bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="menu-list-grow"
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem onClick={handleClose}>item-1</MenuItem>
                    <MenuItem onClick={handleClose}>item-2</MenuItem>
                    <MenuItem onClick={handleClose}>item-3</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
      <div className="col-1">
        <Button href="https://tw.yahoo.com" className="col-2">
          探索
        </Button>
      </div>
      <div className="col-1">
        <Button>商城</Button>
      </div>
      <div className="col-1">
        <Button>專欄</Button>
      </div>
      <div className="diverVertical my-auto"></div>
      <div className="col-1">
        <Button>註冊</Button>
      </div>
      <div className="col-1">
        <Button>登入</Button>
      </div>
      <div className="diverVertical my-auto"></div>
      <div className="col-1">
        <IconButton>
          <SearchIcon />
        </IconButton>
      </div>
      <div className="col-1">
        <IconButton>
          <StyledBadge badgeContent={4} color="secondary">
            <ShoppingCartIcon />
          </StyledBadge>
        </IconButton>
      </div>
    </Header>
  );
}

export default MyNavbar;

// <div className="diverVertical"></div>
