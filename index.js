const returnFirstTwoDrivers = (array) => array.slice(0, 2);

const returnLastTwoDrivers = (array) => array.slice(-2);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = multiplier => fare => multiplier * fare;

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (arrayOfDrivers, driverFunction) => driverFunction(arrayOfDrivers);