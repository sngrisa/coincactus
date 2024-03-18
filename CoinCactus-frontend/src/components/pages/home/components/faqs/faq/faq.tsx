import React, { useState } from 'react';
import "./faq.scss";
import Button from 'react-bootstrap/esm/Button';
import Fade from 'react-bootstrap/esm/Fade';
import { BsPatchQuestionFill } from "react-icons/bs";

const Faq = ({ faqItem }) => {

    let [open, setOpen] = useState(false);

    return (
        <>
            <div className="col-12 col-sm-3 col-md-6 col-lg-6">
                <div className='divQuestionSquare'>
                    <div className='divQuestion'>
                        <Button
                            variant="link"
                            onClick={() => setOpen(!open)}
                            aria-expanded={open}
                            aria-controls="fadeID" className='btn btn-golden btn-block btn-faq'
                        >
                            <p>{faqItem.question}</p>
                        </Button>
                        <div className='text-center'>
                            <Fade in={open}>
                                <div id="fadeID" className='bg-gray-700 dark-text-shadow'
                                >
                                    <span className='iconFaq'>{faqItem.icon}</span>
                                    {faqItem.answer}
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Faq;