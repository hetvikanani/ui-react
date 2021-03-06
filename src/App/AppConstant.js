const FormValidation = {
  name: "Please enter Name",
  nameMin: "Please enter at least 3 characters.",
  emailRequired: "Email Is Required",
  messageRequired: "Message Is Required",
  emailInvalid: "Please enter valid email address.",
  sameuser: "Username already used. please change it.",
  mobileRequired: "Mobaile No. Is Required",
  mobileInvalid: "Please enter valid mobile number.",
  pinInvalid: "Only 6 character allowed.",
  passwordMin: "Password must be at least 6 characters",
  passwordInvalid: "Must Contain One Uppercase, One Lowercase, One Number and One Special Case Character",
  RepatePWD:"Both 'New Password' & 'Conform New Password' need to be the same.",
};
const pwdMatch =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$*#?&^_()[\]])[A-Za-z\d@$*#?&^_()[\]]{8,}$/;

  
const ButtonConstant = {
  next:"Next",
  cancel: "Cancel",
  save: "Save",
  add: "Add",
  edit: "Edit",
  submit: "Submit",
  delete: "Delete",
  download: "Download",
  answer: "Answer",
  decline: "Decline",
  Upload: "Upload",
  logout: "Logout",
  select:"Select",
  genLicence:"Generate Licence",
  payment:"Payment",
  updatePWD:"Update Password",
};
const ConfirmConst = {
  header: "Log-out",
  message: "Are you sure you want to log-out?",
  yes: "Yes",
  no: "No",
};
const RemoveConst = {
  yes: "Yes",
  danger: "danger",
  no: "No ",
  header: "Delete ",
  que: " ?",
  deleteMessage: "Are you sure you want to remove ",
  logMessage: "Are you sure you want to logout?",
  dropText: "Drop image here or click to browse file here",
};
const PageConst = {
  view: "View",
  edit:"Edit",
  wallet:"Wallet",
  prospect:"Prospect",
  sales:"Sales",
  delete:"Delete",
  status: "Status",
  curPwd:"Current Password",
  entCurPwd:"Enter Current Password",
  newPwd:"New Password",
  entNewPwd:"Enter New Password",
  cunfNewPwd:"Confirm New Password",  
  logout: "Log Out",
  colon: ":",
  star: "*",
  sr: "#",
  srNo:"Sr No.",
  notif: "Notifications",
  no: "No",
  va: "View All", 
  email: "Email",
  search: "Search...",
  mobile: "Mobile Number",
  address: "Address",
  rem: "Remarks",
  emid: "Email ID",
  cusName: "Customer Name",
  cusSelect: "Customer Selection",
  lt: "Lead type",
  pro: "Product",
  demo: "Demo",
  sale: "Sale",
  ProName: "Prospect Name",
  contNum: "Contact Number",
  leadName: "Lead Name",
  action: "Action",
  number: "Number",
  name: "Name",
  msg: "Message",
  phonNo: "Phone No.",
  entYoNa: "Enter Your Name",
  entYoEmaAdd: "Enter Your Email Address",
  entYoPhoNo: "Enter Your Phone No.",
  refCode: "Referral Code",
  accManDetail: "Account manager details",
  hotSellPro: "Hot Selling Product",
  saleslist:"Sales List",
  addNeSal:"Add New Sales",
  liceId:"Licence Id",
  subType:"Subscription Type",
  expIn:"Expires in",
  lead:"Lead",
  gstType:"GST Type",
  timePer:"Time Period",
  gstno:"GST No.",
  liceId: "License ID",
  firstName:"First Name",
  middleName:"Middle Name",
  lastName:"Last Name",
};
const Months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
export {
  FormValidation,
  ButtonConstant,
  ConfirmConst,
  PageConst,
  RemoveConst,
  Months,
  pwdMatch,
};
