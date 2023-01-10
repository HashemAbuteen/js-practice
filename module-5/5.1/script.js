function countryToLiveIn(language, isIsland, population, country) {
    if (language === 'english' && !isIsland && population < 50000000) {
        console.log(`You should live in ${country}.`);
    } else {
        console.log(`${country} does not meet your criteria.`);
    }
}

countryToLiveIn('english', false, 30000000, 'Finland');
