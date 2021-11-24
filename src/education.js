import React from 'react';
import reactDom from 'react-dom';

class Education extends React.Component {
    render() {
        return (<>
            <div className="container-fluid snuf">
                <br />
                <div className="container aboutpadding">
                    <h2 className=" text-center pos3 h2 " id="education">EDUCATION</h2>
                    <div className="card educard1 bis nutter mt-3">
                        <p className="h3 m-2"><b>Bachelor of Technology:</b></p>
                        <p className="m-2 h4">CMR COLLEGE OF ENGINEERING & Technology/2015-2018</p>
                        <p className="educationtext m-2">It is a long established fact that a reader will be distracted by the
                            readable
                            content
                            of a page when looking
                            at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
                            of
                            lettersThere are many variations of passages of Lorem Ipsum available, but the majority have
                            suffered
                            alteration in some form, by injected humour, or randomised words which don't look even slightly
                            believable.
                            If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything
                            embarrassing
                            hidden in the middle of text.
                            <br />
                            <p className="h4">PERCENTAGE:</p>
                            <div className="progress marginforall" style={{ height: '30px' }}>

                                <div className="progress-bar bg-dark text-light  " style={{ width: '54%' }}>73%</div>
                            </div>
                        </p>

                    </div>
                    <div className="card educard2 marginin bis">
                        <p className="h3 m-2"><b>STATE BOARD OF TECHNICAL EDUCATION &TRAINING:</b></p>
                        <p className="m-2 h4">GOVT POLYTECHNIC GADWAL/2012-2015</p>
                        <p className="educationtext1 m-2 ">It is a long established fact that a reader will be distracted by the
                            readable
                            content
                            of a page when looking
                            at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
                            of
                            lettersThere are many variations of passages of Lorem Ipsum available, but the majority have
                            suffered
                            alteration in some form, by injected humour, or randomised words which don't look even slightly
                            believable.
                            If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything
                            embarrassing
                            hidden in the middle of text.
                            <br />
                            <p className="h4">PERCENTAGE:</p>
                            <div className="progress marginforall " style={{ height: '30px' }}>

                                <div className="progress-bar bg-dark text-light  " style={{ width: '66%' }}>60%</div>
                            </div>
                        </p>
                    </div>
                    <div className="card educard3 mt-4 bis">

                        <p className="h3 m-2"><b>Board Of Secondary Education:</b></p>
                        <p className="m-2 h4">ZPHS BOYS HIGH SCHOOL/2012</p>
                        <p className="educationtext2 m-2">It is a long established fact that a reader will be distracted by the
                            readable
                            content
                            of a page when looking
                            at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
                            of
                            lettersThere are many variations of passages of Lorem Ipsum available, but the majority have
                            suffered
                            alteration in some form, by injected humour, or randomised words which don't look even slightly
                            believable.
                            If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything
                            embarrassing
                            hidden in the middle of text.
                            <br />
                            <p className="h4">PERCENTAGE:</p>
                            <div className="progress marginforall " style={{ height: '30px' }}>
                                <div className="progress-bar bg-dark text-light  " style={{ width: '8.3CGPA' }}>60%</div>
                            </div>
                        </p>
                    </div>
                </div>
            </div>
        </>)
    }
}
export default Education