# Creating a new project #

At the moment projects are created using the admin interface rather than the front-end.

Go to your admin section and click the **Add** link next to **Projects**

### IMPORTANT ###
django-project-management was designed to be used in a multi-company, multi-team environment. For this reason if you don't have read access to a project you won't see it in the front end, even if you are the project manager or a Django admin.

### Django Project Management ###

A sample workflow....

#### Starting a new project - Modifying an existing project ####

  * Go to Admin panel to register new projects (http://your.dpm-site.domain/admin/)
    * Usage:
      * Project name scheme: Short title
      * Project status: Proposed, Draft, Active, ...
      * Company: Name of partner - use green "+" button to generate a new partner
      * Project manager: select responsible person from list
      * Project number: Progressive number XXXX (e.g. 0029) or whatever you prefer (must be unique)
      * Duration type:: The base project time unit (hours, days)
      * Project Sponsor: Sponsor name
      * (Read/write acl: access control layer - who has the rights to modify the project entries)

Notes:
  * Define list of skills
  * Generate team members
  * Assign skills to each team member

#### Managing a project ####

  * Enter the User panel to add/modify/manage project details (http://your.dpm-site.domain/)
    * Starts with "dashboard" which is the overview page
      * Number: project number
      * Name: project short name
      * Company: involved partner
      * % Complete: current status
      * Status: Proposed, Draft, Active, ...
      * RAG Status: Red-Amber-Green (see [explanations](http://www.dtf.wa.gov.au/cms/uploadedImages/RAG.gif))
      * Documentation Status: documentation status in DPM system
    * Click on project
      * add new items on top with "manage project"
        * Project Initiation: summary of project metadata
        * Deliverables
          * Description: Short description of n-th deliverable (hint: put a number as first character(s) to allow good sorting)
          * Acceptance Criteria: what's needed to be acceptable?
          * Deliverable Tester: who decides that it is acceptable?
          * Method: how is the acceptance tested?
          * Expected Result: what will be delivered?
          * RPO: Recovery Point Objective - describes the acceptable amount of data loss in size (e.g., IT services) [Wikipedia link](http://en.wikipedia.org/wiki/Recovery_point_objective)
          * RTO: Recovery Time Objective - describes the acceptable amount of data loss measured in time (e.g., IT services) [Wikipedia link](http://en.wikipedia.org/wiki/Recovery_time_objective)
        * Risks: describe risk, estimate its probability and select way out of the mess if it happens
        * Work items: add the various action items. NOTE that new items are added here within the "work item" tab
          * Add Project Stage: Stage of project (e.g., initial phase, analysis phase, report writing phase, etc.)
            * Stage Number: 1, 2, 3...
            * Stage: short name
            * Description: describe what should happen in this stage
            * Note that project stages are not listed (only in "Project Initialization" page) but they are selectable later
          * Add Work item: stuff to do within a stage
            * Skillset: select from list, if missing, add in Admin panel (see above)
            * Title: Name of work package
            * Project Stage: select from list
            * Depends Upon: select previous relevant work package/stage (e.g., data analysis depends on data import)
            * Duration: estimate it, based on time using defined when registering the project
            * Owner: select from list
            * Cost: estimate if applies
            * Percent Complete: select
            * Start Date: define fist day (used to generate Gantt)
            * Finish Date: define last day (used to generate Gantt)
            * Update: diary if you want
            * History: ??
          * Update work item: pls use to document progress
          * Add engineering day: Book a resource to complete the task on a specific day. This will go into the team member rota. You can only add a member if the team member skillset matches the skill(s) needed in the project.
        * Issues: Document issues and problems that occur during the project
        * Lessons learned: Add to learn something for future projects
        * Reports: Provide updates to the project. These are visible on the homepage as a popup
        * Files: Upload PDFs etc.
      * View on top to see
        * Gantt
        * Time slider
    * WIP - work in progress
    * Rota - calender based view of who is assigned to which task ([sample screenshot](http://django-project-management.googlecode.com/svn/wiki/screenshots/rota_example.png))

![http://django-project-management.googlecode.com/svn/wiki/screenshots/create_new_project.png](http://django-project-management.googlecode.com/svn/wiki/screenshots/create_new_project.png)