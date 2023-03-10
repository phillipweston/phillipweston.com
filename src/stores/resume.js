import { readable, derived } from 'svelte/store'


export const positions = readable([
	{ company: 'WorkBoard Inc.', title: 'Senior Software Engineer', dates: 'Aug 2020 to Present', accomplishments: [
		'helped increase team morale by advocating for process changes that enhance developer productivity',
		'developed e2e tests to validate integrations in a multi-session application',
		'helped develop React patterns for future developers to follow, including simplified Redux management',
		'refactored and simplified existing PHP code to allow for less developer upkeep',
		'worked with product and design to identify and clarify product requirements, including suggested enhancements to already specified user flows',
		'prototyped different options for extracting micro-services from a monolithic application with little to no user impact',
		'created UX prototype to demonstrate machine learning-based suggestions'
	] },
	{ company: 'Medcreds', title: 'Software Architect', dates: 'April 2020 - August 2020', accomplishments: [
		'designed platform used to issue first Covid-19 verifiable credential',
		'lead a multi-national team of engineers from rough concept through to working platform',
		'engaged with customers to implement informed feature enhancements',
		'leveraged Gitlab AutoDevops for quick and clean multi-stage deployment to Kubernetes',
		'encouraged migration of initial cloud functions into Koa based API',
		'documented API endpoints for future use using Swagger',
		'leveraged Vue.js and Vuetify to rapidly create a smooth frontend experience',
		'designed a flexible database schema allowing for multi-org multi-role integration',
		'built out the first marketing site leveraging Adobe stock art and Netlify',
		'supported content creators via self-hosted Ghost blog',
		'created documentation allowing easy use of the platform for registered doctors',
		'developed multi-session end-to-end tests using codecept.io / Playwright',
		'designed platform used to issue first Covid-19 verifiable credential',
		'lead a multi-national team of engineers from rough concept through to working platform',
		'engaged with customers to implement informed feature enhancements',
		'leveraged Gitlab AutoDevops for quick and clean multi-stage deployment to Kubernetes',
		'encouraged migration of initial cloud functions into Koa based API',
		'documented API endpoints for future use using Swagger',
		'leveraged Vue.js and Vuetify to rapidly create a smooth frontend experience',
		'designed a flexible database schema allowing for multi-org multi-role integration',
		'built out the first marketing site leveraging Adobe stock art and Netlify',
		'supported content creators via self-hosted Ghost blog',
		'created documentation allowing easy use of the platform for registered doctors',
		'developed multi-session end-to-end tests using codecept.io / Playwright'
	] },
	{ company: 'Disney Streaming Services / Client DevOps', title: 'Senior Software Engineer', dates: 'May 2018 to April 2020', accomplishments: [
		'created a very well received UI to enhance existing video streaming API',
		'added necessary API updates needed to support the UI',
		'migrated vanilla Vue.js app over to Nuxt.js',
		'made and deployed Typescript/Express SAML/Oauth2 integration that our apps leveraged',
		'maintained and supported existing rapid API prototyping tool and extended it',
		'integrated with corporate SAML using custom built OAuth service',
		'AWS, Docker, Jenkins, Node.js, Vue.js, Koa'
			] },
	{ company: 'Async Design', title: 'Self', dates: 'March 2018 - Present', accomplishments: [
		'developed new Long Term Care insurance website using Vue.js and Material UI',
		'increased clients conversion rate for new LTC requests from 3.51% to 5.88%',
		'integrated new form with GraphQL / Hasura to persist data',
		'updated legacy Angular 1.3 CRM to support leads generated from new LTC site',
		'created calculator for Agents to generate quotes',
		'created API for web -> PDF rendering of insurance quotes, ingestion of data and transformation of data, etc',
		'leveraged Sentry to catch and report on application errors',
		'automated deployment of services to Google Cloud Run',
		'created Kubernetes cluster leveraging Flux GitOps to sync git repository with cluster',
		'migrated existing CRM over to Close.io',
		'built dashboard allowing more granular view of leads, with integrated FedEx shipping label support',
		'supported legacy real estate React app, adding and upgrading existing features',
		'created crontab script to aggregate existing leads from several sites and inject/merge them into CRM',
		'created crontab script to query and SMS users of varying response levels'
	] },
	{ company: 'Turnitin', title: 'Software Engineer to Senior Software Engineer', dates: 'Sep 2015 to May 2018', accomplishments: [
		'successfully shipped fundamental features as part of the new Platgiaraism Document Viewer',
		'helped support and add features to existing legacy Sproutcore/Perl application',
		'learned Java Spring boot in order to support new micro-services',
		'developed applications using React / Redux',
		'deployed to Kubernetes infrastructure in AWS',
		'contributed to continuous integration efforts using both Jenkins and Circle CI',
		'wrote unit and end2end test coverage'
	] },
	{ company: 'Jiff, Inc.', title: 'Frontend Engineer', dates: 'Mar 2015 to Sep 2015', accomplishments: [
		`delivered features for health care application, frequently at last moment's notice`,
		'transformed detailed mocks and product requirements into apps',
		'leveraged Angular 1, Cordova, and Ionic to create Android store application'
	] },
	{ company: 'Moboom', title: 'Software Engineer', dates: 'Jun 2014 to Mar 2015', accomplishments: [
		'delivered features for a website builder application',
		'provided a fluid user experience using Backbone.js',
		'leveraged agile/scrum methodologies to roll out features quickly',	
	] },
	{ company: 'Genesys', title: 'Software Engineer', dates: 'Sep 2013 to Jun 2014', accomplishments: [
		'conceptualized and built ???VoiceAlert??? single page web application for monitoring call voice quality',
		'built JSON API using Ruby on Rails and Rabl/OJ gems',
		'utilized Sidekiq to perform bulk of application work and Clockwork for job scheduling',
		'designed simple to use interface using Flat UI (bootstrap add on) and Angular UI',
		'built front end using AngularJS and not a single jQuery call',
		'created custom Angular directive using wavesurfer.js for on-the-fly waveform creation',
		'created VoiceAlert deployment cookbook using Chef',
		'created AWS deployment tool using AWS API to launch instances and manage security groups',
		'built selenium web testing engine to regularly validate functionality of customer facing web portals',
		'created Jenkins jobs to deploy new tenant environment in AWS',
	] },
	{ company: 'VMware', title: 'Application Support Engineer', dates: 'Feb 2007 to Apr 2008', accomplishments: [
		'designed and managed weekly code testing and promotion lifecycle',
		'built and managed Subversion repository for classroom automation tools',
		'built multi-stage classroom deployment mechanism for deploying VMware hosted classes',
		'designed and built deployment metric gathering tool using Python and MySQL',
		'developed and maintained self-healing scripts to correct for errors and edge conditions',
		'architected load balanced PXE environment for physical host deployments',
		'designed and built self-configuring Linux virtual machines used by trainers and customers',
		'designed and deployed vSphere clusters for administrative environments',
		'lead project to deploy VMware???s Advanced Certification exam environment'
	] },
	{ company: 'MobiTV', title: 'Systems Automation Engineer', dates: 'May 2008 to May 2013', accomplishments: [
		'built web scraping tool using Perl to monitor video feeds and alert when service was out',
		'traced issues through architecture and fixed issues or escalated to application developers',
		'analyzed application behavior and developed scripts to fix recurring issues',
		'wrote self-healing solutions for common problems for which there were not yet any engineering solutions',
		'implemented Nagios & Cacti monitoring solutions',
	] },
	{ company: 'Headsets.com, Inc.', title: 'Web Designer / Systems Administrator', dates: 'Apr 2005 to Feb 2007', accomplishments: [
		'designed and built splash pages for marketing advertisements',
		'contributed to the complete redesign of Headsets.com and the design of headsetdiscounters.com',
		'designed redundancy into our web servers through load balancing',
		'designed redundancy into our database using fail-overs built into the website code',
		'secured our customer facing systems through use of technology like port knocking, Nessus, and Tripwire to reduce the risk of being hacked',
		'ensured that we had both onsite and offsite backups of website and database',
		'implemented and designed web related marketing campaigns',
		'managed our Google Adwords and affiliate programs',
	] }, 
])