# Overview #

As soon as the project stages are defined, it is time to add work items.
Work items form contain the following fields:
  * Skillset - the main knowledge required to accomplish the work item
  * Title - a short title
  * Project stage - the project stage it belongs. Work items will be grouped according to project stage
  * Depends upon - if this work item must wait for another one before starting
  * Description
  * Duration
  * Owner - only one can be specified. See below for more info.
  * Percentage complete - to be updated according to the progress
  * Start date
  * Finish date
  * Cost - if any
  * Update
  * History

Skillset is specified in the work item and not in the project stage, because each project stage can (better, should) be decomposed in single Work Items that require one main knowledge base.
If you find yourself in the case that a Work Item has to be accomplished by more than one person, you have to choose one as the owner of the task, and book Engineering Days for all people involved in the Work Item.

_open enhancement: show booked Engineering Days in the work item summary?_

Example:

  * Project stage 0: set up the database.
    * Work item 1 - install database on the server: Skillset = system administration
    * Work item 2 - populate database importing from spreadsheets - Skillset = data management
    * Work item 3 - create web interface - Skillset = programming

# Skillset setup #

It is useful to determine the full Skillset pool before populating the admin interface for the first time. A global overview of the different abilities is therefore already available when creating each user. Further edits can always be done in "Change user" page.
This way, when using the website interface and adding Work Items, the complete list of skillsets is available.

# Engineering Day booking #

After creating the Work Item, if the task is likely to keep busy the assignee(s) for more than half a day, it is recommended to book user's time via Engineering Days.

  1. Select the appropriate Work Item
  1. Click on "Add Engineering Day" on right end of the toolbar. It will ask for the date you wish to book, what timeframe (half day AM or PM, or full day) and list the users with the skillset required by the Work Item.
  1. Pick one of the users still available.

Repeat this routine until all days/people are assigned to the Work Item.