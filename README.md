# portfolio
repository for my current portfolio website

The format of this readme is similar to that of a development log where updates to the file
will be information and descriptions of the latest features and additions to the site.

# 22/05/2021 - Deployment of site on GitHub Pages - initial and 2nd Commits

    - Website was deployed with placeholder images and projects.

    - Most of the styling and scripting is complete for the features 
      already existing in the website, however I do plan to add a few
      more items to the existing mark-up and features

    - Email redirecting from contact form has been setup and linked to 
      email locally, but it has not been added to the repository and live
      site.

# 23/05/2021 - Adding to the responsiveness and editing viewports 

    - added styling for 900px for improved readibility and responsiveness

    - put story paragraphs into tabs. only displayed when active so they
      take up less space

    - reduced size of text in project description section

    - added margin to top of carousel indicator to stop overflow of carousel details
      and preview images

    - completed custom for viewports of 900, 650 and 500px to make website
      responsive on different size screens

    - adjusted flex of all major containers to flex content underneath each
      other for improved readibility on smaller devices

# 24/05/2021 - Finalized custom styles for respective viewports - 3rd Commit

    - added fixed width to social media details because div kept flexing beyond
      desired ammount on Chrome browser

    - fixed overflow of text/links in social media details by wrapping text

    - enabled functionality of displaying story as tabbed content in storyscript.js
      module, when viewing website on smaller devices
        * allowed viewing of story paragraphs only while active

    - made font in social media details smaller for added readibility,
      as font was too big and words were broken over lines
    
    - pushed all current changes to GitHub reporitory so live site can be updated

# 25/05/21 - Added responsiveness for mobile and created tabs for contact details - 5th Commit

    - create script to put contact details in tab. information is revealed when label
      is clicked and can be toggled on and off instead being displayed when hovered over

    - changed custom styles to make site more responsive on smaller viewports

    - changed mistake in carousel script where carousel counter would increment when clicking
      on containing box div instead of on the button inside the div

    - removed some placeholder items and added relevant projects to projects section

    - created error fallback page for incomplete links and webpages

    - added button and link in order to view/download resume pdf document

    - removed copy feature from contact details due numerous overlapping bugs