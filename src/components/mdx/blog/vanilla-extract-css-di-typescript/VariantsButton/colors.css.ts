import { createGlobalTheme, createThemeContract } from '@vanilla-extract/css'

const pink = {
  pink1: 'hsl(322, 100%, 99.4%)',
  pink2: 'hsl(323, 100%, 98.4%)',
  pink3: 'hsl(323, 86.3%, 96.5%)',
  pink4: 'hsl(323, 78.7%, 94.2%)',
  pink5: 'hsl(323, 72.2%, 91.1%)',
  pink6: 'hsl(323, 66.3%, 86.6%)',
  pink7: 'hsl(323, 62.0%, 80.1%)',
  pink8: 'hsl(323, 60.3%, 72.4%)',
  pink9: 'hsl(322, 65.0%, 54.5%)',
  pink10: 'hsl(322, 63.9%, 50.7%)',
  pink11: 'hsl(322, 75.0%, 46.0%)',
  pink12: 'hsl(320, 70.0%, 13.5%)'
}

const pinkA = {
  pinkA1: 'hsl(322, 100%, 99.4%)',
  pinkA2: 'hsl(323, 100%, 98.4%)',
  pinkA3: 'hsl(323, 86.3%, 96.5%)',
  pinkA4: 'hsl(323, 78.7%, 94.2%)',
  pinkA5: 'hsl(323, 72.2%, 91.1%)',
  pinkA6: 'hsl(323, 66.3%, 86.6%)',
  pinkA7: 'hsl(323, 62.0%, 80.1%)',
  pinkA8: 'hsl(323, 60.3%, 72.4%)',
  pinkA9: 'hsl(322, 65.0%, 54.5%)',
  pinkA10: 'hsl(322, 63.9%, 50.7%)',
  pinkA11: 'hsl(322, 75.0%, 46.0%)',
  pinkA12: 'hsl(320, 70.0%, 13.5%)'
}

const olive = {
  olive1: 'hsl(110, 20.0%, 99.0%)',
  olive2: 'hsl(120, 16.7%, 97.6%)',
  olive3: 'hsl(119, 10.1%, 95.2%)',
  olive4: 'hsl(118, 8.1%, 93.0%)',
  olive5: 'hsl(117, 7.1%, 90.8%)',
  olive6: 'hsl(115, 6.4%, 88.5%)',
  olive7: 'hsl(114, 5.9%, 85.4%)',
  olive8: 'hsl(110, 5.2%, 77.3%)',
  olive9: 'hsl(110, 3.5%, 55.5%)',
  olive10: 'hsl(111, 2.8%, 51.7%)',
  olive11: 'hsl(110, 3.0%, 43.0%)',
  olive12: 'hsl(110, 25.0%, 9.5%)'
}

const oliveA = {
  oliveA1: 'hsla(120, 89.3%, 18.3%, 0.012)',
  oliveA2: 'hsla(120, 87.7%, 16.0%, 0.028)',
  oliveA3: 'hsla(120, 99.5%, 7.7%, 0.051)',
  oliveA4: 'hsla(120, 92.3%, 8.5%, 0.075)',
  oliveA5: 'hsla(120, 86.0%, 6.9%, 0.099)',
  oliveA6: 'hsla(120, 94.8%, 6.8%, 0.122)',
  oliveA7: 'hsla(120, 99.3%, 5.2%, 0.153)',
  oliveA8: 'hsla(110, 93.8%, 5.2%, 0.240)',
  oliveA9: 'hsla(111, 98.7%, 3.0%, 0.459)',
  oliveA10: 'hsla(111, 93.5%, 2.9%, 0.499)',
  oliveA11: 'hsla(111, 95.2%, 2.5%, 0.585)',
  oliveA12: 'hsla(110, 97.6%, 2.6%, 0.930)'
}

