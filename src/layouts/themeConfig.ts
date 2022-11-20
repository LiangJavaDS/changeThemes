export enum ThemeKey {
    themeA = 'themeA',
    themeB = 'themeB',
}

export default {
    [ThemeKey.themeA]: {
        'primary-color': 'red',
        'btn-color': 'red',
        'border-color': 'green',
    },
    [ThemeKey.themeB]: {
        'primary-color': 'blue',
        'btnColor': 'blue',
        'border-color': 'red',
    },
}