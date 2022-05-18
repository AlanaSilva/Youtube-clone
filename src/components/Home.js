import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AppsIcon from '@mui/icons-material/Apps';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MoreIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button';



import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import RestoreOutlinedIcon from '@mui/icons-material/RestoreOutlined';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';
import { Hidden } from '@mui/material';

const drawerWidth = 240;


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const videos = [
    {
      id: 1,
      title:
      'Katy Perry - Unconditionally (Official)',
      channel: 'Katy Perry',
      views: '618 mi de visualizações',
      date: 'há 8 anos',
      avatar: '/images/avatar.jpeg',
      thumb: '../images/thumb1.jpg',
    },
    {
      id: 2,
      title:
        'lofi hip hop radio - beats to relax/study to',
      channel: 'Lofi Girl',
      views: '695 mil visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar.jpeg',
      thumb: '../images/thumb2.jpg',
    },
    {
      id: 3,
      title:
        'Harry Styles & James Corden Carpool to Work',
      channel: 'The Late Late Show with James Corden',
      views: '16 mil visualizações',
      date: 'há 2 anos',
      avatar: '/images/avatar.jpeg',
      thumb: '../images/thumb3.jpg',
    },
    {
      id: 4,
      title:
        'Lip Sync Battle - Tom Holland',
      channel: 'Comedy Central Latinoamérica',
      views: '127 mi de visualizações',
      date: 'há 4 anos',
      avatar: '/images/avatar.jpeg',
      thumb: '../images/thumb4.jpg',
    },
    {
      id: 5,
      title:
        'Stranger Things 4 | Da Rússia, com amor... | Netflix',
      channel: 'Netflix Brasil',
      views: '2,9 mi de visualizações',
      date: 'há 2 anos',
      avatar: '/images/avatar.jpeg',
      thumb: '../images/thumb6.jpg',
    },
    {
      id: 6,
      title: 'WERDUM & WANDERLEI SILVA - Podpah #382',
      channel: 'PodPah',
      views: '155 mil visualizações',
      date: 'há 1 dia',
      avatar: '/images/avatar.jpeg',
      thumb: '../images/thumb5.jpg',
    },
    {
      id: 7,
      title:
        'Por que Brasil e EUA ficaram tão diferentes? Curso na Universidade de Chicago tenta explicar',
      channel: 'BBC News Brasil',
      views: '330 mil visualizações',
      date: 'há 3 meses',
      avatar: '/images/avatar.jpeg',
      thumb: '../images/thumb7.jpg',
    },
    {
      id: 8,
      title:
        'Thor: Amor e Trovão | Marvel Studios | Teaser Trailer Oficial Dublado',
      channel: 'Marvel Brasil',
      views: '1,9 mi de visualizações',
      date: 'há 9 dias',
      avatar: '/images/avatar.jpeg',
      thumb: '../images/thumb8.jpg',
    },
  ];
  

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <AppsIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
        color="inherit"
        >
          <Badge >
            <MoreVertIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircleOutlinedIcon />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color='inherit' sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <img src='.../images/preto.png' alt='logo' height={'25px'}/>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Pesquisar…"
              inputProps={{ 'aria-label': 'Pesquisar' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large"  color="inherit">
              <Badge >
                <AppsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              color="inherit"
            >
              <Badge >
                <MoreVertIcon />
              </Badge>
            </IconButton>
            <Button startIcon={<AccountCircleOutlinedIcon />} variant="outlined" href="#outlined-buttons">
                Fazer Login
            </Button>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      <Box display={'flex'}>
      <Hidden mdDown> 
      <Drawer
            variant="permanent"
            sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
            }}
        >
            <Toolbar />
            <Box sx={{ overflow: 'auto' }}>
            <List>
                <ListItem button>
                    <ListItemIcon>{<HomeOutlinedIcon />}</ListItemIcon>
                    <ListItemText primary={'Início'} />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>{<ExploreOutlinedIcon />}</ListItemIcon>
                    <ListItemText primary={'Explorar'} />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>{<SubscriptionsOutlinedIcon />}</ListItemIcon>
                    <ListItemText primary={'Inscrições'} />
                </ListItem>
                
            </List>
            <Divider />
            <List>
            <ListItem button>
                    <ListItemIcon>{<VideoLibraryOutlinedIcon />}</ListItemIcon>
                    <ListItemText primary={'Biblioteca'} />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>{<RestoreOutlinedIcon />}</ListItemIcon>
                    <ListItemText primary={'Histórico'} />
                </ListItem>
            </List>
            <Divider />
            <Box p={4}>
                <Typography variant='body1'>
                    Faça login para curtir vídeos, comentar e se inscrever.
                </Typography>
                <Box mt={2}>
                <Button startIcon={<AccountCircleOutlinedIcon />} variant="outlined" href="#outlined-buttons">
                    Fazer Login
                </Button>
                </Box> 
            </Box>  
            <Divider />
            <List>
            <ListItem button>
                    <ListItemIcon>{<SettingsOutlinedIcon />}</ListItemIcon>
                    <ListItemText primary={'Configurações'} />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>{<FlagOutlinedIcon />}</ListItemIcon>
                    <ListItemText primary={'Histórico de denúncias'} />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>{<HelpOutlineOutlinedIcon />}</ListItemIcon>
                    <ListItemText primary={'Ajuda'} />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>{<FeedbackOutlinedIcon />}</ListItemIcon>
                    <ListItemText primary={'Enviar feedback'} />
                </ListItem>
            </List>
            </Box>
        </Drawer>
      </Hidden>
        

        <Box component="main" sx={{ flexGrow: 1, p: 2 }}>
            <Toolbar />
            <Typography
                variant='h5'
                color='textPrimary'
                style={{ fontWeight: 800 }}
                >
                    Recomendados
                </Typography>

                <Grid container spacing={4}>
            {videos.map((item, index) => (
              <Grid item lg={3} md={4} sm={6} xs={12}>
                <Box>
                  <img
                    style={{ width: '100%' }}
                    alt={item.title}
                    src={item.thumb}
                  />
                  <Box>
                    <Typography
                      style={{ fontWeight: 600 }}
                      gutterBottom
                      variant='body1'
                      color='textPrimary'
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      display='block'
                      variant='body2'
                      color='textSecondary'
                    >
                      {item.channel}
                    </Typography>
                    <Typography variant='body2' color='textSecondary'>
                      {`${item.views} • ${item.date}`}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
        </Box>
    </Box>
  );
}

