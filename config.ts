//
//    Bento-Next
//    Config file
//
//
//    https://github.com/migueravila/Bento - upstream

import { Config } from './src/types/config';

// Bento-next config
// Use an editor with Typescript support to get autocomplete and validity checking!
export const config: Config = {
  // General
  name: 'wiillou',
  openInNewTab: false,
  title: 'Bento',

  // Clock
  twelveHourFormat: false,
  flashSeparator: false,

  // Font Family
  font: {
    // 'google' or 'local'
    source: 'google',
    // Font name, e.g. 'Roboto' (case sensitive)
    name: 'Overpass',
  },

  // Theme
  theme: 'catppuccin-mocha',

  // Place a background image in ./src/assets/images/ and provide the file name.
  // Alternatively, provide a URL to an image. If the page is served over https, you may have issues loading images from insecure origins.
  // Set to "" to disable.
  backgroundImage: '',
  themes: [
    // List of installed themes, add your own themes in ./src/assets/css/themes and include it in the array below.
    'arc',
    'bento',
    'catppuccin-frappe',
    'catppuccin-macchiato',
    'catppuccin-mocha',
    'conceptdark', // dark mode only
    'monokai',
    'nord',
    'sakura',
    'solarized',
  ],

  // Search Bar
  searchBar: true,
  searchEngine: 'searx', // google, searx
  barPlaceholder: '', // if blank, use search engine name. Set to ' ' for no placeholder.
  autoFocusBar: true,

  // Greetings
  greetingMorning: 'Good morning,',
  greetingAfternoon: 'Good afternoon,',
  greetingEvening: 'Good evening,',
  greetingNight: 'Sweet dreams,',

  // Layout
  layout: 'lists', // 'bento', 'lists', 'buttons'

  // Weather
  weatherKey: '017b77a6cf784a856aad45bd8c6efc28', // Set your OpenWeatherMap key in .env - Move the included .env.example to .env
  weatherIcons: 'Nord', // 'Onedark', 'Nord', 'Dark', 'White'
  weatherUnit: 'C', // 'F', 'C'
  language: 'en', // More languages in https://openweathermap.org/current#multi

  trackLocation: true, // Request location from the browser. If false, or location is denied, use the coordinates below.
  defaultLatitude: '53.500',
  defaultLongitude: '-2.200',

  // Automatic theme switching:
  // "system" - Switches based on OS color preference
  // "location" - Switches based on local sunrise/sunset (requires OpenWeatherMap API key)
  // "preset" - Switches based on set hours
  // "none" - No automatic switching
  autoTheme: 'system',

  // If autoTheme is set to "preset", set the hours below.
  darkModeOnTime: '18:30',
  lightModeOnTime: '07:00',

  // Set any of the below options to false to disable drawing the component on the page.
  // If themeButton is set to false, the theme can only be set in this file.
  // Disabling the weather component may cause issues with location-based light/dark switching.
  componentsEnabled: {
    searchBar: true,
    themeButton: true,
    clock: true,
    greeter: true,
    date: true,
    weather: true,
  },

  // Buttons
  buttons: [
    // First buttons group
    // If you're using the 'bento' layout, this is the only group that will be used.
    [
      {
        name: 'Github', // set the name of the card
        icon: 'fab-github', // provide a FontAwesome icon name. Regular icons (fa-) don't require a prefix, while FA-Brands icons must be prefixed with "fab-"
        url: 'https://github.com/', // provide a link to the page.
      },
      {
        name: 'Mail',
        icon: 'envelope',
        url: 'https://mail.protonmail.com/',
      },
      {
        name: 'Todoist',
        icon: 'list-ol',
        url: 'https://todoist.com',
      },
      {
        name: 'Calendar',
        icon: 'calendar',
        url: 'https://calendar.google.com/calendar/r',
      },
      {
        name: 'Reddit',
        icon: 'fab-reddit',
        url: 'https://reddit.com',
      },
      {
        name: 'Odysee',
        icon: 'fab-youtube',
        url: 'https://odysee.com/',
      },
    ],
    // Second buttons group
    // You muse use the 'buttons' layout to use this group.
    [
      {
        name: 'Music',
        icon: 'fab-spotify',
        url: 'https://open.spotify.com',
      },
      {
        name: 'twitter',
        icon: 'fab-twitter',
        url: 'https://twitter.com/',
      },
      {
        name: 'bot',
        icon: 'fab-discord',
        url: 'https://discord.com/app',
      },
      {
        name: 'Amazon',
        icon: 'fab-amazon',
        url: 'https://amazon.com/',
      },
      {
        name: 'Hashnode',
        icon: 'fab-hashnode',
        url: 'https://hashnode.com/',
      },
      {
        name: 'Figma',
        icon: 'fab-figma',
        url: 'https://figma.com/',
      },
    ],
  ],

  // Lists
  lists: [
    // First list group
    // If you're using the 'bento' layout, this is the only group that will be used.
    [
      {
        icon: 'image', // Icon for the list to use. The same as the buttons.
        links: [
          {
            name: 'Youtube',
            url: 'https://youtube.com',
          },
          {
            name: 'Reddit',
            url: 'https://reddit.com',
          },
          {
            name: 'Lemmy',
            url: 'https://lemmy.blahaj.zone',
          },
          {
            name: 'Mastodon',
            url: 'https://blahaj.zone',
          },
        ],
      },
      {
        icon: 'snowflake',
        links: [
          {
            name: 'Nix Search',
            url: 'https://www.search.nixos.org',
          },
          {
            name: 'Nixlang Wiki',
            url: 'https://nixlang.wiki',
          },
          {
            name: 'MyNixOS',
            url: 'https://www.mynixos.com',
          },
          {
            name: 'Nixpkgs Github',
            url: 'https://www.github.com/NixOS/nixpkgs',
          },
        ],
      },
    ],
    // Second list group
    // You muse use the 'lists' layout to use this group.
    [
      {
        icon: 'code',
        links: [
          {
            name: 'GitHub',
            url: 'https://github.com/wiillou',
          },
          {
            name: 'Phind',
            url: 'https://phind.com',
          },
          {
            name: 'LazyVim',
            url: 'https://lazyvim.org',
          },
          {
            name: 'Catppuccin',
            url: 'https://catppuccin.github.io'
          },
        ],
      },
      {
        icon: 'folder',
        links: [
          {
            name: 'Proton Mail',
            url: 'https://proton.me',
          },
          {
            name: 'Matrix',
            url: 'https://app.element.io',
          },
          {
            name: 'None',
            url: 'https://www.wiillou.github.io/bento',
          },
          {
            name: 'None',
            url: 'https://www.wiillou.github.io/bento',
          },
        ],
      },
    ],
  ],
};
