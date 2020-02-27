import React from 'react';

export class SchoolProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = null;
  }

  
  defineSchool() {
    if (this.props.profiles === null){
      console.log("waiting on DB to set state...")
    } else if (this.props.profiles.hasOwnProperty(this.props.match.params.id)){
      this.setState(this.props.profiles[this.props.match.params.id]);
    } else {
      console.log("Something is not right...ERROR go to school list and try again...")
    }
  }

  profileHeader() {
    return <>
      <img src={this.state.schoolLogoUrl} className="card-img-top mx-auto" alt="..." style={{width: 200 + 'px', height: 200 + 'px'}}></img>
      <div className="card-body">
        <h1 className="card-title">{this.state.name}</h1>
        <p className="card-subtitle text-muted">{this.state.address}</p>
        <p className="card-text"><small class="text-muted">{this.state.schoolBoard}</small></p>
      </div>
    </>
  }

  profileOverview() {
    return <>
      <div className="col-sm-12">
        <div className="card-body">
          <h3 className="card-title">Overview</h3>
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

  // find out which programs are completed at a each school and render out cards with either custom or standard descriptions
  programCards() {
    let completed = [];
    let programs = Object.keys(this.state.stpInterventions);
    for (let i = 0; i < programs.length; i++){
      if (this.state.stpInterventions[programs[i]].completed === true){
        completed.push(this.state.stpInterventions[programs[i]]);
      }
    }
    let cardRender = completed.map(program =>{
      let description = null;
      if (program.hasOwnProperty('customDesc') && program.customDesc !== ""){
        description = program.customDesc;
      } else if (program.hasOwnProperty('desc')) {
        description = program.desc;
      }
      return <>
        <div className="card" style={{width: 18 + 'rem'}}>
          <img src="..." className="card-img-top" alt="..."></img>
          <div className="card-body">
            <h5 className="card-title">{program.name}</h5>
            <p className="card-text">{description}</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </>
    })
    return cardRender;
  }


  componentDidMount() {
    this.defineSchool();
  }

  render () {
    if (this.state === null){
      console.log("waiting on setState...")
      return null;
    } else {
      return(
        <div className="card mb-3">
          {this.profileHeader()}
          <div class="row">
            {this.profileOverview()}
          </div>
          <div>
            <h3>School Travel Planning Interventions</h3>
          </div>
          <div class="row">
            {this.programCards()}
          </div>
      </div>
      )
    }
  }
}

export default SchoolProfile;