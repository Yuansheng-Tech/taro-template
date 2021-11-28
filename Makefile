copy:
	cd ../utils && yarn build
	cd ../stores && yarn build
	cd ../components && yarn build
	cp -rf ../utils/dist ./node_modules/@ysyp/utils/
	cp -rf ../components/dist ./node_modules/@ysyp/ui/
	cp -rf ../stores/dist ./node_modules/@ysyp/stores/

publish:
	cd ../utils && yarn build && yarn release
	cd ../stores && yarn build && yarn release
	cd ../components && yarn build && yarn release

deploy:
	sudo yarn build:kwai
	cd build_kwai && sudo sed -i '' 's/.\/assets/assets/g' app.json
	cd build_kwai && sudo sed -i '' 's/subpackages/subPackages/g' app.json
	cd build_kwai && sudo sed -i '' 's/subpackages/subPackages/g' app.js
	sudo yarn build:tt
	sudo yarn build:weapp
	cd config && sudo sed -i '' 's/\/\/ \"@ysyp\/utils\/dist\"\:/\"@ysyp\/utils\/dist\"\:/g' index.js
	cd config && sudo sed -i '' 's/\/\/ \"@ysyp\/stores\/dist\"\:/\"@ysyp\/stores\/dist\"\:/g' index.js
	sudo yarn build:h5
	cd config && sudo sed -i '' 's/\"@ysyp\/utils\/dist\"\:/\/\/ \"@ysyp\/utils\/dist\"\:/g' index.js
	cd config && sudo sed -i '' 's/\"@ysyp\/stores\/dist\"\:/\/\/ \"@ysyp\/stores\/dist\"\:/g' index.js