
/**
 * Google Sheet Viewer Configuration
 * 
 * This file contains all the configuration settings for the Google Sheet Viewer application.
 * Non-technical users can modify the settings below to customize the application behavior.
 */

// Google API Credentials
// Go to Google Cloud Console (https://console.cloud.google.com/) to get your API key
export const GOOGLE_API_KEY = "AIzaSyA0OiVh0_l42LuY_booD8NLRPD6o3M8O78";

// Spreadsheet ID
// This is the unique identifier for your Google Spreadsheet
// You can find this in the URL of your spreadsheet:
// https://docs.google.com/spreadsheets/d/SPREADSHEET_ID/edit
export const SPREADSHEET_ID = "1kLXWS4vy40O9EzNYM4jvjrLaUTjPRtSuEwMA2_6fIu8";

// Default Sheet Name
// If you want a specific sheet to be selected by default, enter its name here
// Leave empty ("") for no default selection
export const DEFAULT_SHEET_NAME = "Sheet2";

// Search Columns Configuration
// Configure sheet-specific search columns
export const SHEET_CONFIG = {
  "Sheet1": {
    searchColumns: [
      { position: 0, customLabel: null }, // Only one search field for Sheet1
    ]
  },
  "Sheet2": {
    searchColumns: [
      { position: 0, customLabel: null }, // First search column
      { position: 1, customLabel: null }, // Second search column
    ]
  },
  // Add more sheet configurations as needed
};

// Default search columns for sheets not specifically configured above
export const DEFAULT_SEARCH_COLUMNS = [
  { position: 0, customLabel: null }, // First search column
  { position: 1, customLabel: null }, // Second search column
  // Uncomment and modify to add more search columns:
  // { position: 2, customLabel: null }, // Third search column
];

// Image to display when search results are found
export const RESULTS_FOUND_IMAGE = "/placeholder.svg"; // Path to the image to display when results are found

// Disable Flag Column (Optional)
// If your spreadsheet has a column that should be used to hide certain rows,
// specify the column header name here. Rows with "true", "yes", "1", or "y" in this column
// will be hidden from results even if they match the search criteria.
// Set to null or empty string if you don't want to use this feature.
export const DISABLE_FLAG_COLUMN = "Disabled";

// Application Theme Configuration
export const DEFAULT_THEME = "system"; // Options: "light", "dark", "system"
export const DEFAULT_LANGUAGE = "en"; // Options: "en" (English), "ne" (Nepali), "hi" (Hindi)

// Display Configuration
export const ROWS_PER_PAGE = 10; // Number of rows to display per page

// Logo Configuration
// Path to your logo image. Set to empty string ("") to hide logo.
export const LOGO_PATH = "/logo_navgurukul.png"; // Example: "/logo.png" or "https://yoursite.com/logo.png"
