# Import Statements
import json;

profileFile = open("profile.json","r");

profileJSON = json.load(profileFile);

print(profileJSON);