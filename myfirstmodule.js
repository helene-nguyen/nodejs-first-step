//~module that returns the current date and time

//Use the exports keyword to make properties and methods available outside the module file
exports.myDateTime = function () {
    let dateObj = new Date();
    const month = dateObj.getUTCMonth() + 1; //months from 1-12
    const day = dateObj.getUTCDate();
    const year = dateObj.getUTCFullYear();

    return dateObj = `${year} / ${month} / ${day}`;
};
