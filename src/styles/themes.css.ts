import { createGlobalTheme } from '@vanilla-extract/css'
import { themeVars, rgb } from '~/styles/variables.css'

createGlobalTheme('.light', themeVars, {
  rgb: {
    'text-50': '250 249 248', //  #FAF9F8
    'text-100': '234 229 226', // #EAE5E2
    'text-200': '201 189 182', // #C9BDB6
    'text-300': '160 139 126', // #A08B7E
    'text-400': '123 103 91', //  #7B675B
    'text-500': '89 74 65', //    #594A41
    'text-600': '74 62 55', //    #4A3E37
    'text-700': '59 50 44', //    #3B322C
    'text-800': '41 34 30', //    #29221E
    'text-900': '35 29 26', //    #231D1A

    brand: '108 120 46', //       #6c782e
    accent: '180 113 9', //       #b47109
    fg1: rgb['text-900'],
    fg2: rgb['text-700'],
    fg3: rgb['text-400'],
    bg: '250 250 235', //         #fafaeb
    glass: rgb.brand,

    // Colors
    black: rgb['text-900'], //    #231D1A
    gray: '146 131 116', //       #928374
    red: '193 74 74', //          #c14a4a
    orange: '195 94 10', //       #c35e0a
    yellow: '180 113 9', //       #b47109
    brown: '101 71 53', //        #654735
    green: '108 120 46', //       #6c782e
    cyan: '76 122 93', //         #4c7a5d
    blue: '69 112 122', //        #45707a
    purple: '148 94 128' //       #945e80
  }
})

createGlobalTheme('.dark', themeVars, {
  rgb: {
    'text-50': '245 244 241', //  #F5F4F1
    'text-100': '228 224 218', // #E4E0DA
    'text-200': '193 185 171', // #C1B9AB
    'text-300': '173 163 145', // #ADA391
    'text-400': '153 141 118', // #9A8D76
    'text-500': '130 118 96', //  #827660
    'text-600': '104 94 77', //   #685E4D
    'text-700': '77 70 57', //    #4D4639
    'text-800': '51 46 38', //    #332E26
    'text-900': '25 22 18', //    #191612

    brand: '169 182 101', //      #a9b665
    accent: '216 166 87', //      #d8a657
    fg1: rgb['text-50'],
    fg2: rgb['text-200'],
    fg3: rgb['text-300'],
    bg: '41 40 40', //            #292828
    glass: rgb['text-200'], //    #C1B9AB

    // Colors
    black: rgb['text-900'], //    #191612
    gray: '146 131 116', //       #928374
    red: '234 105 98', //         #ea6962
    orange: '231 138 78', //      #e78a4e
    yellow: '216 166 87', //      #d8a657
    brown: '212 190 152', //      #d4be98
    green: '169 182 101', //      #a9b665
    cyan: '137 180 130', //       #89b482
    blue: '125 174 163', //       #7daea3
    purple: '211 134 155' //      #d3869b
  }
})
