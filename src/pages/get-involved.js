import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import PageContainer from '../components/pagecontainer'

const GetInvolved = () => (
  <Layout>
  	<PageContainer>
	    <SEO title="Get Involved - Raising the Floor" />
	    <h1>Get Involved</h1>
	    <h2>Who is funding the GPII?</h2>
	    <ul>
	    	<li>The European Commission (FP7) through large scale integrating project grants 
	    	funded <a href="http://gpii.net/Cloud4all">Cloud4all</a>, <a href="http://GPII.net/Prosperity4All">Prosperity4All</a> and SmartWork.</li>
	    	<li>The National Institute on Disability and Rehabilitation Research (NIDRR) 
	    	US Department of Education funded <a href="http://trace.wisc.edu" target="_blank">Trace Center RERC on Universal Interface and Information Technology Access</a></li>
	    	<li><a href="http://www.mellon.org/" target="_blank">The Andrew W. Mellon Foundation</a> 
	    		funded the <a href="http://www.fluidproject.org/" target="_blank">Fluid project</a> 
	    		at IDRC of OCAD University</li>
	    	<li><a href="http://www.hewlett.org" target="_blank">The William and Flora Hewlett Foundation</a> funded 
	    	<a href="http://www.floeproject.org/" target="_blank">FLOE project</a> at IDRC of OCAD University </li>
	    	<li><a href="http://innovation.ca" target="_blank">The Canadian Foundation for Innovation</a> and the 
	    	<a href="https://www.ontario.ca/page/ministry-research-innovation-and-science" target="_blank">Ontario Ministry of 
	    	Research and Innovation</a> under matching funds for <a href="http://gpii.net/Cloud4all" target="_blank">Cloud4all</a> and 
	    	<a href="http://GPII.net/Prosperity4All" target="_blank">Prosperity4All</a></li>
	    	<li>Companies such as IBM, Microsoft, Mozilla, Serotek and individual contributors also supported this project.</li>
	    </ul>
	    <p>Many other organizations have provided support and contributed to building the Global Public Inclusive Infrastructure (GPII).  The GPII continues to look 
	    for funding sources to help grow the GPII, create new and more affordable and accessible solutions.</p>
    </PageContainer>
  </Layout>
)

export default GetInvolved
