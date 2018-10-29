import React from 'react';

import './styles.scss';

import GeneralBlock from '../general-block/index.jsx';
import ProjectsBlock from '../projects-block/index.jsx';
import ExperienceBlock from '../experience-block/index.jsx';
import Highlight from '../highlight/index.jsx';
import Italic from '../italic/index.jsx';

const MainSection = (props) => {
    const vReqProj = (
        <ProjectsBlock
            title='VReq'
            time='November 2014'
            techList={[
                        'D3.js',
                        'JQuery',
                        'Waterloo Open Data API',
                    ]}
        >
            A <Highlight>D3.js</Highlight> representation of all course pre-requisites at the University of Waterloo
        </ProjectsBlock>
    );
    return (
        <div className='main-section'>
            <GeneralBlock title='Experience'>
                <ExperienceBlock
                  position='Software Engineer'
                  company='Microsoft'
                  href='https://www.microsoft.com/en-us/about/default.aspx'
                  time='September 2017 - December 2017'
                  location='Redmond, WA'
                  icon='microsoft'
                  techList={[
                        'Python',
                        'C#',
                        'TensorFlow',
                        'LINQ',
                        'MS Cosmos (Internal Data Processing Platform)'
                    ]}
                >
                    <li>
                        Built an <Highlight>n-gram language model</Highlight> using past Bing queries to predict the next words of incomplete user queries
                    </li>
                    <li>
                        Integrated <Highlight>next word prediction</Highlight> into <Highlight>Bing</Highlight>'s autosuggestion pipeline to show relevant suggestions for uncommon queries; improved overall suggestion coverage by <Highlight>23%</Highlight>
                    </li>
                    <li>
                        Prototyped a <Highlight>recurrent neural network language model</Highlight> to further improve prediction relevance; model captures semantic relationships and long-term dependencies
                    </li>
                </ExperienceBlock>
                <ExperienceBlock
                    position='Data Infrastructure Engineer'
                    company='LinkedIn'
                    href='https://press.linkedin.com/about-linkedin'
                    time='January 2017 - April 2017'
                    location='Sunnyvale, CA'
                    icon='linkedin-colored'
                    techList={[
                        'Java 8',
                        'Kafka',
                        'MySQL',
                        'Ambry',
                    ]}
                >
                    <li>
                        Helped launch LinkedIn's <Highlight>media processing</Highlight> infrastructure for processing, managing, and serving digital media assets
                    </li>
                    <li>
                        Designed, built, and released a distributed <Highlight>end-to-end validation</Highlight> and <Highlight>performance testing</Highlight> framework for the media processing infrastructure. Framework is:
                        <ul>
                            <li>
                                Configurable with custom user logic and handles: traffic generation, pipeline monitoring, quality/latency metrics collection, and data validation
                            </li>
                            <li>
                                Used by media teams for performing experiments, analyzing key metrics, and monitoring for failures
                            </li>
                        </ul>
                    </li>
                </ExperienceBlock>
                <ExperienceBlock
                    position='Software Engineer'
                    company='Yahoo!'
                    href='https://about.yahoo.com/'
                    time='May 2016 - August 2016'
                    location='Sunnyvale, CA'
                    icon='yahoo'
                    techList={[
                        'ES6',
                        'Perl',
                        'Node.js',
                        'React',
                        'Fluxible',
                        'MySQL',
                        'AWS',
                    ]}
                >
                    <li>
                        Created and launched <a href='https://view.yahoo.com'><Highlight>Yahoo! View</Highlight> <Italic>(view.yahoo.com)</Italic></a> entirely within 7 weeks as part of the web team; built core UI components and API endpoints
                    </li>
                    <li>
                        Optimized APIs and helped integrate AWS CloudSearch for improved performance;
                        reduced avg response time to under <Highlight>200ms</Highlight> and increased max QPS capacity by <Highlight>30x</Highlight>
                    </li>
                    <li>
                        Integrated <Highlight>Tumblr</Highlight> into Yahoo! View to provide official and fan posts related to shows
                    </li>
                    <li>
                        Setup the entire backend integration testing infrastructure for Yahoo! View
                    </li>
                </ExperienceBlock>
            </GeneralBlock>
            <GeneralBlock title='Projects'>
                <ProjectsBlock
                  title='LUQL'
                  href='https://luql.io/'
                  time='January 2017 - Present'
                  techList={[
                        'Node.js',
                        'React-Native',
                        'MobX',
                        'Firebase',
                    ]}
                >
                    A platform to help locals create and guide tours for travellers, tourists, and adventurers
                </ProjectsBlock>
                <ProjectsBlock
                  title='MelonWatch'
                  href='https://github.com/zuqini/MelonWatch'
                  time='August 2017'
                  techList={[
                        'C++',
                        'OpenGL',
                        'OpenAL',
                    ]}
                >
                    An OpenGL FPS; built the entire game engine from scratch featuring dynamic shadow mapping, a particle system, and a physics engine
                </ProjectsBlock>
                <ProjectsBlock
                    title='Angora'
                    href='https://github.com/jasonf7/Angora'
                    time='January 2016'
                    techList={[
                        'Node.js',
                        'Angular',
                        'MongoDB',
                        'Jade/Pug',
                        'Less',
                    ]}
                >
                    A platform where users explore various hairstyles and review local hairstylists
                </ProjectsBlock>
                <ProjectsBlock
                    title='Terre'
                    href='https://github.com/zuqini/Terre'
                    time='February 2015'
                    techList={[
                        'C++',
                        'Cocos2d-X',
                    ]}
                >
                    A physics simulation sandbox for building star systems with dynamic lighting effects
                </ProjectsBlock>
            </GeneralBlock>
        </div>
    );
};

export default MainSection;