const pinkDark = {
  pink1: 'hsl(318, 25.0%, 9.6%)',
  pink2: 'hsl(319, 32.2%, 11.6%)',
  pink3: 'hsl(319, 41.0%, 16.0%)',
  pink4: 'hsl(320, 45.4%, 18.7%)',
  pink5: 'hsl(320, 49.0%, 21.1%)',
  pink6: 'hsl(321, 53.6%, 24.4%)',
  pink7: 'hsl(321, 61.1%, 29.7%)',
  pink8: 'hsl(322, 74.9%, 37.5%)',
  pink9: 'hsl(322, 65.0%, 54.5%)',
  pink10: 'hsl(323, 72.8%, 59.2%)',
  pink11: 'hsl(325, 90.0%, 66.4%)',
  pink12: 'hsl(322, 90.0%, 95.8%)'
}

const pinkDarkA = {
  pinkA1: 'hsla(0, 0%, 0%, 0)',
  pinkA2: 'hsla(320, 98.1%, 64.1%, 0.036)',
  pinkA3: 'hsla(320, 99.1%, 63.1%, 0.121)',
  pinkA4: 'hsla(320, 99.5%, 62.7%, 0.170)',
  pinkA5: 'hsla(319, 99.7%, 61.5%, 0.219)',
  pinkA6: 'hsla(322, 99.4%, 60.8%, 0.291)',
  pinkA7: 'hsla(321, 99.6%, 58.7%, 0.407)',
  pinkA8: 'hsla(322, 99.7%, 55.4%, 0.608)',
  pinkA9: 'hsla(322, 100%, 64.6%, 0.817)',
  pinkA10: 'hsla(323, 100%, 66.3%, 0.875)',
  pinkA11: 'hsla(325, 99.9%, 68.6%, 0.960)',
  pinkA12: 'hsla(314, 100%, 96.9%, 0.980)'
}

const oliveDark = {
  olive1: 'hsl(110, 5.0%, 8.6%)',
  olive2: 'hsl(105, 7.4%, 10.6%)',
  olive3: 'hsl(106, 6.4%, 13.1%)',
  olive4: 'hsl(106, 5.8%, 15.3%)',
  olive5: 'hsl(107, 5.3%, 17.4%)',
  olive6: 'hsl(107, 4.9%, 19.9%)',
  olive7: 'hsl(108, 4.4%, 23.6%)',
  olive8: 'hsl(110, 3.8%, 30.6%)',
  olive9: 'hsl(110, 6.0%, 42.5%)',
  olive10: 'hsl(111, 4.8%, 48.2%)',
  olive11: 'hsl(110, 5.0%, 61.8%)',
  olive12: 'hsl(110, 6.0%, 93.0%)'
}

const oliveDarkA = {
  oliveA1: 'hsla(0, 0%, 0%, 0)',
  oliveA2: 'hsla(91, 97.0%, 84.0%, 0.026)',
  oliveA3: 'hsla(101, 87.4%, 87.7%, 0.057)',
  oliveA4: 'hsla(92, 91.8%, 94.1%, 0.078)',
  oliveA5: 'hsla(101, 92.6%, 93.5%, 0.104)',
  oliveA6: 'hsla(102, 91.1%, 94.6%, 0.130)',
  oliveA7: 'hsla(102, 92.5%, 95.9%, 0.173)',
  oliveA8: 'hsla(107, 100%, 96.5%, 0.250)',
  oliveA9: 'hsla(110, 98.3%, 94.1%, 0.397)',
  oliveA10: 'hsla(109, 99.6%, 95.3%, 0.457)',
  oliveA11: 'hsla(113, 95.3%, 97.2%, 0.600)',
  oliveA12: 'hsla(120, 93.5%, 99.6%, 0.927)'
}

const vars = createThemeContract({
  colors: {
    ...pink,
    ...pinkA,
    ...olive,
    ...oliveA
  }
})

createGlobalTheme('.light', vars, {
  colors: {
    ...pink,
    ...pinkA,
    ...olive,
    ...oliveA
  }
})

createGlobalTheme('.dark', vars, {
  colors: {
    ...pinkDark,
    ...pinkDarkA,
    ...oliveDark,
    ...oliveDarkA
  }
})

export const colors = vars.colors
