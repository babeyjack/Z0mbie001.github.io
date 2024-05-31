// Import Data
import data from '../json/profile.json' with {type: "json" };
console.log(data);

// Get UI Elements 
const qualificationHolder = document.getElementById("qualifications");
const experienceHolder = document.getElementById("experience");
const hobbiesHolder = document.getElementById("hobbies");

// Refresh Qualifications
function refreshQualifications()
{
    clearQualifications();
    for(let i = 0; i < data.Qualifications.length; i++)
    {
        var newButton = document.createElement("button");
        newButton.type = "button";
        newButton.className = "collapsible";
        newButton.innerText = data.Qualifications[i].Title;

        var newDiv = document.createElement("div");
        newDiv.className = "dropdown-content";

        var newList = document.createElement("ul");
        for(let j = 0; j < data.Qualifications[i].Details.length; j++)
        {
            var newListItem = document.createElement("li");
            var newPara = document.createElement("p");
            newPara.innerText = data.Qualifications[i].Details[j];

            newListItem.appendChild(newPara);
            newList.appendChild(newListItem);
        }
        newDiv.appendChild(newList);

        qualificationHolder.appendChild(newButton);
        qualificationHolder.appendChild(newDiv);
    }
}

// Refresh Experiences
function refreshExperiences()
{
    clearExperiences();
    for(let i = 0; i < data.Experience.length; i++)
    {
        var newButton = document.createElement("button");
        newButton.type = "button";
        newButton.className = "collapsible";
        newButton.innerText = data.Experience[i].Title;

        var newDiv = document.createElement("div");
        newDiv.className = "dropdown-content";

        var newHeader = document.createElement("h3");
        newHeader.innerText = data.Experience[i].Role

        var newList = document.createElement("ul");
        for(let j = 0; j < data.Experience[i].Details.length; j++)
        {
            var newListItem = document.createElement("li");
            var newPara = document.createElement("p");
            newPara.innerText = data.Experience[i].Details[j];

            newListItem.appendChild(newPara);
            newList.appendChild(newListItem);
        }
        newDiv.appendChild(newHeader);
        newDiv.appendChild(newList);

        experienceHolder.appendChild(newButton);
        experienceHolder.appendChild(newDiv);
    }
}

// Refresh Hobbies
function refreshHobbies()
{
    clearHobbies();
    for(let i = 0; i < data.Hobbies.length; i++)
    {
        var newButton = document.createElement("button");
        newButton.type = "button";
        newButton.className = "collapsible";
        newButton.innerText = data.Hobbies[i].Title;

        var newDiv = document.createElement("div");
        newDiv.className = "dropdown-content";

        var newList = document.createElement("ul");
        for(let j = 0; j < data.Hobbies[i].Details.length; j++)
        {
            var newListItem = document.createElement("li");
            var newPara = document.createElement("p");
            newPara.innerText = data.Hobbies[i].Details[j];

            newListItem.appendChild(newPara);
            newList.appendChild(newListItem);
        }
        newDiv.appendChild(newList);

        hobbiesHolder.appendChild(newButton);
        hobbiesHolder.appendChild(newDiv);
    }
}

// Clear Qualifications
function clearQualifications()
{
    for(let i = 0; i < qualificationHolder.children.length; i++)
    {
        qualificationHolder.removeChild(qualificationHolder.firstElementChild);
    }
    if(qualificationHolder.children.length != 0)
    {
        clearQualifications();
    }
}

// Clear Experiences
function clearExperiences()
{
    for(let i = 0; i < experienceHolder.children.length; i++)
    {
        experienceHolder.removeChild(experienceHolder.firstElementChild);
    }
    if(experienceHolder.children.length != 0)
    {
        clearExperiences();
    }
}

// Clear Hobbies
function clearHobbies()
{
    for(let i = 0; i < hobbiesHolder.children.length; i++)
    {
        hobbiesHolder.removeChild(hobbiesHolder.firstElementChild);
    }
    if(hobbiesHolder.children.length != 0)
    {
        clearHobbies();
    }
}

// Call the functions on page refresh
refreshQualifications();
refreshExperiences();
refreshHobbies();