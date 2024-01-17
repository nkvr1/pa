import DashboardIcon from "@mui/icons-material/Dashboard";
import ContactsIcon from "@mui/icons-material/Contacts";
import CropPortraitIcon from "@mui/icons-material/CropPortrait";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import CompareIcon from "@mui/icons-material/Compare";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import CasesIcon from "@mui/icons-material/Cases";
export const SidebarData = [
  {
    title: "Dashboard",
    icon: <DashboardIcon />,
    link: "/dashboard",
  },

  {
    title: "Contacts",
    icon: <ContactsIcon />,
    link: "/contacts",
  },
  {
    title: "Opportunity",
    icon: <CropPortraitIcon />,
    link: "/opportunity",
  },
  {
    title: "Account",
    icon: <ManageAccountsIcon />,
    link: "/account",
  },
  {
    title: "Companies",
    icon: <CompareIcon />,
    link: "/companies",
  },
  {
    title: "Analytics",
    icon: <AnalyticsIcon />,
    link: "/analytics",
  },
  {
    title: "User",
    icon: <SupervisorAccountIcon />,
    link: "/user",
  },
  {
    title: "Cases",
    icon: <CasesIcon />,
    link: "/Cases",
  },
];
