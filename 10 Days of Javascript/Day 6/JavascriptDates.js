function getDayName(dateString) {
    let dayName;
    dayName=new Date(dateString);
    
    return dayName.toLocaleDateString( 'en-US', { weekday: 'long' }); 
}

let ds="10/11/2009"
console.log(getDayName(ds));

ds="11/10/2010"
console.log(getDayName(ds));