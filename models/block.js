const sha256 = require('js-sha256')
// click on view source icon to copy code.
class Block {
    constructor(index, data, prevHash) {
        this.index = index;
        this.timestamp = Math.floor(Date.now() / 1000);
        this.data = data;
        this.prevHash = prevHash;
        this.hash = this.getHash();
    }
    getHash() {
        return sha256(JSON.stringify(this.data) + this.prevHash + this.index + this.timestamp);
    }
}

module.exports = Block;