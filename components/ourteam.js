import Image from 'next/image';
import React from 'react';

export default function OurTeam({ team, members }) {
  const member = members('members')
  
  return (
    <>
      <section className="section-team" id="team">
        <div className="shell">
          <div className="section__inner">
            <h3>{team('team.title')}</h3>
            <div className="team">
             <ul>
                {member.map((member, index) => {
                  return (
                    <li key={index}>
                      <div className="team-member" data-nosnippet>
                        <figure className="team-member__image">
                          <Image
                            src={member.pic}
                            alt=""
                            width="358"
                            height="348"
                          />
                        </figure>

                        <div className="team-member__details">
                          <h5>
                            <strong>{member.name}</strong>

                            <span>{member.position}</span>
                          </h5>

                          <div className="member__info">
                            <p>{member.info}</p>
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
              <div className="section__content">
                <h5>{team('team.behindAvanzaTecTitle')}</h5>
                  <div className="member__info">
                    <p>{team('team.behindAvanzaTec')}</p>
                  </div>
                </div>
          
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
