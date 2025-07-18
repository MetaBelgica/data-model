/**
 * Created by bjdmeest on 10/06/2016.
 * Header comment and inline comments added by slieber on 18/01/2021
 * Reversed logic by slieber on 08/07/2025 (Instead of dev in root and dist folder, have dist versions as root and dev as subfolder, done for more user-friendly links in subdirectory /spec of this repo)
 *
 * Usually for specifications the most current version is available as index.html under the root address
 * and additionally for each version a dedicated version folder exists. Each version refers with
 * a link to its previous version (another folder under the root address with the version in its name)
 *
 * This script has the aim to populate a new version based on the provided content, therefore it:
 * - sets correct current and previous dates in the provided content
 * - creates a new dedicated version folder with the new content
 * - replaces the current root index.html with the new content
 */

var fs = require('fs');
var path = require('path');

if(process.argv.length != 3){
  console.log("");
  console.log("Please provide the name of the HTML file which should be used to populate the new version of the spec");
  console.log("The placeholders %thisDate% and %prevDate% will be replaced with respective values.");
  console.log("Usage: node publish.sh [spec HTML version]");
  process.exit(1);
}
var inputFilename = process.argv[2];

// Create a new directory for the new version within dist, e.g. dist/20210118
var dateString = (new Date()).toISOString().split('T')[0].replace(/-/g, '');
try {
    fs.mkdirSync(path.resolve(__dirname, '..', dateString));
} catch (e) {

}

// Create a list of all folders in dist, i.e. resources folder and all previous version folders without the main index.html file
var files = fs.readdirSync(path.resolve(__dirname, '..'));
var dirs = [];
for (var i = 0; i < files.length; i++) {
    if (fs.lstatSync(path.resolve(__dirname, '..', files[i])).isDirectory()) {
        dirs.push(files[i]);
    }
}

// Within the created list of directories, remove 'resources', 'dev' and the version we just created
// It is important to remove all directories with text name first, otherwise the most recent version with dateString name is not removed)
dirs.sort();
dirs.reverse();

if (dirs[0] === "resources") {
    dirs.splice(0, 1);
}

if (dirs[0] === "dev") {
    dirs.splice(0, 1);
}

// apply this after removing all non-version-related directories
if (dirs[0] === dateString) {
    dirs.splice(0, 1);
}



// Use the content of inputFilename as new content: replace date placeholders and put it as 'current version' in dist root
// dirs[0] should be the previous version since the dirs array is sorted in reversed order
var html = fs.readFileSync(inputFilename, 'utf8');
html = html.replace(/%thisDate%/g, dateString);
html = html.replace(/%prevDate%/g, dirs[0]);

fs.writeFileSync(path.resolve(__dirname, '..', dateString, 'index.html'), html);

// Next to the dist root, the current version will also reside in its dedicated version directory for which paths need to be adapted
html = html.replace(/..\/resources/g, '\./resources');
fs.writeFileSync(path.resolve(__dirname, '..', 'index.html'), html);

