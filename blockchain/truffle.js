module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },

    qa: {
      host: "127.0.0.1",
      port: 8545,
      from: "0xf427f56fd9452b2f7a811208364b9c6bf87e0657",
      network_id: "3" // Match any network id
    },

    production: {
      host: "localhost",
      port: 8545,
      network_id: "1" // Match any network id
    }
  }
};
