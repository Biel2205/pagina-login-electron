// importando os mudulos app e browserwindow do electron 
const { app, BrowserWindow } = require('electron')

// define a função createwindow do electron 
const createWindow = () => {
    // cria uma nova instancia do browserwindow com as dimensões especificadas
  const win = new BrowserWindow({
    width: 800, // define a largura da janela 
    height: 600 // define a largura da janela 
  })
  // carrega o arquivo index.html na janela criada 
  win.loadFile('index.html')
}


// quando o aplicativo estiver pronto,chama a funçao createwindow para criar a janela principal 
app.whenReady().then(() => {
 // executa a funçao createwindow para criar a janela principal 
  createWindow()
})