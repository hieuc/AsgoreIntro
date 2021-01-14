var gameEngine = new GameEngine();

var ASSET_MANAGER = new AssetManager();

var character = null;

ASSET_MANAGER.queueDownload("./sprites/asgore.png");

ASSET_MANAGER.downloadAll(function () {
	var canvas = document.getElementById('gameWorld');
	var ctx = canvas.getContext('2d');

	character = new Asgore(gameEngine, 50, 50); 
	character.loadAnimations();

	gameEngine.init(ctx);
	gameEngine.addEntity(character);
	gameEngine.start();
});
