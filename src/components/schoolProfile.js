import React from 'react';

export class SchoolProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.defineSchool();
  }

  defineSchool() {
    if (this.props.profiles === undefined){
      console.log("waiting on DB to set state...")
    } else if (this.props.profiles.hasOwnProperty(this.props.match.params.id)){
      this.setState(this.props.profiles[this.props.match.params.id]);
      console.log(this.state)
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

  //TODO: find out which programs are completed at a each school. add objects to list and render out cards.
  cardCreator() {
    let completed = [];
    let programs = Object.keys(this.state.stpInterventions);
    for (let i = 0; i < programs.length; i++){
      if (this.state.stpInterventions[programs[i]].completed === true){
        completed.push(this.state.stpInterventions[programs[i]]);
      }
    }
    console.log(completed); 
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
          {this.cardCreator()} 
        </div>
    </div>
    )
  }
}

export default SchoolProfile;