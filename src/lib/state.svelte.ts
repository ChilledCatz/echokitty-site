export let backgroundColor = $state({ color: '#839ca9', prevColor: '#839ca9' });

export function changeBackground(value: string) {
    console.log('before: ', backgroundColor.color, backgroundColor.prevColor)
    backgroundColor.prevColor = backgroundColor.color;
    backgroundColor.color = value
    console.log('after: ', backgroundColor.color, backgroundColor.prevColor)
} 

// shift the values: when state gets updated, move the value from color to prevColor and assign value to color
// 