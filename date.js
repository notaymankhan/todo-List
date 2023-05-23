exports.getDate =  function (){
    const day = new Date();
  


    const options ={
    weekday:"long",
    day:"numeric",
    month:"long",

    };
    const thisDay = day.toLocaleDateString("en-US",options);
    return thisDay;
};





