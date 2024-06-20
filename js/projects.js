// Get UI Elements
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

// Href Function
function hrefFunction(link)
{
    window.location.href = link;
}


// Calls function on page refresh
await refreshProjects();