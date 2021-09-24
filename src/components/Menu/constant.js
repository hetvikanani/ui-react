import {
  AdminPartner,
  AdminProduct,
  AdminUsers,
  AdminSubscribe,
} from "../Images";

const MenuItems = [
  { title: "Dashboard" },
  { title: "CRM" },
  { title: "Products" },
  { title: "My Business" },
  { title: "Help" },
];
const CRMMenu = [{title:"Leads"}, {title:"Sales"},];
const HelpMenu = [{title:"Contact us"}, {title:"Support"}, {title:"Knowledge Base"}, {title:"Media Kit"},];

const AdminItems = [
  { Icon: AdminPartner, title: "Partners" },
  { Icon: AdminUsers, title: "Products" },
  { Icon: AdminSubscribe, title: "Users" },
  { Icon: AdminProduct, title: "Subscribe" },
];  

export { MenuItems, HelpMenu, CRMMenu, AdminItems };
