import {
  AdminPartner,
  adminProduct,
  adminUsers,
  adminSubscribe,
} from "../Images";

const MenuItems = [
  { title: "Dashboard" },
  { title: "CRM" },
  { title: "Products" },
  { title: "My Business" },
  { title: "Help" },
];
const CRMMenu = ["Leads", "Sales"];
const HelpMenu = ["Contact us", "Support", "Knowledge Base", "Media Kit"];

const AdminItems = [
  { Icon: AdminPartner, title: "Partners" },
  { Icon: AdminPartner, title: "Products" },
  { Icon: AdminPartner, title: "Users" },
  { Icon: AdminPartner, title: "Subscribe" },
];

export { MenuItems, HelpMenu, CRMMenu, AdminItems };
