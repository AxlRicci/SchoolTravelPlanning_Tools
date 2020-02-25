import React from 'react';
import { Link } from 'react-router-dom';


export class SchoolList extends React.Component {

  schoolListRender() {
    if (this.props.profiles.schoolProfiles === undefined){
      console.log("waiting for DB to update state")
    } else {
      let objArray = [];
      let keys = Object.keys(this.props.profiles.schoolProfiles);
      keys.forEach(value => {
        if (this.props.profiles.schoolProfiles.hasOwnProperty(value)){
          objArray.push(this.props.profiles.schoolProfiles[value]);
        } else {
          console.log("no such property", value);
        }
      });
      // Render out cards for schools in snapshot.
      let renderList = objArray.map(schoolProfile => {
        return <>
          <div className="col-sm">
            <div className="card mx-auto" style={{width: 30 + 'vw'}}>
                <div className="card-body">
                  <h5 className="card-title">{schoolProfile.name}</h5>
                  <h6 className="card-subtitle text-muted">{schoolProfile.schoolBoard}</h6>
                  <p className="card-text mb-2 text-muted">{schoolProfile.address}</p>
                  <Link to={`/SchoolProfile/${schoolProfile.id}`}>
                    <button href="#" className="btn btn-primary">Details</button>
                  </Link>
                </div>
            </div>
          </div>
          </>
      })
      return renderList;
    }
  }

  render () {
    return (<>
      <div>
        <h1>School Profiles</h1>
        <div className="row">
          {this.schoolListRender()}
        </div>
      </div>
      </>
    );
  }
}
