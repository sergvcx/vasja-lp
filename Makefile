go:
	del *.png && casperjs love.js
	
	
push:
	git commit -m"from home"
	git push