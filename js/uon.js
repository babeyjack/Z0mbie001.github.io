// Get UI Elements 
const firstyearHolder = document.getElementById("firstYearModules");
const secondyearHolder = document.getElementById("secondYearModules");

// Refresh First Year
function refreshFirstYear()
{
    clearFirstYear();
    fetch("/json/uon.json").then((res) => res.json()).then((data) => {
        for(let i = 0; i < data.YearOne.length; i++)
        {
            var newButton = document.createElement("button");
            newButton.type = "button";
            newButton.className = "collapsable";
            newButton.innerHTML = data.YearOne[i].ModuleName;
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
            for(let j = 0; j < data.YearOne[i].Description.length; j++)
            {
                var newListItem = document.createElement("li");
                var newPara = document.createElement("p");
                newPara.innerHTML = data.YearOne[i].Description[j];

                newListItem.appendChild(newPara);
                newList.appendChild(newListItem);
            }

            // Spacer
            var spacerli = document.createElement("li");
            spacerli.innerHTML = " ";
            newList.appendChild(spacerli);

            // Add further details
            var codeli = document.createElement("li");
            codeli.innerHTML = "Module Code: " + data.YearOne[i].ModuleCode;
            newList.appendChild(codeli);

            var creditli = document.createElement("li");
            creditli.innerHTML = "Credits: " + data.YearOne[i].Credits;
            newList.appendChild(creditli);

            var scoreli = document.createElement("li");
            scoreli.innerHTML = "Grade: " + data.YearOne[i].Score;
            newList.appendChild(scoreli);

            // Add Convenor Info
            var convenortowrite = "Convenor(s): ";
            for(let k = 0; k < data.YearOne[i].Convenors.length; k++)
            {
                convenortowrite += "<a href='" + data.YearOne[i].Convenors[k].Link + "'>" + data.YearOne[i].Convenors[k].Name + "</a>";
                if(k + 2 == data.YearOne[i].Convenors.length)
                {
                    convenortowrite += " and ";
                }
                else if(k + 1 != data.YearOne[i].Convenors.length)
                {
                    convenortowrite += ", ";
                }
            }
            var convenorli = document.createElement("li");
            convenorli.innerHTML = convenortowrite;
            newList.appendChild(convenorli);

            newDiv.appendChild(newList);

            firstyearHolder.appendChild(newButton);
            firstyearHolder.appendChild(newDiv);
        }
    });
}

// Clear First Year
function clearFirstYear()
{
    for(let i = 0; i < firstyearHolder.children.length; i++)
    {
        firstyearHolder.removeChild(firstyearHolder.firstElementChild);
    }
    if(firstyearHolder.children.length != 0)
    {
        clearFirstYear();
    }
}

function refreshSecondYear()
{
    clearSecondYear();
    fetch("/json/uon.json").then((res) => res.json()).then((data) => {
        for(let i = 0; i < data.YearTwo.length; i++)
        {
            var newButton = document.createElement("button");
            newButton.type = "button";
            newButton.className = "collapsable";
            newButton.innerHTML = data.YearTwo[i].ModuleName;
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
            for(let j = 0; j < data.YearTwo[i].Description.length; j++)
            {
                var newListItem = document.createElement("li");
                var newPara = document.createElement("p");
                newPara.innerHTML = data.YearTwo[i].Description[j];

                newListItem.appendChild(newPara);
                newList.appendChild(newListItem);
            }

            // Spacer
            var spacerli = document.createElement("li");
            spacerli.innerHTML = " ";
            newList.appendChild(spacerli);

            // Add further details
            var codeli = document.createElement("li");
            codeli.innerHTML = "Module Code: " + data.YearTwo[i].ModuleCode;
            newList.appendChild(codeli);

            var creditli = document.createElement("li");
            creditli.innerHTML = "Credits: " + data.YearTwo[i].Credits;
            newList.appendChild(creditli);

            var scoreli = document.createElement("li");
            scoreli.innerHTML = "Grade: " + data.YearTwo[i].Score;
            newList.appendChild(scoreli);

            // Add Convenor Info
            var convenortowrite = "Convenor(s): ";
            for(let k = 0; k < data.YearTwo[i].Convenors.length; k++)
            {
                convenortowrite += "<a href='" + data.YearTwo[i].Convenors[k].Link + "'>" + data.YearTwo[i].Convenors[k].Name + "</a>";
                if(k + 2 == data.YearTwo[i].Convenors.length)
                {
                    convenortowrite += " and ";
                }
                else if(k + 1 != data.YearTwo[i].Convenors.length)
                {
                    convenortowrite += ", ";
                }
            }
            var convenorli = document.createElement("li");
            convenorli.innerHTML = convenortowrite;
            newList.appendChild(convenorli);

            newDiv.appendChild(newList);

            secondyearHolder.appendChild(newButton);
            secondyearHolder.appendChild(newDiv);
        }
    });
}

// Clear Second Year
function clearSecondYear()
{
    for(let i = 0; i < secondyearHolder.children.length; i++)
    {
        secondyearHolder.removeChild(secondyearHolder.firstElementChild);
    }
    if(secondyearHolder.children.length != 0)
    {
        clearFirstYear();
    }
}


// Call the functions on page refresh
refreshFirstYear();
refreshSecondYear();