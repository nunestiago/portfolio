import 'react-vertical-timeline-component/style.min.css';

import React from 'react';
import { Badge } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

import translations from '../translate/en.json';

function Experience() {
  const { t } = useTranslation();
  const data = translations.experience;

  return (
    <section id='resume' className='pb-5'>
      <div className='col-md-12 mx-auto'>
        <div className='col-md-12'>
          <h1 className='section-title' style={{ color: 'black' }}>
            <span className='text-black' style={{ textAlign: 'center' }}>
              {t('info.basic_info.section_name.experience')}
            </span>
          </h1>
        </div>
      </div>
      <div className='col-md-8 mx-auto'>
        <VerticalTimeline>
          {data.map((work, i) => (
            <VerticalTimelineElement
              className='vertical-timeline-element--work'
              date={t(`info.experience.${i}.years`)}
              iconStyle={{
                background: '#AE944F',
                color: '#fff',
                textAlign: 'center',
              }}
              icon={<i className='fab fa-angular experience-icon'></i>}
              key={i}
            >
              <div style={{ textAlign: 'left', marginBottom: '4px' }}>
                {work.mainTech.map((technology, i) => (
                  <Badge pill className='main-badge mr-2 mb-2' key={i}>
                    {technology}
                  </Badge>
                ))}
              </div>

              <h3
                className='vertical-timeline-element-title'
                style={{ textAlign: 'left' }}
              >
                {t(`info.experience.${i}.title`)}
              </h3>
              <h4
                className='vertical-timeline-element-subtitle'
                style={{ textAlign: 'left' }}
              >
                {t(`info.experience.${i}.company`)}
              </h4>
              <div style={{ textAlign: 'left', marginTop: '15px' }}>
                {work.technologies.map((technology, i) => (
                  <Badge pill className='experience-badge mr-2 mb-2' key={i}>
                    {technology}
                  </Badge>
                ))}
              </div>
            </VerticalTimelineElement>
          ))}
          <VerticalTimelineElement
            iconStyle={{
              background: '#AE944F',
              color: '#fff',
              textAlign: 'center',
            }}
            icon={
              <i className='fas fa-hourglass-start mx-auto experience-icon'></i>
            }
          />
        </VerticalTimeline>
      </div>
    </section>
  );
}

export default Experience;
