import React from 'react';
import { Link } from 'react-router-dom';
import ProfileData from '../data/schoolProfiles.json';

function SchoolList() {
  return (
    <div>
      <h1 style ={{textAlign: "center", margin: 20 + 'px'}}>School Profiles</h1>
        <div class="row">
          {ProfileData.map((schoolProfile, index)=>{
            return <>
              <div class="col-sm">
                <div class="card mx-auto" style={{width: 30 + 'vw'}}>
                    <div class="card-body">
                      <h5 class="card-title">{schoolProfile.name}</h5>
                      <h6 class="card-subtitle text-muted">{schoolProfile.schoolBoard}</h6>
                      <p class="card-text mb-2 text-muted">{schoolProfile.address}</p>
                      <Link to={`/SchoolProfile/${schoolProfile.name}`}>
                        <a href="#" class="btn btn-primary">Details</a>
                      </Link>
                    </div>
                </div>
              </div>
            </>
          })}
      </div>
    </div>
  );
}

export default SchoolList;
