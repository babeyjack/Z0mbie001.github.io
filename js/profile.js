// Get UI Elements 
const qualificationHolder = document.getElementById("qualifications");
const experienceHolder = document.getElementById("experience");
const hobbiesHolder = document.getElementById("hobbies");

var coll = [];

// Refresh Qualifications
function refreshQualifications()
{
    clearQualifications();
    fetch("/json/profile.json").then((res) => res.json()).then((data) => {
        for(let i = 0; i < data.Qualifications.length; i++)
        {
            var newButton = document.createElement("button");
            newButton.type = "button";
            newButton.className = "collapsable";
            newButton.innerHTML = data.Qualifications[i].Title;
            newButton.addEventListener("click", function() {
                this.classList.toggle("active");
                var content = this.nextElementSibling;
                if (content.style.display === "block") {
                    content.style.display = "none";
                } else {
                    content.style.display = "block";
                }
            });

            var newDiv = document.createElement("div");
            newDiv.className = "dropdown-content";

            var newList = document.createElement("ul");
            for(let j = 0; j < data.Qualifications[i].Details.length; j++)
            {
                var newListItem = document.createElement("li");
                var newPara = document.createElement("p");
                newPara.innerHTML = data.Qualifications[i].Details[j];

                newListItem.appendChild(newPara);
                newList.appendChild(newListItem);
            }
            newDiv.appendChild(newList);

            qualificationHolder.appendChild(newButton);
            qualificationHolder.appendChild(newDiv);
        }
    });
}

// Refresh Experiences
function refreshExperiences()
{
    clearExperiences();
    fetch("/json/profile.json").then((res) => res.json()).then((data) => {
        for(let i = 0; i < data.Experience.length; i++)
        {
            var newButton = document.createElement("button");
            newButton.type = "button";
            newButton.className = "collapsable";
            newButton.innerHTML = data.Experience[i].Title;
            newButton.addEventListener("click", function() {
                this.classList.toggle("active");
                var content = this.nextElementSibling;
                if (content.style.display === "block") {
                    content.style.display = "none";
                } else {
                    content.style.display = "block";
                }
            });

            var newDiv = document.createElement("div");
            newDiv.className = "dropdown-content";

            for(let j = 0; j < data.Experience[i].Roles.length; j++)
            {
                var newHeader = document.createElement("h3");
                newHeader.innerHTML = data.Experience[i].Roles[j].RoleTitle

                var newDates = document.createElement("h4");
                newDates.innerHTML = data.Experience[i].Roles[j].RoleDates

                var newList = document.createElement("ul");
                for(let k = 0; k < data.Experience[i].Roles[j].Details.length; k++)
                {
                    var newListItem = document.createElement("li");
                    var newPara = document.createElement("p");
                    newPara.innerHTML = data.Experience[i].Roles[j].Details[k];

                    newListItem.appendChild(newPara);
                    newList.appendChild(newListItem);
                }
            }
            newDiv.appendChild(newHeader);
            newDiv.appendChild(newDates);
            newDiv.appendChild(newList);

            experienceHolder.appendChild(newButton);
            experienceHolder.appendChild(newDiv);
        }
    });
}

// Refresh Hobbies
function refreshHobbies()
{
    clearHobbies();
    fetch("/json/profile.json").then((res) => res.json()).then((data) => {
        for(let i = 0; i < data.Hobbies.length; i++)
        {
            var newButton = document.createElement("button");
            newButton.type = "button";
            newButton.className = "collapsable";
            newButton.innerHTML = data.Hobbies[i].Title;
            newButton.addEventListener("click", function() {
                this.classList.toggle("active");
                var content = this.nextElementSibling;
                if (content.style.display === "block") {
                    content.style.display = "none";
                } else {
                    content.style.display = "block";
                }
            });
            
            var newDiv = document.createElement("div");
            newDiv.className = "dropdown-content";
            
            var newList = document.createElement("ul");
            for(let j = 0; j < data.Hobbies[i].Details.length; j++)
            {
                var newListItem = document.createElement("li");
                var newPara = document.createElement("p");
                newPara.innerHTML = data.Hobbies[i].Details[j];
                
                newListItem.appendChild(newPara);
                newList.appendChild(newListItem);
            }
            newDiv.appendChild(newList);
            
            hobbiesHolder.appendChild(newButton);
            hobbiesHolder.appendChild(newDiv);
        }
    });
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
