import React from 'react';
import "./member.scss";
import SocialLink from './socialLink/socialLink';

const Member = ({ member }) => {
    return (
        <>
            <div className="col-lg-3 col-md-6 wow fadeInUp divTeamAbout card-about" data-wow-delay="0.1s">
                <div className="team-item bg-info-team">
                    <div className="overflow-hidden">
                        <img className="img-fluid" src={member.image} alt={member.name} />
                    </div>
                    <div className="position-relative d-flex justify-content-center">
                        <div className="d-flex justify-content-center pt-2 px-1">
                            {
                                member.socialnetwork.map((socialLink, idx) => {
                                    return (<SocialLink key={idx} socialLinkItem={socialLink} />)
                                })
                            }
                        </div>
                    </div>
                    <div className="text-center p-4">
                        <h5 className="mb-0">{member.name}</h5>
                        <small className='text-bolder text-white-500'>{member.work}</small>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Member;