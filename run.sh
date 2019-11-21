# Pull the new changes
echo "Pulling new changes from git"
git pull > /dev/null 2>&1

# Install node-modules
echo "Installing node modules"
npm i > /dev/null 2>&1

# Run build
echo "Building"
npm run build

# Create the main folder
echo "Creating the main folder"
mkdir /var/www/domainparking/ > /dev/null 2>&1

# Clear the website root folder
echo "Clear the root folder"
rm -r /var/www/domainparking/* > /dev/null 2>&1

# Copy the dist to the website root folder
echo "Copying the dist > root folder"
cp -a ./dist/. /var/www/domainparking/ > /dev/null 2>&1
echo "Done"
