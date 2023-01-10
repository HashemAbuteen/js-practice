function checkColor(color) {
    color = color.toLowerCase();
    switch (color) {
        case 'yellow':
        case 'pink':
        case 'orange':
            return "light color";
        case 'blue':
        case 'purple':
        case 'brown':
            return "dark color";
        default:
            return "Unknown color";
    }
}

console.log(checkColor('Yellow'));  // Output: "light color"
console.log(checkColor('Green')); // Output: "Unknown color"

