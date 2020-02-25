import React from 'react';

export class SchoolProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentWillMount() {
    this.defineSchool();
  }

  defineSchool() {
    if (this.props.profiles.schoolProfiles === undefined){
      console.log("waiting on DB to set state...")
    } else if (this.props.profiles.schoolProfiles.hasOwnProperty(this.props.match.params.id)){
      this.setState(this.props.profiles.schoolProfiles[this.props.match.params.id]);
    }
  }

  profileHeader() {
    return <>
      <img src={this.state.schoolLogoUrl} class="card-img-top mx-auto" alt="..." style={{width: 200 + 'px', height: 200 + 'px'}}></img>
      <div class="card-body">
        <h1 class="card-title">{this.state.name}</h1>
        <p class="card-subtitle text-muted">{this.state.address}</p>
        <p class="card-text"><small class="text-muted">{this.state.schoolBoard}</small></p>
      </div>
    </>
  }

  profileOverview() {
    return <>
      <div className="col-sm-6">
        <div className="card-body" style={{width: 40 + 'vw'}}>
          <h3 class="card-title">Overview</h3>
            <p>
              {this.state.name} is a {this.state.type} {this.state.grades} school that comprises of roughly {this.state.studentCount} students. About {this.state.busZonePercent}% of their student population lives in the bus zone, and {this.state.walkZonePercent}% live in the walk zone. Bell times are {this.state.amBell} and {this.state.pmBell}. The school has a {this.state.specialPrograms}.
              <br></br>
              <br></br>
              School buses load {this.state.busBay}. City sidewalks in the school area are complete and students may access the school on foot from many directions. The parking lot is {this.state.parkingStatus} to parents, so those who need to drive should safely find parking {this.state.parkingLocation}.
            </p>
          </div>
          <div>
        </div>
      </div>
    </>
  }

  programsCompleted() {
    let schoolPrograms = [];
    let programTitles = Object.keys(this.state);
    let programValues = Object.values(this.state);
    for (let i = 0; i < programTitles.length; i++){
      if (programValues[i] === true){
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
  }
  
  programCardRender() {
    let programs = this.programsCompleted();
    let outArr = programs.map((program, index) => {
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
     });
    return outArr
  }

  render () {
    return(
      <div class="card mb-3">
        {this.profileHeader()}
        <div class="row">
          {this.profileOverview()}
        </div>
        <div>
          <h3>School Travel Planning Interventions</h3>
        </div>
        <div class="row">
          {this.programCardRender()}
        </div>
    </div>
    )
  }
}

export default SchoolProfile;