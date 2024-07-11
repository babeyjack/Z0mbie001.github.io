// Get UI Elements
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const projectHolder = document.getElementById("projects");

// Refresh Projects
async function refreshProjects()
{
    clearProjects();
    fetch("/json/projects.json").then((res) => res.json()).then((data) => {
        for(let i = 0; i < data.Projects.length; i++)
        {
            var newButton = document.createElement("button");
            newButton.type = "button";
            newButton.className = "collapsable";
            newButton.innerText = data.Projects[i].Title;
            newButton.onclick = () => hrefFunction(data.Projects[i].PageLink);

            var newDiv = document.createElement("div");
            newDiv.className = "dropdown-content";

            projectHolder.appendChild(newButton);
            projectHolder.appendChild(newDiv);
        }
    });
}

// Check for parameters
async function checkForParams()
{
    console.log(urlParams);
    if(urlParams.size == 0)
    {
        hideProjectList(false);
        await refreshProjects();
    }
    else
    {
        hideProjectList(true);
        await loadProjectDetails();
    }
}

// Clear Projects
function clearProjects()
{
    for(let i = 0; i < projectHolder.children.length; i++)
    {
        projectHolder.removeChild(projectHolder.firstElementChild);
    }
    if(projectHolder.children.length != 0)
    {
        clearProjects();
    }
}

async function loadProjectDetails()
{
    console.log("Loading Project Data");
    let projParam = urlParams.get("proj");
    fetch("/json/projects.json").then((res) => res.json()).then((data) => {
        for(let i = 0; i < data.Projects.length; i++)
        {
            if(data.Projects[i].ID == projParam)
            {
                let project = data.Projects[i];

                // Setup Details
                loadDetailsSidebar(project);
                loadDetailsDesc(project);
                loadScreenshots(project);
                return;
            }
        }
    })
}

// Details Sidebar
async function loadDetailsSidebar(project)
{
    document.getElementById("project-title").innerText = project.Name;
    let details = document.getElementById("project-details");

    // Last Updated Date
    let updated = document.createElement("li");
    updated.innerHTML = "<p>Project Updated: " + project.Details.Updated + "</p>";
    details.appendChild(updated);

    // Platforms
    let platforms = document.createElement("li");
    platforms.innerHTML = "<p>Platforms: " + project.Details.Platforms + "</p>";
    details.appendChild(platforms);
    
    // Game Engine
    if(project.Details.GameEngine != "")
    {
        let gameEngine = document.createElement("li");
        gameEngine.innerHTML = "<p>Game Engine: " + project.Details.GameEngine + "</p>";
        details.appendChild(gameEngine);
    }

    // Programming Languages
    let programmingLang = document.createElement("li");
    let progLangString = ""
    if(project.Details.ProgLang.length > 1)
    {
        progLangString = "<p>Programming Languages: ";
    }
    else
    {
        progLangString = "<p>Programming Language: ";
    }
    for(let i = 0; i < project.Details.ProgLang.length; i++)
    {
        if(i + 1 == project.Details.ProgLang.length)
        {
            progLangString += project.Details.ProgLang[i] + "</p>";
        }
        else
        {
            progLangString += project.Details.ProgLang[i] + ", ";
        }
    }
    programmingLang.innerHTML = progLangString;
    details.appendChild(programmingLang);

    // Version
    let version = document.createElement("li");
    version.innerHTML = "<p>Version: " + project.Details.Version + "</p>";
    details.appendChild(version);
}

// Details Description
async function loadDetailsDesc(project)
{
    let projDisplay = document.getElementById("project-display");
    for(let i = 0; i < project.Description.length; i++)
    {
        let paragraph = document.createElement("p");
        paragraph.innerHTML = project.Description[i];
        projDisplay.appendChild(paragraph);
    }
    
    if(project.Link != "")
    {
        let p1 = document.createElement("p");
        let p2 = document.createElement("p");
        p1.innerHTML = 'If you would like to have a look at the files for this project, please <a href="' + project.Link + '">click here</a>.';
        p2.innerHTML = 'If you notice any bugs or improvements that can be made, please raise a GitHub Issue on the project page.';
        projDisplay.appendChild(p1);
        projDisplay.appendChild(p2);
    }
    else
    {
        let p1 = document.createElement("p");
        p1.innerHTML = 'Due to this project being currently used for university courseworks, I cannot create a public repository with it in. However, it can be made available upon request.';
        projDisplay.appendChild(p1);
    }
}

// Screenshots
async function loadScreenshots(project)
{
    if(project.Screenshots.length <= 0)
    {
        return;
    }

    let projDisplay = document.getElementById("project-display");
    let title = document.createElement("h2");
    title.innerHTML = "Screenshots";
    projDisplay.appendChild(title);
    let holder = document.createElement("span");
    holder.id = "screenshot-holder";
    for(let i = 0; i < project.Screenshots.length; i++)
    {
        let screenshot = document.createElement("img");
        screenshot.src = project.Screenshots[i];
        holder.appendChild(screenshot);
    }
    projDisplay.appendChild(holder);
}

// Href Function
function hrefFunction(link)
{
    window.location.href = link;
}

// Hide Projects List
function hideProjectList(value)
{
    if(value == true)
    {
        document.getElementById("profile-main").style.display = "none";
        document.getElementById("project-display").style.display = "block";
        document.getElementById("project-display").style.gridRow = "span 2";
        document.getElementById("project-aside").style.display = "block";
        document.getElementById("project-aside").style.gridRow = "span 2";
    }
    else
    {
        document.getElementById("profile-main").style.display = "block";
        document.getElementById("profile-main").style.gridRow = "span 2";
        document.getElementById("project-display").style.display = "none";
        document.getElementById("project-aside").style.display = "none";
    }
}

// Calls function on page refresh
await checkForParams();
