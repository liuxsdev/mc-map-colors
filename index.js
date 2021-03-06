//Minecraft Base Color
//See https://minecraft.fandom.com/wiki/Map_item_format


//Verson

const base_color = {
    "0": [0, 0, 0, 0], //Transparent
    "1": [127, 178, 56, 255],
    "2": [247, 233, 163, 255],
    "3": [199, 199, 199, 255],
    "4": [255, 0, 0, 255],
    "5": [160, 160, 255, 255],
    "6": [167, 167, 167, 255],
    "7": [0, 124, 0, 255],
    "8": [255, 255, 255, 255],
    "9": [164, 168, 184, 255],
    "10": [151, 109, 77, 255],
    "11": [112, 112, 112, 255],
    "12": [64, 64, 255, 255],
    "13": [143, 119, 72, 255],
    "14": [255, 252, 245, 255],
    "15": [216, 127, 51, 255],
    "16": [178, 76, 216, 255],
    "17": [102, 153, 216, 255],
    "18": [229, 229, 51, 255],
    "19": [127, 204, 25, 255],
    "20": [242, 127, 165, 255],
    "21": [76, 76, 76, 255],
    "22": [153, 153, 153, 255],
    "23": [76, 127, 153, 255],
    "24": [127, 63, 178, 255],
    "25": [51, 76, 178, 255],
    "26": [102, 76, 51, 255],
    "27": [102, 127, 51, 255],
    "28": [153, 51, 51, 255],
    "29": [25, 25, 25, 255],
    "30": [250, 238, 77, 255],
    "31": [92, 219, 213, 255],
    "32": [74, 128, 255, 255],
    "33": [0, 217, 58, 255],
    "34": [129, 86, 49, 255],
    "35": [112, 2, 0, 255],
    "36": [209, 177, 161, 255],
    "37": [159, 82, 36, 255],
    "38": [149, 87, 108, 255],
    "39": [112, 108, 138, 255],
    "40": [186, 133, 36, 255],
    "41": [103, 117, 53, 255],
    "42": [160, 77, 78, 255],
    "43": [57, 41, 35, 255],
    "44": [135, 107, 98, 255],
    "45": [87, 92, 92, 255],
    "46": [122, 73, 88, 255],
    "47": [76, 62, 92, 255],
    "48": [76, 50, 35, 255],
    "49": [76, 82, 42, 255],
    "50": [142, 60, 46, 255],
    "51": [37, 22, 16, 255]
}

function generateAllColors(base_color) {
    var allColors = {};
    for (var key in base_color) {
        transedColor = transColor(base_color[key]);
        allColors[parseInt(key) * 4 + 0] = transedColor[0];
        allColors[parseInt(key) * 4 + 1] = transedColor[1];
        allColors[parseInt(key) * 4 + 2] = transedColor[2];
        allColors[parseInt(key) * 4 + 3] = transedColor[3];
    }
    return allColors;
}

function transColor(color) {
    var color_1 = color.map((num, index) => { return index == 3 ? num : Math.floor(num * 0.71) });
    var color_2 = color.map((num, index) => { return index == 3 ? num : Math.floor(num * 0.86) });
    var color_3 = color;
    var color_4 = color.map((num, index) => { return index == 3 ? num : Math.floor(num * 0.53) });
    return [color_1, color_2, color_3, color_4];
}


const mcmapcolors = generateAllColors(base_color);

module.exports = { mcmapcolors }


