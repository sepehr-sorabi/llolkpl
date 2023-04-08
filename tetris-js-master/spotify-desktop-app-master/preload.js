window.addEventListener("DOMContentLoaded", () => {
    const replaceText = (selector, text) => {
        const element = document.getElementById(selector);
        if (element) element.innerText = text;
    };

    for (const type of ["chrome", "node", "electron"]) {
        replaceText(`${type}-version`, process.versions[type]);
    }
});
//hrjvjvjnnc
//nvnvnnhnvhv
//sepehr
//js
// html 
//css
//rect
//botxtrap
//my sql
// json
// svg

