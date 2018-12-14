//Modules
const fs = require('fs');
const { join } = require('path');
const { promisify } = require('util');
const copyFile = promisify(fs.copyFile);

module.exports = {
    exportPathMap: async function (defaultPathMap, { dev, dir, outDir }) {
        if (dev) return defaultPathMap;

        let copyFiles = ['robots.txt', 'service_worker.js'];
        copyFiles.map(async(path) => {
            await copyFile(join(dir, path), join(outDir, path));
        });
        
        return {
            '/': { page: '/' },
        };;
    }
};