import {
  adminPartner,
  adminProduct,
  adminUsers,
  adminSubscribe,
} from "../Images";

const MenuItems = ["Dashboard", "CRM", "Products", "My Business", "Help"];
const CRMMenu = ["Leads", "Sales"];
const HelpMenu = ["Contact us", "Support", "Knowledge Base", "Media Kit"];

const AdminItems = [
  { icon: adminPartner, title: "Partners" },
  { icon: adminProduct, title: "Products" },
  { icon: adminUsers, title: "Users" },
  { icon: adminSubscribe, title: "Subscribe" },
];

export { MenuItems, HelpMenu, CRMMenu, AdminItems };
