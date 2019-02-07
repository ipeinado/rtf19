import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import PageContainer from '../components/pagecontainer'

const WhatWeDo = () => (
  <Layout>
  	<PageContainer>
	    <SEO title="What We Do - Raising The Floor" />
	    <h1>What We Do</h1>
	    <p>
	    	<abbr title="Raising the Floor">RtF</abbr> works on research projects and developing resources and products 
	    	so that our mission becomes a reality. The <a href="https://gpii.net" target="_blank">Global Public Inclusive 
	    	Infrastructure</a> is a paradigm shift that will provide enhancements to the Internet to enable the Internet to be truly inclusive 
	    	for the first time. The GPII will not create new access technologies or services, but will create the 
	    	infrastructure for making their development, identification, delivery, and use easier, less expensive, and 
	    	more effective.
			</p>
			<p>
				Each information and communication technology (ICT) will be able to instantly change to fit users as they 
				encounter the device, rather than requiring users to figure out how to adapt, configure or install access 
				features they need.  It also introduces a system of shared components and services to reduce cost, increase 
				interoperability, and foster innovation.
			</p>
			<p>
				The GPII is the result of a collective effort of over 40 organizations from 13 different countries (Europe, 
				Canada and the US) and the multidisciplinary expertise of top research centers, universities, companies, 
				data protection agencies and public and non-profit organisations. 
			</p>
			<p>
				The GPII is based on three major components that work together like three legs of a tripod.  
				All three are necessary to ensure that this new digital world that we are creating will truly be usable by us all:
			</p>
			<ol>
				<li>A way to discover what each of us needs to use this new world</li>
				<li>A way to have whatever we need appear (or happen to) every device or digital material we have to use –  
				when and where we have to use it.</li>
				<li>A way to make it easier and less expensing to create new, more affordable (for us and society) new solutions</li>
			</ol>
			<p>For the GPII to become a reality users, developers and service providers need an entry point to this inclusive environment.</p>
    	<ul>
    		<li><a href="https://morphic.world" target="_blank">MORPHIC</a>: Preferences for every user. In MORPHIC everything with digital interface auto adapts to what the user needs.</li>
    		<li><a href="https://ds.gpii.net" target="_blank">DEVELOPER SPACE</a>: the meeting point for all development resources of  the “infrastructure”  where it is easier to create, market, find and use solutions to help reduce the accessibility gap.</li>
    		<li><a href="https://ul.gpii.net" target="_blank">UNIFIED LISTING</a>: the directory where users, providers and developers can search and find inclusive and accessible services and resources.</li>
    	</ul>
    </PageContainer>
  </Layout>
)

export default WhatWeDo
