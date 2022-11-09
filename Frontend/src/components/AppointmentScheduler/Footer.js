import React from 'react'
import CaWhite from './assets/images/2018-cb-ca-white.png'
import HorizontalLogo from './assets/images/ehl-horizontal-logo.svg'
function Footer() {
    return (
        <div className="footer_wrapper">
            <div className="footer">
                <div className="main_footer">
                    <div className="footer_about">
                        <div className="footer-list_wrapper">
                            <h4 className="footer-list_title">About Us</h4>
                            <ul className="footer-list_links list-unstyled">
                                <li>
                                    <a href="/about-us" target="_self">
                                        About Us Overview
                                    </a>

                                </li>
                                <li>
                                    <a href="/about-us/corporate-social-responsibility" target="_self">
                                        Corporate Social Responsibility
                                    </a>

                                </li>
                                <li>
                                    <a href="https://investor.commercebank.com/" target="_self">
                                        Investor Relations
                                    </a>

                                </li>
                                <li>
                                    <a href="/about-us/media-center" target="_self">
                                        Media Center
                                    </a>

                                </li>
                                <li>
                                    <a href="/about-us/awards" target="_self">
                                        Awards &amp; Recognition
                                    </a>

                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer_careers">
                        <div className="footer-list_wrapper footer-list_collapse">
                            <h4 className="footer-list_title">Careers </h4>
                            <button aria-expanded="false" aria-controls="2398C3A5E2914816A89B9A02AE8F9AC7-collapse">
                                <div className="footer-list_title">Careers <span className="arrow"></span></div>
                            </button>
                            <div className="collapse" id="2398C3A5E2914816A89B9A02AE8F9AC7-collapse">
                                <ul className="footer-list_links list-unstyled">
                                    <li>
                                        <a href="https://careers.commercebank.com/us/en/" target="_self">
                                            Careers Overview
                                        </a>

                                    </li>
                                    <li>
                                        <a href="https://careers.commercebank.com/us/en/how-to-join-our-team" target="_self">
                                            How to Join Our Team
                                        </a>

                                    </li>
                                    <li>
                                        <a href="https://careers.commercebank.com/us/en/our-hiring-process" target="_self">
                                            Our Hiring Process
                                        </a>

                                    </li>
                                    <li>
                                        <a href="https://careers.commercebank.com/us/en/why-commerce" target="_self">
                                            Why Commerce
                                        </a>

                                    </li>
                                    <li>
                                        <a href="https://careers.commercebank.com/us/en/search-results" target="_self">
                                            Search All Jobs
                                        </a>

                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                    <div className="footer_security">
                        <div className="footer-list_wrapper footer-list_collapse">
                            <h4 className="footer-list_title">Security Center </h4>
                            <button aria-expanded="false" aria-controls="41E33518C18146E78B271F82FD721460-collapse">
                                <div className="footer-list_title">Security Center <span className="arrow"></span></div>
                            </button>
                            <div className="collapse" id="41E33518C18146E78B271F82FD721460-collapse">
                                <ul className="footer-list_links list-unstyled">
                                    <li>
                                        <a href="/security-center" target="_self">
                                            Security Overview
                                        </a>

                                    </li>
                                    <li>
                                        <a href="/security-center/privacy-statement" target="_self">
                                            Privacy Statement
                                        </a>

                                    </li>
                                    <li>
                                        <a href="/security-center/identity-theft-and-fraud" target="_self">
                                            Identity Theft &amp; Fraud
                                        </a>

                                    </li>
                                    <li>
                                        <a href="/security-center/security-practices" target="_self">
                                            Security Practices
                                        </a>

                                    </li>
                                    <li>
                                        <a href="/security-center/cardholder-security" target="_self">
                                            Cardholder Security
                                        </a>

                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                    <div className="footer_links">
                        <div className="footer-list_wrapper footer-list_collapse">
                            <h4 className="footer-list_title">Other Links </h4>
                            <button aria-expanded="false" aria-controls="AF0CC3802C5E46E1B994B31892A8B7FF-collapse">
                                <div className="footer-list_title">Other Links <span className="arrow"></span></div>
                            </button>
                            <div className="collapse" id="AF0CC3802C5E46E1B994B31892A8B7FF-collapse">
                                <ul className="footer-list_links list-unstyled">
                                    <li>
                                        <a href="/contact-us" target="_self">
                                            Contact Us
                                        </a>

                                    </li>
                                    <li>
                                        <a href="https://locations.commercebank.com/locations/" target="_self">
                                            Locations
                                        </a>

                                    </li>
                                    <li>
                                        <a href="/about-us/challenge-accepted" target="_self">
                                            Challenge Accepted.<sup>®</sup>
                                        </a>

                                    </li>
                                    <li>
                                        <a href="/about-us/accessibility" target="_self">
                                            Website Accessibility
                                        </a>

                                    </li>
                                    <li>
                                        <a href="/site-map" target="_self">
                                            Site Map
                                        </a>

                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="secondary_footer clearfix">
                    <div className="secondary_footer1">
                        <div className="footer_ca">
                            <p><a href="/about-us/challenge-accepted"><img className='challenge-accepted-img' src={CaWhite} alt="Challenge Accepted.(R) Member FDIC. Commerce Bank logo" /></a></p>

                        </div>
                        <div className="footer_social">
                            <div className="social-links">
                                <a className="link-external" data-content="#1DA1C65DEF844812831A23E9A44988D0" href="https://www.facebook.com/commercebank" target="_blank">
                                    <span className="icon-social-facebook"></span><span className="sr-only">Facebook</span>
                                </a>
                                <div className="link-external-content">
                                    <div id="1DA1C65DEF844812831A23E9A44988D0">
                                        <div className="external-title">You are now leaving the Commerce Bank website.</div>
                                        <div className="external-body"><p>By clicking the "I Agree" button below, you acknowledge and agree to the following:</p>
                                            <p>You will leave the Commerce Bank website and enter a third party social media/collaboration website. The information shared on Facebook.com is not the responsibility of Commerce Bank and we are not responsible for the content shared between users and participants on the site. Please note that Facebook.com may have its own privacy and security policies which differ from those of Commerce Bank. </p>
                                            <p>Never share your personal information on Facebook.</p></div>
                                    </div>
                                </div>
                                <a className="link-external" data-content="#712EFF89A68644559387C962B732E828" href="https://www.twitter.com/commercebank" target="_blank">
                                    <span className="icon-social-twitter"></span><span className="sr-only">Twitter</span>
                                </a>
                                <div className="link-external-content">
                                    <div id="712EFF89A68644559387C962B732E828">
                                        <div className="external-title">You are now leaving the Commerce Bank website.</div>
                                        <div className="external-body"><p>By clicking the "I Agree" button below, you acknowledge and agree to the following:</p>
                                            <p>You will leave the Commerce Bank website and enter a third party social media/collaboration website. The information shared on Twitter.com is not the responsibility of Commerce Bank and we are not responsible for the content shared between users and participants on the site. Please note that Twitter.com may have its own privacy and security policies which differ from those of Commerce Bank. </p>
                                            <p>Never share your personal information on Twitter.</p></div>
                                    </div>
                                </div>
                                <a className="link-external" data-content="#F60F88E10D474AB6BABE74881CAD652F" href="https://www.linkedin.com/company/commerce_bank" target="_blank">
                                    <span className="icon-social-linkedin"></span><span className="sr-only">LinkedIn</span>
                                </a>
                                <div className="link-external-content">
                                    <div id="F60F88E10D474AB6BABE74881CAD652F">
                                        <div className="external-title">You are now leaving the Commerce Bank website.</div>
                                        <div className="external-body"><p>By clicking the "I Agree" button below, you acknowledge and agree to the following:</p>
                                            <p>You will leave the Commerce Bank website and enter a third party social media/collaboration website. The information shared on LinkedIn.com is not the responsibility of Commerce Bank and we are not responsible for the content shared between users and participants on the site. Please note that LinkedIn.com may have its own privacy and security policies which differ from those of Commerce Bank. </p>
                                            <p>Never share your personal information on LinkedIn.</p></div>
                                    </div>
                                </div>
                                <a className="link-external" data-content="#5FC61178A8A84F7E8A7892FFC1EC16A6" href="https://www.instagram.com/commercebank" target="_blank">
                                    <span className="icon-social-instagram"></span><span className="sr-only">Instagram</span>
                                </a>
                                <div className="link-external-content">
                                    <div id="5FC61178A8A84F7E8A7892FFC1EC16A6">
                                        <div className="external-title">You are now leaving the Commerce Bank website.</div>
                                        <div className="external-body"><p>By clicking the "I Agree" button below, you acknowledge and agree to the following:</p>
                                            <p>You will leave the Commerce Bank website and enter a third party social media/collaboration website. The information shared on Instagram.com is not the responsibility of Commerce Bank and we are not responsible for the content shared between users and participants on the site. Please note that Instagram.com may have its own privacy and security policies which differ from those of Commerce Bank. </p>
                                            <p>Never share your personal information on Instagram.</p></div>
                                    </div>
                                </div>
                                <a href="/about-us" target="_self"><span className="icon-cb-globe"></span><span className="sr-only">Globe Link and Icon</span></a>
                            </div>
                        </div>
                    </div>
                    <div className="secondary_footer2">
                        <div className="footer_secondary_links">
                            <p><a href="/security-center/privacy-statement">Privacy Statement</a> | <a href="/online-privacy-policy"><span>Online Privacy</span> Policy &amp; <span className='noWrap'>Terms of Service</span></a> | <a href="/en-espanol" lang="es">En Español</a></p>

                        </div>
                        <div className="footer_ehl">
                            <p><img height="31" alt="Equal Housing Lender" width="150" src={HorizontalLogo} /></p>

                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <p>Copyright © 2022 Commerce Bancshares, Inc. <span className='noWrap'>All rights</span> reserved. Commerce Bank, <span className='noWrap'>Member FDIC.</span></p>

            </div>
        </div>
    )
}

export default Footer