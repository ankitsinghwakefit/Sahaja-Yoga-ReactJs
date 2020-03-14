import React from "react";

// import "./stylesheet/main-content.css";

function MainContent(){
    return(
        <div className="main-content-first-container">
            <div className="main-content-second-container">
                <div className="flex-parent-box">
                    <div className="Item-first-about-mother">
                        <div className="about-mother">
                            <h1>Shri Mataji Nirmala Devi</h1>
                            <h2>A Life Dedicated to Humanity</h2> <br/>
                            <p id="about-mother-para">
                            Shri Mataji Nirmala Devi quietly transformed lives. For more than forty years, she travelled internationally, offering free public lectures and the experience of self-realization to all, regardless of race, religion or circumstance. She not only enabled people to pass this valuable experience on to others, but taught them the meditation technique necessary to sustain it, known as Sahaja Yoga.
                            </p> <br/>
                            <p>
                            
                            Shri Mataji maintained that there is an innate spiritual potential within every human being, and it can be spontaneously awakened. She emphasized that this awakening, described as <a className="para-links" href="/site/sahaja-yoga/self-realization.html">self-realization</a> 
                            , cannot be purchased. Money has never been charged, nor will it be, for the experience of self-realization or for the teaching of <a className="para-links" href="/site/sahaja-yoga/sahaja-yoga-meditation.html">Sahaja Yoga meditation</a>. <br/> <br/> 

                            The inner balance and stress-reduction that accompanies the practice of Sahaja Yoga meditation has already benefited hundreds of thousands worldwide. The ability to quickly and easily activate our innate, spiritual energy - and experience its benefits - differentiates Sahaja Yoga from other forms of meditation. With practice, individuals are able to direct their own energy and redress mental, physical and emotional imbalances to achieve a state of well-being, serenity and fulfillment. 
                            <br/> <br/>

                            In addition to Sahaja Yoga, which is now established in more than 95 countries, Shri Mataji founded a non-governmental organization for destitute women and children, several international schools teaching a holistic curriculum, health clinics offering treatment through Sahaja Yoga meditation techniques, and an arts academy to revitalize the classical skills of dance, music and painting. <br/> <br/> <br/>

                            </p>
                        </div>
                        <div className="image-quote-box">
                            <div className="mother-image">
                                <img src="http://testwordpress.nirmalnagari.org/smnd/wp-content/uploads/2018/07/media_originals/images/shri-mataji-portraits/shri-mataji-explaining.jpg" />
                            </div>
                            <div className="mother-quote">
                                My father felt that I would do something great <br/>
                                in this life. I don’t know if he dreamed it or simply understood it, but all the time he used to say, “You have to find out the way of giving en masse Realization.” By Realization he was meaning the need for a deep, spiritual awakening in people.<br/><br/>

                                He gave me a good education in different religions and also a good education about human beings: what are their problems, why do they act the way they do, why don’t they take to God, why are they hypocritical.<br/> He told me all&nbsp; kinds of things ... <br/>
                            </div>
                        </div>
                            <div className="feature-container">
                                <span className="feature-image-container">Feature</span>
                            </div>
                        <div className="search-and-work-box">
                            <div className="search-box">
                                <input type="checkbox"/>
                                <span>Personal care and attention were hallmarks of Shri Mataji's programs</span>
                            </div>
                            <div className="mother-work-box">
                                <h3>Work</h3>
                                <span id="span-london">London</span>
                                – Often personal and hands-on, Shri Mataji's programs were events conducted on both a global and local level. She taught universal truths, but also took the time to discuss individual needs. She spoke of creation and seeking and the purpose of life, as well as taking the time to answer everyone wanting to discuss their own obstacles on the road of life. Her programs were a town hall for the world where everyone could speak to her.
                                <br/> <br/>
                                <a href="http://shrimataji.org/site/work.html"><span>Read More</span></a>
           		            </div>
                        </div>
                    </div>
                    <div className="Item-second-video-archive">
                        <div className="video-container">
                            
                            <div className="video-box">
                                <a href="https://www.youtube.com/user/ShriMatajiVideos">
                                    <img src="http://shrimataji.org/themes/shri15/images/videoplayer/preview.jpg" />
                                    Video Archive
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainContent;