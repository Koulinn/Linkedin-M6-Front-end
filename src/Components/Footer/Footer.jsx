import { Row, Col } from 'react-bootstrap'
// import "../../Styles/FooterChatAlsoViewed.css";
import { RiSettings2Fill, RiQuestionFill } from 'react-icons/ri'
import '../../Styles/MediaQuery.css'

const Footer = () => {
    return (
        <div className='container footer mt-4'>
            <Row className='linkedin-icon centerFlex pl-2'>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 84 21'
                    data-supported-dps='84x21'
                    fill='currentColor'
                    className='mercado-match'
                    width='84'
                    height='21'
                    focusable='false'
                >
                    <g>
                        <g className='background-mercado'>
                            <path d='M12.5 2.75a1.75 1.75 0 101.8 1.75 1.75 1.75 0 00-1.8-1.75zM11 8h3v10h-3zM22.34 7.76A4.06 4.06 0 0019 9.39V8h-3v10h3v-5a2.31 2.31 0 012.16-2.48c1.1 0 1.84.82 1.84 2.44V18h3v-6.25c0-3.06-1.89-3.99-3.66-3.99zM82.5 0h-18A1.5 1.5 0 0063 1.5v18a1.5 1.5 0 001.5 1.5h18a1.5 1.5 0 001.5-1.5v-18A1.5 1.5 0 0082.5 0zM69 18h-3V8h3zM67.5 6.25a1.75 1.75 0 111.8-1.75 1.75 1.75 0 01-1.8 1.75zM81 18h-3v-5.09c0-1.62-.74-2.44-1.84-2.44A2.31 2.31 0 0074 13v5h-3V8h3v1.39a4.06 4.06 0 013.3-1.63c1.77 0 3.66.93 3.66 4zM3 3H0v15h9v-3H3V3zM57 9a4.23 4.23 0 00-3.17-1.3A4.9 4.9 0 0049 12.94a5 5 0 004.87 5.36 3.78 3.78 0 003.31-1.61V18H60V3h-3zm-2.54 6.8A2.57 2.57 0 0151.9 13a2.55 2.55 0 012.56-2.8A2.63 2.63 0 0157.1 13a2.6 2.6 0 01-2.64 2.8zM38.04 8H34.4l-3.34 4.04H31V3h-3v15h3v-4.81h.06L34.48 18h3.75l-4.06-5.5L38.04 8z'></path>
                            <path d='M43.13 7.7A5 5 0 0038 12.87a5.11 5.11 0 005.24 5.43 5.5 5.5 0 004.39-1.94l-1.93-1.3a3.28 3.28 0 01-2.4 1 2.24 2.24 0 01-2.38-2V14h7v-.77C48 9.52 45.85 7.7 43.13 7.7zm-2.2 4.3a2.16 2.16 0 012.21-2.1 2 2 0 012 2.1z'></path>
                        </g>
                    </g>
                </svg>
            </Row>

            <Row className='mt-16'>
                <Col className='pl-3'>
                    <div className='my-1 centerFlex'>
                        <a href='#'>About</a>
                    </div>
                    <div className='my-1 centerFlex'>
                        <a href='#'>Community Guidelines</a>
                    </div>
                    <div className='my-1 centerFlex'>
                        <a href='#'>Privacy & Terms</a>
                    </div>
                    <div className='my-1 centerFlex'>
                        <a href='#'>Sales Solution</a>
                    </div>
                    <div className='my-1 centerFlex'>
                        <a href='#'>Safety Center</a>
                    </div>
                </Col>
                <Col className='d-none d-md-block'>
                    <div className='my-1'>
                        <a href='#'>Accessibility</a>
                    </div>
                    <div className='my-1'>
                        <a href='#'>Careers</a>
                    </div>
                    <div className='my-1'>
                        <a href='#'>Ad Choices</a>
                    </div>
                    <div className='my-1'>
                        <a href='#'>Mobile</a>
                    </div>
                </Col>

                <Col sm={4} md={2} className='d-none d-md-block'>
                    <div className='my-1'>
                        <a href='#'>Talent Solution</a>
                    </div>
                    <div className='my-1'>
                        <a href='#'>Marketing Solution</a>
                    </div>
                    <div className='my-1'>
                        <a href='#'>Advertising</a>
                    </div>
                    <div className='my-1'>
                        <a href='#'>Small Bussiness</a>
                    </div>
                </Col>
                <Col sm={4} md={3} className='footerIcon mt-16 displayNone'>
                    <div>
                        <h6
                            className='d-flex'
                            className='d-block'
                            style={{ fontSize: '13px' }}
                        >
                            <RiQuestionFill
                                className='mr-3'
                                style={{
                                    width: '25px',
                                    height: '25px',
                                }}
                            />
                            Questions?
                            <p className='visit d-block ml-4 pl-3'>
                                Visit our Help Center
                            </p>
                        </h6>
                    </div>
                    <div>
                        <h6
                            className='d-flex'
                            className='d-block'
                            style={{ fontSize: '13px' }}
                        >
                            <RiSettings2Fill
                                className='mr-3'
                                style={{
                                    width: '25px',
                                    height: '25px',
                                }}
                            />
                            Manage your account and privacy
                            <p
                                className='visit d-block ml-4 pl-3'
                                style={{ fontSize: '13px' }}
                            >
                                Go to your Settings.
                            </p>
                        </h6>
                    </div>
                </Col>
                <Col sm={4} md={3} className='last-col centerFlex ml-2 mt-16'>
                    <label className='select-label d-none d-md-block mb-0'>
                        Select Language
                    </label>
                    <select
                        id='footer-select-language'
                        defaultValue='en_US'
                        className='footer-select width50'
                    >
                        <option value='ar_AE' lang='ar-ae'>
                            العربية (Arabic)
                        </option>
                        <option value='cs_CZ' lang='cs-cz'>
                            Čeština (Czech)
                        </option>
                        <option value='da_DK' lang='da-dk'>
                            Dansk (Danish)
                        </option>
                        <option value='de_DE' lang='de-de'>
                            Deutsch (German)
                        </option>
                        <option value='en_US' lang='en-us'>
                            English (English)
                        </option>
                        <option value='es_ES' lang='es-es'>
                            Español (Spanish)
                        </option>
                        <option value='fr_FR' lang='fr-fr'>
                            Français (French)
                        </option>
                        <option value='in_ID' lang='in-id'>
                            Bahasa Indonesia (Bahasa Indonesia)
                        </option>
                        <option value='it_IT' lang='it-it'>
                            Italiano (Italian)
                        </option>
                        <option value='ja_JP' lang='ja-jp'>
                            日本語 (Japanese)
                        </option>
                        <option value='ko_KR' lang='ko-kr'>
                            한국어 (Korean)
                        </option>
                        <option value='ms_MY' lang='ms-my'>
                            Bahasa Malaysia (Malay)
                        </option>
                        <option value='nl_NL' lang='nl-nl'>
                            Nederlands (Dutch)
                        </option>
                        <option value='no_NO' lang='no-no'>
                            Norsk (Norwegian)
                        </option>
                        <option value='pl_PL' lang='pl-pl'>
                            Polski (Polish)
                        </option>
                        <option value='pt_BR' lang='pt-br'>
                            Português (Portuguese)
                        </option>
                        <option value='ro_RO' lang='ro-ro'>
                            Română (Romanian)
                        </option>
                        <option value='ru_RU' lang='ru-ru'>
                            Русский (Russian)
                        </option>
                        <option value='sv_SE' lang='sv-se'>
                            Svenska (Swedish)
                        </option>
                        <option value='th_TH' lang='th-th'>
                            ภาษาไทย (Thai)
                        </option>
                        <option value='tl_PH' lang='tl-ph'>
                            Tagalog (Tagalog)
                        </option>
                        <option value='tr_TR' lang='tr-tr'>
                            Türkçe (Turkish)
                        </option>
                        <option value='zh_CN' lang='zh-cn'>
                            简体中文 (Chinese (Simplified))
                        </option>
                        <option value='zh_TW' lang='zh-tw'>
                            正體中文 (Chinese (Traditional))
                        </option>
                    </select>
                </Col>
            </Row>
            <Row>
                <Col sm={12} className='pl-1'>
                    <p className='copyRight textCenterMod'>
                        {' '}
                        Linkedin Corporation &copy; 2021
                    </p>
                </Col>
            </Row>
        </div>
    )
}

export default Footer
