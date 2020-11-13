import BarChartIcon from '@material-ui/icons/BarChart';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import ChatIcon from '@material-ui/icons/ChatOutlined';
import CodeIcon from '@material-ui/icons/Code';
import DashboardIcon from '@material-ui/icons/DashboardOutlined';
import ErrorIcon from '@material-ui/icons/ErrorOutline';
import FolderIcon from '@material-ui/icons/FolderOutlined';
import DashboardTwoToneIcon from '@material-ui/icons/DashboardTwoTone';
import GradeTwoTone from '@material-ui/icons/GradeTwoTone';
import ListAltIcon from '@material-ui/icons/ListAlt';
import LockOpenIcon from '@material-ui/icons/LockOpenOutlined';
import MailIcon from '@material-ui/icons/MailOutlined';
import PresentToAllIcon from '@material-ui/icons/PresentToAll';
import PeopleIcon from '@material-ui/icons/PeopleOutlined';
import PersonIcon from '@material-ui/icons/PersonOutlined';
import ReceiptIcon from '@material-ui/icons/ReceiptOutlined';
import SettingsIcon from '@material-ui/icons/SettingsOutlined';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import EventNoteIcon from '@material-ui/icons/EventNote';
import NoteIcon from '@material-ui/icons/Note';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ListIcon from "@material-ui/icons/List";
import DescriptionIcon from '@material-ui/icons/Description';

const iconsMap = {
  DescriptionIcon: DescriptionIcon,
  ListIcon: ListIcon,
  AssignmentIcon: AssignmentIcon,
  NoteIcon: NoteIcon,
  EventNoteIcon: EventNoteIcon,
  BarChartIcon: BarChartIcon,
  CalendarTodayIcon: CalendarTodayIcon,
  ChatIcon: ChatIcon,
  CodeIcon: CodeIcon,
  DashboardIcon: DashboardIcon,
  ErrorIcon: ErrorIcon,
  FolderIcon: FolderIcon,
  DashboardTwoToneIcon: DashboardTwoToneIcon,
  GradeTwoTone: GradeTwoTone,
  ListAltIcon: ListAltIcon,
  LockOpenIcon: LockOpenIcon,
  MailIcon: MailIcon,
  PresentToAllIcon: PresentToAllIcon,
  PeopleIcon: PeopleIcon,
  PersonIcon: PersonIcon,
  ReceiptIcon: ReceiptIcon,
  SettingsIcon: SettingsIcon,
  ViewModuleIcon: ViewModuleIcon
};

const navItems2 = [
  {
    label: 'Menu de navigation',
    content: JSON.parse(
      `[
  {
    "label": "Dashboard",
    "icon": "DashboardTwoToneIcon",
    "to": "/dashboard"
  },
  {
    "label": "Projets",
    "icon": "LockOpenIcon",
    "to": "/project"
  },
  {
    "label": "Sprints",
    "icon": "EventNoteIcon",
    "to": "/sprint"
  },
  {
    "label": "Taches",
    "icon": "AssignmentIcon",
    "to": "/task"
  },
  {
    "label": "Story",
    "icon": "NoteIcon",
    "to": "/note"
  },
  {
    "label": "Problèmes",
    "icon": "ErrorIcon",
    "to": "/problem"
  },
  {
    "label": "Documents",
    "icon": "DescriptionIcon",
    "to": "/document"
  },
  {
    "label": "Discussion",
    "icon": "ChatIcon",
    "to": "/discussion"
  }
]`,
      (key, value) => {
        if (key === 'icon') {
          return iconsMap[value];
        } else {
          return value;
        }
      }
    )
  }
];

