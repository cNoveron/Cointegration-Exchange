module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 7545,
      network_id: "*" // Match any network id
    },
    ropsten: {
      host: "localhost",
      port: 8545,
      network_id: "3", // Rinkeby ID 4
      from: "0xC8A1c3F40E96a1CF08681FfFa84225657331F29e",
      gas: 4600000000
    },
    rinkeby: {
      host: "localhost",
      port: 8545,
      network_id: "4", // Rinkeby ID 4
      from: "0x277f72c4faf2be9d2a6d1ab60523a63859bc200a",
      gas: 4612388
    }
  }
};
