const fs = require('fs');

class News {
    constructor(filename = 'news.json') {
        this.path = `./data/${filename}`;

        try {
            fs.readdirSync('data');
        } catch (error) {
            fs.mkdirSync('data');
        }

        try {
            fs.accessSync(this.path);
        } catch (error) {
            fs.writeFileSync(this.path, '[]');
        }    
    }

    async cteate(data){
     const totalData = JSON.parse (await fs.promises.readFile(this.path));
     totalData.push(data);

     await fs.promises.writeFile(this.path, JSON.stringify(totalData));
    }
}

module.exports = News;