// the old one
const navItems = [
  {
    label: 'Navigation menu',
    content: JSON.parse(
      `[
  {
    "label": "Dashboard",
    "icon": "DashboardTwoToneIcon",
    "to": "/dashboard"
  },
  {
    "label": "Projets",
    "icon": "LockOpenIcon",
    "to": "/project"
  },
  {
    "label": "Sprints",
    "icon": "EventNoteIcon",
    "to": "/sprint"
  },
  {
    "label": "Taches",
    "icon": "AssignmentIcon",
    "to": "/task"
  },
  {
    "label": "Story",
    "icon": "NoteIcon",
    "to": "/note"
  },
  {
    "label": "Problèmes",
    "icon": "ErrorIcon",
    "to": "/problem"
  },
  {
    "label": "Documents",
    "icon": "DescriptionIcon",
    "to": "/document"
  },
  {
    "label": "Discussion",
    "icon": "ChatIcon",
    "to": "/discussion"
  },
 
  {
    "label": "Dashboards",
    "icon": "DashboardTwoToneIcon",
    "content": [
      {
        "label": "Default",
        "description": "This is a dashboard page example built using this template.",
        "to": "/DashboardDefault"
      },
      {
        "label": "Analytics",
        "description": "This is an example dashboard created using build-in elements and components.",
        "to": "/DashboardAnalytics"
      },
      {
        "label": "Sales Management",
        "description": "Example of a Dashboard page built with this UI framework.",
        "to": "/DashboardSales"
      },
      {
        "label": "Reports",
        "description": "This dashboard was created as an example of the flexibility that this UI framework offers.",
        "to": "/DashboardReports"
      },
      {
        "label": "Real Estate",
        "description": "This dashboard example was created using only the available elements and components, no additional styles were written!",
        "to": "/DashboardRealEstate"
      },
      {
        "label": "Server Status",
        "description": "Yet another dashboard built using only the included elements and components.",
        "to": "/DashboardServerStatus"
      },
      {
        "label": "Projects",
        "description": "Example dashboard built for a projects related niche application.",
        "to": "/DashboardProjects"
      },
      {
        "label": "Helpdesk",
        "description": "Dashboard page that could be used for a helpdesk niche application.",
        "to": "/DashboardHelpdesk"
      },
      {
        "label": "Customers",
        "description": "Your application works with customers, then this is the dashboard for you.",
        "to": "/DashboardCustomers"
      },
      {
        "label": "Cryptocurrency",
        "description": "Crypto is the hot stuff right now. Here's a dashboard for it.",
        "to": "/DashboardCryptocurrency"
      },
      {
        "label": "CRM Manager",
        "description": "If you're building a CRM, you can start by using this dashboard example.",
        "to": "/DashboardCrmManager"
      },
      {
        "label": "Content Statistics",
        "description": "Dashboard example with lots of statistics cards.",
        "to": "/DashboardContent"
      }
    ]
  },
  {
    "label": "Applications",
    "icon": "LockOpenIcon",
    "content": [
      {
        "label": "Calendar",
        "description": "Application example related to calendars and dates.",
        "to": "/ApplicationsCalendar"
      },
      {
        "label": "Chat",
        "description": "Example application that implements a full screen chat.",
        "to": "/ApplicationsChat"
      },
      {
        "label": "Contacts",
        "description": "Manage your contacts in style with this application example.",
        "to": "/ApplicationsContacts"
      },
      {
        "label": "File Manager",
        "description": "Manage your files with a beautiful user interface.",
        "to": "/ApplicationsFileManager"
      },
      {
        "label": "Mail",
        "description": "Mailboxes? No problem, we've got a started application layout for them.",
        "to": "/ApplicationsMail"
      },
      {
        "label": "Projects",
        "description": "Building a projects related application? Start from this layout.",
        "to": "/ApplicationsProjects"
      },
      {
        "label": "App Widgets",
        "description": "Examples of app snippets, like chat, file managers or tasks, that can be integrated in other elements, like card boxes.",
        "to": "/ApplicationsWidgets"
      }
    ]
  },
  {
    "label": "Pages",
    "icon": "CalendarTodayIcon",
    "content": [
      {
        "label": "Login",
        "description": "This page can be used to create a login section for your users.",
        "to": "/PagesLogin"
      },
      {
        "label": "Register",
        "description": "This page can be used to create a register section for your users.",
        "to": "/PagesRegister"
      },
      {
        "label": "Recover Password",
        "description": "This page can be used to create a recover password section for your users.",
        "to": "/PagesRecoverPassword"
      },
      {
        "label": "Profile",
        "description": "This is an example page for an user's profile created with this UI framework.",
        "to": "/PagesProfile"
      },
      {
        "label": "Invoice",
        "description": "This pages contains an example invoice design.",
        "to": "/PagesInvoice"
      },
      {
        "label": "Error 404",
        "description": "You can redirect your users to this page in case their encounter a 404 error.",
        "to": "/PagesError404"
      },
      {
        "label": "Error 500",
        "description": "You can redirect your users to this page in case their encounter a 500 error.",
        "to": "/PagesError500"
      },
      {
        "label": "Error 505",
        "description": "You can redirect your users to this page in case their encounter a 505 error.",
        "to": "/PagesError505"
      }
    ]
  },
  {
    "label": "Elements",
    "icon": "SettingsIcon",
    "content": [
      {
        "label": "Buttons",
        "description": "Wide selection of buttons that feature different styles for backgrounds, borders and hover options!",
        "to": "/Buttons"
      },
      {
        "label": "Dropdowns",
        "description": "A drop-down list is a graphical control element, similar to a list box, that allows the user to choose one value from a list.",
        "to": "/Dropdowns"
      },
      {
        "label": "Navigation menus",
        "description": "Navigation menus are one of the basic building blocks for any web or mobile app.",
        "to": "/NavigationMenus"
      },
      {
        "label": "Avatars",
        "description": "Image or letters avatars with multiple sizes, borders and possibility to group them.",
        "to": "/Avatars"
      },
      {
        "label": "Progress Bars",
        "description": "You can use the progress bars on their own or in combination with other widgets.",
        "to": "/ProgressBars"
      },
      {
        "label": "Ratings",
        "description": "Display beautiful ratings with custom icons, stars and colors.",
        "to": "/Ratings"
      },
      {
        "label": "Pagination",
        "description": "Basic and dynamic pagination for use in your next awesome application.",
        "to": "/Pagination"
      },
      {
        "label": "Ribbons",
        "description": "Symbols that can be used to add an extra touch to our React cards or elements.",
        "to": "/Ribbons"
      },
      {
        "label": "Scrollable",
        "description": "Add scrolling areas to any elements with custom scrollbars or default browser ones.",
        "to": "/Scrollable"
      },
      {
        "label": "Badges",
        "description": "Badges and labels are used to offer extra small pieces of info for your content.",
        "to": "/Badges"
      },
      {
        "label": "Icons",
        "description": "Wide icons selection including from flag icons to FontAwesome and other icons libraries.",
        "to": "/Icons"
      },
      {
        "label": "Timelines",
        "description": "Timelines are used to show lists of notifications, tasks or actions in a beautiful way.",
        "to": "/Timelines"
      },
      {
        "label": "Utilities & Helpers",
        "description": "These are helpers that speed up the dev time for various components and effects.",
        "to": "/UtilitiesHelpers"
      }
    ]
  },
  {
    "label": "Cards",
    "icon": "ViewModuleIcon",
    "content": [
      {
        "label": "Cards examples 1",
        "description": "Wide selection of cards with multiple styles, borders, actions and hover effects.",
        "to": "/Cards1"
      },
      {
        "label": "Cards examples 2",
        "description": "Wide selection of cards with multiple styles, borders, actions and hover effects.",
        "to": "/Cards2"
      },
      {
        "label": "Cards examples 3",
        "description": "Wide selection of cards with multiple styles, borders, actions and hover effects.",
        "to": "/Cards3"
      },
      {
        "label": "Cards examples 4",
        "description": "Wide selection of cards with multiple styles, borders, actions and hover effects.",
        "to": "/Cards4"
      },
      {
        "label": "Cards examples 5",
        "description": "Wide selection of cards with multiple styles, borders, actions and hover effects.",
        "to": "/Cards5"
      },
      {
        "label": "Cards examples 6",
        "description": "Wide selection of cards with multiple styles, borders, actions and hover effects.",
        "to": "/Cards6"
      },
      {
        "label": "Cards examples 7",
        "description": "Wide selection of cards with multiple styles, borders, actions and hover effects.",
        "to": "/Cards7"
      },
      {
        "label": "Cards examples 8",
        "description": "Wide selection of cards with multiple styles, borders, actions and hover effects.",
        "to": "/Cards8"
      },
      {
        "label": "Cards examples 9",
        "description": "Wide selection of cards with multiple styles, borders, actions and hover effects.",
        "to": "/Cards9"
      },
      {
        "label": "Cards examples 10",
        "description": "Wide selection of cards with multiple styles, borders, actions and hover effects.",
        "to": "/Cards10"
      },
      {
        "label": "Cards examples 11",
        "description": "Wide selection of cards with multiple styles, borders, actions and hover effects.",
        "to": "/Cards11"
      },
      {
        "label": "Cards examples 12",
        "description": "Wide selection of cards with multiple styles, borders, actions and hover effects.",
        "to": "/Cards12"
      }
    ]
  },
  {
    "label": "Presentation Blocks",
    "icon": "ErrorIcon",
    "content": [
      {
        "label": "Landing page",
        "description": "",
        "to": "/LandingPage"
      },
      {
        "label": "Feature sections",
        "description": "Create feature boxes to present your options in style.",
        "to": "/FeatureSections"
      },
      {
        "label": "Icon Boxes",
        "description": "These boxes can be used to pin point features & highlights.",
        "to": "/IconBoxes"
      },
      {
        "label": "Pricing Tables",
        "description": "Multiple examples of pricing tables to suit all needs.",
        "to": "/PricingTables"
      },
      {
        "label": "Header sections",
        "description": "Integrate any of these headers in your presentation layouts.",
        "to": "/HeaderSections"
      },
      {
        "label": "Testimonials sections",
        "description": "Create sections with testimonials and ratings starting from these examples.",
        "to": "/TestimonialsSections"
      },
      {
        "label": "Blog sections",
        "description": "Create blog pages and lists in style with these examples.",
        "to": "/BlogSections"
      },
      {
        "label": "Partners sections",
        "description": "Maybe you want to show some of your partners. We've got you covered.",
        "to": "/PartnersSections"
      },
      {
        "label": "Call to action boxes",
        "description": "Bring that sale home, with these components you're one step closer.",
        "to": "/CtaBoxes"
      },
      {
        "label": "Footer sections",
        "description": "Choose between multiple footer section styles.",
        "to": "/FooterSections"
      },
      {
        "label": "Hero sections",
        "description": "Create stunning presentation website and hero sections with these examples.",
        "to": "/HeroSections"
      }
    ]
  },
  {
    "label": "Widgets",
    "icon": "ReceiptIcon",
    "content": [
      {
        "label": "Accordions",
        "description": "Accordions represent collapsable component with extended functionality.",
        "to": "/Accordions"
      },
      {
        "label": "Modal dialogs",
        "description": "Wide selection of modal dialogs styles and animations available.",
        "to": "/Modals"
      },
      {
        "label": "Notifications",
        "description": "Show beautiful, animated growl like notifications or alerts on your pages screens.",
        "to": "/Notifications"
      },
      {
        "label": "Drag & Drop",
        "description": "Enable draggable functionality on any DOM element. Move the draggable object by clicking on it with the mouse and dragging it anywhere within the viewport.",
        "to": "/DragDrop"
      },
      {
        "label": "Calendars",
        "description": "Calendars are used in a lot of apps. We thought to include some for your easy to use implementations.",
        "to": "/Calendars"
      },
      {
        "label": "Carousels",
        "description": "Create easy, simple to use and beautiful slideshows & carousels with these components.",
        "to": "/Carousels"
      },
      {
        "label": "Popovers",
        "description": "Add small overlay content, like those found in iOS, to any element for housing secondary information.",
        "to": "/Popovers"
      },
      {
        "label": "Tree View",
        "description": "Create stunning tree like views with this awesome React plugin.",
        "to": "/TreeView"
      },
      {
        "label": "Tabs",
        "description": "Tabs are used to split content between multiple sections. Wide variety available.",
        "to": "/Tabs"
      },
      {
        "label": "Guided Tours",
        "description": "These can be used with other components and elements to create stunning and unique new elements for your UIs.",
        "to": "/GuidedTours"
      },
      {
        "label": "Image Crop",
        "description": "You can easily crop and edit images with this React component.",
        "to": "/ImageCrop"
      },
      {
        "label": "Loading Indicators",
        "description": "Use these loading indicators in combination with other elements to show current app status to users.",
        "to": "/LoadingIndicators"
      },
      {
        "label": "Count Up",
        "description": "Add animations to your numbers. It'll make your next ArchitectUI app more user friendly.",
        "to": "/CountUp"
      },
      {
        "label": "Context Menus",
        "description": "A context menu is a popup menu that appears upon user interaction, such as a right-click mouse operation.",
        "to": "/ContextMenus"
      }
    ]
  },
  {
    "label": "Regular Tables",
    "icon": "CodeIcon",
    "content": [
      {
        "label": "Tables examples 1",
        "description": "Tables are the backbone of almost all web applications.",
        "to": "/RegularTables1"
      },
      {
        "label": "Tables examples 2",
        "description": "Tables are the backbone of almost all web applications.",
        "to": "/RegularTables2"
      },
      {
        "label": "Tables examples 3",
        "description": "Tables are the backbone of almost all web applications.",
        "to": "/RegularTables3"
      },
      {
        "label": "Tables examples 4",
        "description": "Tables are the backbone of almost all web applications.",
        "to": "/RegularTables4"
      },
      {
        "label": "Tables examples 5",
        "description": "Tables are the backbone of almost all web applications.",
        "to": "/RegularTables5"
      }
    ]
  },
  {
    "label": "Dynamic Tables",
    "icon": "PeopleIcon",
    "content": [
      {
        "label": "React Material-UI",
        "description": "Dynamic tables with advanced functionality like sort, search or filter.",
        "to": "/DynamicTables2"
      }
    ]
  },
  {
    "label": "Forms Elements",
    "icon": "BarChartIcon",
    "content": [
      {
        "label": "Controls",
        "description": "Wide selection of forms controls, using a standardised code base, specifically for React.",
        "to": "/FormsControls"
      },
      {
        "label": "Wizard",
        "description": "Easily create beautiful form multi step wizards or presentation steps.",
        "to": "/FormsWizard"
      }
    ]
  },
  {
    "label": "Forms Widgets",
    "icon": "PresentToAllIcon",
    "content": [
      {
        "label": "Clipboard",
        "description": "You can copy/paste text with this great form widget.",
        "to": "/FormsClipboard"
      },
      {
        "label": "Colorpicker",
        "description": "Color Pickers following the design from Photoshop, Sketch, Chrome, Twitter and more.",
        "to": "/FormsColorpicker"
      },
      {
        "label": "Datepicker",
        "description": "Build beautiful datepickers perfectly integrated in the general style of the application.",
        "to": "/FormsDatepicker"
      },
      {
        "label": "Dual Listbox",
        "description": "This component provides two lists controls side-by-side that allows items in one list to be selected and moved.",
        "to": "/FormsDualListbox"
      },
      {
        "label": "Input Mask",
        "description": "Add all kind of input masks for inputs for a better user experience.",
        "to": "/FormsInputMask"
      },
      {
        "label": "Input Select",
        "description": "Create fancy multi select dropdown menus for a better user experience.",
        "to": "/FormsInputSelect"
      },
      {
        "label": "Slider",
        "description": "Create sliders and range sliders with these React form widgets.",
        "to": "/FormsSlider"
      },
      {
        "label": "Textarea Autosize",
        "description": "Create textareas that grow in height based on their content.",
        "to": "/FormsTextareaAutosize"
      },
      {
        "label": "Timepicker",
        "description": "The timepicker component is a plugin that helps users easily input time entries.",
        "to": "/FormsTimepicker"
      },
      {
        "label": "Toggle Switch",
        "description": "Instead of regular checkboxes, use these toggle widgets for a better UX",
        "to": "/FormsToggleSwitch"
      },
      {
        "label": "Typeahead",
        "description": "Create beautiful suggestion inputs for React form elements.",
        "to": "/FormsTypeahead"
      },
      {
        "label": "Upload",
        "description": "Handle your file uploads on the server easily and with style.",
        "to": "/FormsUpload"
      },
      {
        "label": "Validation",
        "description": "Inline validation is very easy to implement using our UI framework.",
        "to": "/FormsValidation"
      },
      {
        "label": "WYSIWYG Editors",
        "description": "Create beautiful suggestion inputs for React form elements.",
        "to": "/FormsWysiwygEditor"
      }
    ]
  },
  {
    "label": "Others",
    "icon": "ChatIcon",
    "content": [
      {
        "label": "Apex Charts",
        "description": "Wonderful animated charts built with ApexCharts components.",
        "to": "/ApexCharts"
      },
      {
        "label": "Gauges Charts",
        "description": "Create wonderful animated gauges that can be used in combination with other UI elements.",
        "to": "/GaugesCharts"
      },
      {
        "label": "ChartJS",
        "description": "Huge selection of charts created with the ChartJS Plugin.",
        "to": "/ChartjsCharts"
      },
      {
        "label": "Sparklines Charts",
        "description": "These components add tiny charts in various elements and components.",
        "to": "/SparklinesCharts"
      },
      {
        "label": "Maps",
        "description": "Implement in your applications Google or vector maps.",
        "to": "/Maps"
      },
      {
        "label": "List Groups",
        "description": "These can be used with other components and elements to create stunning and unique new elements for your UIs.",
        "to": "/ListGroups"
      }
    ]
  }
]`,
      (key, value) => {
        if (key === 'icon') {
          return iconsMap[value];
        } else {
          return value;
        }
      }
    )
  }
];

export default navItems2;
