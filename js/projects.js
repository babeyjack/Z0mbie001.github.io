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
            newButton.onclick = () => hrefFunction(data.Projects[i].Link);

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
    

    // Version
    let version = document.createElement("li");
    version.innerHTML = "<p>Version: " + project.Details.Version + "</p>";
    details.appendChild(version);
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
        document.getElementById("project-aside").style.display = "block";
    }
    else
    {
        document.getElementById("profile-main").style.display = "block";
        document.getElementById("project-display").style.display = "none";
        document.getElementById("project-aside").style.display = "none";
    }
}

// Calls function on page refresh
await checkForParams();
