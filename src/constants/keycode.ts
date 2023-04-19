export const KeyCode: any = {
    "keyUp" : 38,
    "keyDown" : 40,
    "enter": 13,
} as const;

export type keyCodeType = typeof KeyCode[keyof typeof KeyCode];
