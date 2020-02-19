import React from 'react';
import ProfileData from '../data/schoolProfiles.json';


function SchoolProfile({match}) {
  //console.log(match.params.name);

  // Select correct school from profile list using match parameter.
  const schoolSelector = ProfileData.filter(value => {
    if (value.name === match.params.name){
      return value;
    }
    });
  // Header section school image, name, address
  const schoolDetails = schoolSelector.map((school) => {
    return <>
      <img src={school.schoolLogoUrl} class="card-img-top mx-auto" alt="..." style={{width: 200 + 'px', height: 200 + 'px'}}></img>
      <div class="card-body">
        <h1 class="card-title">{school.name}</h1>
        <p class="card-subtitle text-muted">{school.address}</p>
        <p class="card-text"><small class="text-muted">{school.schoolBoard}</small></p>
      </div>
    </>
  })
  // Overview section
  const schoolOverview = schoolSelector.map((school) =>{
    return <>
    <div className="col-sm-6">
      <div className="card-body" style={{width: 40 + 'vw'}}>
        <h3 class="card-title">Overview</h3>
          <p>
            {school.name} is a {school.type} {school.grades} school that comprises roughly {school.studentCount} students. About {school.busZonePercent}% of their student population lives in the bus zone, and {school.walkZonePercent}% live in the walk zone. Bell times are {school.amBell} and {school.pmBell}. The school has a {school.specialPrograms}.
            <br></br>
            <br></br>
            School buses load {school.busBay}. City sidewalks in the school area are complete and students may access the school on foot from many directions. The parking lot is {school.parkingStatus} to parents, so those who need to drive should safely find parking {school.parkingLocation}.
          </p>
        </div>
        <div>
      </div>
    </div>
    </>
  })
  // Create a list of programs conducted at the selected school.
  const programSelector = schoolSelector.map((program) => {
    let schoolPrograms = [];
      let programTitles = Object.keys(program);
      let programValues = Object.values(program);
      //console.log(programTitles);
      //console.log(programValues);
      for (let i = 0; i < programTitles.length; i++){
        if (programValues[i] === 'TRUE'){
          let regex = /(?=[A-Z0-9])/;
          let splitTitle = programTitles[i].split(regex);
          let newTitle = [];
          for (let j = 0; j < splitTitle.length; j++){
            let capitalized = splitTitle[j].charAt(0).toUpperCase();
            newTitle.push(capitalized + splitTitle[j].slice(1));
          }
          let outName = newTitle.join(' ');
          schoolPrograms.push(outName);
      }
    }
    return schoolPrograms;
  })
  // create cards for each program conducted at the selected school.
  const cardCreator = programSelector[0].map((program) => {
    return <>
      <div class="col-sm-6">
        <div class="card mx-auto" style={{width: 45 + 'vw'}}>
          <img src="..." class="card-img-top" alt="..."></img>
          <div class="card-body">
            <h5 class="card-title">{program}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </div>
    </>
  })

  return (
    <div class="card mb-3">
      {schoolDetails}
      <div class="row">
        {schoolOverview}
      </div>
      <div>
        <h3>School Travel Planning Interventions</h3>
      </div>
      <div class="row">
        {cardCreator}
      </div>
    </div>

  );
};

export default SchoolProfile;
