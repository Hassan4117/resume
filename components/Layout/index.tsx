import {
  Avatar,
  Box,
  Button,
  Divider,
  Drawer,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { MyImage } from "assets";
import Link from "next/link";
import { ReactElement, useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { useRouter } from "next/router";

interface LayoutProps {
  children: ReactElement;
}

const Wrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  height: "100vh",
}));

const SidebarWrapper = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const SidebarContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "300px",
  flexDirection: "column",
  height: "100%",
  overflowY: "scroll",
  background: theme.palette.info.dark,
  padding: "30px 15px",
  color: theme.palette.background.paper,

  [theme.breakpoints.down("md")]: {
    width: "260px",
  },
}));

const ChildrenWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "30px 24px",
  flexDirection: "column",
  display: "flex",
  alignItems: "flex-start",

  [theme.breakpoints.down("md")]: {
    padding: "20px 12px",
  },
}));

const Body = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  overflow: "scroll",
  height: "100vh",
}));

const Footer = styled(Box)(({ theme }) => ({
  padding: "30px 24px",
  color: theme.palette.common.text,
  marginTop: "auto",
  background: "#fafafa",
  fontSize: "12px",

  [theme.breakpoints.down("md")]: {
    padding: "30px 15px",
  },
}));

const ProfileImage = styled(Avatar)(({ theme }) => ({
  height: "150px",
  width: "150px",
  margin: "0 auto",

  [theme.breakpoints.down("md")]: {
    height: "100px",
    width: "100px",
  },
}));

const SidebarName = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  margin: "20px auto",
  fontWeight: 600,
  fontSize: "20px",
  color: theme.palette.background.paper,

  [theme.breakpoints.down("md")]: {
    fontSize: "20px",
  },
}));

const TabsWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  marginTop: "80px",
}));

const Tab = styled(Link)(({ theme }) => ({
  fontWeight: 400,
  fontSize: "16px",
  color: theme.palette.background.paper,

  [theme.breakpoints.down("md")]: {
    fontSize: "14px",
  },
}));

const Name = styled(Typography)(({ theme }) => ({
  margin: "0",
  fontWeight: 700,
  fontSize: "32px",
  color: theme.palette.common.paua,

  [theme.breakpoints.down("md")]: {
    fontSize: "24px",
  },
}));

const Role = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  margin: "0 0 30px",
  fontWeight: 500,
  fontSize: "16px",
  color: theme.palette.common.text,

  [theme.breakpoints.down("md")]: {
    fontSize: "14px",
  },
}));

const MenuButton = styled(Button)(({ theme }) => ({
  fontSize: "16px",
  color: theme.palette.common.suvaGrey,
  minWidth: "auto",
  padding: 0,
  marginBottom: "30px",
}));

const Layout = ({ children }: LayoutProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const router = useRouter();

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) setOpen(false);
  }, [router.pathname]);

  const TABS = [
    {
      label: "About",
      route: "/",
    },
    {
      label: "Experience",
      route: "/experience",
    },
  ];

  const NAME = "Muhammad Hassan Minhas";

  const SidebarContent = () => (
    <SidebarContainer>
      <ProfileImage src={MyImage.src} />
      <SidebarName>{NAME}</SidebarName>
      <TabsWrapper>
        {TABS.map(({ route, label }, index) => (
          <Tab key={index} href={route}>
            {label}
          </Tab>
        ))}
      </TabsWrapper>
    </SidebarContainer>
  );

  return (
    <Wrapper>
      <SidebarWrapper>
        <SidebarContent />
      </SidebarWrapper>
      <Body>
        <ChildrenWrapper>
          {isMobile && (
            <>
              <MenuButton onClick={() => setOpen(true)}>
                <MenuIcon />
              </MenuButton>
              <Drawer
                anchor={"left"}
                open={open}
                onClose={() => setOpen(false)}
              >
                <SidebarContent />
              </Drawer>
            </>
          )}
          <Name>{NAME}</Name>
          <Role>{"MERN Stack Developer"}</Role>
          <Divider sx={{ marginBottom: "20px", width: "100%" }} />
          {children}
        </ChildrenWrapper>
        <Footer>
          {new Date().getFullYear() + " "}© Muhammad Hassan Minhas.
        </Footer>
      </Body>
    </Wrapper>
  );
};

export default Layout;
