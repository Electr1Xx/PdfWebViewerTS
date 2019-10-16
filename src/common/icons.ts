
/** @internal */
export interface IconDefinition {
  width: number
  height: number
  path: string
}

/** @internal */
export interface Icons {[key: string]: IconDefinition}

/** @internal */
/* tslint:disable:max-line-length */
export const icons: Icons = {
  openFile: {
    width: 576,
    height: 512,
    path: 'M527.95 224H480v-48c0-26.51-21.49-48-48-48H272l-64-64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h385.057c28.068 0 54.135-14.733 68.599-38.84l67.453-112.464C588.24 264.812 565.285 224 527.95 224zM48 96h146.745l64 64H432c8.837 0 16 7.163 16 16v48H171.177c-28.068 0-54.135 14.733-68.599 38.84L32 380.47V112c0-8.837 7.163-16 16-16zm493.695 184.232l-67.479 112.464A47.997 47.997 0 0 1 433.057 416H44.823l82.017-136.696A48 48 0 0 1 168 256h359.975c12.437 0 20.119 13.568 13.72 24.232z',
  },
  saveFile: {
    width: 448,
    height: 512,
    path: 'M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM288 64v96H96V64h192zm128 368c0 8.822-7.178 16-16 16H48c-8.822 0-16-7.178-16-16V80c0-8.822 7.178-16 16-16h16v104c0 13.255 10.745 24 24 24h208c13.255 0 24-10.745 24-24V64.491a15.888 15.888 0 0 1 7.432 4.195l83.882 83.882A15.895 15.895 0 0 1 416 163.882V432zM224 232c-48.523 0-88 39.477-88 88s39.477 88 88 88 88-39.477 88-88-39.477-88-88-88zm0 144c-30.879 0-56-25.121-56-56s25.121-56 56-56 56 25.121 56 56-25.121 56-56 56z',
  },
  docNavigation: {
    width: 512,
    height: 512,
    path: 'M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm16 400c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V192h448v240zM32 160V80c0-8.8 7.2-16 16-16h416c8.8 0 16 7.2 16 16v80H32z',
  },
  nextPage: {
    width: 448,
    height: 512,
    path: 'M216.464 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L387.887 239H12c-6.627 0-12 5.373-12 12v10c0 6.627 5.373 12 12 12h375.887L209.393 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L233.434 36.465c-4.686-4.687-12.284-4.687-16.97 0z',
  },
  previousPage: {
    width: 448,
    height: 512,
    path: 'M231.536 475.535l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L60.113 273H436c6.627 0 12-5.373 12-12v-10c0-6.627-5.373-12-12-12H60.113L238.607 60.506c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0L3.515 247.515c-4.686 4.686-4.686 12.284 0 16.971l211.051 211.05c4.686 4.686 12.284 4.686 16.97-.001z',
  },
  zoomIn: {
    width: 512,
    height: 512,
    path: 'M384 250v12c0 6.6-5.4 12-12 12h-98v98c0 6.6-5.4 12-12 12h-12c-6.6 0-12-5.4-12-12v-98h-98c-6.6 0-12-5.4-12-12v-12c0-6.6 5.4-12 12-12h98v-98c0-6.6 5.4-12 12-12h12c6.6 0 12 5.4 12 12v98h98c6.6 0 12 5.4 12 12zm120 6c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-32 0c0-119.9-97.3-216-216-216-119.9 0-216 97.3-216 216 0 119.9 97.3 216 216 216 119.9 0 216-97.3 216-216z',
  },
  zoomOut: {
    width: 512,
    height: 512,
    path: 'M140 274c-6.6 0-12-5.4-12-12v-12c0-6.6 5.4-12 12-12h232c6.6 0 12 5.4 12 12v12c0 6.6-5.4 12-12 12H140zm364-18c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-32 0c0-119.9-97.3-216-216-216-119.9 0-216 97.3-216 216 0 119.9 97.3 216 216 216 119.9 0 216-97.3 216-216z',
  },
  search: {
    width: 512,
    height: 512,
    path: 'M508.5 481.6l-129-129c-2.3-2.3-5.3-3.5-8.5-3.5h-10.3C395 312 416 262.5 416 208 416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c54.5 0 104-21 141.1-55.2V371c0 3.2 1.3 6.2 3.5 8.5l129 129c4.7 4.7 12.3 4.7 17 0l9.9-9.9c4.7-4.7 4.7-12.3 0-17zM208 384c-97.3 0-176-78.7-176-176S110.7 32 208 32s176 78.7 176 176-78.7 176-176 176z',
  },
  fitActualSize: {
    width: 448,
    height: 512,
    path: 'M0 180V56c0-13.3 10.7-24 24-24h124c6.6 0 12 5.4 12 12v8c0 6.6-5.4 12-12 12H32v116c0 6.6-5.4 12-12 12h-8c-6.6 0-12-5.4-12-12zM300 32h124c13.3 0 24 10.7 24 24v124c0 6.6-5.4 12-12 12h-8c-6.6 0-12-5.4-12-12V64H300c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12zm148 300v124c0 13.3-10.7 24-24 24H300c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h116V332c0-6.6 5.4-12 12-12h8c6.6 0 12 5.4 12 12zM148 480H24c-13.3 0-24-10.7-24-24V332c0-6.6 5.4-12 12-12h8c6.6 0 12 5.4 12 12v116h116c6.6 0 12 5.4 12 12v8c0 6.6-5.4 12-12 12z',
  },
  fitWidth: {
    width: 512,
    height: 512,
    path: 'M399.959 170.585c-4.686 4.686-4.686 12.284 0 16.971L451.887 239H60.113l51.928-51.444c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0l-84.485 84c-4.686 4.686-4.686 12.284 0 16.971l84.485 84c4.686 4.686 12.284 4.686 16.97 0l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L60.113 273h391.773l-51.928 51.444c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l84.485-84c4.687-4.686 4.687-12.284 0-16.971l-84.485-84c-4.686-4.686-12.284-4.686-16.97 0l-7.07 7.071z',
  },
  fitPage: {
    width: 192,
    height: 512,
    path: 'M181.415 399.959c-4.686-4.686-12.284-4.686-16.971 0L113 451.887V60.113l51.444 51.928c4.686 4.686 12.284 4.686 16.971 0l7.07-7.071c4.686-4.686 4.686-12.284 0-16.97l-84-84.485c-4.686-4.686-12.284-4.686-16.971 0L3.515 88c-4.686 4.686-4.686 12.284 0 16.97l7.07 7.071c4.686 4.686 12.284 4.686 16.971 0L79 60.113v391.773l-51.444-51.928c-4.686-4.686-12.284-4.686-16.971 0l-7.07 7.071c-4.686 4.686-4.686 12.284 0 16.97l84 84.485c4.686 4.687 12.284 4.687 16.971 0l84-84.485c4.686-4.686 4.686-12.284 0-16.97l-7.071-7.07z',
  },
  edit: {
    width: 576,
    height: 512,
    path: 'M417.8 315.5l20-20c3.8-3.8 10.2-1.1 10.2 4.2V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h292.3c5.3 0 8 6.5 4.2 10.2l-20 20c-1.1 1.1-2.7 1.8-4.2 1.8H48c-8.8 0-16 7.2-16 16v352c0 8.8 7.2 16 16 16h352c8.8 0 16-7.2 16-16V319.7c0-1.6.6-3.1 1.8-4.2zm145.9-191.2L251.2 436.8l-99.9 11.1c-13.4 1.5-24.7-9.8-23.2-23.2l11.1-99.9L451.7 12.3c16.4-16.4 43-16.4 59.4 0l52.6 52.6c16.4 16.4 16.4 43 0 59.4zm-93.6 48.4L403.4 106 169.8 339.5l-8.3 75.1 75.1-8.3 233.5-233.6zm71-85.2l-52.6-52.6c-3.8-3.8-10.2-4-14.1 0L426 83.3l66.7 66.7 48.4-48.4c3.9-3.8 3.9-10.2 0-14.1z',
  },
  stickyNote: {
    width: 512,
    height: 512,
    path: 'M448 0H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v84c0 7.1 5.8 12 12 12 2.4 0 4.9-.7 7.1-2.4L304 416h144c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm32 352c0 17.6-14.4 32-32 32H293.3l-8.5 6.4L192 460v-76H64c-17.6 0-32-14.4-32-32V64c0-17.6 14.4-32 32-32h384c17.6 0 32 14.4 32 32v288zM280 240H136c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h144c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zm96-96H136c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h240c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8z',
  },
  stickyNoteAdd: {
    width: 512,
    height: 512,
    path: 'M448 0H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v84c0 7.1 5.8 12 12 12 2.4 0 4.9-.7 7.1-2.4L304 416h144c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm32 352c0 17.6-14.4 32-32 32H293.3l-8.5 6.4L192 460v-76H64c-17.6 0-32-14.4-32-32V64c0-17.6 14.4-32 32-32h384c17.6 0 32 14.4 32 32v288zM344 192h-72v-72c0-4.4-3.6-8-8-8h-16c-4.4 0-8 3.6-8 8v72h-72c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h72v72c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8v-72h72c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8z',
  },
  stickyNoteEdit: {
    width: 512,
    height: 512,
    path: 'M448 0H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v84c0 7.1 5.8 12 12 12 2.4 0 4.9-.7 7.1-2.4L304 416h144c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm32 352c0 17.6-14.4 32-32 32H293.3l-8.5 6.4L192 460v-76H64c-17.6 0-32-14.4-32-32V64c0-17.6 14.4-32 32-32h384c17.6 0 32 14.4 32 32v288zM336 105.4c-12.5-12.5-32.8-12.5-45.2 0l-126.1 126c-2 2-3.4 4.5-4.2 7.3l-16 61.2c-1.4 5.5.1 11.3 4.2 15.4 3 3 7.1 4.7 11.3 4.7 1.3 0 2.7-.2 4-.5l61.2-16c2.8-.7 5.3-2.2 7.3-4.2l126.1-126.1c12.5-12.5 12.5-32.8 0-45.2L336 105.4zM213 273.6l-30.6 8 8-30.6 75-75 22.6 22.6-75 75zm97.6-97.6L288 153.4l25.4-25.4 22.6 22.6-25.4 25.4z',
  },
  stickyNoteRemove: {
    width: 640,
    height: 512,
    path: 'M637 485.2l-96.7-76.1-22.5-17.7-443.2-349-5.2-4.1L23 1.8C19.6-1 14.5-.4 11.8 3l-10 12.5C-1 19-.4 24 3 26.8l61 48L96 100l360.7 284 15.9 12.5L617 510.2c3.4 2.8 8.5 2.2 11.2-1.2l10-12.5c2.8-3.5 2.2-8.5-1.2-11.3zM368 384h-10.7l-8.5 6.4L256 460v-76H128c-17.6 0-32-14.4-32-32V161.1l-32-25.2V352c0 35.3 28.7 64 64 64h96v84c0 7.1 5.8 12 12 12 2.4 0 4.9-.7 7.1-2.4L368 416h51.7l-40.6-32H368zM512 32c17.6 0 32 14.4 32 32v286.9l28.2 22.2c2.3-6.6 3.8-13.7 3.8-21.1V64c0-35.3-28.7-64-64-64H128c-8.4 0-16.4 1.7-23.7 4.7L139 32h373z',
  },
  nextMatch: {
    width: 448,
    height: 512,
    path: 'M311.03 131.515l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L387.887 239H12c-6.627 0-12 5.373-12 12v10c0 6.627 5.373 12 12 12h375.887l-83.928 83.444c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l116.485-116c4.686-4.686 4.686-12.284 0-16.971L328 131.515c-4.686-4.687-12.284-4.687-16.97 0z',
  },
  previousMatch: {
    width: 448,
    height: 512,
    path: 'M136.97 380.485l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L60.113 273H436c6.627 0 12-5.373 12-12v-10c0-6.627-5.373-12-12-12H60.113l83.928-83.444c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0l-116.485 116c-4.686 4.686-4.686 12.284 0 16.971l116.485 116c4.686 4.686 12.284 4.686 16.97-.001z',
  },
  outlineOpen: {
    width: 320,
    height: 512,
    path: 'M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z',
  },
  outlineClosed: {
    width: 192,
    height: 512,
    path: 'M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z',
  },
  dropdownCaret: {
    width: 448,
    height: 512,
    path: 'M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z',
  },
  addLayer: {
    width: 512,
    height: 512,
    path: 'M504 96h-88V8c0-4.42-3.58-8-8-8h-16c-4.42 0-8 3.58-8 8v88h-88c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8h88v88c0 4.42 3.58 8 8 8h16c4.42 0 8-3.58 8-8v-88h88c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8zm-6.77 270.71l-99.72-42.87 99.72-42.87c8.35-3.6 12.19-13.23 8.58-21.52-3.65-8.29-13.32-12.13-21.74-8.48l-225.32 96.86c-1.81.77-3.74.77-5.48 0L45.23 258.4l193.45-83.16c8.35-3.59 12.19-13.23 8.58-21.52-3.65-8.28-13.26-12.13-21.74-8.48L14.81 235.81C5.81 239.66 0 248.52 0 258.4c0 9.87 5.81 18.74 14.77 22.58l99.73 42.87-99.7 42.85C5.81 370.55 0 379.42 0 389.31c0 9.87 5.81 18.74 14.77 22.58l225.32 96.84c5.06 2.17 10.48 3.28 15.9 3.28s10.84-1.09 15.9-3.28l225.29-96.83c9-3.85 14.81-12.72 14.81-22.59.01-9.89-5.8-18.76-14.76-22.6zM258.74 478.72c-1.81.77-3.74.77-5.48 0L45.23 389.29 156 341.68l84.1 36.15c5.06 2.17 10.48 3.28 15.9 3.28s10.84-1.09 15.9-3.28l84.12-36.16 110.78 47.62-208.06 89.43z',
  },
  eraser: {
    width: 512,
    height: 512,
    path: 'M497.942 273.941c18.745-18.745 18.745-49.137 0-67.882l-160-160c-18.744-18.744-49.136-18.746-67.883 0l-256 256c-18.745 18.745-18.745 49.137 0 67.882l96 96A48 48 0 0 0 144 480h356c6.627 0 12-5.373 12-12v-8c0-6.627-5.373-12-12-12H323.883l174.059-174.059zM292.686 68.687c6.243-6.243 16.374-6.254 22.628-.001l160 160c6.243 6.243 6.253 16.374 0 22.627L358.627 368.001 176 185.373 292.686 68.687zM144 448a15.895 15.895 0 0 1-11.314-4.686l-96-96c-6.243-6.243-6.253-16.374 0-22.627L153.373 208 336 390.628l-52.686 52.686A15.895 15.895 0 0 1 272 448H144z',
  },
  ok: {
    width: 448,
    height: 512,
    path: 'M413.505 91.951L133.49 371.966l-98.995-98.995c-4.686-4.686-12.284-4.686-16.971 0L6.211 284.284c-4.686 4.686-4.686 12.284 0 16.971l118.794 118.794c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-11.314-11.314c-4.686-4.686-12.284-4.686-16.97 0z',
  },
  alignCenter: {
    width: 448,
    height: 512,
    path: 'M352 52v24a6 6 0 0 1-6 6H102a6 6 0 0 1-6-6V52a6 6 0 0 1 6-6h244a6 6 0 0 1 6 6zM6 210h436a6 6 0 0 0 6-6v-24a6 6 0 0 0-6-6H6a6 6 0 0 0-6 6v24a6 6 0 0 0 6 6zm0 256h436a6 6 0 0 0 6-6v-24a6 6 0 0 0-6-6H6a6 6 0 0 0-6 6v24a6 6 0 0 0 6 6zm340-164H102a6 6 0 0 0-6 6v24a6 6 0 0 0 6 6h244a6 6 0 0 0 6-6v-24a6 6 0 0 0-6-6z',
  },
  alignJustify: {
    width: 448,
    height: 512,
    path: 'M0 76V52a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6H6a6 6 0 0 1-6-6zm6 134h436a6 6 0 0 0 6-6v-24a6 6 0 0 0-6-6H6a6 6 0 0 0-6 6v24a6 6 0 0 0 6 6zm0 256h436a6 6 0 0 0 6-6v-24a6 6 0 0 0-6-6H6a6 6 0 0 0-6 6v24a6 6 0 0 0 6 6zm0-128h436a6 6 0 0 0 6-6v-24a6 6 0 0 0-6-6H6a6 6 0 0 0-6 6v24a6 6 0 0 0 6 6z',
  },
  alignLeft: {
    width: 448,
    height: 512,
    path: 'M288 52v24a6 6 0 0 1-6 6H6a6 6 0 0 1-6-6V52a6 6 0 0 1 6-6h276a6 6 0 0 1 6 6zM6 210h436a6 6 0 0 0 6-6v-24a6 6 0 0 0-6-6H6a6 6 0 0 0-6 6v24a6 6 0 0 0 6 6zm0 256h436a6 6 0 0 0 6-6v-24a6 6 0 0 0-6-6H6a6 6 0 0 0-6 6v24a6 6 0 0 0 6 6zm276-164H6a6 6 0 0 0-6 6v24a6 6 0 0 0 6 6h276a6 6 0 0 0 6-6v-24a6 6 0 0 0-6-6z',
  },
  alignRight: {
    width: 448,
    height: 512,
    path: 'M160 76V52a6 6 0 0 1 6-6h276a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6H166a6 6 0 0 1-6-6zM6 210h436a6 6 0 0 0 6-6v-24a6 6 0 0 0-6-6H6a6 6 0 0 0-6 6v24a6 6 0 0 0 6 6zm0 256h436a6 6 0 0 0 6-6v-24a6 6 0 0 0-6-6H6a6 6 0 0 0-6 6v24a6 6 0 0 0 6 6zm160-128h276a6 6 0 0 0 6-6v-24a6 6 0 0 0-6-6H166a6 6 0 0 0-6 6v24a6 6 0 0 0 6 6z',
  },
  bold: {
    width: 320,
    height: 512,
    path: 'M249.139 242.128c33.922-18.988 53.22-53.503 53.22-95.748 0-42.421-19.499-80.713-49.665-97.55C232.561 37.505 207.478 32 176.01 32H12C5.373 32 0 37.373 0 44v8c0 6.627 5.373 12 12 12h19.95v384H12c-6.627 0-12 5.373-12 12v8c0 6.627 5.373 12 12 12h169.68c19.934 0 45.622-1.177 67.493-10.348C292.198 451.781 320 406.247 320 353.65c0-52.496-28.196-96.372-70.861-111.522zM66.041 64.201H176.01c24.929 0 43.694 4.153 57.357 12.692 21.38 13.439 33.642 38.537 33.642 68.858 0 49.531-32.265 82.81-80.289 82.81H66.041V64.201zm167.194 375.685c-12.585 5.325-29.449 7.914-51.555 7.914H66.041V260.76h124.458c56.314 0 94.151 37.837 94.151 94.151 0 40.208-19.2 71.966-51.415 84.975z',
  },
  italic: {
    width: 256,
    height: 512,
    path: 'M102.791 64h45.215L73.143 448H23.762a12 12 0 0 0-11.764 9.632l-1.61 8C8.892 473.062 14.573 480 22.151 480h128.817a12 12 0 0 0 11.764-9.632l1.61-8c1.495-7.43-4.186-14.368-11.764-14.368h-45.215l74.864-384h50.011a12 12 0 0 0 11.764-9.632l1.61-8C247.108 38.938 241.427 32 233.849 32H104.401a12 12 0 0 0-11.764 9.632l-1.61 8C89.532 57.062 95.213 64 102.791 64z',
  },
  underline: {
    width: 448,
    height: 512,
    path: 'M0 500v-8c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12H12c-6.627 0-12-5.373-12-12zM291.142 12v8c0 6.627 5.373 12 12 12h42.72v226.509c0 85.451-46.451 128.726-122.145 128.726-74.322 0-121.569-40.289-121.569-127.572V32h42.721c6.627 0 12-5.373 12-12v-8c0-6.627-5.373-12-12-12H26.659c-6.627 0-12 5.373-12 12v8c0 6.627 5.373 12 12 12H69.38v228.818c0 106.811 63.591 158.094 154.913 158.094 89.287 0 154.337-52.813 154.337-158.094V32h42.721c6.627 0 12-5.373 12-12v-8c0-6.627-5.373-12-12-12H303.142c-6.628 0-12 5.373-12 12z',
  },
  squiggly: {
    width: 448,
    height: 512,
    path: 'M 111.80004,416.25781 -0.09375,473.46875 v 38.51563 l 111.89379,-57.21094 112.14242,57.33789 112.14243,-57.33985 112.14244,57.33985 V 473.59375 L 336.08881,416.25781 223.94246,473.5957 Z M 291.142,12 v 8 c 0,6.627 5.373,12 12,12 h 42.72 v 226.509 c 0,85.451 -46.451,128.726 -122.145,128.726 -74.322,0 -121.569,-40.289 -121.569,-127.572 V 32 h 42.721 c 6.627,0 12,-5.373 12,-12 v -8 c 0,-6.627 -5.373,-12 -12,-12 H 26.659 c -6.627,0 -12,5.373 -12,12 v 8 c 0,6.627 5.373,12 12,12 H 69.38 v 228.818 c 0,106.811 63.591,158.094 154.913,158.094 89.287,0 154.337,-52.813 154.337,-158.094 V 32 h 42.721 c 6.627,0 12,-5.373 12,-12 v -8 c 0,-6.627 -5.373,-12 -12,-12 H 303.142 c -6.628,0 -12,5.373 -12,12 z',
  },
  strikethrough: {
    width: 512,
    height: 512,
    path: 'M500 272H12c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h488c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm-199.246 16c34.104 17.688 58.216 40.984 58.216 83.01 0 57.657-45.969 87.221-104.86 87.221-43.044 0-101.711-17.734-101.711-60.762V388c0-6.627-5.373-12-12-12h-10.72c-6.627 0-12 5.373-12 12v15.77c0 60.082 76.565 87.291 136.431 87.291 78.593 0 140.211-46.632 140.211-123.832 0-35.712-11.87-60.522-30.603-79.229h-62.964zm-137.387-64h74.348c-43.357-17.896-75.865-37.601-75.865-84.203 0-52.844 43.64-79.03 96.041-79.03 32.008 0 90.37 12.598 90.37 44.38V116c0 6.627 5.373 12 12 12h10.721c6.627 0 12-5.373 12-12V96.327c0-44.421-64.45-68.391-125.091-68.391-72.526 0-131.392 41.225-131.392 115.011 0 38.214 14.813 63.053 36.868 81.053z',
  },
  fontColor: {
    width: 448,
    height: 512,
    path: 'M232.594 32h-17.187a11.998 11.998 0 0 0-11.239 7.796L51.473 448H28c-6.627 0-12 5.373-12 12v8c0 6.627 5.373 12 12 12h88c6.627 0 12-5.373 12-12v-8c0-6.627-5.373-12-12-12H87.913l44.651-120.46h182.253L360.063 448H332c-6.627 0-12 5.373-12 12v8c0 6.627 5.373 12 12 12h88c6.627 0 12-5.373 12-12v-8c0-6.627-5.373-12-12-12h-23.473L243.833 39.796A12 12 0 0 0 232.594 32zm-87.958 263.34l75.696-201.241c1.5-3.857 2.714-7.827 3.668-11.427.95 3.589 2.159 7.544 3.651 11.382l75.098 201.286H144.636z',
  },
  fillColor: {
    width: 576,
    height: 512,
    path: 'M512 320s-64 92.65-64 128c0 35.35 28.66 64 64 64s64-28.65 64-64-64-128-64-128zm0 160c-17.64 0-32-14.36-32-31.96.26-9.78 13.57-37.67 32.01-68.73 18.43 31.04 31.73 58.91 31.99 68.69 0 17.64-14.36 32-32 32zm-9.37-262.94L294.94 9.37C288.69 3.12 280.5 0 272.31 0s-16.38 3.12-22.62 9.37l-92.85 92.85L56.97 2.35c-3.12-3.12-8.19-3.12-11.31 0L34.34 13.66c-3.12 3.12-3.12 8.19 0 11.31l99.88 99.88-106.1 106.1c-37.49 37.49-37.49 98.26 0 135.75l117.19 117.19c18.75 18.74 43.31 28.12 67.87 28.12 24.57 0 49.13-9.37 67.87-28.12l221.57-221.57c12.5-12.5 12.5-32.76.01-45.26zm-244.2 244.2C246.34 473.34 230.27 480 213.18 480s-33.16-6.66-45.24-18.74l-117.2-117.2c-6.88-6.88-11.77-15.14-14.91-24.06h363.85L258.43 461.26zM431.68 288H33.06c2.2-12.96 8.2-24.94 17.69-34.43l106.09-106.11 87.85 87.85c6.25 6.25 16.38 6.25 22.62 0 6.25-6.25 6.25-16.38 0-22.62l-87.85-87.85L272.29 32h.02L480 239.68 431.68 288z',
  },
  drop: {
    width: 352,
    height: 512,
    path: 'M205.22 22.09C201.21 7.53 188.61 0 175.97 0c-12.35 0-24.74 7.2-29.19 22.09C100.01 179.85 0 222.72 0 333.91 0 432.35 78.72 512 176 512s176-79.65 176-178.09c0-111.75-99.79-153.34-146.78-311.82zM176 480c-79.4 0-144-65.54-144-146.09 0-48.36 23-81.32 54.84-126.94 29.18-41.81 65.34-93.63 89.18-170.91 23.83 77.52 60.06 129.31 89.3 171.08C297.06 252.52 320 285.3 320 333.91 320 414.46 255.4 480 176 480zm0-64c-44.12 0-80-35.89-80-80 0-8.84-7.16-16-16-16s-16 7.16-16 16c0 61.75 50.25 112 112 112 8.84 0 16-7.16 16-16s-7.16-16-16-16z',
  },
  checkbox: {
    width: 448,
    height: 512,
    path: 'M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm16 400c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V80c0-8.8 7.2-16 16-16h352c8.8 0 16 7.2 16 16v352z',
  },
  checkboxChecked: {
    width: 448,
    height: 512,
    path: 'M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm0 32c8.823 0 16 7.178 16 16v352c0 8.822-7.177 16-16 16H48c-8.822 0-16-7.178-16-16V80c0-8.822 7.178-16 16-16h352m-34.301 98.293l-8.451-8.52c-4.667-4.705-12.265-4.736-16.97-.068l-163.441 162.13-68.976-69.533c-4.667-4.705-12.265-4.736-16.97-.068l-8.52 8.451c-4.705 4.667-4.736 12.265-.068 16.97l85.878 86.572c4.667 4.705 12.265 4.736 16.97.068l180.48-179.032c4.704-4.667 4.735-12.265.068-16.97z',
  },
  pageLayoutModeNone: {
    width: 512,
    height: 512,
    path: 'M 404.00446,340.39588 H 307.417 c -8.8907,0 -16.09791,-7.20735 -16.09791,-16.0979 V 226.90563 H 129.53513 c -9.33519,0 -16.90281,7.56764 -16.90281,16.90282 V 508.86602 H 82.046291 V 243.80845 c 0,-26.22737 21.261469,-47.48883 47.488839,-47.48883 h 185.16393 c 13.26225,0 25.94064,5.4538 35.06108,15.08212 l 76.00853,80.24116 c 5.66469,5.9802 8.82181,13.90391 8.82181,22.14106 v 195.63997 h -30.58602 z m -1.01739,-27.15345 -79.47231,-86.3368 h -1.60979 v 86.3368 z M 82.851029,3.1447104 H 113.43705 V 99.732162 c 0,9.335168 7.56762,16.902808 16.90282,16.902808 h 257.56652 c 9.33518,0 16.9028,-7.56764 16.9028,-16.902808 V 3.1447104 h 30.58603 V 99.732162 c 0,26.227348 -21.26147,47.488828 -47.48883,47.488828 H 130.33987 c -26.22737,0 -47.488841,-21.26148 -47.488841,-47.488828 z',
  },
  pageLayoutModeSinglePage: {
    width: 384,
    height: 512,
    path: 'M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zm-22.6 22.7c2.1 2.1 3.5 4.6 4.2 7.4H256V32.5c2.8.7 5.3 2.1 7.4 4.2l83.9 83.9zM336 480H48c-8.8 0-16-7.2-16-16V48c0-8.8 7.2-16 16-16h176v104c0 13.3 10.7 24 24 24h104v304c0 8.8-7.2 16-16 16z',
  },
  warning: {
    width: 576,
    height: 512,
    path: 'M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.054-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.952 83.154 0l239.94 416.028zm-27.658 15.991l-240-416c-6.16-10.678-21.583-10.634-27.718 0l-240 416C27.983 466.678 35.731 480 48 480h480c12.323 0 19.99-13.369 13.859-23.996zM288 372c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28-12.536-28-28-28zm-11.49-212h22.979c6.823 0 12.274 5.682 11.99 12.5l-7 168c-.268 6.428-5.556 11.5-11.99 11.5h-8.979c-6.433 0-11.722-5.073-11.99-11.5l-7-168c-.283-6.818 5.167-12.5 11.99-12.5zM288 372c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28-12.536-28-28-28z',
  },
  unlock: {
    width: 384,
    height: 512,
    path: 'M336 256H96v-96c0-70.6 25.4-128 96-128s96 57.4 96 128v20c0 6.6 5.4 12 12 12h8c6.6 0 12-5.4 12-12v-18.5C320 73.1 280.9.3 192.5 0 104-.3 64 71.6 64 160v96H48c-26.5 0-48 21.5-48 48v160c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm16 208c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V304c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v160zm-160-32c-8.8 0-16-7.2-16-16v-64c0-8.8 7.2-16 16-16s16 7.2 16 16v64c0 8.8-7.2 16-16 16z',
  },
  error: {
    width: 512,
    height: 512,
    path: 'M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z',
  },
  pdfFile: {
    width: 384,
    height: 512,
    path: 'M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zm-22.6 22.7c2.1 2.1 3.5 4.6 4.2 7.4H256V32.5c2.8.7 5.3 2.1 7.4 4.2l83.9 83.9zM336 480H48c-8.8 0-16-7.2-16-16V48c0-8.8 7.2-16 16-16h176v104c0 13.3 10.7 24 24 24h104v304c0 8.8-7.2 16-16 16zm-22-171.2c-13.5-13.3-55-9.2-73.7-6.7-21.2-12.8-35.2-30.4-45.1-56.6 4.3-18 12-47.2 6.4-64.9-4.4-28.1-39.7-24.7-44.6-6.8-5 18.3-.3 44.4 8.4 77.8-11.9 28.4-29.7 66.9-42.1 88.6-20.8 10.7-54.1 29.3-58.8 52.4-3.5 16.8 22.9 39.4 53.1 6.4 9.1-9.9 19.3-24.8 31.3-45.5 26.7-8.8 56.1-19.8 82-24 21.9 12 47.6 19.9 64.6 19.9 27.7.1 28.9-30.2 18.5-40.6zm-229.2 89c5.9-15.9 28.6-34.4 35.5-40.8-22.1 35.3-35.5 41.5-35.5 40.8zM180 175.5c8.7 0 7.8 37.5 2.1 47.6-5.2-16.3-5-47.6-2.1-47.6zm-28.4 159.3c11.3-19.8 21-43.2 28.8-63.7 9.7 17.7 22.1 31.7 35.1 41.5-24.3 4.7-45.4 15.1-63.9 22.2zm153.4-5.9s-5.8 7-43.5-9.1c41-3 47.7 6.4 43.5 9.1z',
  },
  fileError: {
    width: 384,
    height: 512,
    path: 'M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zm-22.6 22.7c2.1 2.1 3.5 4.6 4.2 7.4H256V32.5c2.8.7 5.3 2.1 7.4 4.2l83.9 83.9zM336 480H48c-8.8 0-16-7.2-16-16V48c0-8.8 7.2-16 16-16h176v104c0 13.3 10.7 24 24 24h104v304c0 8.8-7.2 16-16 16zm-73.3-127.9c4.7 4.7 4.7 12.3 0 17l-5.7 5.7c-4.7 4.7-12.3 4.7-17 0l-48-48.2-48.1 48.1c-4.7 4.7-12.3 4.7-17 0l-5.7-5.7c-4.7-4.7-4.7-12.3 0-17l48.1-48.1-48.1-48.1c-4.7-4.7-4.7-12.3 0-17l5.7-5.7c4.7-4.7 12.3-4.7 17 0l48.1 48.1 48.1-48.1c4.7-4.7 12.3-4.7 17 0l5.7 5.7c4.7 4.7 4.7 12.3 0 17L214.6 304l48.1 48.1z',
  },
  highlighter: {
    width: 544,
    height: 512,
    path: 'M528.61 75.91l-60.49-60.52C457.91 5.16 444.45 0 430.98 0a52.38 52.38 0 0 0-34.75 13.15L110.59 261.8c-10.29 9.08-14.33 23.35-10.33 36.49l12.49 41.02-36.54 36.56c-6.74 6.75-6.74 17.68 0 24.43l.25.26L0 479.98 99.88 512l43.99-44.01.02.02c6.75 6.75 17.69 6.75 24.44 0l36.46-36.47 40.91 12.53c18.01 5.51 31.41-4.54 36.51-10.32l248.65-285.9c18.35-20.82 17.37-52.32-2.25-71.94zM91.05 475.55l-32.21-10.33 40.26-42.03 22.14 22.15-30.19 30.21zm167.16-62.99c-.63.72-1.4.94-2.32.94-.26 0-.54-.02-.83-.05l-40.91-12.53-18.39-5.63-39.65 39.67-46.85-46.88 39.71-39.72-5.6-18.38-12.49-41.02c-.34-1.13.01-2.36.73-3l44.97-39.15 120.74 120.8-39.11 44.95zm248.51-285.73L318.36 343.4l-117.6-117.66L417.4 37.15c4.5-3.97 17.55-9.68 28.1.88l60.48 60.52c7.65 7.65 8.04 20 .74 28.28z',
  },
  pencil: {
    width: 512,
    height: 512,
    path: 'M493.255 56.236l-37.49-37.49c-24.993-24.993-65.515-24.994-90.51 0L12.838 371.162.151 485.346c-1.698 15.286 11.22 28.203 26.504 26.504l114.184-12.687 352.417-352.417c24.992-24.994 24.992-65.517-.001-90.51zm-95.196 140.45L174 420.745V386h-48v-48H91.255l224.059-224.059 82.745 82.745zM126.147 468.598l-58.995 6.555-30.305-30.305 6.555-58.995L63.255 366H98v48h48v34.745l-19.853 19.853zm344.48-344.48l-49.941 49.941-82.745-82.745 49.941-49.941c12.505-12.505 32.748-12.507 45.255 0l37.49 37.49c12.506 12.506 12.507 32.747 0 45.255z',
  },
  rotate: {
    width: 512,
    height: 512,
    path: 'M492 8h-10c-6.627 0-12 5.373-12 12v110.625C426.804 57.047 346.761 7.715 255.207 8.001 118.82 8.428 7.787 120.009 8 256.396 8.214 393.181 119.166 504 256 504c63.926 0 122.202-24.187 166.178-63.908 5.113-4.618 5.354-12.561.482-17.433l-7.069-7.069c-4.503-4.503-11.749-4.714-16.482-.454C361.218 449.238 311.065 470 256 470c-117.744 0-214-95.331-214-214 0-117.744 95.331-214 214-214 82.862 0 154.737 47.077 190.289 116H332c-6.627 0-12 5.373-12 12v10c0 6.627 5.373 12 12 12h160c6.627 0 12-5.373 12-12V20c0-6.627-5.373-12-12-12z',
  },
  freeText: {
    width: 512,
    height: 512,
    path: 'M486.4 128c14.14 0 25.6-11.46 25.6-25.6V25.6C512 11.46 500.54 0 486.4 0h-76.8C395.46 0 384 11.46 384 25.6V48H128V25.6C128 11.46 116.54 0 102.4 0H25.6C11.46 0 0 11.46 0 25.6v76.8C0 116.54 11.46 128 25.6 128H48v256H25.6C11.46 384 0 395.46 0 409.6v76.8C0 500.54 11.46 512 25.6 512h76.8c14.14 0 25.6-11.46 25.6-25.6V464h256v22.4c0 14.14 11.46 25.6 25.6 25.6h76.8c14.14 0 25.6-11.46 25.6-25.6v-76.8c0-14.14-11.46-25.6-25.6-25.6H464V128h22.4zM416 32h64v64h-64V32zM32 96V32h64v64H32zm64 384H32v-64h64v64zm384-64v64h-64v-64h64zm-48-32h-22.4c-14.14 0-25.6 11.46-25.6 25.6V432H128v-22.4c0-14.14-11.46-25.6-25.6-25.6H80V128h22.4c14.14 0 25.6-11.46 25.6-25.6V80h256v22.4c0 14.14 11.46 25.6 25.6 25.6H432v256z',
  },
  stamp: {
    width: 508,
    height: 512,
    path: 'm 333.71644,332.74589 h 121.26625 l 52.08896,87.08726 H 508.009 V 512.0005 H 0 V 419.83315 H 0.80598227 L 54.686486,332.74589 H 178.89175 V 241.68498 C 139.83419,229.2037 120.83357,188.0785 120.83357,122.28502 120.83357,50.03435 163.8049,8.54414 246.15327,0.3862 V 0 h 4.2226 14.81043 v 0.26345 c 83.1756,7.85642 126.58831,49.40078 126.58831,122.02157 0,65.79348 -19.00062,106.91868 -58.05817,119.39996 z m 0,26.85191 v 11.42093 l -0.57524,1.90136 c -7.77664,25.70458 -26.80014,40.76443 -54.91507,44.75071 -3.13022,0.44382 -6.37313,0.75038 -9.72577,0.91907 2e-5,0.0515 5e-5,0.10303 8e-5,0.15469 h -18.12457 -4.2226 c 0,-0.0231 0,-0.0462 0,-0.0693 -34.59286,-1.15044 -57.8689,-16.6105 -66.68629,-45.75514 l -0.57523,-1.90136 V 359.5978 H 70.109423 L 33.186454,419.83315 H 474.69705 l -35.1373,-60.23535 z m -72.20597,-332.75872 -5.41897,-0.0189 -4.95803,0.0158 C 180.53972,32.90225 147.68548,63.8059 147.68548,122.285 c 0,60.26373 16.08094,90.41551 46.87034,95.62098 l 11.18782,1.8915 v 147.12358 c 5.83066,16.85951 19.64352,24.97158 44.63223,24.97158 h 5.92822 5.92822 c 24.9887,0 38.80158,-8.11207 44.63222,-24.97158 V 219.79748 l 11.18782,-1.8915 c 30.7894,-5.20547 46.87035,-35.35725 46.87035,-95.62098 0,-58.46923 -32.84314,-89.37232 -103.41223,-95.44594 z M 26.96748,485.1486 H 481.04152 V 446.68506 H 26.96748 Z',
  },
  close: {
    width: 320,
    height: 512,
    path: 'M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z',
  },
  options: {
    width: 512,
    height: 512,
    path: 'M482.696 299.276l-32.61-18.827a195.168 195.168 0 0 0 0-48.899l32.61-18.827c9.576-5.528 14.195-16.902 11.046-27.501-11.214-37.749-31.175-71.728-57.535-99.595-7.634-8.07-19.817-9.836-29.437-4.282l-32.562 18.798a194.125 194.125 0 0 0-42.339-24.48V38.049c0-11.13-7.652-20.804-18.484-23.367-37.644-8.909-77.118-8.91-114.77 0-10.831 2.563-18.484 12.236-18.484 23.367v37.614a194.101 194.101 0 0 0-42.339 24.48L105.23 81.345c-9.621-5.554-21.804-3.788-29.437 4.282-26.36 27.867-46.321 61.847-57.535 99.595-3.149 10.599 1.47 21.972 11.046 27.501l32.61 18.827a195.168 195.168 0 0 0 0 48.899l-32.61 18.827c-9.576 5.528-14.195 16.902-11.046 27.501 11.214 37.748 31.175 71.728 57.535 99.595 7.634 8.07 19.817 9.836 29.437 4.283l32.562-18.798a194.08 194.08 0 0 0 42.339 24.479v37.614c0 11.13 7.652 20.804 18.484 23.367 37.645 8.909 77.118 8.91 114.77 0 10.831-2.563 18.484-12.236 18.484-23.367v-37.614a194.138 194.138 0 0 0 42.339-24.479l32.562 18.798c9.62 5.554 21.803 3.788 29.437-4.283 26.36-27.867 46.321-61.847 57.535-99.595 3.149-10.599-1.47-21.972-11.046-27.501zm-65.479 100.461l-46.309-26.74c-26.988 23.071-36.559 28.876-71.039 41.059v53.479a217.145 217.145 0 0 1-87.738 0v-53.479c-33.621-11.879-43.355-17.395-71.039-41.059l-46.309 26.74c-19.71-22.09-34.689-47.989-43.929-75.958l46.329-26.74c-6.535-35.417-6.538-46.644 0-82.079l-46.329-26.74c9.24-27.969 24.22-53.869 43.929-75.969l46.309 26.76c27.377-23.434 37.063-29.065 71.039-41.069V44.464a216.79 216.79 0 0 1 87.738 0v53.479c33.978 12.005 43.665 17.637 71.039 41.069l46.309-26.76c19.709 22.099 34.689 47.999 43.929 75.969l-46.329 26.74c6.536 35.426 6.538 46.644 0 82.079l46.329 26.74c-9.24 27.968-24.219 53.868-43.929 75.957zM256 160c-52.935 0-96 43.065-96 96s43.065 96 96 96 96-43.065 96-96-43.065-96-96-96zm0 160c-35.29 0-64-28.71-64-64s28.71-64 64-64 64 28.71 64 64-28.71 64-64 64z',
  },
  delete: {
    width: 512,
    height: 512,
    path: 'M368 64l-33.6-44.8C325.3 7.1 311.1 0 296 0h-80c-15.1 0-29.3 7.1-38.4 19.2L144 64H40c-13.3 0-24 10.7-24 24v2c0 3.3 2.7 6 6 6h20.9l33.2 372.3C78.3 493 99 512 123.9 512h264.2c24.9 0 45.6-19 47.8-43.7L469.1 96H490c3.3 0 6-2.7 6-6v-2c0-13.3-10.7-24-24-24H368zM216 32h80c5 0 9.8 2.4 12.8 6.4L328 64H184l19.2-25.6c3-4 7.8-6.4 12.8-6.4zm188 433.4c-.7 8.3-7.6 14.6-15.9 14.6H123.9c-8.3 0-15.2-6.3-15.9-14.6L75 96h362l-33 369.4z',
  },
  copy: {
    width: 448,
    height: 512,
    path: 'M433.941 65.941l-51.882-51.882A48 48 0 0 0 348.118 0H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48v-48h80c26.51 0 48-21.49 48-48V99.882a48 48 0 0 0-14.059-33.941zM352 32.491a15.88 15.88 0 0 1 7.431 4.195l51.882 51.883A15.885 15.885 0 0 1 415.508 96H352V32.491zM288 464c0 8.822-7.178 16-16 16H48c-8.822 0-16-7.178-16-16V144c0-8.822 7.178-16 16-16h80v240c0 26.51 21.49 48 48 48h112v48zm128-96c0 8.822-7.178 16-16 16H176c-8.822 0-16-7.178-16-16V48c0-8.822 7.178-16 16-16h144v72c0 13.2 10.8 24 24 24h72v240z',
  },
}