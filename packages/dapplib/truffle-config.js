require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess narrow flee skull guard render remind history imitate private flee spike'; 
let testAccounts = [
"0x12709a1c2cf5a03bbf6d26201fa2c5910723a3c2c470167dfa699a056733b8a3",
"0xea4f91e9aa152af0a3fd13f5f81b900ffeca042f8b67905c04bda6af9e65dc20",
"0x4ce3587915e67a6baa74deb048f60e13ae77c53e8ca3270f6605d3db4dce3c47",
"0xf7d35a39f40437a54357130110b5411e68020b1667835f2785eb92efede65992",
"0xf142d7ebad4cec4668b22cebd5ff659b13ad90a973071072d61e060812da1efc",
"0xb605662742f38cd727cddf202ae776e56d35f6a1f85256c3361e901067fa92c3",
"0xb8852fe1f858f7a4b1914ce7a8b74ef04e9429495bd3f7c115c0c075d4a5b97a",
"0x16f89f71c8bf424ef0c34dc95b5515d1cfb99890f0c23d67e63c425d62c23b82",
"0xfe16a22f225bf81823bab84521d0717f994b0c931ca9d956a9798829f4f2cabc",
"0x0549198ada99f2a2fbf8204c5ef813d3a9487909bde043867eda6c0d2f8d68ac"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

