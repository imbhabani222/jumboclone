// Home Icons
import GraphicEqIcon from "@mui/icons-material/GraphicEq"
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange"
import ListAltIcon from "@mui/icons-material/ListAlt"
import SupportAgentIcon from "@mui/icons-material/SupportAgent"
import PieChartOutlineIcon from "@mui/icons-material/PieChartOutline"
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined"
import NewspaperOutlinedIcon from "@mui/icons-material/NewspaperOutlined"

//App Icons
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined"
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined"
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined"

// Card Icons
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined"
import LeaderboardOutlinedIcon from "@mui/icons-material/LeaderboardOutlined"

export const HomeButtons = [
  {
    id: 1,
    text: "Misc",
    icon: <GraphicEqIcon sx={{ fontSize: "20px", display: "inline-flex" }} />,
  },
  {
    id: 2,
    text: "Crypto",
    icon: (
      <CurrencyExchangeIcon sx={{ fontSize: "20px", display: "inline-flex" }} />
    ),
  },
  {
    id: 3,
    text: "Listing",
    icon: <ListAltIcon sx={{ fontSize: "20px", display: "inline-flex" }} />,
  },
  {
    id: 4,
    text: "Crm",
    icon: (
      <SupportAgentIcon sx={{ fontSize: "20px", display: "inline-flex" }} />
    ),
  },
  {
    id: 5,
    text: "Intranet",
    icon: (
      <PieChartOutlineIcon sx={{ fontSize: "20px", display: "inline-flex" }} />
    ),
  },
  {
    id: 6,
    text: "eCommerce",
    icon: (
      <ShoppingCartOutlinedIcon
        sx={{ fontSize: "20px", display: "inline-flex" }}
      />
    ),
  },
  {
    id: 7,
    text: "News",
    icon: (
      <NewspaperOutlinedIcon
        sx={{ fontSize: "20px", display: "inline-flex" }}
      />
    ),
  },
]

export const AppButtons = [
  {
    id: 1,
    text: "Chat",
    icon: (
      <ChatOutlinedIcon sx={{ fontSize: "20px", display: "inline-flex" }} />
    ),
  },
  {
    id: 2,
    text: "Contacts",
    icon: (
      <ContactsOutlinedIcon sx={{ fontSize: "20px", display: "inline-flex" }} />
    ),
  },
  {
    id: 3,
    text: "Mail",
    icon: (
      <EmailOutlinedIcon sx={{ fontSize: "20px", display: "inline-flex" }} />
    ),
  },
]

export const CardButtons = [
  {
    id: 1,
    text: "Widgets",
    icon: (
      <WidgetsOutlinedIcon sx={{ fontSize: "20px", display: "inline-flex" }} />
    ),
  },
  {
    id: 2,
    text: "Metrics",
    icon: (
      <LeaderboardOutlinedIcon
        sx={{ fontSize: "20px", display: "inline-flex" }}
      />
    ),
  },
]
