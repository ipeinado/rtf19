import React from 'react'
import { Link } from 'gatsby'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import PageContainer from '../../components/pagecontainer'

const WhoWeAre = () => (
  <Layout>
  	<PageContainer>
	    <SEO title="Who we are - Raising the Floor" />
	    <h1>Who we are</h1>
	    <h2>Mission and approach</h2>
	    <p>
	    	Raising the Floor is an organization of diverse people from industry, academia, NGOs and other 
	    	sectors who have come together to ensure that people who face barriers due to disability, literacy, 
	    	digital-literacy, and aging are able to fully understand, access, and use the digital world we are 
	    	creating (the web, computers, tablets, phones, educational materials, ticket machines, thermostats, 
	    	and even home appliances).
	    </p>
	    <p>
	    	Because information and communication technologies (ICT) are required for most activities in our 
	    	daily lives today, those who do not have access or have difficulties using ICT are excluded from 
	    	having these opportunities.
	    </p>
	    <p>
	    	RtF’s one-size-fits-one is a fresh approach to accessibility and digital inclusion, offering greater 
	    	choices to people, asserting their right to access the digital world anywhere, anytime and in more 
	    	affordable ways.
	    </p>
	    <p>
	    	Its <Link to="/what-we-do">central focus</Link> is the development of the 
	    	<a href="https://gpii.net">Global Public Inclusive Infrastructure (GPII)</a>, a 
	    	cloud based solution that allows for the creation, discovery and use, of one-size-fits-one access to 
	    	technologies. 
	    </p>
	    <h2>Who benefits from the GPII?</h2>
	    <p>Consumers, developers companies, organizations, public institutions and all persons and organizations 
	    interested in ensuring access to ICT by all.</p>
	    <p>We focus on ensuring access to information and communication technologies by anyone who has difficulties 
	    using them. The list includes those with limited or no literacy, people with disabilities or functional 
	    limitations, and those who face aging related barriers to access and use of digital technologies.</p>

	    <h2>
	    	About the <abbr title="Raising the Floor">Raising the Floor</abbr> community
	    </h2>
	    <p>
	    	The Raising the Floor community includes people and organizations from all points of view and interests: 
	    	consumers, developers, researchers, practitioners, policy people, vendors, and manufacturers of mainstream 
	    	and assistive technology. They hail from all parts of the world including every continent except Antarctica.
			</p>

			<p><strong>Raising the Floor is led by:</strong></p>
				<ul>
					<li><Link to="/who-we-are/rtf-i">Raising the Floor International (RtF-I)</Link></li>
					<li><Link to="/who-we-are/rtf-us">Raising the Floor - US (RtF-US)</Link></li>
				</ul>

			<p><strong>Raising the Floor is co-directed by:</strong></p>
			<ul style={{ listStyleType: `none`, }}>
				<li style={{ marginBottom: `2rem`, }}>
					<p><strong>Gregg Vanderheiden</strong> - Director and Professor of Trace R&D Center at the University of Maryland - College Park. 
					Director of the Co-founder of Raising The Floor (RtF-I). Dr Vanderheiden has worked in technology and disability 
					for over 45 years. He was a pioneer in Augmentative Communication and in cross-disability access to ICT. 
					His work is found in computers, phones, Automated Postal Stations, Amtrak ticket machines and airport 
					terminals. Most of the initial access features in both Microsoft Windows and Apple Mac operating systems came 
					from his research center. gregg@raisingthefloor.org</p> 

					<p>He co-chaired both WCAG 1.0 and 2.0 working groups, and has worked with over 50 companies and numerous 
					government advisory & planning committees, including the Federal Communications Commission (FCC), 
					the National Science Foundation (NSF), National Institutes of Health (NIH), Global Mobile Suppliers 
					Association (GSA), the United States Access Board and The White House. He has received over 30 awards 
					for his work.</p>  

					<p>The concept of the GPII was first proposed by Dr Vanderheiden as part of his work on the Rehabilitation 
					Engineering Research Center on Universal Interface and Information Technology Access.  
					He was also the technical and scientific lead for the Cloud4all and Prosperity4All projects.</p>  

				</li>
				<li style={{ marginBottom: `2rem`, }}>
					<p><strong>Jutta Treviranus</strong> - Director of the Inclusive Design Research Centre (IDRC). 
					Co-founder of Raising The Floor (RtF-I).  jutta@raisingthefloor.org </p>
					<p>Jutta also heads the Inclusive Design Institute, directs an innovative graduate program in 
					Inclusive Design and is a professor at OCAD University in Toronto, formerly the Adaptive Technology 
					Resource Centre at the University of Toronto.</p>
					<p>Jutta and her team have pioneered personalization as an approach to accessibility in the digital domain. 
					She has played a leading role in developing accessibility legislation, standards and specifications 
					internationally, including WAI ATAG, IMS AccessForAll,  ISO 24751, and AODA Information and Communication. 
					She continues to lead many international multi-partner research networks that have implemented technical 
					innovations that support inclusion. These include the Fluid Project, Fluid Engage, CulturAll, Stretch, 
					FLOE, among many others.</p>
					<p>The fundamental principles of the auto-personalization components of the GPII are based on the 
					pioneering work of Prof Treviranus on personalization done as part of her Web4all and AccessforAll 
					projects among others. </p>
				</li>
			</ul>

    </PageContainer>
  </Layout>
)

export default WhoWeAre
