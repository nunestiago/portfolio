import React from 'react';

import translations from '../translate/basicInfo.json';

function Skills() {
  const data = translations.skills.icons;
  return (
    <section id='skills'>
      <div className='col-md-12'>
        <div className='col-md-12'>
          <h1 className='section-title'>
            <span className='text-white'>Skills</span>
          </h1>
        </div>
        <div className='col-md-12 text-center'>
          <ul className='list-inline mx-auto skill-icon'>
            {data.map((skills, index) => (
              <li className='list-inline-item mx-3' key={index}>
                <span>
                  <div className='text-center skills-tile'>
                    <i className={skills.class} style={{ fontSize: '220%' }}>
                      <p
                        className='text-center'
                        style={{ fontSize: '30%', marginTop: '4px' }}
                      >
                        {skills.name}
                      </p>
                    </i>
                  </div>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
