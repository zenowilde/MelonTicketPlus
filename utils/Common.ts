export const renderImageSource = (imagePath: string) => {
    if (imagePath.startsWith('http')) {
        return { uri: imagePath };
    } else {
        return { uri: `http://127.0.0.1:3000/${imagePath}` };
    }
};
