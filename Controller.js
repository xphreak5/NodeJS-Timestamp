const controlDatePast = (req, res) => {
  // Date of the input
  
  if (req.params.date[0].includes("1")) {
    const date = new Date(Number(req.params.date))
    
    date == "Invalid Date" ? 
    (res.json({ error : "Invalid Date" })) 
    : 
    (res.json({unix: date.getTime(), utc: date.toUTCString()}))

  } else{
    // Convert array items to Number
    const getDate = req.params.date.split("-").map(Number)

    const myDate = new Date(Date.UTC(getDate[0], getDate[1] - 1, getDate[2]));

    const milisecondDate = myDate.getTime();

    const timeUTC = new Date(milisecondDate).toUTCString()

    timeUTC == "Invalid Date" ? (res.json({ error : "Invalid Date" })) : (res.json({unix: milisecondDate,utc: timeUTC}))
    
  }
  
}

const controlDateNow = (req, res) => {
  // Date now
  const dateNow = new Date()
  res.json({
    unix: dateNow.getTime(), 
    utc: dateNow.toUTCString()
  });
}


module.exports = {
  controlDatePast,
  controlDateNow
} 