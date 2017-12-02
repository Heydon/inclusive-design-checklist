var dataSet = require('../checklist.json');
var fs = require('fs');
var path = require('path');

// For storing the main result.
var result = '';

// Try and load up the intro
result += fs.readFileSync(path.join(__dirname, '../intro.md')).toString() + '\n';

// Something has gone wrong with the dataset, so throw an error
if(!dataSet.length) {
    console.error('Something has gone wrong checklist.json. There doesn\'t appear to be any items :(');
    return;
}

// Loop each item and generate a check item 
dataSet.map(function(data) {

    // Add a checkbox 
    result += '- [ ] ';

    // Append the content of the item
    result += data.item;
    
    if(data.resources) {
        
        // For storing generated resources
        var resources = '';

        // Loop each resource and generate a link
        data.resources.map(function(resource, index) {
            resources += ' [Resource #' + (index + 1) + '](' + resource + '),';
        });

        // Remove last comma and any space that follows it
        resources = resources.replace(/,\s*$/, '');

        // Add resources to the result string 
        result += resources;
    }

    // Add a line break 
    result += '\n';
});

// Write the new .MD file
fs.writeFileSync(path.join(__dirname, '../README.md'), result, { encoding: 'UTF-8' });